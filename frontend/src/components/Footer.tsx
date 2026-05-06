import Link from 'next/link';
import { Bot, Github, Linkedin, Instagram, Heart, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-slate-900">KKA Lab</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Platform pembelajaran AI interaktif untuk siswa Indonesia. Misi kami: Membuat AI education accessible untuk semua.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.linkedin.com/in/mcikalmerdeka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/mcikalmerdeka" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/cikalmerdeka/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 hover:text-pink-600 hover:bg-pink-50 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* AI Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              AI Tools
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/tools/chatbot" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  Simple Chatbot
                </Link>
              </li>
              <li>
                <Link href="/tools/story-generator" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  Story Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/code-explainer" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  Code Explainer
                </Link>
              </li>
              <li>
                <Link href="/tools/math-tutor" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  Math Tutor
                </Link>
              </li>
              <li>
                <Link href="/tools/quiz-generator" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  Quiz Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Theory */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              AI Theory
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/theory/how-ai-is-trained" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  How AI is Trained
                </Link>
              </li>
              <li>
                <Link href="/theory/ai-bias" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  AI Bias & Fairness
                </Link>
              </li>
              <li>
                <Link href="/theory/ai-hallucinations" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  AI Hallucinations
                </Link>
              </li>
              <li>
                <Link href="/theory/open-vs-closed" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  Open vs Closed Source
                </Link>
              </li>
              <li>
                <Link href="/theory/environmental-concern" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  Environmental Concern
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Get Involved
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contributions" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  <Heart className="w-4 h-4" />
                  Contribute
                </Link>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Indonesia</span>
              </li>
              <li>
                <a 
                  href="https://github.com/mcikalmerdeka/kka-resources"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Open Source on GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            &copy; {currentYear} Koding dan Kecerdasan Artificial. Open Source Education.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for Indonesian students
          </p>
        </div>
      </div>
    </footer>
  );
}
