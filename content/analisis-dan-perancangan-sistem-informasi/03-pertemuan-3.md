---
title: "Pertemuan 3"
description: "Analisis Kebutuhan Sistem, Evaluasi Studi Kasus Organisasi, dan Teknik Pengumpulan Data Lapangan"
minutes: 30
updated: "2026-09-15"
---

## 1. Evaluasi dan Ketentuan Pemilihan Organisasi Studi Kasus Kelompok

Pada pertemuan minggu ke-3, dilakukan peninjauan dan pengerahan langsung terhadap pilihan organisasi yang akan dijadikan objek studi kasus oleh masing-masing kelompok.

### A. Kriteria Umum Pemilihan Organisasi

- Organisasi harus memiliki **struktur yang jelas**, **data yang akurat**, serta **proses bisnis atau arus transaksi yang cukup ramai dan rumit** sehingga benar-benar membutuhkan sistem informasi.
- **Dilarang** memilih usaha mikro/kecil yang operasionalnya masih sangat sederhana dan belum membutuhkan sistem terkomputerisasi, seperti:
  - Dekorasi/Event Organizer (EO) rumahan kecil
  - Tempat servis mikro

### B. Review dan Peta Opsi Organisasi Kelompok

| Kelompok | Organisasi | Arahan Dosen |
|----------|------------|--------------|
| **1** | Kantor Pos — Bagian Distribusi | Amati seluruh proses bisnis distribusi pengiriman surat dan paket secara detail, mulai dari penerimaan hingga pengiriman. |
| **2** | Klinik Unesa | Disetujui karena bergerak di bidang pelayanan kesehatan yang memiliki alur data pasien dan medis. |
| **4** | Event Organizer (EO) | Wajib memilih EO skala besar yang menangani banyak klien, penjadwalan kompleks, dan koordinasi aktivitas — bukan EO rumahan. |
| **5** | Bengkel Mobil | Harus memilih bengkel besar (sekelas diler Toyota atau AHASS) yang mencakup pelayanan servis sekaligus penjualan *sparepart*. Alternatif lain: menganalisis bagian SDM/HRD internal kampus Unesa. |
| **6** | Internal Kampus — Aset/Fasilitas | Membahas sistem penyewaan fasilitas atau aset internal kampus (seperti gedung audit atau ruang kelas di tingkat fakultas). |
| **7** | Puskesmas | Disetujui; jika Puskesmas sudah terkomputerisasi, analisis dilakukan dengan pendekatan *berjalan mundur*. |
| **8** | Servis Komputer/Laptop | Diarahkan memilih penyedia jasa servis skala besar yang ramai pelanggan (antrean berhari-hari), menyediakan penjualan laptop/aksesoris, serta layanan perbaikan. |
| **9** | Usaha Ritel/Jasa Ramai | Mengambil tempat usaha yang memiliki tingkat keramaian tinggi (misalnya transaksi mencapai 32 pelanggan per hari). |
| **10** | Distributor Sparepart Mesin | Memfokuskan analisis pada alur transaksi penjualan serta pembelian barang *sparepart*. |

---

## 2. Identifikasi dan Simulasi Proses Bisnis Organisasi (*As-Is*)

Dosen memberikan gambaran mendalam mengenai cara melakukan observasi dan memetakan alur kerja sistem berjalan (*As-Is*) pada beberapa bentuk organisasi.

### A. Simulasi Proses Bisnis Bengkel Mobil

1. **Penerimaan Kendaraan** — Mobil pelanggan masuk dan diterima oleh *Customer Service* (CS).
2. **Pencatatan Data Pelanggan** — CS mengecek apakah kendaraan/pemilik sudah terdaftar. Jika belum, CS melakukan input data pelanggan baru.
3. **Identifikasi Keluhan** — CS mencatat keluhan/kerusakan kendaraan, lalu menyerahkan berkas perintah kerja ke mekanik.
4. **Pengerjaan & Pelaporan** — Mekanik melakukan servis/perbaikan, kemudian melaporkan hasil pengerjaannya kembali ke CS.
5. **Permintaan Sparepart** — Jika membutuhkan *sparepart* baru, mekanik/CS mengajukan permintaan ke bagian gudang/penjualan *sparepart* hingga barang dikeluarkan dan dipasang pada kendaraan.
6. **Pembayaran di Kasir** — Seluruh komponen biaya (jasa mekanik dan harga *sparepart*) diakumulasikan dan dibayarkan oleh pelanggan melalui kasir.

### B. Simulasi Proses Bisnis Perpustakaan

1. **Presensi Kunjungan** — Pengunjung mengisi data kunjungan (NIM, nama, dll.) saat tiba.
2. **Pengelolaan Data Buku** — Petugas mengelola dan mencatat detail atribut buku, seperti:
   - Kode buku
   - Judul
   - Pengarang/penulis
   - Penerbit
   - ISBN
   - Edisi
   - Tahun terbit
   
   > *(Pencatatan menggunakan Microsoft Excel masih dikategorikan sebagai sistem manual/semi-manual.)*

