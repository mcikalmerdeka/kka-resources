from fastapi import Request, HTTPException
from starlette.middleware.base import BaseHTTPMiddleware
import time
import os
from logger import logger

# Rate limit middleware
class RateLimitMiddleware(BaseHTTPMiddleware):
    """
    Middleware for rate limiting and request logging.
    Default: 10 requests per minute per IP.
    """
    def __init__(self, app, throttle_rate: int = 10):
        super().__init__(app)
        self.throttle_rate = throttle_rate
        self.request_log = {}  # Track timestamps per IP

    async def dispatch(self, request: Request, call_next):
        # Rate limiting logic
        client_ip = request.client.host
        now = time.time()
        
        # Clean up old entries (older than 60 seconds)
        self.request_log = {
            ip: [ts for ts in times if ts > now - 60]
            for ip, times in self.request_log.items()
        }
        
        # Check rate limit
        ip_history = self.request_log.get(client_ip, [])
        if len(ip_history) >= self.throttle_rate:
            raise HTTPException(status_code=429, detail="Too many requests. Please try again later.")
        
        ip_history.append(now)
        self.request_log[client_ip] = ip_history

        # Request logging
        start = time.time()
        response = await call_next(request)
        process_time = time.time() - start
        
        log_dict = {
            'url': request.url.path,
            'method': request.method,
            'process_time': f"{process_time:.4f}s",
            'status_code': response.status_code
        }
        logger.info(log_dict, extra=log_dict)
        
        return response


# API Key Authentication Middleware
class APIKeyMiddleware(BaseHTTPMiddleware):
    """
    Middleware for API key authentication.
    Requires X-API-Key header to match the API_KEY environment variable.
    Excludes root and health check endpoints.
    """
    def __init__(self, app):
        super().__init__(app)
        self.api_key = os.environ.get('API_KEY')
        self.excluded_paths = ['/', '/health', '/docs', '/redoc', '/openapi.json']
    
    async def dispatch(self, request: Request, call_next):
        # Skip authentication for excluded paths
        if request.url.path in self.excluded_paths:
            return await call_next(request)
        
        # Check if API key is configured
        if not self.api_key:
            logger.warning("API_KEY not configured in environment variables")
            raise HTTPException(
                status_code=500, 
                detail="Server configuration error: API key not set"
            )
        
        # Get API key from header
        api_key = request.headers.get('X-API-Key')
        
        if not api_key:
            raise HTTPException(
                status_code=401,
                detail="Missing API key. Please provide X-API-Key header."
            )
        
        if api_key != self.api_key:
            logger.warning(f"Invalid API key attempt from {request.client.host}")
            raise HTTPException(
                status_code=403,
                detail="Invalid API key"
            )
        
        # API key is valid, proceed with request
        return await call_next(request)