"""
Chat router: Educational LLM endpoints for different grade levels
Supports Phase C (Elementary), Phase D (Middle School), and Phase E-F (High School)
"""
from fastapi import APIRouter, HTTPException
import os
import httpx
import json
from models import ChatRequest, ChatResponse
from prompts.prompts import get_system_prompt


# Get API key from environment
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')

# Define router
router = APIRouter(
    prefix="/chat",
    tags=["chat"],
    responses={404: {"description": "Not found"}}
)

# Main chat endpoint
@router.post("/", response_model=ChatResponse, summary="Main chat endpoint")
async def chat(chat_request: ChatRequest):
    """
    Main chat endpoint supporting OpenAI models with full customization.
    
    - **prompt**: User's question or message
    - **model**: OpenAI model to use (default: gpt-5.4-nano-2026-03-17)
    - **max_tokens**: Maximum tokens in response (mapped to max_completion_tokens for newer models)
    - **temperature**: Creativity level (0-1)
    - **system_message**: Optional custom system prompt
    - **history**: Optional conversation history [{"role": "user/assistant", "content": "..."}]
    """
    if not OPENAI_API_KEY:
        raise HTTPException(status_code=500, detail="OpenAI API key not configured")
    
    try:
        # Initialize tools
        tools = None
        tool_choice = None
        available_tools = {}

        if chat_request.use_search:
            from tools.search import TavilySearchTool
            search_tool = TavilySearchTool()
            tools = [search_tool.get_definition()]
            available_tools = {"web_search": search_tool.execute}
            tool_choice = "auto"

        # Build messages array
        messages = []
        if chat_request.system_message:
            messages.append({"role": "system", "content": chat_request.system_message})
        
        # Add conversation history if provided
        if chat_request.history:
            messages.extend(chat_request.history)
        
        # Add current user message
        messages.append({"role": "user", "content": chat_request.prompt})
        
        # Build request payload
        # GPT-5.4+ models use max_completion_tokens instead of max_tokens
        payload = {
            "model": chat_request.model,
            "messages": messages,
            "max_completion_tokens": chat_request.max_tokens,
            "temperature": chat_request.temperature,
        }
        
        if tools:
            payload["tools"] = tools
            payload["tool_choice"] = tool_choice
        
        # Call OpenAI API (First Call)
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.openai.com/v1/chat/completions",
                headers={
                    "Authorization": f"Bearer {OPENAI_API_KEY}",
                    "Content-Type": "application/json"
                },
                json=payload,
                timeout=30.0
            )
            
            # Log the actual error for debugging
            if response.status_code != 200:
                error_body = response.text
                print(f"OpenAI API Error: {response.status_code} - {error_body}")
                raise HTTPException(
                    status_code=response.status_code,
                    detail=f"OpenAI API error: {error_body}"
                )
            
            data = response.json()
            response_message = data["choices"][0]["message"]
            
            # Check if tool calls are present
            tool_calls = response_message.get("tool_calls")
            
            if tool_calls:
                # Append the assistant's message with tool calls to history
                messages.append(response_message)
                
                # Execute tool calls
                for tool_call in tool_calls:
                    function_name = tool_call["function"]["name"]
                    function_args = json.loads(tool_call["function"]["arguments"])
                    
                    if function_name in available_tools:
                        function_response = available_tools[function_name](**function_args)
                        
                        # Append tool response to messages
                        messages.append({
                            "tool_call_id": tool_call["id"],
                            "role": "tool",
                            "name": function_name,
                            "content": function_response,
                        })
                
                # Second Call to OpenAI with tool results
                follow_up_payload = {
                    "model": chat_request.model,
                    "messages": messages,
                    "max_completion_tokens": chat_request.max_tokens,
                    "temperature": chat_request.temperature
                }
                
                response = await client.post(
                    "https://api.openai.com/v1/chat/completions",
                    headers={
                        "Authorization": f"Bearer {OPENAI_API_KEY}",
                        "Content-Type": "application/json"
                    },
                    json=follow_up_payload,
                    timeout=30.0
                )
                
                if response.status_code != 200:
                    error_body = response.text
                    print(f"OpenAI API Error (follow-up): {response.status_code} - {error_body}")
                    raise HTTPException(
                        status_code=response.status_code,
                        detail=f"OpenAI API error: {error_body}"
                    )
                
                data = response.json()

            return ChatResponse(
                response=data["choices"][0]["message"]["content"],
                model=chat_request.model,
                tokens_used={
                    "prompt": data["usage"]["prompt_tokens"],
                    "completion": data["usage"]["completion_tokens"],
                    "total": data["usage"]["total_tokens"]
                }
            )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {str(e)}")


# Elementary school chat endpoint
@router.post("/elementary", summary="Elementary school chat (Kelas 5-6 SD)")
async def chat_elementary(request: ChatRequest):
    """
    Endpoint for elementary school students (Phase C: Kelas 5-6 SD).
    Uses child-friendly language and encouraging tone.
    
    Supports conversation history for multi-turn conversations.
    """
    # Override settings for elementary level
    request.model = "gpt-5.4-nano-2026-03-17"
    request.max_tokens = 750
    request.temperature = 0.5
    if not request.system_message:
        request.system_message = get_system_prompt("elementary")
    
    result = await chat(request)
    return {"response": result.response}


# Middle school chat endpoint
@router.post("/middle", summary="Middle school chat (Kelas 7-9 SMP)")
async def chat_middle(request: ChatRequest):
    """
    Endpoint for middle school students (Phase D: Kelas 7-9 SMP).
    Encourages curiosity and critical thinking.
    
    Supports conversation history for multi-turn conversations.
    """
    # Override settings for middle school level
    request.model = "gpt-5.4-nano-2026-03-17"
    request.max_tokens = 750
    request.temperature = 0.5
    if not request.system_message:
        request.system_message = get_system_prompt("middle")
    
    result = await chat(request)
    return {"response": result.response}


# High school chat endpoint
@router.post("/highschool", summary="High school chat (Kelas 10-12 SMA/SMK)")
async def chat_highschool(request: ChatRequest):
    """
    Endpoint for high school students (Phase E-F: Kelas 10-12 SMA/SMK).
    Provides detailed explanations with real-world applications.
    
    Supports conversation history for multi-turn conversations.
    """
    # Override settings for high school level
    request.model = "gpt-5.4-nano-2026-03-17"
    request.max_tokens = 750
    request.temperature = 0.5
    if not request.system_message:
        request.system_message = get_system_prompt("highschool")
    
    result = await chat(request)
    return {"response": result.response}
