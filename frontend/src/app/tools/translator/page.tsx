"use client";

import { useState } from 'react';
import { Languages, Send, Loader2, ArrowLeft, ArrowRightLeft } from 'lucide-react';
import Link from 'next/link';
import { chatService } from '@/lib/api';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default function TranslatorPage() {
  const [text, setText] = useState('');
  const [sourceLang, setSourceLang] = useState('English');
  const [targetLang, setTargetLang] = useState('Bahasa Indonesia');
  const [culturalNotes, setCulturalNotes] = useState(false);
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const languages = ["Bahasa Indonesia", "English", "Mandarin", "Arabic", "Spanish", "French", "Japanese", "Korean"];

  const handleTranslate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text || isLoading) return;

    setIsLoading(true);
    setTranslation('');

    const culturalNote = culturalNotes ? "Sertakan juga catatan budaya atau konteks menarik tentang terjemahan ini." : "";
    
    const prompt = `Terjemahkan teks berikut dari ${sourceLang} ke ${targetLang}:

"${text}"

${culturalNote}`;

    try {
      const response = await chatService.sendMessage({
        prompt: prompt,
      }, 'middle');
      
      setTranslation(response.response);
    } catch (error) {
      console.error(error);
      setTranslation("Maaf, terjadi kesalahan saat menerjemahkan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const swapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="p-6 border-b bg-pink-50">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Languages className="w-8 h-8 text-pink-600" />
              Language Translator
            </h1>
            <p className="text-gray-600 mt-2">Terjemahkan bahasa dan pelajari konteks budayanya.</p>
          </div>

          <div className="p-6 space-y-6">
            {/* Language Controls */}
            <div className="flex flex-col md:flex-row items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex-1 w-full">
                <label className="block text-xs font-medium text-gray-500 mb-1 uppercase">Dari</label>
                <select
                  value={sourceLang}
                  onChange={(e) => setSourceLang(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {languages.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>

              <button 
                onClick={swapLanguages}
                className="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
                title="Tukar Bahasa"
              >
                <ArrowRightLeft className="w-5 h-5" />
              </button>

              <div className="flex-1 w-full">
                <label className="block text-xs font-medium text-gray-500 mb-1 uppercase">Ke</label>
                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {languages.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input */}
              <div className="space-y-4">
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Masukkan teks yang ingin diterjemahkan..."
                  className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="culturalNotes"
                      checked={culturalNotes}
                      onChange={(e) => setCulturalNotes(e.target.checked)}
                      className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                    />
                    <label htmlFor="culturalNotes" className="ml-2 block text-sm text-gray-900">
                      Sertakan catatan budaya
                    </label>
                  </div>

                  <button
                    onClick={handleTranslate}
                    disabled={isLoading || !text}
                    className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 disabled:opacity-50 transition-colors flex items-center gap-2 font-medium"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Menerjemahkan...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Terjemahkan
                      </>
                    )}
                  </button>
                </div>

                {/* Examples Section */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Contoh</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { t: "Hello, how are you?", s: "English", tg: "Bahasa Indonesia", c: false },
                      { t: "Selamat pagi, apa kabar?", s: "Bahasa Indonesia", tg: "English", c: true }
                    ].map((ex, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setText(ex.t);
                          setSourceLang(ex.s);
                          setTargetLang(ex.tg);
                          setCulturalNotes(ex.c);
                        }}
                        className="px-3 py-1.5 rounded-full border border-gray-200 text-xs text-gray-600 hover:bg-pink-50 hover:border-pink-200 hover:text-pink-700 transition-colors"
                      >
                        "{ex.t}"
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 h-64 overflow-y-auto relative">
                <div className="absolute top-4 right-4 text-xs font-medium text-gray-400 uppercase">
                  Hasil Terjemahan
                </div>
                {translation ? (
                  <div className="prose prose-pink max-w-none text-gray-800 leading-relaxed mt-4">
                    <MarkdownRenderer content={translation} />
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center">
                    <Languages className="w-12 h-12 mb-3 opacity-20" />
                    <p>Hasil terjemahan akan muncul di sini.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
