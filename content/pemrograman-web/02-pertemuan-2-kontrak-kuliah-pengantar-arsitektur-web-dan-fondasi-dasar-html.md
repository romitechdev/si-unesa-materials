---
title: "Pertemuan 2 - Kontrak Kuliah, Pengantar Arsitektur Web, dan Fondasi Dasar HTML"
description: "Catatan komprehensif minggu kedua mata kuliah Pemrograman Web yang membahas tata tertib kelas, aturan kehadiran, dan kebijakan penggunaan AI . Dokumen ini juga mengulas integrasi mata kuliah pendukung (UI/UX, APSI, Basis Data) , dasar arsitektur client-server (HTTP/HTTPS) , perbedaan web statis & dinamis , pengenalan tiga teknologi utama (HTML, CSS, JS) , serta detail tugas kelompok pembuatan Handbook HTML fisik"
minutes: 30
updated: "2026-09-08"
---


## 1. Aturan Kelas & Kontrak Perkuliahan

### Kehadiran & Keterlambatan
* **Batas Ketidakhadiran**: Mahasiswa diperbolehkan tidak hadir tanpa keterangan maksimal **3 kali**. Jika tidak hadir tanpa keterangan lebih dari 3 kali, mahasiswa tetap boleh mengikuti perkuliahan, namun nilai UTS dan UAS akan otomatis dikosongkan.
* **Batas Keterlambatan**: Keterlambatan masuk ke kelas maksimal **15 sampai 20 menit**. Mahasiswa yang terlambat melebihi batas tersebut diminta untuk tidak masuk agar tidak mengganggu proses belajar mengajar yang sedang berlangsung.
* **Prosedur Perizinan**: Jika mahasiswa berhalangan hadir karena keperluan keluarga atau sakit, wajib membuat surat resmi yang dititipkan kepada Penanggung Jawab (PJ) kelas. Jika sakit dan memiliki surat dokter atau dokumen pendukung lainnya, dokumen tersebut boleh disertakan; namun jika tidak ada, tetap wajib mengirimkan surat izin biasa.

### Penggunaan Gadget & Teknologi AI (Artificial Intelligence)
* **Penggunaan Gadget di Kelas**: Selama perkuliahan berlangsung, mahasiswa sangat diperbolehkan untuk membuka HP maupun laptop guna mencari materi atau melakukan browsing di Google mengenai topik yang sedang didiskusikan.
* **Penggunaan AI**: Mahasiswa diperbolehkan menggunakan teknologi AI (seperti ChatGPT, Claude, dan sejenisnya) sebagai *virtual assistant* untuk mempermudah pengerjaan tugas maupun membantu penulisan kode (*coding*) tampilan website. Mahasiswa tidak harus selalu terpaku pada situs-situs manual seperti W3Schools atau Petani Kode untuk mencari contoh kode.
* **Aturan & Batasan Penggunaan AI**:
  * Penggunaan AI harus dilakukan secara bijak. Mahasiswa dilarang kalah pintar atau hanya mengandalkan AI secara instan tanpa mempelajari kembali kode program yang dihasilkan.
  * Aturan kelonggaran penggunaan AI ini **hanya berlaku di kelas dosen bersangkutan**. Mahasiswa dilarang keras menerapkannya di kelas dosen lain (seperti kelas Pak Bismo atau Pak Jendra). Di kelas Pak Jendra, penggunaan AI diperiksa ketat karena gaya penulisan mahasiswa sangat mudah dibedakan dengan hasil AI yang terstruktur dan baku (sedangkan tulisan mahasiswa biasanya cenderung berantakan).
* **Etika Menghubungi Dosen**: Saat mengirim pesan WhatsApp ke dosen, mahasiswa dilarang menyalin mentah-mentah (*copy-paste*) draf pesan otomatis yang dibuat oleh AI. Jangan sampai ada draf templat di dalam kurung (seperti nama dosen atau tahun angkatan) yang lupa diedit atau dibiarkan kosong.

---

## 2. Komponen Penilaian & Tugas Kelompok

