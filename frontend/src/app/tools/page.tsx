import { LayoutGrid } from 'lucide-react';
import { PageWrapper } from '@/components/PageWrapper';
import { ToolCard } from '@/components/ToolCard';
import { tools } from '@/data/tools';

export default function ToolsPage() {
  return (
    <PageWrapper
      header={{
        title: "AI Tools",
        description: "Interactive learning tools",
        icon: <LayoutGrid className="w-6 h-6 text-white" />,
        color: "bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-200",
      }}
    >
      <div className="max-w-5xl">
        <p className="text-gray-600 mb-8">
          Explore our collection of interactive AI tools designed for Indonesian students
          Phase C-F. Each tool helps you learn about Artificial Intelligence through hands-on
          experimentation.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {tools.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
