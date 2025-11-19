"""
Base interface for AI agent tools.
"""
from abc import ABC, abstractmethod
from typing import Dict, Any

class BaseTool(ABC):
    """Abstract base class for all tools"""
    
    @abstractmethod
    def get_definition(self) -> Dict[str, Any]:
        """
        Return the OpenAI function definition for this tool.
        """
        pass

    @abstractmethod
    def execute(self, **kwargs) -> str:
        """
        Execute the tool with the given arguments.
        """
        pass
