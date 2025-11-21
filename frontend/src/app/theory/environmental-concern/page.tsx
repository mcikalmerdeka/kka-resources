import { Leaf, Zap, Server, ArrowLeft, Globe, Droplets, Trash2, ShieldCheck, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function EnvironmentalConcern() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/#theory" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-emerald-600 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Leaf className="w-8 h-8 mr-3" />
              <span className="text-emerald-200 font-medium">AI Basic Theory</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI Environmental Concern</h1>
            <p className="text-emerald-100 text-lg max-w-2xl">
              Mengungkap biaya tersembunyi dari Kecerdasan Buatan pada planet kita dan solusi hijau untuk masa depan.
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* Introduction */}
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg leading-relaxed">
                Kecerdasan Buatan (AI) sangat membantu kita—mulai dari mengerjakan PR hingga membuat gambar keren. Tapi tahukah kamu? Di balik kecanggihannya, AI ternyata "lapar" dan "haus". Artikel ini akan mengajakmu mengintip "dapur" AI dan melihat dampaknya pada Bumi kita.
              </p>
            </div>

            {/* Section 1: Energy Consumption */}
            <section>
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4 shrink-0">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Konsumsi Energi: AI yang Lapar Listrik</h2>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Saat Belajar (Training)</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Sebelum AI bisa pintar, ia harus "sekolah" dulu. Proses ini butuh ribuan komputer super canggih yang menyala non-stop selama berbulan-bulan.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="text-yellow-800">
                      <strong>Fakta:</strong> Melatih satu model AI besar (seperti GPT-3) menghasilkan <strong>552 ton CO2</strong>. Ini setara dengan polusi dari <strong>123 mobil bensin</strong> yang dikendarai selama setahun penuh!
                    </p>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Saat Bekerja (Inference)</h3>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    Setiap kali kita bertanya pada AI, itu juga butuh listrik.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                    <li>Satu pencarian Google biasa = Menyalakan lampu sebentar.</li>
                    <li><strong>Meminta AI membuat gambar</strong> = Butuh energi sekitar <strong>2.91 Wh</strong>, setara dengan <strong>mengisi daya HP sampai penuh!</strong></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2: Data Centers */}
            <section>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 shrink-0">
                  <Server className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data Center: Tubuh Fisik AI</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    AI tinggal di gedung raksasa bernama <strong>Data Center</strong> yang penuh dengan ribuan rak komputer.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h4 className="font-semibold text-blue-900 mb-2">Statistik Penting:</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Konsumsi listrik data center global mencapai <strong>460 terawatt-jam</strong> (setara negara Prancis).</li>
                      <li>• Diperkirakan pada 2027, bisa menghabiskan <strong>0.5% dari seluruh listrik dunia</strong>.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Water Usage */}
            <section>
              <div className="flex items-start">
                <div className="bg-cyan-100 p-3 rounded-lg mr-4 shrink-0">
                  <Droplets className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Penggunaan Air: AI yang Haus</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Komputer yang bekerja keras menjadi panas dan butuh pendingin (air).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h3 className="font-bold text-cyan-900 mb-2">Per Chat</h3>
                      <p className="text-cyan-800">Setiap 20-50 pertanyaan, AI "meminum" air setara dengan <strong>satu botol air kemasan (500ml)</strong>.</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg">
                      <h3 className="font-bold text-cyan-900 mb-2">Skala Besar</h3>
                      <p className="text-cyan-800">Satu pusat data Google bisa menghabiskan <strong>1 miliar galon air</strong> setahun (cukup untuk 5 hari kebutuhan air warga sekitarnya).</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: E-Waste */}
            <section>
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-lg mr-4 shrink-0">
                  <Trash2 className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sampah Elektronik (E-Waste)</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Agar AI makin pintar, komputer lama terus diganti dengan yang baru. Ini menciptakan tumpukan sampah elektronik.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                    <li>Dunia menghasilkan <strong>62 juta ton sampah elektronik</strong> pada 2022.</li>
                    <li>Sampah ini mengandung racun seperti timbal dan merkuri.</li>
                    <li>Mirip seperti membuang HP setiap tahun hanya untuk beli model terbaru.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: Solutions */}
            <section>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4 shrink-0">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Solusi: Menuju AI Hijau</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-green-700 mb-1">Energi Hijau</h3>
                      <p className="text-sm text-gray-600">Menggunakan listrik dari matahari, angin, atau air.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-green-700 mb-1">Hardware Hemat</h3>
                      <p className="text-sm text-gray-600">Chip komputer yang "pintar tapi irit".</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-green-700 mb-1">Algoritma Cerdas</h3>
                      <p className="text-sm text-gray-600">Kode program yang efisien.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
                      <h3 className="font-bold text-green-700 mb-1">Pendingin Canggih</h3>
                      <p className="text-sm text-gray-600">Pendingin cair atau bawah laut.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: AI as Hero */}
            <section>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4 shrink-0">
                  <ShieldCheck className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. AI Sebagai Pahlawan Lingkungan</h2>
                  <p className="text-gray-600 mb-4">AI juga bisa membantu menyelamatkan Bumi:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded mr-2 mt-1">Hutan</span>
                      <span>Memantau penebangan liar dari satelit.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded mr-2 mt-1">Energi</span>
                      <span>Mengatur listrik agar tidak boros.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded mr-2 mt-1">EV</span>
                      <span>Merancang baterai mobil listrik yang lebih awet.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7: Action */}
            <section>
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4 shrink-0">
                  <UserCheck className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Apa yang Bisa Kita Lakukan?</h2>
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <ol className="list-decimal list-inside space-y-3 text-orange-900 font-medium">
                      <li><strong>Gunakan AI dengan Bijak:</strong> Jangan tanya hal sepele ke AI jika bisa dicari di Google.</li>
                      <li><strong>Pikir Sebelum Generate:</strong> Ingat, satu gambar AI = baterai HP penuh!</li>
                      <li><strong>Sebarkan Info:</strong> Beritahu teman bahwa "Cloud" itu butuh listrik dan air.</li>
                      <li><strong>Dukung Teknologi Hijau:</strong> Pilih produk yang peduli lingkungan.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Kesimpulan</h2>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                AI adalah teknologi hebat, tapi kita harus memastikan masa depan tetap hijau. Kita tidak perlu berhenti menggunakan AI, tapi kita harus <strong>Cerdas dalam menggunakan Kecerdasan Buatan</strong>.
              </p>
              <p className="text-emerald-400 font-medium">
                Setiap klik, setiap chat, dan setiap prompt punya dampak. Gunakanlah dengan bijak! 🌍💚
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

