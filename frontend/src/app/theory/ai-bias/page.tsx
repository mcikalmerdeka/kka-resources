import { Scale, AlertTriangle, Users, CheckCircle, Brain, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AiBias() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/#theory" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-rose-600 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Scale className="w-8 h-8 mr-3" />
              <span className="text-rose-200 font-medium">AI Basic Theory</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI Bias & Fairness</h1>
            <p className="text-rose-100 text-lg max-w-2xl">
              Mengapa AI bisa bertindak tidak adil? Memahami bias dalam kecerdasan buatan dan bagaimana kita bisa memperbaikinya.
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* Introduction */}
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg leading-relaxed">
                Bayangkan kamu melamar pekerjaan impianmu. Kamu sudah belajar keras dan nilaimu bagus. Tapi, lamaranmu ditolak bahkan sebelum dibaca oleh manusia. Kenapa? Karena "robot" yang menyeleksi memutuskan kamu tidak cocok hanya karena namamu terdengar asing. Curang, kan?
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Ini disebut <strong>Bias AI</strong>. Banyak orang berpikir AI itu netral seperti kalkulator, tapi sebenarnya AI seperti murid yang belajar dari buku yang kita berikan. Jika bukunya salah, AI juga akan salah.
              </p>
              <div className="bg-rose-50 border-l-4 border-rose-400 p-4 mt-6">
                <p className="text-rose-800 font-medium">
                  "Garbage In, Garbage Out" (Sampah Masuk, Sampah Keluar). Jika data yang digunakan untuk melatih AI mengandung prasangka, maka AI-nya juga akan menjadi bias.
                </p>
              </div>
            </div>

            {/* Section 1: Real Examples */}
            <section>
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4 shrink-0">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Contoh Nyata: Ketika AI Salah Belajar</h2>
                  <p className="text-gray-600 mb-6">Ini bukan cuma teori. Berikut adalah kasus nyata di mana AI bertindak tidak adil:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h3 className="font-bold text-gray-900 mb-2">Kasus Wajah (Joy Buolamwini)</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Teknologi pengenal wajah sering gagal mengenali wanita berkulit gelap. Kenapa? Karena data latihannya kebanyakan foto orang kulit putih. AI tidak diajari melihat keberagaman wajah manusia.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h3 className="font-bold text-gray-900 mb-2">Kasus Rekrutmen Amazon</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Alat seleksi CV otomatis Amazon mendiskriminasi pelamar wanita. Karena belajar dari data 10 tahun terakhir yang didominasi pria, AI menyimpulkan "laki-laki = kandidat bagus".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Why it happens */}
            <section>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 shrink-0">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Mengapa Bias Bisa Terjadi?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3 shrink-0">1</div>
                      <div>
                        <h3 className="font-bold text-gray-900">Data Masa Lalu</h3>
                        <p className="text-gray-600">AI belajar dari sejarah. Jika sejarah kita penuh ketidakadilan, AI akan meniru pola tersebut.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3 shrink-0">2</div>
                      <div>
                        <h3 className="font-bold text-gray-900">Tim yang Tidak Beragam</h3>
                        <p className="text-gray-600">Jika pembuat AI hanya dari satu kelompok yang sama, mereka mungkin tidak sadar ada bias dalam sistem mereka.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: What can we do */}
            <section>
              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4 shrink-0">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Apa yang Bisa Kita Lakukan?</h2>
                  <p className="text-gray-600 mb-4">Sebagai siswa, kamu juga bisa berperan!</p>
                  <ul className="space-y-3">
                    <li className="flex items-center bg-emerald-50 p-3 rounded-lg text-emerald-900">
                      <Brain className="w-5 h-5 mr-3 text-emerald-600" />
                      <span><strong>Jangan Percaya 100%:</strong> Selalu cek ulang informasi dari AI.</span>
                    </li>
                    <li className="flex items-center bg-emerald-50 p-3 rounded-lg text-emerald-900">
                      <Scale className="w-5 h-5 mr-3 text-emerald-600" />
                      <span><strong>Tanya "Apakah Ini Adil?":</strong> Siapa yang membuat ini? Data apa yang dipakai?</span>
                    </li>
                    <li className="flex items-center bg-emerald-50 p-3 rounded-lg text-emerald-900">
                      <Users className="w-5 h-5 mr-3 text-emerald-600" />
                      <span><strong>Belajar Etika:</strong> Buatlah teknologi yang inklusif di masa depan.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Kesimpulan</h2>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                AI adalah cerminan dari pembuatnya. Jika kita ingin AI yang adil, kita harus memastikan data yang kita berikan juga adil. Masa depan AI ada di tangan kita.
              </p>
              <p className="text-rose-400 font-medium">
                Mari bangun teknologi yang tidak hanya cerdas, tapi juga baik hati dan adil untuk semua. 🌍🤝
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
