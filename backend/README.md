# Backend API Service

FastAPI backend for AI Education Applications - manages OpenAI API calls, rate limiting, and educational prompt optimization.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [API Endpoints](#api-endpoints)
- [Quick Start](#quick-start)
  - [Local Development](#local-development)
  - [Deployment to Cloud Run](#deployment-to-cloud-run)
- [Authentication](#authentication)
  - [Generating API Keys](#generating-api-keys)
  - [Using in Colab](#using-in-colab)
- [API Usage](#api-usage)
  - [Python Examples](#python)
  - [JavaScript Examples](#javascript)
  - [cURL Examples](#curl)
  - [Colab Implementation](#colab-chatbot-with-memory-implementation)
- [Configuration](#configuration)
- [Security](#security)
- [Cost Management](#cost-management)
- [Monitoring & Troubleshooting](#monitoring--troubleshooting)
- [Development](#development)

## Overview

This backend acts as a proxy between student notebooks and OpenAI's API, providing:

- **API Key Authentication**: Secure access control via X-API-Key header
- **Rate Limiting**: 10 requests/minute per IP to prevent abuse
- **Cost Management**: Uses efficient gpt-4.1-mini model
- **Educational Optimization**: Age-appropriate system prompts
- **Centralized Control**: No OpenAI API keys needed by students
- **Conversation Memory**: Support for maintaining chat history
- **Safety**: No data storage, transparent operation

## Architecture

```
Colab Notebooks → FastAPI Backend → OpenAI API
                  (Rate Limited)
```

## API Endpoints

### Health Check

```
GET /        # No auth required
GET /health  # No auth required
```

### Chat Endpoints

```
POST /chat                # Full control over parameters
POST /chat/elementary     # Optimized for Phase A-B (Elementary)
POST /chat/middle         # Optimized for Phase C-D (Middle School)
POST /chat/highschool     # Optimized for Phase E-F (High School)
```

**Note**: All chat endpoints require the `X-API-Key` header.

## Quick Start

### Local Development

#### Prerequisites

- Python 3.8+
- OpenAI API key
- Backend API key

#### Setup

```bash
# Install dependencies
pip install -r requirements.txt

# Set environment variables
export OPENAI_API_KEY=your-openai-key-here
export API_KEY=your-backend-api-key-here

# Run development server
uvicorn main:app --reload

# Test at http://localhost:8000
```

#### Testing

```bash
# Health check (no auth required)
curl http://localhost:8000/health

# Test chat endpoint (requires API key)
curl -X POST "http://localhost:8000/chat/elementary" \
  -H "X-API-Key: your-backend-api-key-here" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Apa itu AI?"}'
```

### Deployment to Cloud Run

#### Prerequisites

- Google Cloud account
- gcloud CLI installed
- OpenAI API key
- Generated backend API key

#### Generate API Key

```bash
# Linux/Mac
openssl rand -hex 32

# Windows PowerShell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})
```

#### Deploy

```bash
# Login to Google Cloud
gcloud auth login

# Set project
gcloud config set project YOUR_PROJECT_ID

# Deploy with environment variables
gcloud run deploy educational-llm-proxy \
  --source . \
  --platform managed \
  --region asia-southeast2 \
  --allow-unauthenticated \
  --set-env-vars OPENAI_API_KEY=your-openai-key-here,API_KEY=your-backend-api-key-here \
  --memory 512Mi \
  --timeout 30s \
  --max-instances 10 \
  --min-instances 0

# Note the deployed URL
```

#### Update Existing Deployment

If you already have a deployment and just need to add/update the API key:

```bash
gcloud run services update educational-llm-proxy \
  --region asia-southeast2 \
  --update-env-vars API_KEY=your-secret-key-here
```

#### Environment Variables

```bash
OPENAI_API_KEY=sk-...           # Required: Your OpenAI API key
API_KEY=your-secret-key-here    # Required: Backend API key for authentication
```

**Security Note**: Keep your `API_KEY` secret! Anyone with this key can use your backend.

## Authentication

### How It Works

The backend uses `APIKeyMiddleware` to validate the `X-API-Key` header:

- ✅ Validates against `API_KEY` environment variable
- ✅ Excludes `/`, `/health`, `/docs`, `/redoc`, `/openapi.json` from authentication
- ✅ Returns 401 if API key missing, 403 if invalid

### Generating API Keys

**Linux/Mac**:

```bash
openssl rand -hex 32
```

**Windows PowerShell**:

```bash
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | % {[char]$_})
```

### Using in Colab

For Google Colab notebooks, use base64 encoding to obfuscate credentials:

#### Encode Your Credentials

Run this **locally** (not in shared Colab):

```python
import base64

# Your actual API key
api_key = "your-actual-api-key-here"
backend_url = "https://your-backend.run.app"

# Encode them
encoded_key = base64.b64encode(api_key.encode()).decode()
encoded_url = base64.b64encode(backend_url.encode()).decode()

print(f"Encoded API Key: {encoded_key}")
print(f"Encoded Backend URL: {encoded_url}")
```

#### Colab Setup Code

Add this to the beginning of your Colab notebook:

```python
import base64
import requests
import gradio as gr

# Obfuscated backend credentials
_BACKEND = base64.b64decode("YOUR_BASE64_ENCODED_URL_HERE").decode()
_KEY = base64.b64decode("YOUR_BASE64_ENCODED_API_KEY_HERE").decode()

BACKEND_URL = _BACKEND
API_KEY = _KEY
```

## API Usage

**All endpoints (except `/` and `/health`) require the `X-API-Key` header.**

### Request/Response Format

#### Elementary/Middle/Highschool Endpoints

**Request**:

```json
POST /chat/elementary
Headers: X-API-Key: your-backend-api-key
Body: {
  "prompt": "Apa itu AI?",
  "history": [  // Optional: for conversation memory
    {"role": "user", "content": "Hello"},
    {"role": "assistant", "content": "Hi! How can I help?"}
  ]
}
```

**Response**:

```json
{
  "response": "AI stands for Artificial Intelligence..."
}
```

#### Full Chat Endpoint

**Request**:

```json
POST /chat
Headers: X-API-Key: your-backend-api-key
Body: {
  "prompt": "Explain AI",
  "model": "gpt-4.1-mini",
  "max_tokens": 250,
  "temperature": 0.7,
  "system_message": "You are a helpful teacher",
  "history": [  // Optional
    {"role": "user", "content": "Previous question"},
    {"role": "assistant", "content": "Previous answer"}
  ]
}
```

**Response**:

```json
{
  "response": "AI is...",
  "model": "gpt-4.1-mini",
  "tokens_used": {
    "prompt": 15,
    "completion": 45,
    "total": 60
  }
}
```

### Python

```python
import requests

# Simple usage
response = requests.post(
    "https://your-backend.run.app/chat/elementary",
    headers={"X-API-Key": "your-backend-api-key"},
    json={"prompt": "Apa itu AI?"}
)
print(response.json()["response"])

# Advanced usage with conversation history
response = requests.post(
    "https://your-backend.run.app/chat",
    headers={"X-API-Key": "your-backend-api-key"},
    json={
        "prompt": "What about cats?",
        "model": "gpt-4.1-mini",
        "max_tokens": 300,
        "temperature": 0.7,
        "system_message": "You are a computer science teacher",
        "history": [
            {"role": "user", "content": "Tell me about dogs"},
            {"role": "assistant", "content": "Dogs are loyal animals..."}
        ]
    }
)
```

### JavaScript

```javascript
// Elementary endpoint
fetch("https://your-backend.run.app/chat/elementary", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": "your-backend-api-key",
  },
  body: JSON.stringify({
    prompt: "Hello",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data.response));

// With conversation history
fetch("https://your-backend.run.app/chat/elementary", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": "your-backend-api-key",
  },
  body: JSON.stringify({
    prompt: "What about that?",
    history: [
      { role: "user", content: "Tell me about AI" },
      { role: "assistant", content: "AI is..." },
    ],
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data.response));
```

### cURL

```bash
# Elementary
curl -X POST "https://your-backend.run.app/chat/elementary" \
  -H "X-API-Key: your-backend-api-key" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Hello"}'

# With conversation history
curl -X POST "https://your-backend.run.app/chat/elementary" \
  -H "X-API-Key: your-backend-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "What about cats?",
    "history": [
      {"role": "user", "content": "Tell me about dogs"},
      {"role": "assistant", "content": "Dogs are loyal animals..."}
    ]
  }'

# Full control
curl -X POST "https://your-backend.run.app/chat" \
  -H "X-API-Key: your-backend-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "Explain AI",
    "model": "gpt-4.1-mini",
    "max_tokens": 250,
    "history": [
      {"role": "user", "content": "What is programming?"},
      {"role": "assistant", "content": "Programming is..."}
    ]
  }'
```

### Colab Chatbot with Memory Implementation

Complete implementation for Google Colab with conversation history:

```python
import base64
import requests
import gradio as gr

# Obfuscated backend credentials
_BACKEND = base64.b64decode("YOUR_BASE64_ENCODED_URL_HERE").decode()
_KEY = base64.b64decode("YOUR_BASE64_ENCODED_API_KEY_HERE").decode()

BACKEND_URL = _BACKEND
API_KEY = _KEY

def chat_with_ai(user_message, history):
    """Send message to AI and get response with conversation history"""
    try:
        # Convert Gradio history format to API format
        # Gradio history: [[user_msg, bot_msg], [user_msg, bot_msg], ...]
        # API history: [{"role": "user", "content": "..."}, {"role": "assistant", "content": "..."}, ...]
        api_history = []
        for user_msg, bot_msg in history:
            api_history.append({"role": "user", "content": user_msg})
            api_history.append({"role": "assistant", "content": bot_msg})

        # Send request with history and API key
        response = requests.post(
            f"{BACKEND_URL}/chat/elementary",
            headers={"X-API-Key": API_KEY},
            json={
                "prompt": user_message,
                "history": api_history if api_history else None
            },
            timeout=30
        )
        response.raise_for_status()
        return response.json()["response"]
    except Exception as e:
        return f"Error: {str(e)}"

# Create Gradio interface
interface = gr.ChatInterface(
    fn=chat_with_ai,
    title="🤖 Simple Chatbot",
    description="Ask me anything! I'm here to help you learn.",
    examples=[
        "Apa itu kecerdasan buatan?",
        "Ceritakan tentang dinosaurus!",
        "Bagaimana cara membuat robot?"
    ],
    theme="soft"
)

interface.launch(share=True)
```

#### Different Grade Levels

Change the endpoint for different education levels:

```python
# Elementary (Kelas 5-6 SD)
f"{BACKEND_URL}/chat/elementary"

# Middle School (Kelas 7-9 SMP)
f"{BACKEND_URL}/chat/middle"

# High School (Kelas 10-12 SMA/SMK)
f"{BACKEND_URL}/chat/highschool"
```

#### Test Backend Connection

Add this test cell before your main code:

```python
# Test backend connection
try:
    response = requests.post(
        f"{BACKEND_URL}/chat/elementary",
        headers={"X-API-Key": API_KEY},
        json={"prompt": "Hello"},
        timeout=10
    )
    if response.status_code == 200:
        print("✅ Backend connection successful!")
        print(f"Response: {response.json()['response']}")
    else:
        print(f"❌ Error: {response.status_code}")
        print(response.text)
except Exception as e:
    print(f"❌ Connection failed: {e}")
```

## Configuration

Edit `main.py` to customize:

### Rate Limiting

```python
@limiter.limit("10/minute")  # Change rate here
```

### Model Selection

```python
class ChatRequest(BaseModel):
    model: str = "gpt-4.1-mini"  # Change default model
```

### Token Limits

```python
max_tokens: int = 250  # Adjust response length
```

### System Prompts

```python
# In each endpoint, modify system_message
system_message="You are a friendly teacher..."
```

## Security

### Authentication Implementation

The backend uses middleware-based authentication:

- `APIKeyMiddleware` validates `X-API-Key` header
- Executes before rate limiting
- Excludes public endpoints: `/`, `/health`, `/docs`, `/redoc`, `/openapi.json`
- Returns 401 if key missing, 403 if invalid

### Security Features

**What We Do**:

- ✅ API key authentication on all endpoints (except public ones)
- ✅ Rate limiting prevents abuse (10 req/min per IP)
- ✅ No data persistence
- ✅ Environment variable for API keys
- ✅ HTTPS only
- ✅ Middleware-based security

**What We Don't Do**:

- ❌ Store user data
- ❌ Log conversations
- ❌ Collect personal information

### Security Best Practices

1. **Keep API_KEY Secret**: Store in environment variables, never in code
2. **Use Obfuscation for Colab**: Base64 encoding hides from casual viewing (but is not encryption)
3. **Monitor Usage**: Check Cloud Run logs for abuse patterns
4. **Rotate Keys**: Change API_KEY periodically or if compromised
5. **Rate Limiting**: Active as additional protection layer

### Colab Security Notes

1. **Obfuscation ≠ Security**: Base64 encoding only hides the key from casual viewing. Anyone can decode it.
2. **Rate Limiting**: The backend has rate limiting (10 req/min per IP) to prevent abuse.
3. **Monitoring**: Check Cloud Run logs regularly for unusual usage patterns.
4. **Key Rotation**: You can change the API_KEY environment variable in Cloud Run at any time.

### Temporary Disable Authentication

If you need to disable authentication temporarily (NOT RECOMMENDED):

```python
# In main.py, comment out:
# app.add_middleware(APIKeyMiddleware)
```

Then redeploy. **Note**: This removes all authentication protection!

## Rate Limiting

- **Limit**: 10 requests per minute per IP address
- **Response**: HTTP 429 if exceeded
- **Reset**: Automatically after 1 minute

### Increasing Limits

For classroom use with many students, consider:

1. Use screen sharing for demos
2. Request limit increase
3. Deploy your own instance

To modify rate limits in `main.py`:

```python
@limiter.limit("20/minute")  # Increase to 20/min
```

## Cost Management

### Estimates (as of 2024)

**gpt-4.1-mini pricing**:

- Input: $0.15 per 1M tokens
- Output: $0.60 per 1M tokens

**Typical request** (250 tokens output):

- ~$0.0002 per request
- ~$0.20 per 1000 requests
- ~$2 per 10,000 requests

**Monthly estimates**:

- 100 students × 20 requests/day × 20 days = 40,000 requests
- Cost: ~$8/month

### Cost Optimization

1. **Use efficient models**: gpt-4.1-mini is 10x cheaper than GPT-4
2. **Limit max_tokens**: Keep responses concise (250-400 tokens)
3. **Rate limiting**: Prevents abuse and runaway costs
4. **Monitor usage**: Set up billing alerts in Google Cloud
5. **Consider caching**: Cache common educational queries

## Monitoring & Troubleshooting

### Cloud Run Console

View:

- Request volume
- Error rates
- Response times
- Instance usage
- Logs

### Logging

View logs:

```bash
gcloud run services logs read educational-llm-proxy \
  --region=asia-southeast2 \
  --limit=50
```

### Common Issues

#### 401 Unauthorized

- Check that `X-API-Key` header is included
- Verify the API key is correct

#### 403 Forbidden

- The API key is invalid
- Re-encode and update the key
- Check environment variable in Cloud Run

#### 429 Too Many Requests

- Rate limit exceeded (10/min per IP)
- Wait 1 minute and try again

#### 500 Server Error

- Check backend logs in Cloud Run console
- Verify `API_KEY` and `OPENAI_API_KEY` are set in Cloud Run environment variables

#### "OpenAI API key not configured"

- Check environment variable is set
- Verify Cloud Run has the env var configured
- Redeploy if needed

#### Slow responses

- First request may take 5-10s (cold start)
- Subsequent requests faster
- Reduce max_tokens for faster responses

#### Connection timeouts

- Check OpenAI API status
- Verify internet connectivity
- Increase Cloud Run timeout if needed

## Development

### Testing Prompts

Create test scripts:

```python
# test_prompts.py
import requests

test_cases = [
    "Apa itu AI?",
    "Explain recursion",
    "Solve: 2x + 5 = 15"
]

for prompt in test_cases:
    response = requests.post(
        "http://localhost:8000/chat/middle",
        headers={"X-API-Key": "your-backend-api-key"},
        json={"prompt": prompt}
    )
    print(f"Q: {prompt}")
    print(f"A: {response.json()['response']}\n")
```

### Hot Reload

```bash
# Changes to main.py will auto-reload
uvicorn main:app --reload
```

### Debug Mode

Add to `main.py`:

```python
import logging
logging.basicConfig(level=logging.DEBUG)
```

### Dependencies

From `requirements.txt`:

```
fastapi==0.104.1
uvicorn==0.24.0
httpx==0.25.1
slowapi==0.1.9
pydantic==2.5.0
```

Update:

```bash
pip install --upgrade -r requirements.txt
```

## Production Considerations

For production deployment with higher traffic:

1. **Keep authentication** for security
2. **Increase rate limits** appropriately
3. **Set up monitoring** and alerts
4. **Enable CORS** if needed for web apps
5. **Add request validation** for robustness
6. **Implement caching** for common queries
7. **Regular key rotation** for security
8. **Monitor costs** with billing alerts

## Breaking Changes

⚠️ **All API endpoints now require `X-API-Key` header** (except `/`, `/health`, `/docs`)

### Before:

```python
requests.post(
    f"{BACKEND_URL}/chat/elementary",
    json={"prompt": "Hello"}
)
```

### After:

```python
requests.post(
    f"{BACKEND_URL}/chat/elementary",
    headers={"X-API-Key": "your-api-key"},
    json={"prompt": "Hello"}
)
```

## Implementation Details

### Files Modified for Authentication

1. **middleware.py** - `APIKeyMiddleware` class for validation
2. **main.py** - Middleware integration and health check updates
3. **models.py** - Added `history` field to `ChatRequest`
4. **routers/chat.py** - Updated all endpoints to support conversation history

### Conversation History Support

All endpoints now support optional `history` parameter:

- Format: `[{"role": "user", "content": "..."}, {"role": "assistant", "content": "..."}]`
- Enables multi-turn conversations
- Maintains context across requests
- No server-side state stored

## Support

Issues or questions about the backend?

- Check troubleshooting guide above
- Review Cloud Run logs
- Open GitHub issue
- Email maintainer

## License

MIT License - see LICENSE file in root directory
