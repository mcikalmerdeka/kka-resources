"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Bot, BookOpen, Code, Calculator, Languages, HelpCircle, 
  BrainCircuit, BarChart2, Brain, Leaf, Scale, Unlock, 
  Smartphone, Copyright, Ghost, Gamepad2, ChevronRight,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const toolsNav = [
  { title: "Simple Chatbot", href: "/tools/chatbot", icon: Bot, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Story Generator", href: "/tools/story-generator", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50" },
  { title: "Code Explainer", href: "/tools/code-explainer", icon: Code, color: "text-green-600", bg: "bg-green-50" },
  { title: "Math Tutor", href: "/tools/math-tutor", icon: Calculator, color: "text-orange-600", bg: "bg-orange-50" },
  { title: "Translator", href: "/tools/translator", icon: Languages, color: "text-pink-600", bg: "bg-pink-50" },
  { title: "Quiz Generator", href: "/tools/quiz-generator", icon: HelpCircle, color: "text-red-600", bg: "bg-red-50" },
  { title: "Animal Guessing", href: "/tools/animal-guessing", icon: BrainCircuit, color: "text-teal-600", bg: "bg-teal-50" },
  { title: "Data Analysis", href: "/tools/data-analysis", icon: BarChart2, color: "text-cyan-600", bg: "bg-cyan-50" },
];

const theoryNav = [
  { title: "How AI is Trained", href: "/theory/how-ai-is-trained", icon: Brain, color: "text-indigo-600", bg: "bg-indigo-50" },
  { title: "Environmental Concern", href: "/theory/environmental-concern", icon: Leaf, color: "text-emerald-600", bg: "bg-emerald-50" },
  { title: "AI Bias & Fairness", href: "/theory/ai-bias", icon: Scale, color: "text-rose-600", bg: "bg-rose-50" },
  { title: "Open vs Closed Source", href: "/theory/open-vs-closed", icon: Unlock, color: "text-cyan-600", bg: "bg-cyan-50" },
  { title: "Social Media Algorithms", href: "/theory/social-media-algorithms", icon: Smartphone, color: "text-purple-600", bg: "bg-purple-50" },
  { title: "AI & Copyright", href: "/theory/ai-copyright", icon: Copyright, color: "text-amber-600", bg: "bg-amber-50" },
  { title: "AI Hallucinations", href: "/theory/ai-hallucinations", icon: Ghost, color: "text-red-600", bg: "bg-red-50" },
  { title: "NVIDIA AI Revolution", href: "/theory/nvidia-ai-revolution", icon: Gamepad2, color: "text-green-600", bg: "bg-green-50" },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const isToolsPage = pathname.startsWith('/tools');
  const isTheoryPage = pathname.startsWith('/theory');

  const navItems = isToolsPage ? toolsNav : isTheoryPage ? theoryNav : [];
  const sectionTitle = isToolsPage ? 'AI Tools' : isTheoryPage ? 'AI Theory' : '';

  if (!isToolsPage && !isTheoryPage) return null;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:sticky top-16 lg:top-0 left-0 z-40 w-72 h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] bg-white border-r border-gray-100 overflow-y-auto transition-transform duration-300 lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-4 lg:p-6">
          {/* Mobile close button */}
          <div className="flex items-center justify-between mb-6 lg:hidden">
            <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              {sectionTitle}
            </h2>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop section title */}
          <h2 className="hidden lg:block text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            {sectionTitle}
          </h2>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => onClose()}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group",
                    isActive 
                      ? `${item.bg} ${item.color} font-medium` 
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <Icon className={cn(
                    "w-4 h-4 flex-shrink-0",
                    !isActive && "text-gray-400 group-hover:text-gray-600"
                  )} />
                  <span className="truncate">{item.title}</span>
                  {isActive && <ChevronRight className="w-3 h-3 ml-auto flex-shrink-0" />}
                </Link>
              );
            })}
          </nav>

          {/* Back to home */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all"
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              Back to Dashboard
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
