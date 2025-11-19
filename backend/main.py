"""
KKA Resources Backend
Educational LLM Proxy for Indonesian Curriculum (Phase C-F: Kelas 5-12)
"""
from fastapi import FastAPI
import os
from routers import chat
from logger import logger
from middleware import RateLimitMiddleware, APIKeyMiddleware


# Initialize FastAPI app
app = FastAPI(
    title="KKA Resources Backend",
    description="Educational LLM Proxy for Indonesian AI Education Curriculum",
    version="1.0.0",
)

# Include routers
app.include_router(chat.router)

# Add middleware
# Note: Middleware are executed in reverse order of addition (last added = first executed)
app.add_middleware(RateLimitMiddleware, throttle_rate=10)
app.add_middleware(APIKeyMiddleware)

# CORS Middleware
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific domains
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/", tags=["root"])
async def root():
    """Root endpoint with API information"""
    logger.info('Request to index page')
    return {
        "status": "KKA Resources Backend is running",
        "purpose": "AI Education Curriculum - Indonesia (Phase C-F: Kelas 5-12)",
        "available_endpoints": [
            "/chat",
            "/chat/elementary",
            "/chat/middle",
            "/chat/highschool"
        ],
        "version": app.version
    }

# Health check endpoint
@app.get("/health", tags=["health"])
async def health_check():
    """Health check endpoint to verify API configuration"""
    openai_configured = bool(os.environ.get('OPENAI_API_KEY'))
    api_key_configured = bool(os.environ.get('API_KEY'))
    return {
        "openai_configured": openai_configured,
        "api_key_configured": api_key_configured,
        "status": "healthy" if (openai_configured and api_key_configured) else "missing_configuration"
    }
