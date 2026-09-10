---
title: "Pertemuan 2 - Integrasi SIstem"
minutes: 30
updated: "2026-09-08"
---


## I. PENDAHULUAN & EVALUASI AWAL
*   **Tinjauan Pertemuan Sebelumnya:** Pembelajaran Pertemuan 2 dibuka dengan mengulas kembali pertanyaan diskusi penutup pada Pertemuan 1 mengenai apakah perusahaan yang harus menyesuaikan proses bisnisnya dengan sistem ERP, atau sebaliknya. Hal ini menjadi landasan penting sebelum mempelajari bagaimana menghubungkan sistem-sistem fungsional tersebut.

---

## II. MEKANISME PEMBAGIAN KELOMPOK PROYEK AKHIR
Sebelum masuk ke materi utama, dosen menetapkan aturan dan mekanisme pembagian kelompok untuk proyek akhir Odoo:
*   **Struktur dan Anggota Kelompok:** Kelas terdiri dari **31 mahasiswa**. Satu kelompok idealnya diisi oleh **3 orang**. Oleh karena itu, dibentuk **10 kelompok** dengan pembagian: **9 kelompok berisi 3 orang** dan **1 kelompok berisi 4 orang**.
*   **Mekanisme Pemilihan:** Dosen menunjuk **10 orang secara acak** untuk menjadi **Ketua Kelompok**. Menjadi ketua kelompok adalah sebuah hak istimewa (*privilege*) karena ketua memiliki hak penuh untuk memilih anggotanya secara bergiliran.
*   **Aturan Sistem Barter (Pertukaran) Anggota:**
    *   **Hanya Ketua Kelompok** yang memiliki hak untuk melakukan barter anggota. Anggota kelompok dilarang keras meminta pindah atau keluar dari kelompok secara sepihak.
    *   Proses barter hanya boleh dilakukan jika kedua belah pihak ketua kelompok sama-sama menyetujui pertukaran tersebut.
    *   Setiap kelompok hanya memiliki **satu kali kesempatan barter**.
    *   **Skema Transfer Pemain:** Diperbolehkan menukar dua orang anggota dari satu kelompok sekaligus dengan satu anggota dari kelompok lain apabila anggota tersebut dinilai memiliki kualifikasi yang sangat bagus (seperti skema transfer pemain cadangan dalam sepak bola).

---

## III. KONSEP DASAR & DEFINISI INTEGRASI SISTEM
*   **Definisi Integrasi Sistem:** Proses menyatukan berbagai komponen organisasi yang berbeda—meliputi **manusia (*people*), proses (*process*), aplikasi (*application*), data (*data*), hingga infrastruktur (*infrastructure*)**—agar komponen-komponen tersebut dapat bekerja bersama dalam satu kesatuan yang utuh.
*   **Tujuan Utama:** Memungkinkan berbagai sistem informasi untuk berkomunikasi, saling terhubung, dan berbagi informasi atau data secara **mulus (*seamless*)**.
*   **Arti Kata *Seamless* (Mulus):** Aliran proses bisnis yang berjalan secara terus-menerus mengalir tanpa adanya jeda, hambatan, atau sekat pembatas (*gap*) antar sistem.
*   **Fokus Integrasi ERP:** Hal fundamental yang diintegrasikan di dalam sistem informasi adalah **datanya**.

---

## IV. AKTIVITAS KELAS 1: ANALISIS KASUS PERUSAHAAN NON-INTEGRASI
**Skenario:** Sebuah perusahaan menggunakan **empat aplikasi berbeda dari empat vendor berbeda**, yaitu: **Aplikasi E-Commerce** (penerimaan pesanan), **Aplikasi Keuangan (*Finance/Accounting*)**, **WMS (*Warehouse Management System*)** (pengelolaan gudang), dan **CRM (*Customer Relationship Management*)** (pengelolaan pelanggan).

*Catatan Teknis:* Karena dikembangkan oleh vendor berbeda, maka secara otomatis **bahasa pemrograman, infrastruktur teknologi, dan format database** yang digunakan di belakang layar juga berbeda.

