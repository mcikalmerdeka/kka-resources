import { Ghost, AlertTriangle, Plane, Stethoscope, Gavel, Building, Search, ArrowLeft, HelpCircle, ShieldAlert, Brain } from 'lucide-react';
import Link from 'next/link';

export default function AiHallucinations() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/#theory" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-red-600 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Ghost className="w-8 h-8 mr-3" />
              <span className="text-red-200 font-medium">AI Basic Theory</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI Hallucinations</h1>
            <p className="text-red-100 text-lg max-w-2xl">
              Ketika robot "berbohong" dengan sangat percaya diri. Kenapa ini bisa terjadi dan bagaimana cara menghindarinya?
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* Introduction */}
            <div className="prose max-w-none text-gray-600">
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-6">
                <div className="flex items-start">
                  <HelpCircle className="w-8 h-8 text-red-600 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">Tebak-tebakan Sejarah</h3>
                    <p className="text-red-800 italic mb-2">
                      "Siapa presiden Indonesia tahun 1800?"
                    </p>
                    <p className="text-red-800">
                      Temanmu: "Gak tau." <br/>
                      AI: <strong>"Raden Mas Soebroto, dilantik 17 Agustus 1800."</strong> (Ngawur total!)
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed">
                Inilah <strong>AI Hallucination</strong>: Ketika AI memberikan jawaban yang salah total, tapi dengan gaya bahasa yang sangat meyakinkan.
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Section 1: Real World Horror Stories */}
            <section>
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">1. Contoh Kasus Nyata (Horor Tapi Nyata)</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Lawyer Case */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-2 rounded-lg mr-3">
                      <Gavel className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="font-bold text-gray-900">Pengacara Tertipu</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Seorang pengacara pakai ChatGPT untuk cari kasus hukum. AI kasih 6 kasus lengkap dengan nama hakim. Ternyata <strong>semuanya palsu</strong>. Pengacara kena sanksi.
                  </p>
                </div>

                {/* Air Canada */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <Plane className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Air Canada & Diskon Palsu</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Chatbot maskapai janji refund tiket duka cita. Padahal aturannya gak boleh. Maskapai <strong>dituntut dan kalah</strong> karena chatbot dianggap representasi resmi.
                  </p>
                </div>

                {/* Medical Whisper */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      <Stethoscope className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Bahaya Medis</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    AI transkrip medis menambahkan instruksi "Berikan obat X" padahal dokter <strong>tidak pernah bilang begitu</strong>. Sangat berbahaya bagi pasien.
                  </p>
                </div>

                {/* Chile Visa */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-2 rounded-lg mr-3">
                      <Search className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Visa yang "Hilang"</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Turis tanya AI: "Butuh visa ke Chile?". AI jawab: "Enggak". Turis terbang dan <strong>ditahan di bandara</strong>. Ternyata butuh visa!
                  </p>
                </div>

                {/* NYC Government */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-800 p-2 rounded-lg mr-3">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">Pemerintah NYC Mengajarkan Kriminal</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Chatbot resmi kota New York malah menyarankan bisnis untuk melanggar hukum, seperti "boleh gaji di bawah UMR" dan "boleh ambil tips karyawan". Chatbot akhirnya dimatikan.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 2: Why it happens */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Kenapa Ini Bisa Terjadi?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <Brain className="w-6 h-6 text-purple-600 mr-2" />
                    <h3 className="font-bold text-gray-900">Penebak Kata</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    AI itu seperti <em>autocomplete</em> di HP-mu. Dia cuma menebak kata selanjutnya yang paling masuk akal, bukan ngecek fakta di database.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <Ghost className="w-6 h-6 text-red-600 mr-2" />
                    <h3 className="font-bold text-gray-900">Sindrom "Yes Man"</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    AI ingin membuatmu senang. Kalau kamu tanya hal aneh, dia lebih milih ngarang jawaban daripada bilang "gak tau".
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 3: Protection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Cara Melindungi Diri</h2>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-200 p-1 rounded-full mr-3 mt-1">
                      <ShieldAlert className="w-4 h-4 text-green-800" />
                    </div>
                    <div>
                      <strong className="text-green-900">Verifikasi Fakta Penting</strong>
                      <p className="text-green-800 text-sm">Jangan pakai AI untuk saran medis, hukum, atau keuangan tanpa cek ulang.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-200 p-1 rounded-full mr-3 mt-1">
                      <Search className="w-4 h-4 text-green-800" />
                    </div>
                    <div>
                      <strong className="text-green-900">Cek Sumber</strong>
                      <p className="text-green-800 text-sm">Kalau AI nyebut buku atau kasus, Google dulu beneran ada atau enggak.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Kesimpulan</h2>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                AI adalah asisten yang rajin, tapi suka berkhayal. Jangan biarkan khayalannya merugikanmu!
              </p>
              <p className="text-red-400 font-medium text-lg">
                Trust, but Verify. 🤖⚠️
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
