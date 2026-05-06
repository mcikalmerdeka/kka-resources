"use client";

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Sidebar } from './Sidebar';
import { Breadcrumbs } from './Breadcrumbs';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  showSidebar?: boolean;
  showBreadcrumbs?: boolean;
  header?: {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    color?: string;
  };
}

export function PageWrapper({ 
  children, 
  className, 
  showSidebar = true,
  showBreadcrumbs = true,
  header
}: PageWrapperProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const hasSidebar = showSidebar;

  return (
    <div className="min-h-screen bg-gray-50 pt-16 lg:pt-20">
      <div className="flex">
        {/* Sidebar */}
        {hasSidebar && (
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className={cn(
          "flex-1 min-w-0",
          hasSidebar && "lg:ml-0"
        )}>
          <div className={cn(
            "px-4 sm:px-6 lg:px-8 py-6 lg:py-8",
            className
          )}>
            {/* Mobile sidebar toggle */}
            {hasSidebar && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden mb-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors shadow-sm"
              >
                <Menu className="w-4 h-4" />
                Menu
              </button>
            )}

            {/* Breadcrumbs */}
            {showBreadcrumbs && (
              <div className="mb-6">
                <Breadcrumbs />
              </div>
            )}

            {/* Page Header */}
            {header && (
              <div className={cn(
                "rounded-2xl shadow-sm border overflow-hidden mb-8",
                header.color || "bg-white border-gray-200"
              )}>
                <div className="px-6 py-8 lg:px-8 lg:py-10">
                  <div className="flex items-center gap-3 mb-4">
                    {header.icon && (
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        {header.icon}
                      </div>
                    )}
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {header.description}
                    </span>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {header.title}
                  </h1>
                </div>
              </div>
            )}

            {/* Content */}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
