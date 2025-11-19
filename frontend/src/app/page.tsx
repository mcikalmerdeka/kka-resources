import { Bot, BookOpen, Code, Calculator, Languages, BrainCircuit, HelpCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/Icons';
import { ToolCard } from '@/components/ToolCard';

export default function Home() {
  const tools = [
    {
      title: "Simple Chatbot",
      description: "Basic Q&A chatbot to learn about AI conversations. Perfect for beginners.",
      href: "/tools/chatbot",
      icon: <Bot className="w-6 h-6" />,
      phase: "C",
      color: "bg-blue-500"
    },
    {
      title: "Story Generator",
      description: "Create creative stories with AI. Learn about prompts and creativity.",
      href: "/tools/story-generator",
      icon: <BookOpen className="w-6 h-6" />,
      phase: "C",
      color: "bg-purple-500"
    },
    {
      title: "Code Explainer",
      description: "Understand programming code with AI explanations.",
      href: "/tools/code-explainer",
      icon: <Code className="w-6 h-6" />,
      phase: "D-F",
      color: "bg-green-500"
    },
    {
      title: "Math Tutor",
      description: "Get step-by-step help with math problems.",
      href: "/tools/math-tutor",
      icon: <Calculator className="w-6 h-6" />,
      phase: "C-E",
      color: "bg-orange-500"
    },
    {
      title: "Language Translator",
      description: "Translate between languages with cultural insights.",
      href: "/tools/translator",
      icon: <Languages className="w-6 h-6" />,
      phase: "C-D",
      color: "bg-pink-500"
    },
    {
      title: "Quiz Generator",
      description: "Create custom educational quizzes on any topic.",
      href: "/tools/quiz-generator",
      icon: <HelpCircle className="w-6 h-6" />,
      phase: "D-F",
      color: "bg-red-500"
    },
    {
      title: "Animal Guessing Game",
      description: "Interactive game where AI guesses animals.",
      href: "/tools/animal-guessing",
      icon: <BrainCircuit className="w-6 h-6" />,
      phase: "C",
      color: "bg-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-blue-600">AI Education</span> Tools
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Explore the world of Artificial Intelligence with our interactive learning tools.
              <br />
              Designed for Indonesian curriculum (Phase C-F).
            </p>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.linkedin.com/in/mcikalmerdeka" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <LinkedinIcon className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/mcikalmerdeka" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
              <GithubIcon className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
              <InstagramIcon className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
          <p className="text-gray-400 text-sm">&copy; 2025 Koding dan Kecerdasan Artificial. Open Source Education.</p>
        </div>
      </footer>
    </div>
  );
}
