"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const routeLabels: Record<string, string> = {
  'tools': 'AI Tools',
  'chatbot': 'Simple Chatbot',
  'story-generator': 'Story Generator',
  'code-explainer': 'Code Explainer',
  'math-tutor': 'Math Tutor',
  'translator': 'Translator',
  'quiz-generator': 'Quiz Generator',
  'animal-guessing': 'Animal Guessing',
  'data-analysis': 'Data Analysis',
  'theory': 'Theory',
  'how-ai-is-trained': 'How AI is Trained',
  'environmental-concern': 'Environmental Concern',
  'ai-bias': 'AI Bias & Fairness',
  'open-vs-closed': 'Open vs Closed Source',
  'social-media-algorithms': 'Social Media Algorithms',
  'ai-copyright': 'AI & Copyright',
  'ai-hallucinations': 'AI Hallucinations',
  'nvidia-ai-revolution': 'NVIDIA AI Revolution',
  'contributions': 'Contribute',
};

export function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  
  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    const isLast = index === segments.length - 1;
    
    return { href, label, isLast };
  });

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      <Link 
        href="/" 
        className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Home</span>
      </Link>
      
      {breadcrumbs.map((crumb) => (
        <div key={crumb.href} className="flex items-center gap-2">
          <ChevronRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          {crumb.isLast ? (
            <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-xs">
              {crumb.label}
            </span>
          ) : (
            <Link
              href={crumb.href}
              className="text-gray-500 hover:text-blue-600 transition-colors truncate max-w-[150px] sm:max-w-[200px]"
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