### Analisis 4 Pertanyaan Kunci dari Aktivitas Kelas:

#### 1. Apa yang terjadi jika keempat aplikasi tersebut tidak terintegrasi?
*   **Entri Data Manual:** Perusahaan harus memindahkan data secara manual dari satu sistem ke sistem lainnya secara berulang (misal menginput ulang pesanan dari e-commerce ke sistem keuangan atau WMS).
*   **Human Error Tinggi:** Pemindahan data manual meningkatkan potensi kesalahan input (*input error*) oleh staf.
*   **Proses Bisnis Lambat:** Operasional berjalan jauh lebih lambat karena jeda waktu pemindahan data satu per satu.
*   **Redundansi Data:** Terjadi duplikasi penyimpanan data yang sama di berbagai database terpisah.
*   **Miskomunikasi Antar-Departemen:** Komunikasi antar-bagian menjadi kacau akibat tidak adanya satu sumber informasi yang pasti.
*   **Kualitas Informasi Buruk & Keputusan yang Salah:** Manajemen tidak mendapatkan informasi yang tepat waktu dan akurat (*poor quality of information*), sehingga berisiko mengambil keputusan bisnis yang salah.

#### 2. Data apa saja yang perlu berpindah antar-aplikasi?
*   **E-Commerce ke WMS (dan sebaliknya):** Ketika ada pembelian di e-commerce, data produk dan jumlah pembelian harus segera memotong data stok barang di WMS agar informasi stok di e-commerce tetap akurat secara real-time.
*   **CRM ke E-Commerce:** Perpindahan data profil pelanggan, histori pencarian produk, dan histori transaksi pembelian. Informasi ini digunakan oleh e-commerce untuk menyajikan rekomendasi produk yang relevan kepada pelanggan (seperti algoritma pencarian di TikTok).
*   **WMS/E-Commerce ke Keuangan (ERP):** Data distribusi barang (pembelian dari supplier yang masuk ke gudang), data penjualan, tagihan (*invoice*), transaksi pembayaran, pendapatan (*income*), serta pengeluaran. Integrasi data ini wajib untuk menjamin transparansi aliran fisik barang dan uang guna menghindari kecurangan atau korupsi.

#### 3. Aplikasi mana yang harus saling berkomunikasi?
*   Departemen Keuangan wajib memiliki transparansi penuh terhadap aktivitas di Gudang (WMS) dan penjualan di E-Commerce. Sebaliknya, sistem E-Commerce dan WMS secara fungsional tidak perlu memiliki transparansi atau akses langsung terhadap data internal departemen keuangan. Aliran pelaporan data mengalir dari WMS/E-Commerce menuju sistem Keuangan.

#### 4. Apakah semua aplikasi tersebut harus digabung (*merge*) menjadi satu aplikasi tunggal?
*   **Jawabannya: TIDAK HARUS**.
*   **Alasan:** Menyatukan semuanya menjadi satu aplikasi raksasa (*merge*) membutuhkan biaya yang sangat mahal dan waktu pengembangan yang sangat lama. Sebagai alternatif, perusahaan dapat menghubungkan aplikasi-aplikasi tersebut menggunakan sistem jembatan seperti **middleware**.
*   **Perbedaan Integrasi (*Integration*) vs Penggabungan (*Merge*):**
    *   *Integrasi:* Menghubungkan berbagai sistem yang berbeda agar tetap berdiri sendiri namun mampu berinteraksi, berkomunikasi, dan bertukar data secara mulus tanpa hambatan.
    *   *Merge (Penggabungan):* Melebur seluruh aplikasi yang berbeda tersebut hingga menyatu menjadi satu aplikasi tunggal.

---

## V. MANFAAT & PRINSIP UTAMA INTEGRASI SISTEM
*   **Manfaat Utama Integrasi:**
    1.  Menghilangkan sekat pembatas atau pengotak-otakan (*silo*) antar-departemen di dalam organisasi.
    2.  Mempercepat aliran informasi di sepanjang rantai proses bisnis.
    3.  Mengurangi duplikasi data dan meminimalkan kesalahan input data.
    4.  Mendukung proses pengambilan keputusan manajemen berbasis data riil secara instan (*real-time*).
    5.  Meningkatkan efisiensi kerja dan produktivitas organisasi secara keseluruhan.

