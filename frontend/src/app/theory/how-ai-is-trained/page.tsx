import { Brain, Database, Cpu, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function HowAiIsTrained() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-indigo-600 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 mr-3" />
              <span className="text-indigo-200 font-medium">AI Basic Theory</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How AI is Trained</h1>
            <p className="text-indigo-100 text-lg max-w-2xl">
              Understanding the process of teaching computers to learn from data, just like how humans learn from experience.
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            {/* Section 1: Data Collection */}
            <section>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Data Collection</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Just like students need textbooks to learn, AI needs data. This data can be text, images, numbers, or sounds. The more high-quality data an AI has, the better it can learn.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Example:</h3>
                    <p className="text-gray-600">
                      To teach an AI to recognize cats, we show it thousands of pictures of cats (and things that aren't cats) so it learns the patterns that make a cat look like a cat.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Training Process */}
            <section>
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Cpu className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. The Training Process</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    During training, the AI makes guesses and gets corrected. It's like a student taking practice tests. If it gets an answer wrong, it adjusts its internal "connections" to get it right next time.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                    <li>AI makes a prediction</li>
                    <li>It compares the prediction to the correct answer</li>
                    <li>It learns from the mistake</li>
                    <li>This repeats millions of times!</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Fine-tuning */}
            <section>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Brain className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Fine-tuning</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Once the AI has learned the basics, it goes through "fine-tuning" where it learns specific tasks or safety rules. This is like a general doctor studying to become a specialist.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
