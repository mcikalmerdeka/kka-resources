import { ChatInterface } from '@/components/ChatInterface';
import { PageWrapper } from '@/components/PageWrapper';
import { Bot } from 'lucide-react';

export default function ChatbotPage() {
  return (
    <PageWrapper
      header={{
        title: "Simple Chatbot",
        description: "AI Tool",
        icon: <Bot className="w-6 h-6 text-blue-600" />,
      }}
    >
      <ChatInterface 
        title="Simple Chatbot"
        description="I am a friendly AI assistant. Ask me anything about science, history, or the world around us!"
        endpoint="elementary"
        initialMessage="Halo! Saya adalah asisten AI kamu. Apa yang ingin kamu pelajari hari ini?"
        useSearch={true}
      />
    </PageWrapper>
  );
}
