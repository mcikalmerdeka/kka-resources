import { Leaf, Zap, Server, ArrowLeft, Globe } from 'lucide-react';
import Link from 'next/link';

export default function EnvironmentalConcern() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-emerald-600 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Leaf className="w-8 h-8 mr-3" />
              <span className="text-emerald-200 font-medium">AI Basic Theory</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Environmental Concern of Using AI</h1>
            <p className="text-emerald-100 text-lg max-w-2xl">
              Exploring the hidden costs of Artificial Intelligence on our planet and how we can make it more sustainable.
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            {/* Section 1: Energy Consumption */}
            <section>
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Energy Consumption</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Training a large AI model requires thousands of powerful computers running for weeks or months. This consumes a massive amount of electricity—sometimes as much as a small town uses in a year!
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                    <p className="text-yellow-800">
                      <strong>Did you know?</strong> Training a single large AI model can emit as much carbon as five cars in their entire lifetimes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Data Centers & Water */}
            <section>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Server className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data Centers & Water Usage</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    AI lives in data centers—huge buildings filled with servers. These servers get very hot and need cooling. Many data centers use water for cooling, consuming millions of gallons of clean water.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Sustainable AI */}
            <section>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Towards Sustainable AI</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Researchers are working on making AI "greener" by:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      <span className="text-gray-700">Using renewable energy</span>
                    </li>
                    <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      <span className="text-gray-700">Creating smaller, efficient models</span>
                    </li>
                    <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      <span className="text-gray-700">Optimizing hardware</span>
                    </li>
                    <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                      <span className="text-gray-700">Recycling heat from servers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