*   **Tiga Prinsip Utama Integrasi:**
    1.  **Interoperabilitas (*Interoperability*):** Kemampuan berbagai sistem, aplikasi, atau modul yang berbeda teknologi dan berbeda vendor untuk dapat saling berkomunikasi, bertukar data, dan memanfaatkan informasi secara lancar tanpa hambatan teknis.
    2.  **Aliran Data Real-Time (*Real-Time Data Flow*):** Proses pertukaran data yang terjadi secara instan tanpa adanya penundaan (*delay*). Saat data diperbarui di satu departemen, data di departemen lainnya langsung ikut diperbarui pada detik yang sama.
    3.  **Otomatisasi Proses (*Process Automation*):** Mengotomatiskan proses bisnis yang sebelumnya dikerjakan secara manual, sehingga mengurangi keterlibatan langsung manusia (*minimizing human intervention*) dan menekan potensi kesalahan.

---

## VI. KOMPARASI: SISTEM MANDIRI (*STAND-ALONE*) VS TERINTEGRASI
Perbandingan mendalam kedua sistem ditinjau dari lima aspek utama:

| Aspek | Sistem Mandiri (*Stand-Alone*) | Sistem Terintegrasi |
| :--- | :--- | :--- |
| **Konektivitas** | Berjalan sendiri-sendiri, terisolasi, dan tidak terhubung. | Saling terhubung erat dan dapat bertukar data secara langsung. |
| **Manajemen Data** | Data tersebar di berbagai database terpisah, rawan terjadi duplikasi dan tidak konsisten. | Data konsisten di seluruh sistem (menggunakan *central database* pada ERP). |
| **Efisiensi Proses** | Banyak proses manual yang rawan kesalahan (*error-prone*). | Proses berjalan otomatis, efisien, dan meminimalkan kesalahan (*error*). |
| **Visibilitas** | Terbatas pada lingkungan departemen itu saja (terjadi fenomena sekat *silo*). | Memberikan pandangan menyeluruh secara transparan lintas departemen. |
| **Keputusan Bisnis** | Lambat karena manajemen harus mengumpulkan data terpisah secara manual. | Sangat cepat karena manajemen didukung oleh data real-time yang akurat. |

---

## VII. AKTIVITAS KELAS 2: LEVEL UTAMA INTEGRASI
*   **Skenario:** *"Ketika pelanggan melakukan pemesanan (order), proses tersebut secara otomatis memicu pengecekan stok di gudang dan pembuatan invoice tagihan kepada pelanggan."*
*   **Pertanyaan Diskusi:** Elemen apa yang sebenarnya paling utama diintegrasikan dalam skenario di atas?
*   **Jawaban & Analisis:** Yang diintegrasikan secara utama adalah **Proses Bisnis (*Business Process*)**. Skenario tersebut menunjukkan integrasi alur kerja (*workflow*) yang berurutan, di mana aktivitas pemesanan memicu proses bisnis berikutnya (pengecekan stok dan penagihan). Elemen data dan fungsi tetap terintegrasi, namun posisinya hanya bertindak sebagai level pendukung operasional.

---

## VIII. ELEMEN-ELEMEN YANG DAPAT DIINTEGRASIKAN
Di dalam organisasi, integrasi tidak terbatas pada aplikasi saja, melainkan mencakup empat elemen utama:
1.  **Data:** Integrasi data antar-bagian. *Contoh:* Data pelanggan dari departemen penjualan (*sales*) dapat diakses langsung oleh departemen keuangan (*finance*) untuk keperluan pelaporan keuangan, piutang, dan penagihan.
2.  **Fungsi:** Menghubungkan fungsi-fungsi kerja organisasi. *Contoh:* Menghubungkan bagian penjualan dengan bagian inventori/gudang untuk konfirmasi ketersediaan fisik barang dagangan.
3.  **Proses Bisnis:** Mengintegrasikan rantai alur kerja lintas fungsi secara otomatis (Order $\rightarrow$ Cek Stok/Inventory $\rightarrow$ Pengiriman/Delivery $\rightarrow$ Penagihan/Billing $\rightarrow$ Pembayaran/Payment).
4.  **Informasi:** Mengintegrasikan seluruh data operasional menjadi satu visualisasi tunggal berupa **Dashboard** interaktif guna membantu pimpinan organisasi mengambil keputusan strategis dengan cepat.

