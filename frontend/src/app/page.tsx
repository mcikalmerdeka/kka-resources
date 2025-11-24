"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bot, BookOpen, Code, Calculator, Languages, BrainCircuit, HelpCircle, BarChart2, LayoutGrid, Brain, Leaf, Scale, Unlock, Smartphone, Copyright, ExternalLink } from 'lucide-react';
import { GlassDonut } from '@/components/GlassDonut';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/Icons';
import { ToolCard } from '@/components/ToolCard';
import { TheoryCard } from '@/components/TheoryCard';
import { cn } from '@/lib/utils';

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

  const theories = [
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
    }
  ];

  const [activeTab, setActiveTab] = useState<'implementations' | 'theory'>('implementations');

  useEffect(() => {
    // Check hash on mount
    const hash = window.location.hash;
    if (hash === '#implementations') {
      setActiveTab('implementations');
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById('content-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (hash === '#theory') {
      setActiveTab('theory');
      setTimeout(() => {
        const element = document.getElementById('content-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative overflow-hidden h-[900px]">
        <GlassDonut />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center">
            {/* Left: Text */}
            <div className="flex flex-col items-start z-20 space-y-6">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                  </span>
                  <span className="text-blue-600 text-xs font-bold tracking-wider uppercase">Indonesian Curriculum • Phase C-F</span>
               </div>

               <h1 className="text-7xl md:text-8xl font-extrabold text-slate-900 tracking-tighter leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  KKA <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Laboratory.</span>
               </h1>

               <p className="text-lg text-slate-600 font-normal max-w-md">
                  Explore the world of Artificial Intelligence with our interactive learning tools.
               </p>

               {/* Quick actions */}
               <div className="flex items-center gap-4 pt-4">
                <button
                  onClick={() => setActiveTab('implementations')}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all cursor-pointer",
                    activeTab === 'implementations'
                      ? "bg-slate-900 text-white shadow-xl hover:bg-slate-800"
                      : "bg-white/80 backdrop-blur-md border border-white text-slate-700 hover:bg-white shadow-sm"
                  )}
                >
                  <LayoutGrid className="h-4 w-4" />
                  AI Implementations
                </button>
                <button
                  onClick={() => setActiveTab('theory')}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all cursor-pointer",
                    activeTab === 'theory'
                      ? "bg-slate-900 text-white shadow-xl hover:bg-slate-800"
                      : "bg-white/80 backdrop-blur-md border border-white text-slate-700 hover:bg-white shadow-sm"
                  )}
                >
                  <BookOpen className="h-4 w-4" />
                  AI Basic Theory
                </button>
               </div>

               <div className="pt-6">
                 <Link 
                   href="/contributions"
                   className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors group"
                 >
                   <span className="border-b border-slate-300 group-hover:border-blue-600 pb-0.5">Wanna contribute? Click here for guidance!</span>
                   <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                 </Link>
               </div>
            </div>
            
            {/* Right: Space for Donut (handled by Three.js positioning) */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div id="content-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {activeTab === 'implementations' ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {tools.map((tool) => (
              <ToolCard key={tool.href} {...tool} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {theories.map((theory) => (
              <TheoryCard key={theory.href} {...theory} />
            ))}
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
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
            <a href="https://www.instagram.com/cikalmerdeka/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
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