### Sistem Penilaian
* **Mata Kuliah Berbasis Proyek**: Mata kuliah Pemrograman Web menggunakan sistem berbasis proyek (*project-based*). Mahasiswa diwajibkan membentuk kelompok yang terdiri dari **3 orang** untuk merancang dan mengembangkan satu proyek website dari awal hingga UAS.
* **Nilai UTS & UAS**: Diambil sepenuhnya dari hasil pengerjaan proyek kelompok tersebut.
* **Nilai Individu**: Diambil dari tingkat partisipasi/keaktifan di dalam kelas, serta hasil pengerjaan *pretest* dan *post-test*.
* **Kriteria Kelulusan (Nilai C)**: Batas standar nilai kelulusan dari dosen adalah nilai **C**. Jika mahasiswa dapat memenuhi batas kriteria kehadiran minimum, dosen akan menghargai kehadiran tersebut dan otomatis meluluskannya dengan nilai C. Mahasiswa dibebaskan untuk memilih apakah ingin meningkatkan nilainya atau puas dengan nilai C.
* **Mendapatkan Nilai A atau B**: Mahasiswa harus aktif mengerjakan semua tugas yang diberikan, menyelesaikan UTS dan UAS, serta aktif berpartisipasi di kelas (seperti menjawab pertanyaan dosen atau berinisiatif maju presentasi tanpa harus ditunjuk).

### Sistem Presentasi Tugas Mingguan
* Di akhir pertemuan, dosen biasanya akan memberikan tugas kelompok untuk dipresentasikan pada pertemuan minggu berikutnya.
* Pada pertemuan berikutnya, maksimal hanya akan dipilih **2 kelompok** untuk maju presentasi.
* Hanya anggota dari 2 kelompok yang terpilih dan maju presentasi ini yang berhak mendapatkan **nilai A** pada pertemuan tersebut, sedangkan kelompok lainnya yang tidak maju akan diberikan nilai rata-rata B atau C.

---

## 3. Integrasi Mata Kuliah Pendukung
Pengembangan proyek website dalam mata kuliah ini mengintegrasikan modal dasar dan luaran dari beberapa mata kuliah prasyarat yang telah atau sedang diambil oleh mahasiswa, yaitu:
1. **UI/UX**: Untuk merancang antarmuka sistem dan menerapkan pengalaman pengguna.
2. **APSI (Analisis dan Perancangan Sistem Informasi)**: Untuk menganalisis kebutuhan fungsional dan teknis website.
3. **Pemrograman Dasar**: Sebagai dasar logika penulisan kode program.
4. **Basis Data**: Untuk merancang struktur penyimpanan data website.

*Catatan: Dokumen laporan, analisis kebutuhan, rancangan basis data, maupun rancangan UI/UX dari mata kuliah pendukung tersebut dapat langsung dibawa dan digunakan untuk menyusun dokumentasi proyek Pemrograman Web tanpa perlu diajarkan kembali oleh dosen.*

---

## 4. Konsep Dasar & Arsitektur Website

### Definisi Website vs Webpage
* **Website (Situs Web)**: Sekumpulan halaman digital yang saling terhubung di dalam satu domain yang sama dan diakses menggunakan jaringan internet untuk menyampaikan informasi atau layanan.
* **Webpage (Halaman Web)**: Satu lembar halaman tunggal digital yang memiliki alamat URL yang lebih spesifik.
* **Analogi**: Website dianalogikan sebagai **sebuah buku secara utuh**, sedangkan webpage merupakan **lembar halaman-halaman individu** di dalam buku tersebut.

### Jenis-Jenis Website
1. **Web Statis**: Website yang kontennya jarang sekali berubah. Biasanya diimplementasikan untuk website portofolio pribadi atau profil perusahaan (*company profile*).
2. **Web Dinamis**: Website yang kontennya dapat terus diperbarui dan berubah-ubah secara berkala sesuai dengan kebutuhan pengguna, kondisi, maupun interaksi dari penggunanya. Contohnya adalah Sistem Akademik kampus (seperti SIA) dan sistem Single Sign-On (SSO).

### Domain & Arsitektur Client-Server
* **Sistem SSO UNISA**: Menggunakan alamat URL `sso.unisa.ac.id` (atau domain utama UNISA) yang menunjukkan bahwa sistem tersebut berada di bawah pengelolaan domain kampus UNISA.
* **Proses Client-Server**: Saat pengguna mengetik alamat URL di browser lalu menekan tombol Enter, browser (bertindak sebagai *client*) mengirimkan permintaan (*request*) kepada *web server*, yang kemudian memprosesnya dan mengirimkan respon (*response*) berupa tampilan halaman web.
* **Protokol HTTP vs HTTPS**:
  * Komunikasi pengiriman data ini memanfaatkan protokol HTTP (Hypertext Transfer Protocol).
  * Huruf **S** pada protokol HTTPS merupakan singkatan dari **Security** (Keamanan).
  * Website yang hanya menggunakan HTTP tanpa keamanan sekuritas sangat rentan dan mudah diukur tingkat keamanannya oleh peretas. Untuk proyek kuliah di kelas ini, website yang dikembangkan sementara cukup menggunakan protokol **HTTP saja**.

