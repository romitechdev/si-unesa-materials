---
title: "Pertemuan 5"
minutes: 30
updated: "2026-09-29"
---



## 1. Review Gateway & Informasi Perkuliahan

### **Review Pemanfaatan Gateway (Materi Minggu Lalu)**
* **Exclusive Gateway (XOR):** Hanya **satu** cabang/jalur yang boleh aktif/dieksekusi.
* **Parallel Gateway (AND):** Semua cabang yang sejajar aktif secara bersamaan (**paralel/konkuren**).
* **Inclusive Gateway (OR):** Sifatnya fleksibel (gabungan XOR dan AND); bisa memilih **satu**, **beberapa**, atau **semua** cabang sekaligus.

### **Pengumuman Kuis & Tugas 2**
* **Kuis:** Dilaksanakan minggu depan dengan cakupan materi hingga *Gateway* dan *Data Objects*.
* **Tugas 2:** Kesempatan untuk merevisi/memperbaiki Tugas 1 berdasarkan penerapan *Gateway*, *Data Objects*, *Resource* (*Pool & Lane*), serta *Subprocess*.

---

## 2. Business Objects & Data Objects

### **A. Definisi & Peran**
* **Data Object** merujuk pada informasi, dokumen, maupun material fisik yang mengalir (*flow*) di dalam diagram BPMN.
* Menjelaskan alur masuk dan keluar pada suatu aktivitas (*in and out of activity*):
  * **Input:** Data/material yang dibutuhkan oleh suatu aktivitas.
  * **Output:** Data/material yang dihasilkan atau disimpan oleh suatu aktivitas.

### **B. Bentuk & Kategori Data Object**
1. **Dokumen Fisik / Hard Copy:** Berkas cetak (contoh: *paper*, *printed invoice*).
2. **Dokumen Elektronik / Soft Copy:** Berkas digital (contoh: *file PDF*, *electronic invoice*, email).
3. **Database (Notasi Tabung/Silinder):** Tempat penyimpanan dan pengambilan data yang tersistem.
4. **Produk Physical / Material / Bahan Mentah:** *Raw material*, barang fisik, atau produk siap kirim (contoh: produk sepatu yang sudah dibungkus/`Packed product`).
   > **Penekanan Dosen:** *Data Object* tidak selalu terbatas pada dokumen berteks, melainkan mencakup seluruh wujud material fisik riil dan bahan mentah dalam alur produksi/pengiriman.

### **C. Aturan & Cara Penggambaran (Sudut Pandang Activity)**
* **Input Data Object:** Panah ditarik **dari Data Object menuju ke kotak Activity** (menunjukkan aktivitas tersebut memerlukan masukan data/material tersebut).
* **Output Data Object:** Panah ditarik **dari Activity menuju ke Data Object / Database** (menunjukkan aktivitas tersebut menghasilkan berkas baru atau menyimpan data).

### **D. Contoh Penerapan Sesuai Penjelasan Dosen**
* **Perubahan Status Dokumen:** Dokumen `Purchase Order` menjadi input pada aktivitas `Confirm Order`, lalu menghasilkan output dokumen `Purchase Order [Confirmed]`. Dokumennya sama, namun statusnya diperbarui.
* **Penyimpanan ke Database:** Dokumen `Purchase Order [Paid]` menjadi inputan pada aktivitas `Archive Order` yang kemudian disimpan ke dalam `Database`.
* **Interaksi Database:** Aktivitas `Check raw material availability` mengambil data masukan berupa `Supplier catalog` dari `Database`.
* **Objek Fisik Produk:** Pada aktivitas `Ship product`, masukan data objeknya adalah `Packed product` (produk fisik yang sudah dikemas rapi dan siap dikirim).

---

## 3. Resource (Sumber Daya)

### **A. Representasi Visual**
* Sumber daya dalam diagram BPMN digambarkan dan dikelompokkan menggunakan **Pool** dan **Lane**.

### **B. Tiga Kategori Utama Resource**
1. **Process Participant:** Individu atau manusia (*human*) yang menjalankan peran tertentu (contoh: *Warehouse Staff*, *Customer*, *Seller*).
2. **Software System:** Sistem perangkat lunak atau aplikasi (contoh: *ERP System*, *Siakad*, *SSO*, *E-Sco*).
3. **A Piece of Equipment:** Perangkat keras atau mesin-mesin pabrik/produksi yang beroperasi secara fisik.

### **C. Dua Sifat Operasional Resource**
* **Active Resource:** Mampu beroperasi secara mandiri, otomatis, atau independen tanpa perintah terus-menerus dari manusia (contoh: *Software System*, mesin otomatis, robot, AI).
* **Passive Resource:** Membutuhkan pemicu, instruksi, atau dorongan dari pihak lain agar dapat aktif bekerja.

### **D. Penggunaan Lane untuk Sistem Perangkat Lunak**
* Aplikasi/sistem (seperti *ERP System*) dapat diletakkan pada **Lane khusus tersendiri** yang berinteraksi dengan Lane aktor manusia (*Warehouse Staff*) serta terhubung langsung ke notasi `Database`.