3. **Pendaftaran Anggota (*Member*)** — Calon anggota (mahasiswa/dosen internal FT, luar FT/Unesa, maupun masyarakat umum) mengisi formulir pendaftaran. Petugas mencatat data ke buku besar anggota dan menerbitkan kartu anggota berisi kode unik.
4. **Transaksi Peminjaman & Pengembalian** — Meliputi:
   - Pencatatan kode transaksi
   - Tanggal transaksi
   - Kode peminjam
   - Kode buku
   - Tanggal pengembalian
   - Pencatatan denda
   - Fitur reservasi/boking buku

### C. Simulasi Proses Bisnis Fasilitas Gym / Vokasi

Meliputi alur:
- Pendaftaran keanggotaan
- Jadwal/kuota penggunaan alat *gym*
- Transaksi penyewaan
- Penyusunan laporan kehadiran dan penggunaan alat harian untuk pimpinan

---

## 3. Konsep Analisis "Berjalan Mundur" (*Backward Analysis*)

| Aspek | Penjelasan |
|-------|------------|
| **Definisi** | Pendekatan analisis yang digunakan apabila organisasi tempat studi kasus **sudah memiliki dan menggunakan aplikasi/sistem informasi terkomputerisasi**. |
| **Mekanisme Kerja ("Mereteli")** | Mahasiswa menganalisis secara terbalik dengan menanyakan bagaimana prosedur kerja dan pencatatan dilakukan secara manual **sebelum** aplikasi tersebut dibangun. |
| **Analisis *As-Is* (Sistem Lama)** | Menggambarkan alur manual masa lalu (seperti pengisian formulir kertas dan pencatatan pada buku besar). |
| **Analisis *To-Be* (Sistem Diusulkan)** | Menggambarkan alur terkomputerisasi berbasis web saat ini (misalnya mengklik menu pendaftaran di web, mengisi form digital, lalu menekan tombol *Save* untuk menyimpan data langsung ke database). |

---

## 4. Tiga Komponen Utama Identifikasi Kebutuhan Sistem

Dalam menyusun wawancara dan observasi kebutuhan sistem, mahasiswa wajib mendefinisikan tiga komponen utama:

### 1. Kebutuhan Data (Input)

Memetakan seluruh atribut data yang harus dimasukkan ke dalam sistem.

| Jenis Data | Atribut |
|------------|---------|
| **Data Anggota** | NIK/NIM, nama lengkap, alamat, nomor kontak |
| **Data Buku** | Kode buku, judul, pengarang, penerbit, edisi, tahun terbit, ISBN |
| **Data Transaksi** | Kode transaksi, tanggal pinjam, kode anggota, kode buku, tanggal kembali, status reservasi |

### 2. Kebutuhan Fungsional (Proses)

Memetakan seluruh fungsi dan alur kerja yang dapat dilakukan oleh sistem sesuai dengan aktivitas bisnis organisasi.

### 3. Kebutuhan Laporan (Output/Informasi)

Memetakan laporan ringkas (rekapitulasi) yang dihasilkan dari pemrosesan data untuk diserahkan kepada pihak pimpinan/manajemen.

**Contoh Output:**
- Laporan rekap harian kunjungan
- Laporan data anggota aktif
- Laporan inventaris buku
- Laporan transaksi peminjaman/pengembalian
- Laporan riwayat reservasi

---

## 5. Pembagian Peran dan Pelaksanaan Tugas Lapangan Kelompok

### A. Pembagian Peran 3 Anggota Kelompok saat Pengumpulan Data

Untuk memastikan pengumpulan data berjalan efektif saat melakukan observasi dan wawancara di lapangan, 3 anggota kelompok membagi tugas sebagai berikut:

| Peran | Tugas |
|-------|-------|
| **Pewawancara (1 Orang)** | Bertugas mengajukan daftar pertanyaan analisis kebutuhan kepada narasumber. |
| **Pencatat (1 Orang)** | Bertugas mencatat seluruh jawaban, informasi, dan penjelasan dari narasumber. |
| **Dokumentator (1 Orang)** | Bertugas mengambil foto kegiatan observasi/wawancara serta mengabadikan (mengambil foto) formulir atau dokumen fisik yang tidak diperbolehkan untuk dibawa pulang. |

### B. Prosedur Kerja Kelompok

- **Penyusunan Pertanyaan** — Daftar pertanyaan wawancara dibuat dan didiskusikan bersama oleh seluruh anggota kelompok agar mencakup seluruh kebutuhan input, proses, dan output.
- **Target Output Pertemuan Minggu Ke-3** — Menyelesaikan seluruh analisis kebutuhan (*requirement analysis*) melalui wawancara dan observasi di lapangan. Data hasil analisis ini harus sudah final agar siap dituangkan ke dalam penggambaran **Flow Map As-Is** dan **Flow Map To-Be** pada minggu berikutnya.

---

## ✅ Kesimpulan

Minggu ke-3 APSI berfokus pada:

1. **Pemilihan organisasi studi kasus** yang memenuhi kriteria kompleksitas proses bisnis.
2. **Pemetaan proses bisnis *As-Is*** melalui simulasi bengkel, perpustakaan, dan gym.
3. **Pemahaman *Backward Analysis*** untuk organisasi yang sudah terkomputerisasi.
4. **Identifikasi 3 komponen kebutuhan sistem**: Input, Proses, dan Output.
5. **Pembagian peran kelompok** dalam pengumpulan data lapangan.
