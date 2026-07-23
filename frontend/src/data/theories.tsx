import { Brain, Leaf, Scale, Unlock, Smartphone, Copyright, Ghost, Gamepad2 } from 'lucide-react';

export interface Theory {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

export const theories: Theory[] = [
  {
    title: "How AI is Trained",
    description: "Learn the basics of how Artificial Intelligence learns from data.",
    href: "/theory/how-ai-is-trained",
    icon: <Brain className="w-6 h-6" />,
    color: "bg-indigo-500"
  },
  {
    title: "AI Environmental Concern",
    description: "Understand the environmental impact of training and using AI models.",
    href: "/theory/environmental-concern",
    icon: <Leaf className="w-6 h-6" />,
    color: "bg-emerald-500"
  },
  {
    title: "AI Bias & Fairness",
    description: "Why AI can be unfair and how to fix it.",
    href: "/theory/ai-bias",
    icon: <Scale className="w-6 h-6" />,
    color: "bg-rose-500"
  },
  {
    title: "Open vs Closed Source AI",
    description: "Understand the difference between open (like DeepSeek) and closed AI.",
    href: "/theory/open-vs-closed",
    icon: <Unlock className="w-6 h-6" />,
    color: "bg-cyan-500"
  },
  {
    title: "Social Media Algorithms",
    description: "Why your TikTok feed is different from your friends'.",
    href: "/theory/social-media-algorithms",
    icon: <Smartphone className="w-6 h-6" />,
    color: "bg-purple-600"
  },
  {
    title: "AI & Copyright Issues",
    description: "Who owns AI art? The legal battle between artists and AI.",
    href: "/theory/ai-copyright",
    icon: <Copyright className="w-6 h-6" />,
    color: "bg-amber-600"
  },
  {
    title: "AI Hallucinations",
    description: "When AI confidently lies. Why it happens and how to spot it.",
    href: "/theory/ai-hallucinations",
    icon: <Ghost className="w-6 h-6" />,
    color: "bg-red-600"
  },
  {
    title: "NVIDIA AI Revolution",
    description: "From gaming graphics to the engine of the AI revolution.",
    href: "/theory/nvidia-ai-revolution",
    icon: <Gamepad2 className="w-6 h-6" />,
    color: "bg-green-600"
  }
];
