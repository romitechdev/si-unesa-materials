---
title: "Pertemuan 4"
description: "Pertemuan Minggu ke-4 mata kuliah **Analisis dan Perancangan Sistem Informasi (APSI)** berfokus pada **tahap analisis proses bisnis** berdasarkan hasil observasi dan wawancara yang telah dilakukan oleh setiap kelompok di organisasi studi kasus[1].  Tujuan utama dari materi minggu ini adalah memberikan panduan praktis untuk memecah seluruh aktivitas operasional organisasi menjadi **rincian langkah-langkah prosedural, aktor yang terlibat, dokumen yang digunakan, serta media pencatatannya**, sebagai landasan sebelum membuat diagram *Flow Map As-Is* di minggu berikutnya[1]."
minutes: 30
updated: "2026-09-27"
---

## 1. Konsep Utama & Tujuan Pertemuan Minggu 4
* **Penguraian Proses Bisnis**: Menganalisis hasil wawancara/observasi dan mengelompokkannya ke dalam beberapa **proses bisnis utama** yang terdefinisi.
* **Pendokumentasian Langkah Operasional**: Menyusun urutan alur kerja dari setiap proses bisnis secara mendetail, baik secara vertikal maupun horizontal menggunakan tanda panah, sebelum diterjemahkan ke dalam simbol-simbol standar *Flow Map*.
* **Persiapan Menuju *Flow Map As-Is***: Menyiapkan pemetaan aktor, dokumen fisik/paper, serta media penyimpanan manual agar saat memasuki perkuliahan Minggu 5, setiap kelompok tinggal memasukkan alur tersebut ke dalam simbol diagram.

---

## 2. Tahapan Identifikasi Proses Bisnis (Langkah demi Langkah)

Untuk setiap proses bisnis yang ditemukan di lapangan, kelompok wajib mengidentifikasi **4 komponen utama**:

1. **Pengidentifikasian Aktor (Entitas yang Terlibat)**:
   * Menentukan siapa saja aktor internal maupun eksternal yang menjalankan atau menerima pelayanan dalam proses bisnis tersebut.
   * *Contoh*: Calon Anggota, Petugas Perpustakaan, Dokter, Kasir, atau Admin.
2. **Penyusunan Urutan Aktivitas / Prosedur (Aksi Atomik)**:
   * Menuliskan kronologi tindakan dari awal hingga akhir pelayanan secara sistematis.
   * Memperlihatkan kapan alur atau berkas berpindah dari satu aktor ke aktor lainnya.
3. **Identifikasi Berkas / Dokumen / Form**:
   * Menentukan berkas atau formulir apa yang diterbitkan, diisi, atau diserahkan dalam proses tersebut.
   * Membedakan jenis media: apakah berbentuk **kertas fisik/karton** (*paper document*) atau **data/file digital** (seperti NIK/NIM).
4. **Identifikasi Media Pencatatan & Penyimpanan Data**:
   * Mendata di mana informasi tersebut dicatat dan disimpan oleh petugas pada sistem manual (misalnya: Buku Besar Catatan Registrasi, file Excel, atau Word).

---

## 3. Studi Kasus Konkrit (Simulasi Alur Proses Pendaftaran Anggota Perpustakaan FT)

Sebagai gambaran nyata, dosen memberikan simulasi pemetaan satu proses bisnis pada Perpustakaan Fakultas Teknik:

### **A. Identifikasi Komponen**
* **Nama Proses Bisnis**: Pendaftaran Anggota Perpustakaan.
* **Aktor yang Terlibat**: 
  1. Calon Anggota
  2. Petugas Perpustakaan
* **Berkas/Dokumen**: Formulir Pendaftaran Fisik, Buku Catatan Anggota (Buku Besar), dan Kartu Anggota (ID Anggota).

