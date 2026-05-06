"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Bot, BookOpen, LayoutGrid, Home, Heart, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />,
  },
  {
    label: 'AI Tools',
    href: '/#implementations',
    icon: <LayoutGrid className="w-4 h-4" />,
    children: [
      { label: 'Simple Chatbot', href: '/tools/chatbot' },
      { label: 'Story Generator', href: '/tools/story-generator' },
      { label: 'Code Explainer', href: '/tools/code-explainer' },
      { label: 'Math Tutor', href: '/tools/math-tutor' },
      { label: 'Translator', href: '/tools/translator' },
      { label: 'Quiz Generator', href: '/tools/quiz-generator' },
      { label: 'Animal Guessing', href: '/tools/animal-guessing' },
      { label: 'Data Analysis', href: '/tools/data-analysis' },
    ],
  },
  {
    label: 'Theory',
    href: '/#theory',
    icon: <BookOpen className="w-4 h-4" />,
    children: [
      { label: 'How AI is Trained', href: '/theory/how-ai-is-trained' },
      { label: 'Environmental Concern', href: '/theory/environmental-concern' },
      { label: 'AI Bias & Fairness', href: '/theory/ai-bias' },
      { label: 'Open vs Closed Source', href: '/theory/open-vs-closed' },
      { label: 'Social Media Algorithms', href: '/theory/social-media-algorithms' },
      { label: 'AI & Copyright', href: '/theory/ai-copyright' },
      { label: 'AI Hallucinations', href: '/theory/ai-hallucinations' },
      { label: 'NVIDIA AI Revolution', href: '/theory/nvidia-ai-revolution' },
    ],
  },
  {
    label: 'Contribute',
    href: '/contributions',
    icon: <Heart className="w-4 h-4" />,
  },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname.startsWith(href);
  };

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow">
              <Bot className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-lg lg:text-xl font-bold tracking-tight transition-colors",
                isScrolled ? "text-slate-900" : "text-slate-900"
              )}>
                KKA Lab
              </span>
              <span className="hidden sm:block text-[10px] text-gray-500 -mt-1 font-medium tracking-wide uppercase">
                AI Education
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      )}
                    >
                      {item.icon}
                      {item.label}
                      <ChevronDown className={cn(
                        "w-3 h-3 transition-transform",
                        openDropdown === item.label && "rotate-180"
                      )} />
                    </button>
                    
                    {/* Dropdown */}
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2.5 text-sm transition-colors',
                              pathname === child.href
                                ? 'text-blue-600 bg-blue-50 font-medium'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    )}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={cn(
                        'w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all',
                        isActive(item.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {item.icon}
                        {item.label}
                      </span>
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        openDropdown === item.label && "rotate-180"
                      )} />
                    </button>
                    
                    {openDropdown === item.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2 rounded-lg text-sm transition-colors',
                              pathname === child.href
                                ? 'text-blue-600 bg-blue-50 font-medium'
                                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all',
                      isActive(item.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    )}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
