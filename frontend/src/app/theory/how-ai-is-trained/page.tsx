import { 
  Brain, 
  Database, 
  Cpu, 
  ArrowLeft, 
  Zap, 
  Network, 
  RefreshCw, 
  Scale, 
  Repeat, 
  Target, 
  Sliders, 
  ClipboardCheck, 
  PieChart, 
  Settings, 
  TrendingUp, 
  Layers, 
  ListChecks 
} from 'lucide-react';
import Link from 'next/link';

export default function HowAiIsTrained() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/#theory" className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Dashboard
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-indigo-600 px-8 py-12 text-white">
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 mr-3" />
              <span className="text-indigo-200 font-medium">AI Basic Theory</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How AI is Trained</h1>
            <p className="text-indigo-100 text-lg max-w-2xl">
              Memahami proses pembelajaran komputer dari data, seperti bagaimana manusia belajar dari pengalaman.
            </p>
          </div>

          <div className="p-8 md:p-12 space-y-12">
            
            {/* Introduction */}
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg leading-relaxed">
                Kecerdasan Buatan (AI) telah menjadi bagian penting dari kehidupan kita sehari-hari. Tapi bagaimana sebenarnya komputer bisa "belajar"? Artikel ini akan menjelaskan proses pelatihan AI dengan cara yang mudah dipahami, khusus untuk Anda yang ingin memahami konsep dasarnya tanpa pusing dengan rumus matematika yang rumit.
              </p>
            </div>

            {/* Section 1: Data Collection */}
            <section>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 shrink-0">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Data Collection (Pengumpulan Data)</h2>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Bahan Bakar AI</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Sama seperti siswa membutuhkan buku teks untuk belajar, AI membutuhkan data. Data adalah bahan bakar yang membuat AI bisa belajar. Tanpa data, AI tidak bisa melakukan apa-apa.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Kualitas vs Kuantitas</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Semakin banyak data berkualitas tinggi yang dimiliki AI, semakin baik ia dapat belajar. Namun, kualitas lebih penting daripada kuantitas!
                  </p>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Contoh:</h4>
                    <p className="text-gray-600 mb-2">Untuk mengajarkan AI mengenali kucing, kita perlu:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                      <li>Ribuan gambar kucing yang jelas.</li>
                      <li>Gambar bukan kucing (anjing, kelinci, dll) agar AI tahu perbedaannya.</li>
                      <li>Label yang benar (ini "kucing", ini "bukan kucing").</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Neuron Buatan */}
            <section>
              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-lg mr-4 shrink-0">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Neuron Buatan: Unit Dasar dari AI</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Neuron buatan adalah unit terkecil dalam AI, terinspirasi dari cara kerja otak manusia.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Konsep Dasar: Garis Lurus</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Bayangkan kita ingin memprediksi nilai ujian berdasarkan jam belajar. Secara sederhana, hubungannya bisa digambarkan sebagai garis lurus:
                  </p>
                  <div className="bg-gray-100 p-3 rounded-md font-mono text-sm text-gray-700 mb-4">
                    Hasil = (Bobot × Input) + Bias
                  </div>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2 mb-4">
                    <li><strong>Input</strong>: Jam belajar.</li>
                    <li><strong>Bobot</strong>: Seberapa penting jam belajar itu.</li>
                    <li><strong>Bias</strong>: Nilai dasar (misalnya, nilai minimal jika tidak belajar sama sekali).</li>
                    <li><strong>Hasil</strong>: Prediksi nilai ujian.</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Fungsi Aktivasi: Saklar Lampu</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Kadang, hasilnya tidak sesederhana garis lurus. Kita butuh "saklar" untuk menentukan apakah sinyal harus diteruskan atau tidak. Ini disebut <strong>Fungsi Aktivasi</strong>. Contoh sederhana: Jika nilainya positif, teruskan. Jika nilainya negatif, anggap nol (matikan).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Neural Networks */}
            <section>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4 shrink-0">
                  <Network className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Neural Networks: Jaringan Neuron</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Satu neuron hanya bisa menangani masalah sederhana. Untuk masalah kompleks seperti mengenali wajah, kita perlu jutaan neuron yang disusun dalam <strong>lapisan-lapisan (layers)</strong>.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Arsitektur Jaringan</h3>
                  <p className="text-gray-600 mb-2">Bayangkan seperti tim kerja berjenjang:</p>
                  <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-2">
                    <li><strong>Input Layer</strong>: Menerima data mentah (misalnya, piksel gambar).</li>
                    <li><strong>Hidden Layers</strong>: Lapisan tengah yang memproses informasi. Semakin dalam lapisannya (Deep Learning), semakin pintar AI-nya.</li>
                    <li><strong>Output Layer</strong>: Memberikan hasil akhir (misalnya, "Ini gambar Kucing").</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Section 4: Training Process */}
            <section>
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-lg mr-4 shrink-0">
                  <RefreshCw className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. The Training Process (Proses Pelatihan)</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Pelatihan AI mirip dengan siswa yang mengerjakan soal latihan berulang kali.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Siklus Belajar:</h3>
                      <ol className="list-decimal list-inside text-gray-600 space-y-1">
                        <li><strong>Menebak (Prediksi)</strong>: AI mencoba menebak jawaban.</li>
                        <li><strong>Mengecek Jawaban</strong>: Bandingkan tebakan AI dengan jawaban yang benar.</li>
                        <li><strong>Menghitung Nilai Kesalahan (Loss)</strong>: Seberapa jauh tebakannya meleset?</li>
                        <li><strong>Belajar (Update)</strong>: AI memperbaiki "pemahaman" (bobot)-nya agar tebakan berikutnya lebih akurat.</li>
                      </ol>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Konsep Penting:</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li><strong>Loss Function</strong>: Skor kesalahan. Tujuan AI adalah membuat skor ini menjadi Nol.</li>
                        <li><strong>Gradient Descent</strong>: Cara AI mencari jalan untuk mengurangi kesalahan ("menuruni bukit").</li>
                        <li><strong>Backpropagation</strong>: Cara AI memberi tahu seluruh neuron untuk memperbaiki diri ("umpan balik").</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Weights */}
            <section>
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4 shrink-0">
                  <Scale className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Weights: Memori AI</h2>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Weights (Bobot)</strong> adalah <strong>ingatan</strong> atau <strong>pengetahuan</strong> yang disimpan AI. Saat AI "belajar", sebenarnya ia sedang mengubah nilai-nilai weights ini. AI yang sudah pintar adalah AI yang memiliki kombinasi weights yang tepat untuk menyelesaikan tugasnya.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Epoch, Batch, Iteration */}
            <section>
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-lg mr-4 shrink-0">
                  <Repeat className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Epoch, Batch, dan Iteration</h2>
                  <p className="text-gray-600 mb-4">Istilah-istilah dalam "sekolah" AI:</p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="font-bold mr-2 min-w-[80px]">Epoch:</span>
                      <span>Satu kali putaran belajar menggunakan <strong>seluruh</strong> buku materi (dataset). Biasanya butuh puluhan atau ratusan epoch agar pintar.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2 min-w-[80px]">Batch:</span>
                      <span>Karena materinya banyak, AI belajarnya dicicil per bab (kelompok kecil data). Kelompok kecil ini disebut Batch.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2 min-w-[80px]">Iteration:</span>
                      <span>Berapa kali AI harus belajar per bab dalam satu putaran.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7: Overfitting vs Underfitting */}
            <section>
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-lg mr-4 shrink-0">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Overfitting vs Underfitting</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">Underfitting: Belum Paham</h3>
                      <p className="text-gray-600 mb-2">AI <strong>belum belajar cukup</strong>. Seperti siswa yang hanya membaca judul bab tapi tidak membaca isinya.</p>
                      <p className="text-sm text-gray-500">Solusi: Belajar lebih lama atau tambah materi.</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-900 mb-2">Overfitting: Menghafal Mati</h3>
                      <p className="text-gray-600 mb-2">AI <strong>terlalu menghafal jawaban</strong> latihan tapi tidak paham konsepnya. Nilai bagus saat latihan, tapi jelek saat ujian.</p>
                      <p className="text-sm text-gray-500">Solusi: Berikan soal latihan yang lebih bervariasi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Fine-tuning */}
            <section>
              <div className="flex items-start">
                <div className="bg-cyan-100 p-3 rounded-lg mr-4 shrink-0">
                  <Sliders className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Fine-tuning: Spesialisasi</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Setelah AI belajar pengetahuan umum (misalnya mengenali benda), ia bisa disekolahkan lagi untuk jadi spesialis (misalnya khusus mengenali jenis bunga). Ini jauh lebih cepat daripada mengajari dari nol. Mirip dokter umum yang mengambil spesialisasi.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Evaluation */}
            <section>
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg mr-4 shrink-0">
                  <ClipboardCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Evaluasi Model: Rapor AI</h2>
                  <p className="text-gray-600 mb-4">Bagaimana kita tahu AI sudah pintar? Kita lihat rapornya.</p>
                  <ul className="space-y-3 text-gray-600">
                    <li>
                      <strong>Accuracy (Akurasi)</strong>: Persentase jawaban benar. Contoh: Dari 100 soal, benar 90. Akurasi = 90%.
                    </li>
                    <li>
                      <strong>Confusion Matrix (Tabel Kebenaran)</strong>: Melihat detail kesalahannya di mana. Apakah dia sering salah mengira Kucing sebagai Anjing? Ini membantu kita tahu kelemahan spesifik si AI.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 10: Dataset Split */}
            <section>
              <div className="flex items-start">
                <div className="bg-pink-100 p-3 rounded-lg mr-4 shrink-0">
                  <PieChart className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dataset: Membagi Materi</h2>
                  <p className="text-gray-600 mb-4">Agar adil, data dibagi menjadi 3 bagian:</p>
                  <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-2">
                    <li><strong>Training Set (Buku Pelajaran)</strong>: Digunakan untuk belajar sehari-hari.</li>
                    <li><strong>Validation Set (Try Out)</strong>: Digunakan untuk latihan ujian dan mengukur kemampuan sementara.</li>
                    <li><strong>Test Set (Ujian Akhir)</strong>: Soal rahasia yang hanya dibuka di akhir sekali untuk menentukan nilai kelulusan. AI tidak boleh melihat ini sebelumnya!</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Section 11: Hyperparameters */}
            <section>
              <div className="flex items-start">
                <div className="bg-slate-100 p-3 rounded-lg mr-4 shrink-0">
                  <Settings className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Hyperparameter: Pengaturan Awal</h2>
                  <p className="text-gray-600 mb-4">Sebelum mulai belajar, ada "tombol-tombol" yang harus disetel oleh manusia:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                    <li><strong>Learning Rate</strong>: Seberapa cepat AI belajar. Terlalu cepat jadi ceroboh, terlalu lambat jadi lama sekali.</li>
                    <li><strong>Epochs</strong>: Berapa kali mau mengulang materi.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 12: Optimizers */}
            <section>
              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4 shrink-0">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Optimizers: Cara Belajar</h2>
                  <p className="text-gray-600 mb-4">Optimizer adalah metode yang digunakan AI untuk memperbaiki diri.</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                    <li><strong>SGD</strong>: Cara belajar standar, pelan tapi pasti.</li>
                    <li><strong>Adam</strong>: Cara belajar modern yang lebih pintar, bisa menyesuaikan kecepatan belajar secara otomatis. (Paling sering dipakai saat ini).</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 13: Types of NN */}
            <section>
              <div className="flex items-start">
                <div className="bg-violet-100 p-3 rounded-lg mr-4 shrink-0">
                  <Layers className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Jenis-jenis Neural Networks (Singkat)</h2>
                  <p className="text-gray-600 mb-4">Beda masalah, beda jenis otak yang dipakai:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
                    <li><strong>FNN (Feedforward)</strong>: Untuk data tabel sederhana.</li>
                    <li><strong>CNN (Convolutional)</strong>: Ahlinya melihat <strong>Gambar</strong>.</li>
                    <li><strong>RNN / LSTM</strong>: Ahlinya bahasa dan urutan (<strong>Teks/Suara</strong>).</li>
                    <li><strong>Transformers</strong>: Teknologi terbaru di balik ChatGPT, sangat jago memahami konteks bahasa.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 14: Summary Process */}
            <section>
              <div className="flex items-start">
                <div className="bg-rose-100 p-3 rounded-lg mr-4 shrink-0">
                  <ListChecks className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Proses Pelatihan (Ringkasan)</h2>
                  <ol className="list-decimal list-inside text-gray-600 space-y-2 ml-2">
                    <li><strong>Siapkan Masalah</strong>: Apa yang mau diprediksi?</li>
                    <li><strong>Siapkan Data</strong>: Kumpulkan dan bersihkan data.</li>
                    <li><strong>Pilih Model</strong>: Tentukan jenis otak yang cocok.</li>
                    <li><strong>Latih (Training)</strong>: Biarkan AI belajar berulang-ulang (Epochs).</li>
                    <li><strong>Evaluasi</strong>: Tes dengan soal ujian (Test Set).</li>
                    <li><strong>Gunakan</strong>: Jika sudah pintar, siap dipakai!</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-indigo-50 rounded-xl p-8 border border-indigo-100">
              <h2 className="text-2xl font-bold text-indigo-900 mb-4">Kesimpulan</h2>
              <p className="text-indigo-800 leading-relaxed mb-6">
                Melatih AI itu seperti mengajari anak kecil. Butuh kesabaran, data yang baik, dan metode yang tepat. Tidak ada sihir di sini, hanya matematika dan pengulangan yang sangat banyak hingga ia menemukan pola yang benar.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-indigo-900 mb-1">Data adalah Raja</h3>
                  <p className="text-sm text-indigo-700">Data jelek = AI bodoh.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-indigo-900 mb-1">Proses Berulang</h3>
                  <p className="text-sm text-indigo-700">AI tidak langsung pintar dalam sekali coba.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-bold text-indigo-900 mb-1">Evaluasi</h3>
                  <p className="text-sm text-indigo-700">Selalu cek apakah AI benar-benar paham.</p>
                </div>
              </div>
              <p className="text-sm text-indigo-600 mt-6 italic">
                Artikel ini disederhanakan untuk tujuan edukasi siswa dan guru non-teknis.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
