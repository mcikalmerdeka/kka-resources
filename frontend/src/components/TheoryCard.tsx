import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TheoryCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  color?: string;
}

export function TheoryCard({ title, description, href, icon, color = "bg-indigo-500" }: TheoryCardProps) {
  return (
    <Link href={href} className="group block p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-indigo-200">
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-3 rounded-lg text-white", color)}>
          {icon || <BookOpen className="w-6 h-6" />}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {description}
      </p>
      <div className="flex items-center text-sm font-medium text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
        Read more <ArrowRight className="ml-1 w-4 h-4" />
      </div>
    </Link>
  );
}
