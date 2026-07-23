import { Bot, BookOpen, Code, Calculator, Languages, HelpCircle, BrainCircuit, BarChart2 } from 'lucide-react';

export interface Tool {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  phase: string;
  color: string;
}

export const tools: Tool[] = [
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
  },
  {
    title: "Simple Data Analysis",
    description: "Analyze data and generate insights with AI. Supports text and file inputs.",
    href: "/tools/data-analysis",
    icon: <BarChart2 className="w-6 h-6" />,
    phase: "E-F",
    color: "bg-cyan-500"
  }
];
