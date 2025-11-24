import { Gamepad2, Cpu, Zap, Hammer, Rocket, Microchip, ArrowLeft, Brain, Users } from 'lucide-react';
import Link from 'next/link';

export default function NvidiaAiRevolution() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/#theory" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-green-600 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Cpu className="w-8 h-8 mr-3" />
              <span className="text-green-100 font-medium">AI Basic Theory</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">NVIDIA: Dari Raja Game Menjadi Raja AI</h1>
            <p className="text-green-50 text-lg max-w-2xl">
              Bagaimana perusahaan kartu grafis video game menjadi mesin di balik revolusi kecerdasan buatan dunia.
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* Introduction */}
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg leading-relaxed">
                Tahukah kamu bahwa perusahaan yang membuat otak di balik ChatGPT dan revolusi AI saat ini awalnya hanya ingin membuat <strong>video game terlihat lebih keren</strong>?
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Ya, NVIDIA, perusahaan paling bernilai di dunia saat ini (senilai $5 Triliun!), memulai perjalanannya dari sebuah restoran Denny's pinggir jalan dengan mimpi sederhana: membuat grafis 3D untuk PC.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Section 1: Gaming Roots */}
            <section>
              <div className="flex items-center mb-6">
                <Gamepad2 className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">1. Awal Mula: Demi Game yang Lebih Nyata</h2>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="text-gray-600 mb-4">
                  Pada tahun 1993, tiga insinyur (Jensen Huang, Chris Malachowsky, dan Curtis Priem) punya ide gila. Saat itu, komputer hanya bisa menampilkan gambar kotak-kotak sederhana. Mereka ingin membuat chip khusus yang bisa menangani <strong>grafis 3D</strong> yang rumit.
                </p>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <Microchip className="w-8 h-8 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-bold text-gray-900">Lahirnya GPU</h3>
                    <p className="text-sm text-gray-600">
                      Mereka menciptakan <strong>GPU (Graphics Processing Unit)</strong>. Tujuannya agar kamu bisa main game tembak-tembakan dengan gambar yang mulus dan realistis.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: CPU vs GPU */}
            <section>
              <div className="flex items-center mb-6">
                <Brain className="w-6 h-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">2. Senjata Rahasia: "Otak" yang Berbeda</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-3">
                    <Users className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="font-bold text-gray-900">CPU (Intel/AMD)</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 font-semibold">Seperti Profesor Jenius</p>
                  <p className="text-sm text-gray-600">
                    Dia bisa mengerjakan soal matematika super sulit, tapi satu per satu. Sangat pintar, tapi kerjanya serial (berurutan).
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <div className="flex items-center mb-3">
                    <Users className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="font-bold text-gray-900">GPU (NVIDIA)</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2 font-semibold">Seperti Ribuan Anak SD</p>
                  <p className="text-sm text-gray-600">
                    Mereka mungkin tidak bisa mengerjakan kalkulus, tapi mereka bisa mewarnai 1.000 gambar secara bersamaan dalam detik yang sama. Ini disebut <strong>Parallel Processing</strong>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: The AI Pivot */}
            <section>
              <div className="flex items-center mb-6">
                <Zap className="w-6 h-6 text-yellow-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">3. Titik Balik: Ketika AI Bertemu GPU</h2>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sekitar tahun 2012, para peneliti AI menemukan masalah besar. Melatih "Otak Buatan" (Neural Network) butuh jutaan perhitungan matematika sederhana secara bersamaan.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded mr-2 mt-1">CPU</span>
                    <span className="text-gray-600">Terlalu lambat. Butuh berbulan-bulan untuk melatih satu AI.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded mr-2 mt-1">GPU</span>
                    <span className="text-gray-600"><strong>Selesai dalam beberapa hari!</strong> Ternyata chip untuk meledakkan musuh di game adalah chip yang sempurna untuk melatih AI.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4: Pickaxe Strategy */}
            <section>
              <div className="flex items-center mb-6">
                <Hammer className="w-6 h-6 text-gray-700 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">4. Strategi "Penjual Cangkul"</h2>
              </div>
              <div className="bg-gray-900 text-white p-8 rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-green-400">The Pickaxe Strategy</h3>
                  <p className="text-gray-300 mb-6">
                    Saat demam emas melanda California tahun 1849, orang-orang yang paling kaya bukanlah para penambang emas (karena banyak yang gagal), melainkan <strong>orang yang menjual cangkul dan sekop</strong>.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-800 p-3 rounded-lg">
                      <span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Emasnya</span>
                      <span className="font-bold text-white">Aplikasi AI (ChatGPT, Gemini, dll)</span>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-lg border border-green-500">
                      <span className="block text-green-400 text-xs uppercase tracking-wider mb-1">Cangkulnya</span>
                      <span className="font-bold text-white">Chip NVIDIA</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-green-600 rounded-full opacity-20 blur-3xl"></div>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-green-50 rounded-xl p-8 text-center border border-green-100">
              <Rocket className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-900 mb-4">Masa Depan di Tangan Gamer</h2>
              <p className="text-green-800 leading-relaxed mb-6 max-w-2xl mx-auto">
                Tanpa ambisi NVIDIA untuk membuat game terlihat nyata, kita mungkin tidak akan punya ChatGPT atau mobil yang bisa menyetir sendiri hari ini.
              </p>
              <p className="text-green-700 font-medium text-lg">
                Dari Gaming, menuju AI, dan sekarang menuju Masa Depan. 🎮 ➡️ 🤖
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
