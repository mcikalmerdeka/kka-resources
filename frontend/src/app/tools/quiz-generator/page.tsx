"use client";

import { useState } from 'react';
import { HelpCircle, Send, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatService } from '@/lib/api';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default function QuizGeneratorPage() {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('Medium');
  const [numQuestions, setNumQuestions] = useState(5);
  const [questionType, setQuestionType] = useState('Multiple Choice');
  const [quiz, setQuiz] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const difficulties = ["Easy", "Medium", "Hard"];
  const types = ["Multiple Choice", "True/False", "Short Answer"];

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic || isLoading) return;

    setIsLoading(true);
    setQuiz('');

    const prompt = `Buatkan ${numQuestions} soal ${questionType} tentang ${topic} dengan tingkat kesulitan ${difficulty}.

Format untuk setiap soal:
1. Pertanyaan
2. Pilihan jawaban (jika multiple choice)
3. Jawaban yang benar
4. Penjelasan singkat

Pastikan soal-soal edukatif dan sesuai untuk pelajar.`;

    try {
      const response = await chatService.sendMessage({
        prompt: prompt,
      }, 'middle');
      
      setQuiz(response.response);
    } catch (error) {
      console.error(error);
      setQuiz("Maaf, terjadi kesalahan saat membuat kuis. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Link href="/#implementations" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="p-6 border-b bg-red-50">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <HelpCircle className="w-8 h-8 text-red-600" />
              Quiz Generator
            </h1>
            <p className="text-gray-600 mt-2">Buat kuis edukatif tentang topik apa saja secara instan.</p>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input Form */}
            <div className="lg:col-span-1 space-y-6">
              <form onSubmit={handleGenerate} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Topik Kuis</label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Contoh: Sejarah Indonesia, Biologi"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tingkat Kesulitan</label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jumlah Soal: {numQuestions}
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="10"
                    value={numQuestions}
                    onChange={(e) => setNumQuestions(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>3</span>
                    <span>10</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipe Soal</label>
                  <div className="space-y-2">
                    {types.map(t => (
                      <label key={t} className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                        <input
                          type="radio"
                          name="questionType"
                          value={t}
                          checked={questionType === t}
                          onChange={(e) => setQuestionType(e.target.value)}
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300"
                        />
                        <span className="ml-3 text-sm text-gray-700">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sedang Membuat...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Buat Kuis
                    </>
                  )}
                </button>
              </form>

              {/* Examples Section */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Contoh Kuis</h3>
                <div className="space-y-2">
                  {[
                    { topic: "Python Basics", diff: "Easy", num: 5, type: "Multiple Choice" },
                    { topic: "Sejarah Indonesia", diff: "Medium", num: 5, type: "True/False" },
                    { topic: "Sistem Tata Surya", diff: "Medium", num: 5, type: "Multiple Choice" }
                  ].map((ex, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setTopic(ex.topic);
                        setDifficulty(ex.diff);
                        setNumQuestions(ex.num);
                        setQuestionType(ex.type);
                      }}
                      className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-red-50 hover:border-red-200 transition-all group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 group-hover:text-red-700">{ex.topic}</span>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">{ex.diff}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{ex.num} Soal • {ex.type}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Output Area */}
            <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6 border border-gray-200 min-h-[500px] overflow-y-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Kuis Anda:</h3>
              {quiz ? (
                <div className="prose prose-red max-w-none text-gray-700 leading-relaxed">
                  <MarkdownRenderer content={quiz} />
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 text-center">
                  <HelpCircle className="w-16 h-16 mb-4 opacity-20" />
                  <p className="text-lg font-medium">Kuis belum dibuat</p>
                  <p className="text-sm mt-1">Isi formulir di sebelah kiri untuk membuat kuis baru.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
