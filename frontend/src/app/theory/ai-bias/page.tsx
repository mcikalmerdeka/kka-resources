import { Scale, AlertTriangle, Users, CheckCircle, Brain, ArrowLeft, Database, Code, HeartPulse, Zap } from 'lucide-react';
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

            <hr className="border-gray-200" />

            {/* Section 2: Types of Bias */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Jenis-Jenis Bias: Dari Mana Datangnya?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Bias Data</h3>
                  <p className="text-sm text-gray-600">
                    Data latihannya tidak mewakili semua orang. Contoh: AI dokter dilatih cuma pakai foto laki-laki.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Bias Algoritma</h3>
                  <p className="text-sm text-gray-600">
                    Cara komputer memproses salah fokus. Contoh: Sosmed lebih suka berita heboh (clickbait).
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                  <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Bias Manusia</h3>
                  <p className="text-sm text-gray-600">
                    Prasangka pembuatnya terbawa ke sistem. Contoh: Lupa memikirkan budaya negara lain.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 3: Real Examples */}
            <section>
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4 shrink-0">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Contoh Nyata: Ketika AI Salah Belajar</h2>
                  <p className="text-gray-600 mb-6">Ini bukan cuma teori. Berikut adalah kasus nyata di mana AI bertindak tidak adil:</p>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h3 className="font-bold text-gray-900 mb-2">Kasus Wajah (Joy Buolamwini)</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Teknologi pengenal wajah sering gagal mengenali wanita berkulit gelap. Kenapa? Karena data latihannya kebanyakan foto orang kulit putih.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h3 className="font-bold text-gray-900 mb-2">Kasus Rekrutmen Amazon</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Alat seleksi CV otomatis Amazon mendiskriminasi pelamar wanita. Karena belajar dari data 10 tahun terakhir yang didominasi pria.
                      </p>
                    </div>
                    <div className="bg-red-50 p-5 rounded-xl border border-red-100">
                      <div className="flex items-center mb-2">
                        <HeartPulse className="w-5 h-5 text-red-600 mr-2" />
                        <h3 className="font-bold text-red-900">Kasus Kesehatan (Bahaya Nyata!)</h3>
                      </div>
                      <p className="text-red-800 text-sm leading-relaxed mb-2">
                        <strong>Deteksi Kanker Kulit:</strong> AI sering dilatih pakai foto kulit terang, jadi tidak akurat untuk kulit gelap.
                      </p>
                      <p className="text-red-800 text-sm leading-relaxed">
                        <strong>Oximeter:</strong> Alat pengukur oksigen darah ternyata kurang akurat untuk kulit gelap, bisa menyebabkan kesalahan diagnosa fatal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 4: Why Dangerous */}
            <section>
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4 shrink-0">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Mengapa Bias AI Sangat Berbahaya?</h2>
                  <p className="text-gray-600 mb-4">
                    Bukankah manusia juga bias? Benar, tapi AI punya dua hal yang membuatnya lebih menakutkan:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                      <h3 className="font-bold text-yellow-900 mb-2">1. Skala (Scale)</h3>
                      <p className="text-sm text-yellow-800">
                        Satu orang HRD bias mungkin menolak 10 pelamar. Satu AI bias bisa menolak <strong>1 juta pelamar</strong> dalam sekejap.
                      </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                      <h3 className="font-bold text-yellow-900 mb-2">2. Kecepatan (Speed)</h3>
                      <p className="text-sm text-yellow-800">
                        AI bekerja sangat cepat. Kesalahan bias bisa menyebar ke seluruh dunia sebelum kita sadar ada yang salah.
                      </p>
                    </div>
                  </div>
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
