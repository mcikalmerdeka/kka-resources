"use client";

import { useState } from 'react';
import { Calculator, Send, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatService } from '@/lib/api';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default function MathTutorPage() {
  const [problem, setProblem] = useState('');
  const [topic, setTopic] = useState('Aljabar');
  const [showSteps, setShowSteps] = useState(true);
  const [solution, setSolution] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const topics = ["Aljabar", "Geometri", "Aritmatika", "Statistika", "Perbandingan", "Bilangan"];

  const handleSolve = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem || isLoading) return;

    setIsLoading(true);
    setSolution('');

    const stepsInstruction = showSteps ? "Jelaskan langkah demi langkah" : "Berikan jawaban langsung";
    
    const prompt = `Kamu adalah guru matematika yang sabar dan jelas.

Topik: ${topic}
Soal: ${problem}

${stepsInstruction}. Jika ada langkah-langkah, jelaskan mengapa setiap langkah diperlukan.
Gunakan contoh atau analogi jika membantu pemahaman.`;

    try {
      const response = await chatService.sendMessage({
        prompt: prompt,
        model: "gpt-4.1-mini"
      }, 'middle');
      
      setSolution(response.response);
    } catch (error) {
      console.error(error);
      setSolution("Maaf, terjadi kesalahan saat menyelesaikan soal. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/#implementations" className="inline-flex items-center text-gray-600 hover:text-orange-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="p-6 border-b bg-orange-50">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Calculator className="w-8 h-8 text-orange-600" />
              Math Tutor
            </h1>
            <p className="text-gray-600 mt-2">Bantuan matematika instan dengan penjelasan langkah demi langkah.</p>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Form */}
            <div className="space-y-6">
              <form onSubmit={handleSolve} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Topik Matematika</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    {topics.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Soal Matematika</label>
                  <textarea
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    placeholder="Contoh: Jika 2x + 5 = 15, berapakah nilai x?"
                    className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showSteps"
                    checked={showSteps}
                    onChange={(e) => setShowSteps(e.target.checked)}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="showSteps" className="ml-2 block text-sm text-gray-900">
                    Tampilkan langkah demi langkah
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sedang Menghitung...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Selesaikan Soal
                    </>
                  )}
                </button>
              </form>

              {/* Examples Section */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Contoh Soal</h3>
                <div className="space-y-2">
                  {[
                    { q: "Jika 2x + 5 = 15, berapakah nilai x?", t: "Aljabar" },
                    { q: "Hitung luas segitiga dengan alas 10 cm dan tinggi 8 cm", t: "Geometri" },
                    { q: "Sederhanakan pecahan 24/36", t: "Aritmatika" },
                    { q: "Tentukan rata-rata dari angka: 7, 8, 9, 10, 11", t: "Statistika" }
                  ].map((ex, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setProblem(ex.q);
                        setTopic(ex.t);
                        setShowSteps(true);
                      }}
                      className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-orange-50 hover:border-orange-200 transition-all group"
                    >
                      <div className="text-sm font-medium text-gray-700 group-hover:text-orange-700 line-clamp-1">
                        {ex.q}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Topik: {ex.t}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Area */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 min-h-[400px] overflow-y-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Solusi:</h3>
              {solution ? (
                <div className="prose prose-orange max-w-none">
                  <MarkdownRenderer content={solution} />
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center">
                  <Calculator className="w-12 h-12 mb-3 opacity-20" />
                  <p>Solusi akan muncul di sini.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
