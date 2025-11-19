import { ChatInterface } from '@/components/ChatInterface';

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <ChatInterface 
        title="Simple Chatbot"
        description="I am a friendly AI assistant. Ask me anything about science, history, or the world around us!"
        endpoint="elementary"
        initialMessage="Halo! Saya adalah asisten AI kamu. Apa yang ingin kamu pelajari hari ini?"
      />
    </div>
  );
}