---

## IX. RUANG LINGKUP INTEGRASI ERP
Berdasarkan batasan sistem yang terlibat, integrasi ERP dibagi menjadi dua lingkup utama:
*   **Internal Integration:** Integrasi yang menghubungkan seluruh sistem informasi di dalam satu naungan organisasi yang sama tanpa melibatkan pihak luar.
*   **External Integration:** Integrasi yang menghubungkan sistem ERP internal perusahaan dengan sistem yang dikelola oleh pihak luar organisasi, seperti dengan sistem perbankan, sistem milik pemasok (*supplier/vendor*), atau sistem milik pelanggan.

---

## X. KLASIFIKASI JENIS INTEGRASI SISTEM
Integrasi sistem secara umum terbagi menjadi dua kategori besar:

### A. Integrasi Logis (*Logical Integration*)
*   **Definisi:** Integrasi yang terjadi pada tingkat interaksi manusia atau pada level **antarmuka pengguna (*user interface*)**.
*   **Prinsip Kerja:** Di belakang layar, aplikasi-aplikasi yang digunakan sebenarnya **tetap berdiri sendiri-sendiri (*stand-alone*)** dan terpisah secara sistem. Namun, dibuatkan satu gerbang portal akses antarmuka yang membuat pengguna merasa seolah-olah semua aplikasi tersebut telah menyatu.
*   **Kelemahan:** Data antar-sistem tidak otomatis tersinkronisasi secara langsung. Sinkronisasi data di belakang layar masih membutuhkan peran atau pemicu dari tindakan manusia.
*   **Contoh Utama: SSO (Single Sign-On) Kampus Unesa**.
    *   SSO Unesa menyediakan akses ke banyak aplikasi mandiri (seperti sipena, saku, simas, sipintar, sim lppm, siad, cdi, dll.) hanya dengan satu kali login.
    *   *Kasus Sinkronisasi Nilai:* Dosen menginput nilai tugas akhir/skripsi mahasiswa di aplikasi **Si Pintar**. Nilai tersebut tidak akan langsung muncul secara instan di transkrip nilai mahasiswa pada aplikasi **CDI** atau **Siad**. Nilai baru akan sinkron dan muncul setelah petugas Tata Usaha (TU) mengklik tombol perintah sinkronisasi secara manual.
*   **Bentuk-Bentuk Integrasi Logis:**
    1.  *User Interface Integration:* Menggabungkan akses masuk ke beberapa aplikasi terpisah lewat satu gerbang antarmuka.
    2.  *Presentation Integration:* Menyatukan informasi dari beberapa sistem terpisah untuk ditampilkan secara bersamaan dalam satu layar (misal: tampilan dashboard terpadu).
    3.  *Single Sign-On (SSO):* Sistem autentikasi satu pintu di mana pengguna cukup memasukkan kredensial sekali saja untuk mengakses banyak sistem mandiri.

### B. Integrasi Fisik (*Physical / Technical Integration*)
*   **Definisi:** Integrasi yang terjadi secara teknis pada level **infrastruktur sistem** di balik layar.
*   **Prinsip Kerja:** Berbagai komponen infrastruktur seperti jaringan, server, database, perangkat keras (*hardware*), atau platform teknis benar-benar dihubungkan secara fisik agar sistem-sistem tersebut dapat bertukar data dan berkomunikasi secara langsung tanpa jeda.
*   *Contoh:* Server aplikasi HR dan server aplikasi penggajian (*payroll*) diletakkan di dalam satu server lokal atau cloud yang terkoneksi langsung sehingga datanya dapat diakses bersamaan.