### **B. Rincian Alur Prosedur Kerja**
1. **Calon Anggota** menerima **Formulir Pendaftaran**.
2. **Calon Anggota** mengisi formulir pendaftaran tersebut.
3. **Calon Anggota** menyerahkan formulir pendaftaran yang telah diisi kepada **Petugas Perpustakaan**.
4. **Petugas Perpustakaan** menerima formulir pendaftaran dari Calon Anggota.
5. **Petugas Perpustakaan** mencatatkan data identitas calon anggota ke dalam **Buku Catatan Anggota**.
6. **Petugas Perpustakaan** menerbitkan/membuatkan **Kartu Anggota** (ID Anggota).
7. **Petugas Perpustakaan** menyerahkan Kartu Anggota kepada Calon Anggota.
8. **Calon Anggota** menerima Kartu Anggota dan secara resmi sah menjadi **Anggota Perpustakaan** (Proses Selesai).

### **C. Contoh Pengelompokan Proses Bisnis Lainnya dalam Organisasi**
Dalam satu organisasi yang diamati, umumnya terdapat beberapa proses bisnis terpisah. Contoh pada sistem perpustakaan:
1. **Pendaftaran Anggota** (Melibatkan 2 Aktor: Calon Anggota & Petugas).
2. **Pengelolaan Data Petugas** (Melibatkan 1 Aktor: Admin/Petugas).
3. **Transaksi Peminjaman Buku** (Melibatkan 2 Aktor: Anggota & Petugas).
4. **Transaksi Pengembalian Buku** (Melibatkan 2 Aktor: Anggota & Petugas).
5. **Booking / Reservasi Buku** (Melibatkan 2 Aktor: Anggota & Petugas).

---

## 4. Pemetaan Awal Menuju Simbol *Flow Map* (Minggu 5)

Meskipun pada Minggu 4 pengerjaan alur belum diwajibkan menggunakan simbol diagram formal, dosen memberikan panduan awal bagaimana memetakan jenis data ke simbol *Flow Map*:

* **Berkas Fisik / Kertas / Karton (Paper)**:
  * Formulir kertas, bukti cetak, atau kartu fisik (seperti Kartu Anggota dari karton) dipetakan menggunakan **Simbol Dokumen** (simbol dengan garis lengkung di bagian bawah).
* **Pencatatan Manual**:
  * Aktivitas mencatat secara manual di buku besar atau formulir fisik dipetakan sebagai **Operasi Manual** (*Manual Operation*).
* **Input / Data Digital**:
  * Entri data atau pengidentifikasian berbasis kode digital (seperti NIM/NIP/ID digital) dipetakan menggunakan simbol input/data digital.
* **Proses Terkomputerisasi**:
  * Aktivitas yang diproses secara otomatis oleh aplikasi/sistem dipetakan menggunakan simbol **Persegi Panjang** (*Process*) yang terhubung ke penyimpanan basis data.

---

## 5. Catatan Penting & Arahan Dosen dalam Sesi Konsultasi

1. **Penerapan *Backward Analysis* (Analisis Berjalan Mundur)**:
   * Jika organisasi studi kasus saat ini **sudah menggunakan aplikasi/sistem terkomputerisasi**, kelompok wajib menerapkan analisis berjalan mundur.
   * Gali kembali bagaimana prosedur operasional manual dijalankan **sebelum aplikasi tersebut ada** (misalnya pencatatan di buku besar registrasi, pembayaran tunai manual, atau pembuatan berkas kertas).
2. **Analisis Kebutuhan Sistem & Pemetaan Celah (*Gap Analysis*)**:
   * Identifikasi bagian mana dari proses bisnis yang **belum memiliki sistem informasi** atau yang masih menimbulkan masalah inefisiensi pada sistem manual lama.
3. **Kemandirian Tugas Kelompok**:
   * Setiap kelompok wajib menyusun sendiri daftar proses bisnis beserta tahapan-tahapannya secara mandiri sesuai dengan kondisi nyata organisasi yang diteliti.
4. **Kesiapan untuk Perkuliahan Minggu 5**:
   * Seluruh rincian langkah, aktor, dan berkas yang disusun pada Minggu 4 akan langsung dimasukkan ke dalam bentuk diagram visual **Flow Map As-Is** pada pertemuan Minggu 5.

