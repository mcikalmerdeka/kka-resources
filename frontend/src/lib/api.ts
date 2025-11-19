import axios from 'axios';

// Use relative path to trigger Next.js rewrite proxy
const API_URL = '/api';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY,
  },
});

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatRequest {
  prompt: string;
  history?: ChatMessage[];
  model?: string;
  system_message?: string;
}

export const chatService = {
  sendMessage: async (data: ChatRequest, endpoint: 'elementary' | 'middle' | 'highschool' | '' = 'elementary') => {
    const path = endpoint ? `/chat/${endpoint}` : '/chat';
    const response = await api.post(path, data);
    return response.data;
  },
};