---

## 4. Black Box Process vs. White Box Process

### **A. Latar Belakang**
* Menggambarkan seluruh detail aktivitas dari setiap entitas dalam satu diagram akan membuat alur proses menjadi sangat panjang, rumit, dan sulit dibaca.

### **B. White Box Process (Private Process)**
* Alur proses internal yang ditampilkan secara **transparan dan detail** (mencakup seluruh *activity*, *event*, *gateway*, dan logika internal).
* Berfokus pada satu sudut pandang (POV) utama yang ingin ditonjolkan (contoh: POV *Seller*).

### **C. Black Box Process**
* Entitas/Pool luar yang detail aktivitas internalnya **disembunyikan** (ditampilkan dalam bentuk kotak Pool kosong tanpa gambar *activity* di dalamnya). Contoh: Pool *Customer*, Pool *Supplier*.
* Hubungan ke Pool Black Box hanya menggunakan **Message Flow** (garis putus-putus).

### **D. Alasan Penggunaan Black Box Process**
1. **Fokus Sudut Pandang (POV):** Memudahkan pembaca memahami tugas utama entitas yang sedang diteliti tanpa terdistraksi detail entitas lain.
2. **Kerahasiaan Data (*Confidentiality*):** Menjaga alur kerja internal organisasi/mitra lain yang bersifat rahasia (*confidential*) dan tidak boleh dipublikasikan secara umum.

---

## 5. Process Decomposition (Subproses)

### **A. Tujuan Utama**
* ***Simplify* (Menyederhanakan):** Mengelompokkan sekumpulan aktivitas yang saling relevan atau berulang menjadi satu kesatuan agar diagram proses tampak bersih dan mudah dipahami.

### **B. Kapan Boleh Menggunakan Subproses?**
* Ketika diagram menjadi sangat kompleks dan memiliki **sekitar 30 *flow objects*** (total gabungan seluruh *activity*, *event*, dan *gateway*). Angka 30 ini bukan aturan yang kaku (*saklek*), melainkan acuan fleksibel.

### **C. Contoh Kasus Penjelasan Dosen**
* **Aktivitas Berulang Harian:** Ibadah salat 5 waktu (alur wudu dan gerakan dasar sama), makan (mengambil nasi/lauk, menyendok, minum, cuci piring), serta mandi. Aktivitas ini tidak perlu didefinisikan secara berulang-ulang, cukup dikelompokkan dalam satu subproses.
* **Diagram Bisnis:** Pengelompokan aktivitas pengadaan bahan mentah menjadi subproses `Acquire material`, dan pengiriman beserta faktur menjadi subproses `Ship and invoice`.

### **D. Aturan Notasi Subproses**
* Notasi berbentuk kotak *activity* dengan tanda **plus (`+`)** di bagian bawah tengah.
* Ketika subproses dibuka/diklik, alur detail di dalamnya **wajib memiliki Start Event dan End Event sendiri**.

---

## 6. Process Model Reuse & Global Subprocess

### **A. Konsep Dasar**
* **Process Model Reuse:** Menggunakan kembali (*reuse*) subproses yang sudah dibuat pada beberapa proses bisnis yang berbeda di dalam suatu organisasi.

### **B. Keunggulan Global Subprocess**
* **Efisiensi & Konsistensi:** Jika terjadi perubahan alur pada subproses global (misalnya dari tahap ABC menjadi ABCD), maka seluruh proses bisnis yang memanggil subproses tersebut akan **otomatis terbarui secara terintegrasi** (berkonsep mirip dengan variabel/fungsi global dalam pemrograman).

### **C. Perbedaan Visual Notasi**
* **Subproses Biasa:** Garis tepi (*border*) tipis dengan ikon `+`.
* **Global Subprocess:** Garis tepi (*border*) **lebih tebal (*thick border*)** dengan ikon `+`.

### **D. Contoh Kasus dari Dosen**
1. **Subproses `Sign Loan` (Persetujuan Pinjaman):** Dipanggil dalam dua proses bisnis yang berbeda, yaitu **KPR (Pinjaman Rumah)** dan **Pinjaman Pendidikan (Akademik)**.
2. **Subproses `Payment` (Pembayaran):** Dipanggil di berbagai transaksi penjualan (aliran pembayaran *cash*, *cashless*, QRIS, debit).

---

## 7. Rubrik Penilaian Tugas 2

Untuk mendapatkan nilai maksimal pada Tugas 2, pastikan diagram BPMN Anda telah menerapkan elemen-elemen berikut:
1. Pemanfaatan *Gateway* (XOR, AND, OR) yang tepat sesuai logika alur.
2. Penggunaan *Data Objects* (dokumen/material) dan *Database*.
3. Pembagian *Resource* menggunakan *Pool* dan *Lane* (termasuk Lane khusus sistem jika ada).
4. Penerapan *Subprocess* atau *Global Subprocess* untuk menyederhanakan alur yang kompleks.

