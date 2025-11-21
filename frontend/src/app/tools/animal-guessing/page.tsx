"use client";

import { useState } from 'react';
import { Gamepad2, Send, Loader2, ArrowLeft, Lightbulb, Trophy, RotateCcw } from 'lucide-react';
import Link from 'next/link';
import { chatService } from '@/lib/api';
import { cn } from '@/lib/utils';

interface GameState {
  animal: string;
  allClues: string[];
  shownClues: number;
  points: number;
  gameOver: boolean;
  difficulty: string;
  endpoint: 'elementary' | 'middle';
  finalMessage?: string;
  isWin?: boolean;
}

export default function AnimalGuessingPage() {
  const [gameState, setGameState] = useState<GameState>({
    animal: "",
    allClues: [],
    shownClues: 0,
    points: 100,
    gameOver: true,
    difficulty: "Mudah (SD)",
    endpoint: "elementary"
  });
  
  const [guess, setGuess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isClueLoading, setIsClueLoading] = useState(false);

  const startGame = async (difficulty: string) => {
    setIsLoading(true);
    const endpoint = difficulty === "Mudah (SD)" ? "elementary" : "middle";
    
    const prompt = `Pilih satu hewan secara acak. Berikan 3 petunjuk singkat tentang hewan ini.
    
Format yang harus kamu gunakan:
HEWAN: [nama hewan]
1. [petunjuk pertama]
2. [petunjuk kedua]
3. [petunjuk ketiga]

Contoh:
HEWAN: Gajah
1. Hewan ini sangat besar dan berat
2. Memiliki belalai yang panjang
3. Telinganya lebar seperti kipas

Sekarang pilih hewan yang berbeda!`;

    try {
      const response = await chatService.sendMessage({
        prompt: prompt,
      }, endpoint);
      
      // Parse response
      const lines = response.response.trim().split('\n');
      let animal = "";
      const clues: string[] = [];
      
      for (const line of lines) {
        if (line.trim().startsWith("HEWAN:")) {
          animal = line.replace("HEWAN:", "").trim();
        } else if (line.trim() && (line.trim()[0].match(/\d/) || line.trim().startsWith("-"))) {
          const clue = line.includes(".") ? line.split(".", 2)[1].trim() : line.replace(/^[-*]\s*/, "").trim();
          if (clue) clues.push(clue);
        }
      }

      setGameState({
        animal: animal.toLowerCase(),
        allClues: clues,
        shownClues: 3,
        points: 100,
        gameOver: false,
        difficulty,
        endpoint
      });
      setGuess('');
    } catch (error) {
      console.error(error);
      alert("Gagal memulai game. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  const checkGuess = () => {
    if (gameState.gameOver || !guess) return;

    const guessClean = guess.toLowerCase().trim();
    const animalClean = gameState.animal.toLowerCase().trim();
    
    const isCorrect = guessClean === animalClean || 
                     animalClean.includes(guessClean) || 
                     guessClean.includes(animalClean);

    if (isCorrect) {
      setGameState(prev => ({
        ...prev,
        gameOver: true,
        isWin: true,
        finalMessage: `🎉 SELAMAT! KAMU MENANG!\n\n✅ Jawabannya memang ${prev.animal.toUpperCase()}!\n🏆 Poin akhir: ${prev.points} poin`
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        gameOver: true,
        isWin: false,
        finalMessage: `😢 MAAF, SALAH!\n\n❌ Tebakanmu: ${guess}\n✅ Jawaban yang benar: ${prev.animal.toUpperCase()}\n\nJangan menyerah! Coba lagi!`
      }));
    }
  };

  const requestMoreClue = async () => {
    if (gameState.gameOver || isClueLoading) return;

    setIsClueLoading(true);
    
    // Deduct points
    const newPoints = Math.max(0, gameState.points - 10);
    
    // Check if we need to generate new clue
    if (gameState.shownClues >= gameState.allClues.length) {
      const prompt = `Hewan yang sedang ditebak adalah ${gameState.animal}.
        
Petunjuk yang sudah diberikan:
${gameState.allClues.map((c, i) => `${i+1}. ${c}`).join('\n')}

Berikan 1 petunjuk tambahan yang berbeda dan menarik tentang hewan ini. 
Jawab HANYA dengan petunjuknya saja, jangan tambahkan nomor atau kata-kata lain.`;

      try {
        const response = await chatService.sendMessage({
          prompt: prompt,
        }, gameState.endpoint);
        
        const newClue = response.response.trim();
        
        setGameState(prev => ({
          ...prev,
          points: newPoints,
          allClues: [...prev.allClues, newClue],
          shownClues: prev.shownClues + 1
        }));
      } catch (error) {
        console.error(error);
      }
    } else {
      setGameState(prev => ({
        ...prev,
        points: newPoints,
        shownClues: prev.shownClues + 1
      }));
    }
    
    setIsClueLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <Link href="/#implementations" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="p-6 border-b bg-indigo-50">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Gamepad2 className="w-8 h-8 text-indigo-600" />
              Tebak Hewan
            </h1>
            <p className="text-gray-600 mt-2">Game interaktif di mana AI memberikan petunjuk dan kamu menebak hewannya!</p>
          </div>

          <div className="p-6">
            {gameState.gameOver && !gameState.finalMessage ? (
              // Start Screen
              <div className="text-center py-12 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-800">Siap Bermain?</h2>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Pilih tingkat kesulitan dan mulai petualangan menebak hewanmu!
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <div className="flex gap-4">
                    {["Mudah (SD)", "Menengah (SMP)"].map((diff) => (
                      <button
                        key={diff}
                        onClick={() => setGameState(prev => ({ ...prev, difficulty: diff }))}
                        className={cn(
                          "px-6 py-3 rounded-lg border-2 font-medium transition-all",
                          gameState.difficulty === diff
                            ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                            : "border-gray-200 hover:border-indigo-300 text-gray-600"
                        )}
                      >
                        {diff}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => startGame(gameState.difficulty)}
                    disabled={isLoading}
                    className="px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-all transform hover:scale-105 font-bold text-lg flex items-center gap-2 shadow-lg"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Menyiapkan Game...
                      </>
                    ) : (
                      <>
                        <Gamepad2 className="w-6 h-6" />
                        Mulai Game Baru
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              // Game Screen
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {/* Clues Section */}
                  <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                    <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Petunjuk:
                    </h3>
                    <div className="space-y-3">
                      {gameState.allClues.slice(0, gameState.shownClues).map((clue, i) => (
                        <div key={i} className="flex gap-3 bg-white p-3 rounded-lg shadow-sm animate-fadeIn">
                          <span className="font-bold text-indigo-500">{i + 1}.</span>
                          <span className="text-gray-700">{clue}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Game Over Message */}
                  {gameState.gameOver && gameState.finalMessage && (
                    <div className={cn(
                      "rounded-xl p-6 border-2 animate-fadeIn",
                      gameState.isWin ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                    )}>
                      <div className="whitespace-pre-wrap text-center font-medium text-lg">
                        {gameState.finalMessage}
                      </div>
                      <button
                        onClick={() => setGameState(prev => ({ ...prev, gameOver: true, finalMessage: undefined }))}
                        className="mt-6 w-full py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-gray-700 flex items-center justify-center gap-2"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Main Lagi
                      </button>
                    </div>
                  )}

                  {/* Input Area */}
                  {!gameState.gameOver && (
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={guess}
                          onChange={(e) => setGuess(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && checkGuess()}
                          placeholder="Ketik tebakanmu di sini..."
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                        />
                        <button
                          onClick={checkGuess}
                          disabled={!guess}
                          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors font-bold"
                        >
                          Tebak!
                        </button>
                      </div>
                      
                      <button
                        onClick={requestMoreClue}
                        disabled={isClueLoading}
                        className="w-full py-3 border-2 border-dashed border-indigo-300 rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 font-medium"
                      >
                        {isClueLoading ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Lightbulb className="w-4 h-4" />
                        )}
                        Minta Petunjuk Tambahan (-10 poin)
                      </button>
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white text-center shadow-lg">
                    <div className="text-indigo-100 text-sm font-medium mb-1">POIN KAMU</div>
                    <div className="text-5xl font-bold flex items-center justify-center gap-2">
                      <Trophy className="w-8 h-8 text-yellow-300" />
                      {gameState.points}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="font-bold text-gray-800 mb-3">Cara Bermain:</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex gap-2">
                        <span>1.</span>
                        <span>AI akan memberikan 3 petunjuk awal.</span>
                      </li>
                      <li className="flex gap-2">
                        <span>2.</span>
                        <span>Tebak nama hewan berdasarkan petunjuk.</span>
                      </li>
                      <li className="flex gap-2">
                        <span>3.</span>
                        <span>Setiap petunjuk tambahan mengurangi 10 poin.</span>
                      </li>
                      <li className="flex gap-2">
                        <span>4.</span>
                        <span>Kamu hanya punya <strong>satu kali kesempatan</strong> untuk menebak!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
