"""
Pydantic models for request/response schemas
"""
from pydantic import BaseModel
from typing import Optional, List, Dict

"""
Pydantic models for request/response schemas
"""
from pydantic import BaseModel
from typing import Optional, List, Dict

# Chat request model
class ChatRequest(BaseModel):
    prompt: str
    model: str = "gpt-4.1-mini"  # default model (cheapest and best for education)
    max_tokens: int = 750
    temperature: float = 0.5
    system_message: Optional[str] = None
    history: Optional[List[Dict[str, str]]] = None  # Conversation history [{"role": "user/assistant", "content": "..."}]
    use_search: bool = False  # Flag to enable/disable web search capability

# Chat response model
class ChatResponse(BaseModel):
    response: str
    model: str
    tokens_used: Optional[dict] = None