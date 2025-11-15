# Troubleshooting Guide

Common issues and solutions for the AI Education Applications.

## 📋 Quick Links

- [Connection Issues](#connection-issues)
- [Application Not Loading](#application-not-loading)
- [Error Messages](#error-messages)
- [Performance Issues](#performance-issues)
- [Google Colab Issues](#google-colab-issues)

---

## Connection Issues

### "Error: Connection timeout"

**Symptoms**: Request takes too long and fails

**Causes**:
- Backend server may be starting up (cold start)
- Internet connection issues
- Server overload

**Solutions**:
1. Wait 30 seconds and try again
2. Check your internet connection
3. Try during off-peak hours
4. If persistent, check backend status

### "Error: Cannot connect to backend"

**Symptoms**: Immediate connection failure

**Causes**:
- Wrong backend URL
- Backend server is down
- Network firewall blocking connection

**Solutions**:
1. Verify the `BACKEND_URL` is correct
2. Check if you can access the URL in a browser
3. Try from a different network
4. Contact system administrator if behind firewall

---

## Application Not Loading

### Gradio Interface Doesn't Appear

**Symptoms**: Code runs but no interface shows up

**Causes**:
- Gradio installation failed
- Browser pop-up blocker
- Colab rendering issue

**Solutions**:
1. Check installation output for errors
2. Re-run the pip install cell
3. Restart runtime: Runtime → Restart runtime
4. Try in a different browser
5. Check if pop-ups are blocked

### "ModuleNotFoundError: No module named 'gradio'"

**Symptoms**: Error when importing gradio

**Solutions**:
```python
# Run this cell first
%pip install -q requests gradio
# Then restart runtime if needed
```

---

## Error Messages

### Rate Limit Exceeded

**Error Message**: "429: Too Many Requests" or "Rate limit exceeded"

**Explanation**: Backend has rate limiting (10 requests/minute per IP) to prevent abuse and manage costs

**Solutions**:
1. Wait 1 minute before trying again
2. Don't spam requests rapidly
3. If teaching a class, consider:
   - Taking turns
   - Using screen sharing instead of individual access
   - Requesting increased limits (see below)

**For Teachers**: If you need higher limits for classroom use, contact the project maintainer with:
- Your school/institution
- Number of students
- Intended use case

### "OpenAI API key not configured"

**Error Message**: "500: OpenAI API key not configured"

**Explanation**: Backend server is missing API configuration

**Solutions**:
1. If you're a student/teacher using the shared backend, report this to your instructor
2. If you're self-hosting, ensure `OPENAI_API_KEY` environment variable is set
3. Check backend health: Visit `{BACKEND_URL}/health` in browser

### Invalid Response Format

**Symptoms**: Response is empty, malformed, or contains unexpected text

**Causes**:
- Backend API change
- Model returned unexpected format
- Prompt engineering issue

**Solutions**:
1. Try a simpler prompt
2. Check if the issue persists with different inputs
3. Clear outputs and restart: Runtime → Restart and run all
4. Report the exact input that caused the issue

---

## Performance Issues

### Slow Response Times

**Symptoms**: Takes longer than 10 seconds to get a response

**Causes**:
- Model processing time (normal for long inputs)
- Server cold start
- High server load

**Solutions**:
1. **For first request**: Wait up to 30 seconds (cold start)
2. **For subsequent requests**: Should be faster
3. **Reduce input size**: Shorter prompts = faster responses
4. **Off-peak usage**: Try during less busy times

**Normal Response Times**:
- Simple Chatbot: 2-5 seconds
- Story Generator: 5-10 seconds
- Code Explainer: 3-8 seconds
- Math Tutor: 3-7 seconds
- Language Translator: 2-5 seconds
- Quiz Generator: 5-15 seconds

### Colab Disconnects

**Symptoms**: "Runtime disconnected" message

**Causes**:
- Colab timeout (90 minutes of inactivity)
- Poor internet connection
- Browser tab suspended

**Solutions**:
1. Click "Reconnect"
2. Run cells again from top
3. Keep browser tab active
4. For long sessions, move mouse occasionally

---

## Google Colab Issues

### "Runtime Error: Resource Exhausted"

**Symptoms**: Colab runs out of memory or resources

**Solutions**:
1. Our applications use minimal resources, this shouldn't happen
2. If it does: Runtime → Restart runtime
3. Close other browser tabs
4. Try Colab Pro if consistently having issues

### Cannot Save Notebooks

**Symptoms**: Changes not saving or "Failed to save" error

**Causes**:
- Not signed into Google
- Network issues
- Colab service issues

**Solutions**:
1. Sign in to Google Account
2. File → Save a copy in Drive
3. Download notebook: File → Download → Download .ipynb
4. Try again later if Colab is having issues

### "Warning: This notebook was not authored by Google"

**Symptoms**: Warning banner when opening notebook

**Explanation**: This is normal for notebooks from GitHub

**Solutions**:
1. Review the code (it's safe!)
2. Click "Run anyway"
3. Only open notebooks from trusted sources

---

## Application-Specific Issues

### Simple Chatbot

**Issue**: Responses are too short/long

**Solution**: This is configured in the backend. Responses are limited to 250-400 tokens depending on education level.

### Story Generator

**Issue**: Stories don't match the theme

**Solution**: Be more specific in your prompts. Try adding more details about what you want.

### Code Explainer

**Issue**: Explanation is too technical/simple

**Solution**: Change the "Explanation Level" dropdown to match your needs.

### Math Tutor

**Issue**: Wrong answer provided

**Solution**: 
1. AI can make mistakes in complex calculations
2. Always verify with another method
3. Report persistent errors with specific problem
4. Focus on understanding the methodology, not just the answer

### Language Translator

**Issue**: Translation sounds unnatural

**Solution**: 
1. This is common with AI translation
2. Try enabling "cultural notes" for context
3. Understand that translation is an art, not a science

### Quiz Generator

**Issue**: Questions are not relevant or too easy/hard

**Solution**:
1. Be more specific in topic description
2. Adjust difficulty setting
3. Review and edit generated questions before use
4. Provide more context in the prompt

---

## For Developers/Self-Hosters

### Backend Deployment Issues

**Setting up your own backend**:

1. **Cloud Run Deployment**:
```bash
cd backend
gcloud run deploy educational-llm-proxy \
  --source . \
  --platform managed \
  --region asia-southeast2 \
  --allow-unauthenticated \
  --set-env-vars OPENAI_API_KEY=your-key-here
```

2. **Local Testing**:
```bash
cd backend
pip install -r requirements.txt
export OPENAI_API_KEY=your-key-here
uvicorn main:app --reload
```

### Rate Limiting Configuration

Edit `backend/main.py`:
```python
# Change from 10/minute to desired rate
@limiter.limit("10/minute")
```

### Model Configuration

To change models or parameters:
```python
# In backend/main.py
class ChatRequest(BaseModel):
    model: str = "gpt-4o-mini"  # Change default model
    max_tokens: int = 250  # Change token limit
    temperature: float = 0.7  # Change creativity
```

---

## Getting Help

### Before Asking for Help

1. Check this troubleshooting guide
2. Read the teacher guide
3. Try in a fresh Colab notebook
4. Note the exact error message

### How to Report Issues

Include:
1. **Which application** you were using
2. **Exact error message** (screenshot helpful)
3. **What you were trying to do**
4. **Steps to reproduce** the problem
5. **When it started happening**

### Where to Get Help

- **GitHub Issues**: [Create an issue](https://github.com/your-repo/issues)
- **Teacher/Instructor**: Ask your teacher first
- **Documentation**: Review the teacher guide and README

---

## Preventive Measures

### Best Practices

1. **Test before class**: Always run through the notebook before teaching
2. **Have backups**: Keep offline examples ready
3. **Set expectations**: Tell students these are experimental tools
4. **Monitor usage**: Watch for rate limiting with large classes
5. **Stay updated**: Pull latest changes from repository

### Maintenance

- **Check for updates**: Pull from GitHub regularly
- **Test periodically**: Ensure backend is responsive
- **Review logs**: Check Cloud Run logs for errors
- **Update dependencies**: Keep libraries current

---

## Still Having Issues?

If you've tried everything in this guide and still have problems:

1. **Check project status**: Look for announcements in the README
2. **Search existing issues**: Someone may have solved it already
3. **Create an issue**: Provide detailed information
4. **Contact maintainer**: For urgent/sensitive issues

---

**Remember**: Technology isn't perfect, and that's okay! Teaching moments can come from troubleshooting together. Model problem-solving and critical thinking when issues arise.

