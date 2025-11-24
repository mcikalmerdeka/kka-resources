import { Copyright, Scale, Image, Music, Newspaper, ShieldAlert, ArrowLeft, BookOpen, AlertTriangle, Palette, Mic2, Lock } from 'lucide-react';
import Link from 'next/link';

export default function AiCopyright() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/#theory" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-amber-600 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Copyright className="w-8 h-8 mr-3" />
              <span className="text-amber-200 font-medium">AI Basic Theory</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI & Hak Cipta</h1>
            <p className="text-amber-100 text-lg max-w-2xl">
              Siapa pemilik karya seni yang dibuat oleh AI? Apakah AI "mencuri" karya seniman? Mari kita bahas kasus-kasus besarnya.
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* Introduction */}
            <div className="prose max-w-none text-gray-600">
              <div className="bg-amber-50 p-6 rounded-xl border border-amber-100 mb-6">
                <div className="flex items-start">
                  <BookOpen className="w-8 h-8 text-amber-600 mr-4 shrink-0" />
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2">Analogi Siswa & PR</h3>
                    <p className="text-amber-800">
                      Bayangkan siswa menyalin PR temannya, ganti sedikit kata-katanya, lalu kumpul. Curang, kan? <br/>
                      Tapi kalau siswa baca 1.000 buku, belajar gayanya, lalu tulis cerita baru? Itu belajar. <br/>
                      <strong>AI ada di tengah-tengahnya.</strong> Inilah yang bikin pusing pengacara dan seniman.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Section 1: The Core Problem */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Masalah Utamanya: Cara AI Belajar</h2>
              <p className="text-gray-600 mb-4">
                AI belajar dengan melihat miliaran gambar dan teks dari internet ("scraping"). Masalahnya: <strong>Mereka tidak minta izin.</strong>
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-red-700">
                  Mereka mengambil karya seniman, foto fotografer, dan tulisan wartawan tanpa bayar, lalu membuat produk berbayar dari data gratisan itu.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 2: Real World Cases */}
            <section>
              <div className="flex items-center mb-6">
                <ShieldAlert className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">2. Contoh Kasus Nyata (Important!)</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* NYT Case */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-2 rounded-lg mr-3">
                      <Newspaper className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="font-bold text-gray-900">New York Times vs OpenAI</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Koran terkenal ini menuntut pembuat ChatGPT. Buktinya? ChatGPT bisa mengeluarkan artikel berbayar mereka <strong>kata-per-kata</strong> secara gratis.
                  </p>
                  <div className="text-xs bg-gray-50 p-2 rounded text-gray-500">
                    Masalah: Menggunakan berita berkualitas tinggi untuk melatih AI pesaing.
                  </div>
                </div>

                {/* Artists vs Midjourney */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-2 rounded-lg mr-3">
                      <Palette className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Seniman vs Midjourney</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Orang bisa mengetik "Buat gambar gaya Greg Rutkowski". AI meniru gayanya sempurna. Greg kehilangan pekerjaan karena orang pilih versi AI yang murah.
                  </p>
                  <div className="text-xs bg-purple-50 p-2 rounded text-purple-600">
                    Masalah: Mencuri "gaya" unik seniman yang dibangun bertahun-tahun.
                  </div>
                </div>

                {/* Fake Drake */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <Mic2 className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Kasus "Fake Drake"</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Lagu "Heart on My Sleeve" viral, suaranya persis Drake & The Weeknd. Ternyata 100% AI. Label rekaman panik dan menghapusnya.
                  </p>
                  <div className="text-xs bg-blue-50 p-2 rounded text-blue-600">
                    Masalah: Pencurian identitas suara penyanyi terkenal.
                  </div>
                </div>

                {/* Getty Images */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-2 rounded-lg mr-3">
                      <Image className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Getty Images vs Stability AI</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Bukti paling telak! AI menghasilkan gambar yang aneh, tapi ikut menyalin <strong>Watermark Getty Images</strong> yang rusak.
                  </p>
                  <div className="text-xs bg-orange-50 p-2 rounded text-orange-600">
                    Masalah: Bukti tak terbantahkan bahwa AI dilatih pakai foto curian.
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 3: Fair Use */}
            <section>
              <div className="flex items-start mb-6">
                <Scale className="w-6 h-6 text-gray-700 mr-3 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">3. Pembelaan AI: "Fair Use"</h2>
                  <p className="text-gray-600 mt-2">Perusahaan AI membela diri dengan hukum Penggunaan Wajar.</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-0 border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-green-50 p-6 border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="font-bold text-green-800 mb-2">Argumen AI</h3>
                  <p className="text-sm text-green-700">
                    "Kami tidak copy-paste. Kami mempelajari pola (seperti siswa di perpustakaan) untuk menciptakan sesuatu yang baru (transformatif)."
                  </p>
                </div>
                <div className="bg-red-50 p-6">
                  <h3 className="font-bold text-red-800 mb-2">Argumen Seniman</h3>
                  <p className="text-sm text-red-700">
                    "Kalian tidak menciptakan hal baru. Kalian membuat mesin fotokopi canggih yang mematikan pasar kami dengan karya kami sendiri."
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Section 4: Solutions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Masa Depan: Solusinya?</h2>
              <div className="space-y-4">
                <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <div className="bg-gray-200 p-2 rounded-full mr-4 shrink-0">
                    <ShieldAlert className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Opt-Out Tools (Glaze & Nightshade)</h3>
                    <p className="text-sm text-gray-600">Alat untuk "meracuni" gambar seniman. Jika AI nekat belajar dari gambar ini, hasilnya akan rusak.</p>
                  </div>
                </div>
                <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <div className="bg-gray-200 p-2 rounded-full mr-4 shrink-0">
                    <Copyright className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Lisensi Berbayar</h3>
                    <p className="text-sm text-gray-600">Perusahaan AI harus bayar royalti jika mau pakai karya seniman (seperti Spotify bayar musisi).</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Kesimpulan</h2>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                Teknologi harus maju, tapi tidak boleh merugikan pencipta aslinya. Kita sedang mencari keseimbangan di mana robot membantu manusia, bukan mencuri.
              </p>
              <p className="text-amber-400 font-medium text-lg">
                Hargai karya asli manusia. ⚖️🎨
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
