"""
Pydantic models for request/response schemas
"""
from pydantic import BaseModel
from typing import Optional, List, Dict

# Chat request model
class ChatRequest(BaseModel):
    prompt: str
    model: str = "gpt-4o-mini"  # default model (cheapest and best for education)
    max_tokens: int = 250
    temperature: float = 0.7
    system_message: Optional[str] = None
    history: Optional[List[Dict[str, str]]] = None  # Conversation history [{"role": "user/assistant", "content": "..."}]

# Chat response model
class ChatResponse(BaseModel):
    response: str
    model: str
    tokens_used: Optional[dict] = None