---

## XI. LIMA BENTUK INTEGRASI FISIK

### 1. Point-to-Point Integration
*   **Cara Kerja:** Menghubungkan dua aplikasi secara langsung tanpa ada sistem perantara di tengahnya. Jalur penghubung langsung ini disebut sebagai **konektor**.
*   **Kelebihan:**
    *   Sangat cocok, murah, dan sederhana jika jumlah aplikasi yang ingin dihubungkan masih sedikit.
    *   Proses pengembangan cepat karena tidak tergantung pada middleware.
    *   Pemetaan data (*data mapping*) dan penanganan kesalahan (*error handling*) relatif mudah dilakukan.
    *   Pengiriman data berjalan sangat cepat dan efisien.
*   **Kekurangan:**
    *   Jika terjadi perubahan spesifikasi pada salah satu aplikasi (misal aplikasi B berubah), maka interface di seluruh aplikasi lain yang terhubung dengan B harus ditulis ulang atau diubah secara manual.
    *   Jika jumlah aplikasi bertambah banyak, integrasi akan menjadi sangat rumit, kacau, dan berbelit-belit layaknya spageti (**Spaghetti Integration**).

### 2. Database-to-Database Integration
*   **Cara Kerja:** Integrasi dilakukan langsung pada level database antar-aplikasi, bukan pada level antarmuka aplikasinya. Aplikasi tidak saling berbicara secara langsung, melainkan data dikirim atau ditarik langsung antar database menggunakan query SQL, replikasi database, atau perintah *stored procedure*.
*   **Kelebihan:** Proses akses data lintas sistem berjalan sangat cepat dan sangat efektif jika ada kumpulan data yang sering digunakan bersama oleh berbagai aplikasi.
*   **Kekurangan:** Jika terjadi perubahan struktur tabel atau skema database pada salah satu sistem, maka jalur integrasi akan rusak seketika. Selain itu, berisiko tinggi menimbulkan ketidaksinkronan data jika pengelolaannya tidak ketat.
*   **Contoh:** Sistem ERP membaca langsung tabel data stok barang dari database milik aplikasi manajemen gudang.

### 3. File-Based Integration
*   **Cara Kerja:** Proses integrasi yang mengandalkan aktivitas ekspor dan impor file fisik dari satu sistem ke sistem lainnya. Sistem A akan mengekspor data ke dalam format file tertentu (seperti CSV, Excel, JSON, atau XML) dan menyimpannya di folder bersama (*shared folder*), kemudian sistem B akan membaca dan mengimpor file tersebut ke databasenya sendiri.
*   **Karakteristik:** Bersifat **tidak real-time**. Pemindahan data dilakukan secara berkala dan terjadwal menggunakan metode pemrosesan berkelompok (**Batch Processing**), misalnya transfer data otomatis dijadwalkan setiap jam 10 malam atau setiap akhir pekan.
*   **Kelebihan:** Sangat mudah dan sederhana diterapkan untuk sistem skala kecil yang tidak menuntut kecepatan pertukaran data instan.
*   **Kekurangan:** Sangat rawan mengalami kegagalan akibat kesalahan format file (*format error*), memerlukan manajemen file yang sangat rapi di dalam server, dan sangat sulit dikembangkan (*not scalable*) jika melibatkan banyak sistem sekaligus.
*   **Contoh:** Data rekapitulasi penjualan harian dari mesin kasir toko cabang dikumpulkan dalam bentuk file Excel, lalu diunggah (*upload*) ke sistem akuntansi pusat setiap akhir minggu.

### 4. Middleware-Based Integration
*   **Cara Kerja:** Menggunakan aplikasi perantara khusus bernama **Middleware** sebagai pusat penghubung komunikasi. Aplikasi-aplikasi tidak saling terhubung langsung (seperti point-to-point), melainkan semua aplikasi mengirimkan data mereka ke middleware, dan middleware-lah yang mendistribusikannya ke aplikasi tujuan. Metode ini paling disukai untuk mengintegrasikan banyak aplikasi sekaligus.
*   **Kelebihan:** Sangat efisien, memiliki tingkat skalabilitas yang sangat tinggi (*scalable*), serta memudahkan pencapaian konsistensi data karena dikelola terpusat di satu sistem.
*   **Kekurangan:** Memiliki risiko kerentanan **Single Point of Failure** (apabila server middleware di tengah mengalami gangguan atau mati, maka seluruh aliran komunikasi antar-aplikasi di sekelilingnya akan lumpuh total). Metode ini juga membutuhkan tim IT khusus yang ahli untuk mengonfigurasi dan memelihara middleware.