---

## 5. Tiga Teknologi Utama Pengembang Web

| Teknologi | Fungsi Utama | Karakteristik / Cara Kerja |
| :--- | :--- | :--- |
| **HTML** *(Hypertext Markup Language)* | Membangun struktur dasar, kerangka, atau *framework* dari sebuah website. | Digunakan untuk menyisipkan teks, gambar, dan memutar audio. Tanpa teknologi lain, output halamannya murni rata kiri semua. |
| **CSS** *(Cascading Style Sheets)* | Mengatur estetika tampilan visual, gaya (*style*), tata letak, warna, dan posisi elemen. | Mengatur posisi teks atau elemen agar rata tengah, mewarnai tampilan, serta menempatkan tombol di area tertentu (misalnya kanan atas). |
| **JS** *(JavaScript)* | Memberikan logika, interaksi, dan perilaku dinamis pada halaman web. | Berperan penting untuk membuat tombol (seperti tombol login yang sudah di-styling) dapat berfungsi dan merespon ketika diklik. |

---

## 6. Struktur Dasar & Atribut HTML

### Struktur Dasar HTML
* HTML merupakan bahasa markah menggunakan format teks ASCII.
* Struktur dasar penulisan kode HTML terdiri dari pasangan tag pembuka (misalnya `<html>`) dan tag penutup yang ditandai dengan garis miring (misalnya `</html>`).
* Konten website dituliskan tepat di antara tag pembuka dan tag penutup.
* Kode program diletakkan di dalam struktur utama yang terdiri dari elemen kepala (`head`) dan elemen badan konten (`body`).

### Atribut HTML
* Atribut digunakan untuk menyisipkan informasi tambahan pada elemen HTML.
* Atribut dituliskan hanya pada **tag pembuka**, diawali dengan nama atribut, diikuti tanda sama dengan (`=`), dan nilainya diapit oleh tanda kutip dua (`"..."`) atau kutip satu (`'...'`).

---

## 7. Penutupan Kelas & Agenda Akademik Dosen
* Kelas diakhiri lebih cepat dari jadwal biasanya karena dosen dipanggil oleh Kepala Program Studi (Pak Kadik dan Pak Kis) untuk membantu penyusunan dan penyelesaian borang akreditasi program studi.
* Reakreditasi ini sangat penting karena masa akreditasi program studi akan habis pada tahun depan. Pengajuan borang akreditasi baru harus dilakukan jauh-jauh hari karena proses penilaian dan persetujuan dari kementerian membutuhkan waktu sekitar 3 hingga 6 bulan setelah dinyatakan lolos.
* Jika masa akreditasi program studi sempat mati bertepatan saat masa kelulusan mahasiswa, maka mahasiswa tidak diperbolehkan mengikuti wisuda sampai nilai akreditasi baru resmi diterbitkan.

---

## 8. Persiapan Pertemuan Berikutnya & Informasi Tugas

### Persiapan Praktikum Minggu Depan
* Setiap mahasiswa wajib membawa laptop masing-masing ke kelas.
* Di laptop harus sudah terinstal aplikasi *Text Editor* (bebas memilih perangkat lunak apa saja sesuai kenyamanan masing-masing).
* Pada pertemuan berikutnya, mahasiswa belum memerlukan instalasi server lokal (*local server*) karena kelas baru akan berfokus pada latihan dasar penulisan kode HTML.

### Tugas Kelompok Baru: Pembuatan Handbook
* **Pembentukan Kelompok**: Terdiri dari **3 orang** per kelompok.
* **Instruksi Tugas**: Membuat sebuah buku panduan (*Handbook*) kelompok berbentuk kamus fisik yang berisi daftar informasi lengkap tag-tag HTML yang dibutuhkan.
* **Kelebihan Handbook**: Kelompok diperbolehkan menambahkan contoh potongan baris kode HTML, CSS, maupun JavaScript ke dalam handbook tersebut.
* **Ketentuan Penggunaan**:
  * Setiap kelompok hanya perlu mencetak (*print out*) **1 dokumen handbook** untuk digunakan bersama-sama oleh anggota kelompok.
  * Handbook ini sangat krusial karena akan menjadi satu-satunya referensi fisik yang boleh dibawa mahasiswa ketika diminta maju menulis kode program di papan tulis. 
  * Saat maju menulis kode di papan tulis, mahasiswa **tidak diperkenankan** untuk membuka HP maupun laptop.
  * Mahasiswa harus memastikan bahwa anggota kelompok yang memegang buku handbook fisik tersebut selalu hadir pada setiap pertemuan kelas.
