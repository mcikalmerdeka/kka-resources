"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LayoutGrid, BookOpen, ExternalLink, ChevronDown } from 'lucide-react';
import { GlassDonut } from '@/components/GlassDonut';
import { ToolCard } from '@/components/ToolCard';
import { TheoryCard } from '@/components/TheoryCard';
import { tools } from '@/data/tools';
import { theories } from '@/data/theories';
import { cn } from '@/lib/utils';

export default function Home() {
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
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] lg:min-h-[900px]">
        <GlassDonut />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[calc(100vh-5rem)] lg:min-h-[900px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-8 lg:gap-12">
            {/* Left: Text */}
            <div className="flex flex-col items-start z-20 space-y-6 pt-20 lg:pt-0">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/80 border border-blue-100 rounded-full backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                  </span>
                  <span className="text-blue-600 text-xs font-bold tracking-wider uppercase">Indonesian Curriculum • Phase C-F</span>
               </div>

               <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tighter leading-[1.1]" style={{ fontFamily: 'var(--font-playfair)' }}>
                  KKA <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Laboratory.</span>
               </h1>

               <p className="text-base sm:text-lg text-slate-600 font-normal max-w-md">
                  Explore the world of Artificial Intelligence with our interactive learning tools.
               </p>

               {/* Scroll down CTAs */}
               <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => {
                    setActiveTab('implementations');
                    setTimeout(() => {
                      document.getElementById('content-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium transition-all cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <LayoutGrid className="h-4 w-4" />
                  Explore AI Tools
                  <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
                </button>
                <button
                  onClick={() => {
                    setActiveTab('theory');
                    setTimeout(() => {
                      document.getElementById('content-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium transition-all cursor-pointer bg-white/90 backdrop-blur-md border border-white text-slate-700 hover:bg-white shadow-sm hover:shadow-md"
                >
                  <BookOpen className="h-4 w-4" />
                  Learn Theory
                  <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
                </button>
               </div>

               <div className="pt-4">
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
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => setActiveTab('implementations')}
              className={cn(
                "text-lg sm:text-xl font-bold transition-colors pb-2 border-b-2",
                activeTab === 'implementations'
                  ? "text-slate-900 border-blue-600"
                  : "text-gray-400 border-transparent hover:text-gray-600"
              )}
            >
              AI Tools
            </button>
            <button
              onClick={() => setActiveTab('theory')}
              className={cn(
                "text-lg sm:text-xl font-bold transition-colors pb-2 border-b-2",
                activeTab === 'theory'
                  ? "text-slate-900 border-blue-600"
                  : "text-gray-400 border-transparent hover:text-gray-600"
              )}
            >
              Theory
            </button>
          </div>
          <p className="text-gray-500 text-sm sm:text-base">
            {activeTab === 'implementations' 
              ? "Interactive AI tools designed for Indonesian students Phase C-F. Try them out!"
              : "Learn the fundamental concepts behind Artificial Intelligence."
            }
          </p>
        </div>

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
    </div>
  );
}
