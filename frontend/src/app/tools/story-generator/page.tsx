"use client";

import { useState } from 'react';
import { BookOpen, Send, Loader2, ArrowLeft, Bot } from 'lucide-react';
import Link from 'next/link';
import { chatService } from '@/lib/api';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default function StoryGeneratorPage() {
  const [character, setCharacter] = useState('');
  const [setting, setSetting] = useState('');
  const [theme, setTheme] = useState('Petualangan');
  const [story, setStory] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const themes = ["Petualangan", "Persahabatan", "Keberanian", "Misteri", "Sains"];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!character || !setting || isLoading) return;

    setIsLoading(true);
    setStory('');

    const prompt = `Buatkan cerita pendek yang menarik dengan:
    - Karakter utama: ${character}
    - Setting: ${setting}
    - Tema: ${theme}
    
    Cerita harus menarik, kreatif, dan sesuai untuk anak-anak.`;

    try {
      const response = await chatService.sendMessage({
        prompt: prompt,
        model: "gpt-4.1-mini"
      }, 'elementary');
      
      setStory(response.response);
    } catch (error) {
      console.error(error);
      setStory("Maaf, terjadi kesalahan saat membuat cerita. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="p-6 border-b bg-purple-50">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-purple-600" />
              Story Generator
            </h1>
            <p className="text-gray-600 mt-2">Buat cerita kreatif dengan AI! Pilih karakter, tempat, dan tema.</p>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="space-y-6">
              <form onSubmit={handleGenerate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Karakter Utama</label>
                  <input
                    type="text"
                    value={character}
                    onChange={(e) => setCharacter(e.target.value)}
                    placeholder="Contoh: Seekor kelinci pemberani"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Setting / Tempat</label>
                  <input
                    type="text"
                    value={setting}
                    onChange={(e) => setSetting(e.target.value)}
                    placeholder="Contoh: Hutan ajaib"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tema Cerita</label>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {themes.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sedang Menulis...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Buat Cerita
                    </>
                  )}
                </button>
              </form>

              {/* Examples Section */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Contoh Inspirasi</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { char: "Robot kecil", set: "Kota masa depan", theme: "Persahabatan" },
                    { char: "Anak petani", set: "Desa pegunungan", theme: "Keberanian" },
                    { char: "Kucing detektif", set: "Perpustakaan tua", theme: "Misteri" }
                  ].map((ex, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setCharacter(ex.char);
                        setSetting(ex.set);
                        setTheme(ex.theme);
                      }}
                      className="text-left p-3 rounded-lg border border-gray-200 hover:bg-purple-50 hover:border-purple-200 transition-all group"
                    >
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 group-hover:text-purple-700">
                        <span>{ex.char}</span>
                        <span className="text-gray-300">•</span>
                        <span>{ex.set}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Tema: {ex.theme}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Area */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 min-h-[400px]">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Bot className="w-5 h-5 text-purple-600" />
                Cerita Anda
              </h3>
              {story ? (
                <div className="prose prose-purple max-w-none">
                  <MarkdownRenderer content={story} />
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center">
                  <BookOpen className="w-12 h-12 mb-3 opacity-20" />
                  <p>Cerita akan muncul di sini setelah Anda membuatnya.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
