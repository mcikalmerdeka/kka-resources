import { Smartphone, ThumbsUp, Eye, Share2, AlertCircle, Clock, MousePointer, Heart, MessageCircle, ArrowLeft, ChefHat, Search, Filter } from 'lucide-react';
import Link from 'next/link';

export default function SocialMediaAlgorithms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/#theory" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-purple-600 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Smartphone className="w-8 h-8 mr-3" />
              <span className="text-purple-200 font-medium">AI Basic Theory</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Algoritma Media Sosial</h1>
            <p className="text-purple-100 text-lg max-w-2xl">
              Kenapa feed TikTok kamu isinya resep masakan, tapi punya temanmu isinya game? Mari bongkar rahasianya.
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* Introduction */}
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg leading-relaxed">
                Pernahkah kamu bingung kenapa konten di HP-mu sangat berbeda dengan temanmu? Jawabannya adalah <strong>Algoritma</strong>.
              </p>
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 mt-6">
                <div className="flex items-start">
                  <ChefHat className="w-8 h-8 text-purple-600 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-purple-900 mb-2">Analogi Koki Pribadi</h3>
                    <p className="text-purple-800">
                      Bayangkan algoritma itu seperti <strong>Koki Pribadi</strong>. Dia mencatat semua makanan yang kamu habiskan (tonton sampai akhir), yang kamu buang (skip), dan yang kamu puji (like). Besoknya, dia hanya akan memasak makanan yang kamu suka.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Section 1: How it Works */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Bagaimana Cara Kerjanya?</h2>
              <p className="text-gray-600 mb-6">Algoritma bekerja dengan 4 langkah pasti:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <Search className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">1. Inventory (Stok)</h3>
                  </div>
                  <p className="text-sm text-gray-600">Mengumpulkan jutaan video baru yang tersedia.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      <Eye className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">2. Signals (Sinyal)</h3>
                  </div>
                  <p className="text-sm text-gray-600">Mencari petunjuk: Apa yang kamu like? Apa yang kamu tonton sampai habis?</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                      <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">3. Predictions</h3>
                  </div>
                  <p className="text-sm text-gray-600">Menghitung kemungkinan: "Berapa persen dia bakal suka video ini?"</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="bg-red-100 p-2 rounded-lg mr-3">
                      <ThumbsUp className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">4. Ranking</h3>
                  </div>
                  <p className="text-sm text-gray-600">Menyusun dari skor tertinggi. Pemenangnya muncul di layarmu.</p>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 2: Platform Secrets */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Rahasia Setiap Aplikasi</h2>
              <div className="space-y-6">
                {/* TikTok */}
                <div className="bg-black text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">TikTok</span>
                    <span className="ml-2 text-sm font-normal text-gray-400">(Si Paling Adiktif)</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-cyan-400 mb-2">Fokus Utama: Watch Time</h4>
                      <p className="text-gray-300 text-sm">
                        Jika kamu menonton video sampai habis (atau re-watch), itu sinyal emas. Jumlah followers tidak penting! Akun baru bisa viral jika videonya menarik.
                      </p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                      <div className="flex items-center text-sm mb-2">
                        <Clock className="w-4 h-4 mr-2 text-pink-500" />
                        <span>Ditonton sampai habis = ⭐⭐⭐⭐⭐</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Share2 className="w-4 h-4 mr-2 text-cyan-400" />
                        <span>Share ke teman = ⭐⭐⭐⭐</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* YouTube */}
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                    YouTube
                    <span className="ml-2 text-sm font-normal text-gray-500">(Si Paling Puas)</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-red-600 mb-2">Fokus Utama: CTR & Retention</h4>
                      <p className="text-gray-600 text-sm">
                        YouTube ingin kamu berlama-lama (Session Time). Mereka melihat apakah kamu klik thumbnail (CTR) dan bertahan nonton (Retention).
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-100">
                      <div className="flex items-center text-sm mb-2 text-gray-700">
                        <MousePointer className="w-4 h-4 mr-2 text-red-500" />
                        <span>Klik Thumbnail (CTR)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <Clock className="w-4 h-4 mr-2 text-red-500" />
                        <span>Durasi Nonton (Retention)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-6 rounded-xl border border-purple-100">
                  <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
                    Instagram
                    <span className="ml-2 text-sm font-normal text-gray-500">(Si Paling Koneksi)</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-purple-700 mb-2">Fokus Utama: Engagement</h4>
                      <p className="text-gray-600 text-sm">
                        Memprioritaskan konten dari orang yang kamu kenal (teman/keluarga) atau sering interaksi (DM, comment). Reels fokus ke hiburan.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-purple-100">
                      <div className="flex items-center text-sm mb-2 text-gray-700">
                        <Heart className="w-4 h-4 mr-2 text-pink-500" />
                        <span>Likes & Comments</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <MessageCircle className="w-4 h-4 mr-2 text-purple-500" />
                        <span>DM & Shares</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 3: Dark Side */}
            <section>
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-lg mr-4 shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sisi Gelap: Filter Bubble</h2>
                  <p className="text-gray-600 mb-6">Algoritma punya tujuan baik, tapi ada efek sampingnya:</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Filter className="w-5 h-5 text-purple-600 mr-2" />
                        <h3 className="font-bold text-gray-900">Filter Bubble</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Kamu terisolasi dalam "gelembung". Kamu hanya melihat apa yang kamu suka, sehingga tidak tahu berita atau pendapat lain. Dunia jadi terasa sempit.
                      </p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
                      <div className="flex items-center mb-3">
                        <Share2 className="w-5 h-5 text-blue-600 mr-2" />
                        <h3 className="font-bold text-gray-900">Echo Chamber</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Jika kamu percaya satu hal (misal: "Bumi Datar"), algoritma akan terus memberimu video yang mendukung itu. Kamu jadi makin yakin kamu benar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 4: Tips */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Tips: Jadilah Bos Algoritmamu!</h2>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-200 p-1 rounded-full mr-3 mt-1">
                      <ThumbsUp className="w-4 h-4 text-green-800" />
                    </div>
                    <div>
                      <strong className="text-green-900">Hati-hati dengan Like</strong>
                      <p className="text-green-800 text-sm">Setiap like adalah pesanan "tolong kasih saya yang seperti ini lagi".</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-200 p-1 rounded-full mr-3 mt-1">
                      <Eye className="w-4 h-4 text-green-800" />
                    </div>
                    <div>
                      <strong className="text-green-900">Gunakan "Not Interested"</strong>
                      <p className="text-green-800 text-sm">Jika ada konten negatif, tekan lama dan pilih "Not Interested". Ini cara bilang "Saya tidak suka" ke kokimu.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-200 p-1 rounded-full mr-3 mt-1">
                      <Search className="w-4 h-4 text-green-800" />
                    </div>
                    <div>
                      <strong className="text-green-900">Cari Hal Baru</strong>
                      <p className="text-green-800 text-sm">Sesekali cari topik beda (sains, sejarah) supaya gelembungmu pecah.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Kesimpulan</h2>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                Algoritma adalah pelayanmu, bukan tuanmu. Gunakan pengetahuan ini untuk mengontrol apa yang kamu konsumsi setiap hari.
              </p>
              <p className="text-purple-400 font-medium text-lg">
                Jadilah pengguna cerdas yang mengendalikan teknologi, bukan dikendalikan olehnya. 🧠✨
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
