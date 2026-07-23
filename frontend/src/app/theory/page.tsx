import { BookOpen } from 'lucide-react';
import { PageWrapper } from '@/components/PageWrapper';
import { TheoryCard } from '@/components/TheoryCard';
import { theories } from '@/data/theories';

export default function TheoryPage() {
  return (
    <PageWrapper
      header={{
        title: "Theory",
        description: "AI concepts and fundamentals",
        icon: <BookOpen className="w-6 h-6 text-white" />,
        color: "bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-200",
      }}
    >
      <div className="max-w-5xl">
        <p className="text-gray-600 mb-8">
          Learn the fundamental ideas behind Artificial Intelligence. These articles explain
          how AI works, where it can go wrong, and why it matters for society.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {theories.map((theory) => (
            <TheoryCard key={theory.href} {...theory} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
