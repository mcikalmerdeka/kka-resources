"""
Chat router: Educational LLM endpoints for different grade levels
Supports Phase C (Elementary), Phase D (Middle School), and Phase E-F (High School)
"""
from fastapi import APIRouter, HTTPException
import os
import httpx
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
    - **model**: OpenAI model to use (default: gpt-4o-mini)
    - **max_tokens**: Maximum tokens in response
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
        
        # Call OpenAI API (First Call)
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://api.openai.com/v1/chat/completions",
                headers={
                    "Authorization": f"Bearer {OPENAI_API_KEY}",
                    "Content-Type": "application/json"
                },
                json={
                    "model": chat_request.model,
                    "messages": messages,
                    "max_tokens": chat_request.max_tokens,
                    "temperature": chat_request.temperature,
                    "tools": tools,
                    "tool_choice": tool_choice
                },
                timeout=30.0
            )
            response.raise_for_status()
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
                response = await client.post(
                    "https://api.openai.com/v1/chat/completions",
                    headers={
                        "Authorization": f"Bearer {OPENAI_API_KEY}",
                        "Content-Type": "application/json"
                    },
                    json={
                        "model": chat_request.model,
                        "messages": messages,
                        "max_tokens": chat_request.max_tokens,
                        "temperature": chat_request.temperature
                    },
                    timeout=30.0
                )
                response.raise_for_status()
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
    except httpx.HTTPStatusError as e:
        raise HTTPException(status_code=e.response.status_code, detail=f"OpenAI API error: {str(e)}")
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
    request.model = "gpt-4.1-mini"
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
    request.model = "gpt-4.1-mini"
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
    request.model = "gpt-4.1-mini"
    request.max_tokens = 750
    request.temperature = 0.5
    if not request.system_message:
        request.system_message = get_system_prompt("highschool")
    
    result = await chat(request)
    return {"response": result.response}

