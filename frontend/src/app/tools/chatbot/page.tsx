import { ChatInterface } from '@/components/ChatInterface';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/#implementations" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>
        <ChatInterface 
          title="Simple Chatbot"
          description="I am a friendly AI assistant. Ask me anything about science, history, or the world around us!"
          endpoint="elementary"
          initialMessage="Halo! Saya adalah asisten AI kamu. Apa yang ingin kamu pelajari hari ini?"
          useSearch={true}
        />
      </div>
    </div>
  );
}
