"use client";

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { chatService, type ChatMessage } from '@/lib/api';
import MarkdownRenderer from './MarkdownRenderer';

interface ChatInterfaceProps {
  title: string;
  description: string;
  endpoint?: 'elementary' | 'middle' | 'highschool';
  initialMessage?: string;
}

export function ChatInterface({ title, description, endpoint = 'elementary', initialMessage }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialMessage && messages.length === 0) {
      setMessages([{ role: 'assistant', content: initialMessage }]);
    }
  }, [initialMessage, messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    const newMessages: ChatMessage[] = [
      ...messages,
      { role: 'user', content: userMessage }
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Convert messages to history format (excluding the last user message which is sent as prompt)
      const history = newMessages.slice(0, -1);
      
      const response = await chatService.sendMessage({
        prompt: userMessage,
        history: history.length > 0 ? history : undefined
      }, endpoint);

      setMessages([
        ...newMessages,
        { role: 'assistant', content: response.response }
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages([
        ...newMessages,
        { role: 'system', content: 'Sorry, I encountered an error. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-100px)] max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="p-4 border-b bg-gray-50">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Bot className="w-6 h-6 text-blue-600" />
          {title}
        </h1>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={cn(
              "flex gap-3 max-w-[80%]",
              msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
              msg.role === 'user' ? "bg-blue-600 text-white" : "bg-green-600 text-white",
              msg.role === 'system' && "bg-red-500"
            )}>
              {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </div>
            <div className={cn(
              "p-3 rounded-lg text-sm leading-relaxed",
              msg.role === 'user' ? "bg-blue-600 text-white rounded-tr-none" : "bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm",
              msg.role === 'system' && "bg-red-50 text-red-600 border-red-200"
            )}>
              {msg.role === 'assistant' ? (
                <MarkdownRenderer content={msg.content} />
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 mr-auto max-w-[80%]">
             <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-tl-none shadow-sm flex items-center">
              <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
              <span className="ml-2 text-sm text-gray-500">Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
