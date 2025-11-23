import { Unlock, Lock, Globe, Shield, Cpu, ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function OpenVsClosedAi() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-cyan-600 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Unlock className="w-8 h-8 mr-3" />
              <span className="text-cyan-100 font-medium">AI Basic Theory</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Open Source vs Closed Source AI</h1>
            <p className="text-cyan-100 text-lg max-w-2xl">
              Apa bedanya AI yang "Terbuka" dan "Tertutup"? Mengapa ini penting bagi masa depan teknologi Indonesia?
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* Introduction */}
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg leading-relaxed">
                Di dunia kecerdasan buatan (AI), ada dua kubu besar: <strong>Open Source</strong> (Terbuka) dan <strong>Closed Source</strong> (Tertutup). Memahami bedanya sangat penting, terutama bagi kita di Indonesia. Mari kita bahas dengan bahasa yang mudah.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Section 1: Analogy */}
            <section>
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4 shrink-0">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Analogi Sederhana: Restoran vs Resep Nenek</h2>
                  <p className="text-gray-600 mb-6">Bayangkan kamu ingin makan nasi goreng yang enak.</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Closed Source */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex items-center mb-4">
                        <Lock className="w-6 h-6 text-red-500 mr-2" />
                        <h3 className="font-bold text-xl text-gray-900">Closed Source (Restoran Mewah)</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Kamu pergi ke restoran mahal. Makanannya enak, pelayanannya bagus, dan kamu tinggal duduk manis.
                      </p>
                      <ul className="space-y-2 mb-4 text-sm text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                          <span><strong>Kelebihan:</strong> Praktis, cepat, kualitas terjamin.</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 shrink-0" />
                          <span><strong>Kekurangan:</strong> Mahal, tidak tahu resep rahasia, tidak boleh ubah rasa. Kalau tutup, tidak bisa makan lagi.</span>
                        </li>
                      </ul>
                      <div className="text-sm bg-white p-3 rounded border border-gray-200">
                        <strong>Contoh AI:</strong> ChatGPT (OpenAI), Gemini (Google), Claude.
                      </div>
                    </div>

                    {/* Open Source */}
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex items-center mb-4">
                        <Unlock className="w-6 h-6 text-green-500 mr-2" />
                        <h3 className="font-bold text-xl text-gray-900">Open Source (Resep Nenek)</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Nenekmu memberikan resep nasi goreng legendarisnya kepadamu secara gratis.
                      </p>
                      <ul className="space-y-2 mb-4 text-sm text-gray-600">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                          <span><strong>Kelebihan:</strong> Gratis, transparan (tahu bahannya), bisa diubah (milikmu selamanya).</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 shrink-0" />
                          <span><strong>Kekurangan:</strong> Harus masak sendiri (perlu usaha/skill), harus perbaiki sendiri jika salah.</span>
                        </li>
                      </ul>
                      <div className="text-sm bg-white p-3 rounded border border-gray-200">
                        <strong>Contoh AI:</strong> DeepSeek, LLaMA (Meta), Mistral.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 2: DeepSeek */}
            <section>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 shrink-0">
                  <Cpu className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. DeepSeek: Si Kecil yang Mengguncang Dunia</h2>
                  <p className="text-gray-600 mb-4">
                    Baru-baru ini, dunia AI heboh karena <strong>DeepSeek</strong>, sebuah AI dari China. Kenapa heboh?
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold mr-3 shrink-0">1</span>
                      <div>
                        <h4 className="font-bold text-blue-900">Sangat Murah</h4>
                        <p className="text-blue-800 text-sm">DeepSeek dibuat dengan biaya hanya <strong>$6 juta</strong> (sekitar Rp 90 Miliar). Bandingkan dengan ChatGPT-4 yang kabarnya butuh <strong>$100 juta</strong> (Rp 1,5 Triliun)!</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold mr-3 shrink-0">2</span>
                      <div>
                        <h4 className="font-bold text-blue-900">Sangat Pintar</h4>
                        <p className="text-blue-800 text-sm">Meski murah, kepintarannya setara dengan AI mahal buatan Amerika.</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-bold mr-3 shrink-0">3</span>
                      <div>
                        <h4 className="font-bold text-blue-900">Gratis & Terbuka</h4>
                        <p className="text-blue-800 text-sm">Kodenya dibagikan gratis. Siapa saja boleh pakai dan modifikasi.</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 italic">
                    Ini membuktikan bahwa membuat AI canggih tidak harus mahal, dan ini kabar baik bagi negara berkembang seperti Indonesia.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 3: Comparison Table */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Perbandingan Cepat</h2>
              <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-4 font-bold text-gray-700 w-1/4">Fitur</th>
                      <th className="p-4 font-bold text-green-700 w-1/3">Open Source (DeepSeek, LLaMA)</th>
                      <th className="p-4 font-bold text-red-700 w-1/3">Closed Source (ChatGPT, Gemini)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 bg-white">
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-900">Biaya</td>
                      <td className="p-4">Gratis (tapi butuh komputer kuat)</td>
                      <td className="p-4">Berbayar (langganan/per penggunaan)</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-900">Privasi</td>
                      <td className="p-4 font-bold text-green-600">Sangat Aman. <span className="font-normal text-gray-600">Data ada di komputermu.</span></td>
                      <td className="p-4 font-bold text-red-600">Kurang Aman. <span className="font-normal text-gray-600">Data dikirim ke server mereka.</span></td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-900">Kontrol</td>
                      <td className="p-4">Kamu bosnya. Bisa diubah sesuka hati.</td>
                      <td className="p-4">Mereka bosnya. Kamu cuma pengguna.</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 font-medium text-gray-900">Kemudahan</td>
                      <td className="p-4">Butuh keahlian teknis (coding).</td>
                      <td className="p-4">Sangat mudah (tinggal chat).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 4: Importance for Indonesia */}
            <section>
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-lg mr-4 shrink-0">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Mengapa Ini Penting untuk Indonesia?</h2>
                  <p className="text-gray-600 mb-6">Bagi pelajar dan bangsa Indonesia, Open Source AI adalah peluang emas:</p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-3 text-lg">a. Hemat Biaya & Mandiri</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Kita tidak perlu membayar mahal ke perusahaan asing terus-menerus. Sekolah atau kampus bisa menjalankan AI sendiri di server mereka tanpa biaya langganan.
                      </p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-3 text-lg">b. Kedaulatan Data</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Bayangkan data kesehatan pasien rumah sakit atau data rahasia negara. Apakah aman jika dikirim ke server luar negeri? Tentu tidak. Dengan Open Source, data tetap aman di dalam negeri.
                      </p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-gray-900 mb-3 text-lg">c. Inovasi Lokal</h3>
                      <p className="text-gray-600 leading-relaxed">
                        AI Closed Source seringkali kurang paham Bahasa Indonesia yang gaul atau budaya lokal. Dengan Open Source, programmer Indonesia bisa "mengajari" (fine-tune) AI tersebut agar lebih nyambung dengan kearifan lokal kita.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 5: Decision Guide */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Kapan Harus Memilih?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h3 className="font-bold text-red-900 mb-3 flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Pilih Closed Source (ChatGPT) jika:
                  </h3>
                  <p className="text-red-800">
                    Kamu butuh jawaban cepat, tidak mau ribet teknis, dan datamu bukan rahasia negara. Cocok untuk tugas sekolah sehari-hari atau ide kreatif instan.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h3 className="font-bold text-green-900 mb-3 flex items-center">
                    <Unlock className="w-5 h-5 mr-2" />
                    Pilih Open Source (DeepSeek/LLaMA) jika:
                  </h3>
                  <p className="text-green-800">
                    Kamu ingin belajar cara kerja AI, kamu ingin membuat aplikasi AI sendiri, atau kamu bekerja dengan data yang sangat rahasia.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Kesimpulan</h2>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                AI bukan hanya sihir yang kita pakai, tapi teknologi yang bisa kita kuasai. Open Source memberikan kuncinya kepada kita.
              </p>
              <p className="text-cyan-400 font-medium text-lg">
                Sebagai generasi muda Indonesia, jangan hanya jadi <strong>konsumen</strong> (pemakai) teknologi. Mulailah belajar Open Source agar kita bisa jadi <strong>kreator</strong> (pembuat) solusi untuk bangsa kita sendiri. 🇮🇩🚀
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
