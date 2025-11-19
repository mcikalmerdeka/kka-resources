"use client";

import { useState } from 'react';
import { Code, Send, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatService } from '@/lib/api';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';

export default function CodeExplainerPage() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('Python');
  const [level, setLevel] = useState('Simple');
  const [explanation, setExplanation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const languages = ["Python", "JavaScript", "Java", "C++", "HTML/CSS"];
  const levels = ["Simple", "Detailed", "Advanced"];

  const handleExplain = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code || isLoading) return;

    setIsLoading(true);
    setExplanation('');

    const detailInstructions: Record<string, string> = {
      "Simple": "Jelaskan dengan sangat sederhana untuk pemula",
      "Detailed": "Berikan penjelasan detail dengan contoh",
      "Advanced": "Jelaskan konsep teknis dan best practices"
    };

    const prompt = `Jelaskan kode ${language} berikut ini:

\`\`\`${language}
${code}
\`\`\`

${detailInstructions[level]}. Jelaskan:
1. Apa yang dilakukan kode ini
2. Bagaimana cara kerjanya (langkah demi langkah)
3. Konsep programming apa yang digunakan`;

    try {
      const response = await chatService.sendMessage({
        prompt: prompt,
        model: "gpt-4o-mini"
      }, 'highschool');
      
      setExplanation(response.response);
    } catch (error) {
      console.error(error);
      setExplanation("Maaf, terjadi kesalahan saat menjelaskan kode. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-green-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="p-6 border-b bg-green-50">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Code className="w-8 h-8 text-green-600" />
              Code Explainer
            </h1>
            <p className="text-gray-600 mt-2">Pahami kode program dengan penjelasan AI yang mudah dimengerti.</p>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <form onSubmit={handleExplain} className="space-y-4 h-full flex flex-col">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bahasa</label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {languages.map(l => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Level Penjelasan</label>
                    <select
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {levels.map(l => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex-1 min-h-[300px] border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent bg-gray-50 relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1 px-4 pt-2">Kode Anda</label>
                  <div className="h-full font-mono text-sm relative">
                    {/* Hidden input for HTML5 form validation */}
                    <input 
                      type="text" 
                      value={code} 
                      onChange={() => {}} 
                      required 
                      className="absolute opacity-0 w-px h-px -z-10"
                      onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity('Mohon masukkan kode yang ingin dijelaskan')}
                      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
                    />
                    <Editor
                      value={code}
                      onValueChange={code => setCode(code)}
                      highlight={code => highlight(code, languages.includes(language) ? Prism.languages[language.toLowerCase()] || Prism.languages.javascript : Prism.languages.javascript, language)}
                      padding={16}
                      placeholder="Tempel kode Anda di sini..."
                      className="min-h-[300px]"
                      textareaClassName="focus:outline-none"
                      style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 14,
                        backgroundColor: '#f9fafb',
                        minHeight: '300px',
                      }}
                    />
                    <style jsx global>{`
                      .npm__react-simple-code-editor__textarea:focus {
                        outline: none !important;
                      }
                    `}</style>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sedang Menganalisis...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Jelaskan Kode
                    </>
                  )}
                </button>
              </form>

              {/* Examples Section */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Contoh Kode</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { 
                      label: "Faktorial (Python)", 
                      lang: "Python", 
                      level: "Detailed",
                      code: "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n-1)" 
                    },
                    { 
                      label: "Looping (JavaScript)", 
                      lang: "JavaScript", 
                      level: "Simple",
                      code: "for (let i = 0; i < 5; i++) {\n    console.log(i);\n}" 
                    },
                    {
                      label: "HTML Structure",
                      lang: "HTML/CSS",
                      level: "Simple",
                      code: "<!DOCTYPE html>\n<html>\n<body>\n    <h1>Hello World</h1>\n    <p>This is a paragraph.</p>\n</body>\n</html>"
                    }
                  ].map((ex, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setCode(ex.code);
                        setLanguage(ex.lang);
                        setLevel(ex.level);
                      }}
                      className="text-left p-3 rounded-lg border border-gray-200 hover:bg-green-50 hover:border-green-200 transition-all group"
                    >
                      <div className="font-medium text-gray-700 group-hover:text-green-700 text-sm">
                        {ex.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{ex.level} Explanation</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Area */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 min-h-[500px] overflow-y-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Penjelasan:</h3>
              {explanation ? (
                <div className="prose prose-green max-w-none">
                  <MarkdownRenderer content={explanation} />
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center">
                  <Code className="w-12 h-12 mb-3 opacity-20" />
                  <p>Penjelasan akan muncul di sini.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
