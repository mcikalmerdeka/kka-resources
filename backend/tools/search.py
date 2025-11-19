"""
Tavily Search Tool implementation.
"""
import os
from typing import Dict, Any
from tavily import TavilyClient
from .base import BaseTool

class TavilySearchTool(BaseTool):
    def __init__(self):
        api_key = os.environ.get("TAVILY_API_KEY")
        if not api_key:
            print("Warning: TAVILY_API_KEY not found in environment variables")
            self.client = None
        else:
            self.client = TavilyClient(api_key=api_key)

    def get_definition(self) -> Dict[str, Any]:
        return {
            "type": "function",
            "function": {
                "name": "web_search",
                "description": "Search the web for current information, news, or specific topics using Tavily.",
                "parameters": {
                    "type": "object",
                    "properties": {
                        "query": {
                            "type": "string",
                            "description": "The search query to find information about."
                        }
                    },
                    "required": ["query"]
                }
            }
        }

    def execute(self, query: str) -> str:
        if not self.client:
            return "Error: Tavily API key is not configured. Please check backend logs."
        
        try:
            # Perform search with context optimized for LLMs
            response = self.client.search(
                query=query, 
                search_depth="basic",
                max_results=3
            )
            
            # Format the results
            results = []
            for result in response.get("results", []):
                results.append(f"Title: {result['title']}\nURL: {result['url']}\nContent: {result['content']}\n")
            
            return "\n---\n".join(results) if results else "No results found."
            
        except Exception as e:
            return f"Error performing search: {str(e)}"