### 5. Application Programming Interface (API)
*   **Cara Kerja:** API bertindak sebagai perantara perangkat lunak yang memungkinkan satu aplikasi dapat meminta data atau layanan dari aplikasi lain tanpa perlu mengetahui isi database internal aplikasi tersebut. Komunikasi dilakukan menggunakan mekanisme permintaan data (**Request API**) dan tanggapan data (**Response API**).
*   **Kelebihan:** Aplikasi tidak perlu mengetahui atau mengakses langsung database dari aplikasi yang lain untuk bisa saling bertukar data.
*   **Contoh:** Integrasi antara platform e-commerce dan sistem ERP perusahaan. Saat pelanggan mengklik beli barang di web e-commerce, sistem e-commerce secara otomatis mengirimkan *Request API* ke modul inventory sistem ERP untuk menanyakan ketersediaan stok. Sistem ERP kemudian mengecek database internalnya dan mengirimkan *Response API* balik ke e-commerce yang mengonfirmasi apakah barang tersedia atau tidak.

---

## XII. ARSITEKTUR DATABASE: SEBELUM VS SESUDAH ERP
*   **Sebelum ERP (Silo Database):** Setiap departemen fungsional (seperti HR, Keuangan, Operasional) memiliki sistem aplikasi dan database-nya masing-masing secara terpisah. Dampak buruknya adalah data menjadi terfragmentasi dan sering terjadi duplikasi data.
*   **Setelah ERP (Central Database):** Seluruh fungsi bisnis (seperti HR, Keuangan, Operasional) terhubung langsung ke satu sumber data tunggal yang sama, yaitu **Central Database (Database Pusat)**. Jika terjadi perubahan data di satu modul, data di modul lain akan langsung terbarui secara otomatis karena merujuk pada database yang sama.

---

## XIII. FAKTOR PERTIMBANGAN MEMILIH METODE INTEGRASI
Saat perusahaan merancang integrasi sistem ERP, ada lima faktor krusial yang harus dipertimbangkan secara matang:
1.  **Integration Needs (Kebutuhan Integrasi):** Mengidentifikasi aplikasi apa saja yang wajib dihubungkan, serta menentukan apakah pertukaran data tersebut harus terjadi secara instan (*real-time*) atau cukup dijadwalkan secara berkala (*batch/periodik*).
2.  **Integration Budget (Anggaran Biaya):** Menyesuaikan anggaran perusahaan dengan biaya implementasi metode integrasi. Metode integrasi fisik tingkat tinggi seperti API dan middleware merupakan pilihan yang paling mahal investasinya.
3.  **Solution Environment (Lingkungan Solusi):** Memeriksa karakteristik aplikasi yang akan dihubungkan, apakah berjalan di server lokal (*on-premise*), berbasis internet (*cloud*), atau menggunakan metode gabungan (*hybrid*).
4.  **Technical Resources (Sumber Daya Teknis):** Mengukur ketersediaan dan kemampuan teknis tim IT internal perusahaan untuk membangun serta merawat sistem integrasi tersebut. Jika keahlian SDM IT sangat terbatas, perusahaan disarankan untuk memilih metode integrasi yang paling sederhana.
5.  **Non-Functional Requirements (Kebutuhan Non-Fungsional):** Mempertimbangkan aspek-aspek di luar fungsi teknis dasar, seperti keamanan data (*security*), kemudahan pemeliharaan (*maintainability*), kecepatan transfer data, kepatuhan hukum (*compliance*), dan kesiapan pengembangan skala besar di masa mendatang (*scalability*).
