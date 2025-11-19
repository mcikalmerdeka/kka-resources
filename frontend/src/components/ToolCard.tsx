import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  phase: string;
  color?: string;
}

export function ToolCard({ title, description, href, icon, phase, color = "bg-blue-500" }: ToolCardProps) {
  return (
    <Link href={href} className="group block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-blue-200">
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-3 rounded-lg text-white", color)}>
          {icon}
        </div>
        <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-gray-100 text-gray-600">
          Phase {phase}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {description}
      </p>
      <div className="flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
        Try now <ArrowRight className="ml-1 w-4 h-4" />
      </div>
    </Link>
  );
}
