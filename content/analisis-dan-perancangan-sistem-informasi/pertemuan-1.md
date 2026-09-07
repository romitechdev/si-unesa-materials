---
title: "Pertemuan 1"
description: "Pengantar minggu 1"
minutes: 30
updated: "2026-09-02"
---

## 1. Aturan dan Etika Perkuliahan

Perkuliahan menerapkan sistem **poin pelanggaran (minus)** yang dapat memengaruhi nilai akhir.

* **Waktu kuliah:** 09.30–12.00 WIB.
* **Toleransi keterlambatan:** 15 menit, maksimal masuk pukul 09.45 WIB. Mulai 09.46 WIB mahasiswa tidak diperbolehkan masuk karena dapat mengganggu konsentrasi kelas.
* **Kondusivitas kelas:** Dilarang bercanda berlebihan atau melakukan celetukan yang mengganggu proses pembelajaran.
* **Kata-kata tidak layak:** Pelanggaran dikenakan **-10 poin**.
* **Penyalahgunaan gadget:** Penggunaan HP/laptop di luar instruksi perkuliahan dikenakan **-5 poin**.
* **Tidur di kelas:** Dikenakan **-30 poin**.
* **Akumulasi poin:** Maksimal mencapai **-60 poin** dan langsung memotong nilai akhir akademik. Contoh: nilai akademik 95 dengan pelanggaran -60 menjadi **35**.

> Tujuan aturan ini adalah membentuk mahasiswa yang tidak hanya memiliki kemampuan akademik, tetapi juga memiliki etika dan mampu menghargai orang lain di dunia kerja.

## 2. Format Perkuliahan & Distribusi SKS

* Mata kuliah berbobot **3 SKS**.
* **2 SKS:** Penyampaian teori dan pemberian tugas oleh dosen di kelas.
* **1 SKS:** Diskusi mandiri bersama kelompok/tim untuk membagi dan membahas tugas.
* **Anggota kelompok:** Sementara ditetapkan **3 orang per kelompok**, menyesuaikan kondisi presensi kelas.

## 3. Sistem UAS & Kriteria Objek Analisis

* **UAS:** Dilaksanakan lebih awal, yaitu pada **Minggu ke-14 dan 15**.
* **Format:** Presentasi kelompok mengenai hasil **analisis dan perancangan sistem** pada organisasi nyata.
* **Objek studi kasus:** Organisasi di lingkungan prodi, fakultas, maupun luar kampus, seperti bengkel, perpustakaan, dan organisasi lainnya.
* **Kriteria utama:** Organisasi harus benar-benar membutuhkan **komputerisasi** karena proses bisnisnya kompleks atau memiliki transaksi yang ramai tetapi masih dikelola secara manual.
* **Objek yang tidak disarankan:** Usaha kecil yang masih mudah dikelola secara manual, seperti laundry kecil atau Toko Madura.

## 4. Rencana Pembelajaran Semester (RPS)

| Minggu    | Materi/Kegiatan                                                                                                             |
| --------- | --------------------------------------------------------------------------------------------------------------------------- |
| **1**     | Definisi Analisis dan Perancangan Sistem.                                                                                   |
| **2**     | Tahapan pengembangan sistem informasi serta model **Waterfall, RAD, dan Prototype**. Tugas mandiri untuk minggu berikutnya. |
| **3**     | Fungsi analisis sistem, pembentukan kelompok, dan pemilihan organisasi studi kasus.                                         |
| **4**     | Pengumpulan data kebutuhan sistem melalui **survei, observasi, dan wawancara**.                                             |
| **5**     | Teori dan pengerjaan **Flow Map sistem berjalan (As-Is)**.                                                                  |
| **6**     | Pengerjaan **Flow Map sistem yang diusulkan (To-Be)**.                                                                      |
| **7**     | Presentasi dan penunjukan hasil rancangan **Flow Map As-Is dan To-Be** kelompok.                                            |
| **8**     | **UTS**.                                                                                                                    |
| **9–11**  | Pemodelan alur proses menggunakan pendekatan **Structured (DFD)** dan **Object-Oriented (UML)**.                            |
| **11–12** | Pemodelan basis data menggunakan **ERD atau Class Diagram**.                                                                |
| **13**    | Desain antarmuka berupa **Wireframe (UI)** berdasarkan database/tabel yang telah dirancang.                                 |
| **14–15** | **UAS:** Presentasi proyek kelompok.                                                                                        |

### Pendekatan Pemodelan Sistem

**1. Structured — DFD**

```text
Context Diagram
      ↓
Diagram Level 1
      ↓
Conceptual Data Modeling (CDM)
      ↓
Physical Data Modeling (PDM)
```

**2. Object-Oriented — UML**

```text
Use Case Diagram
      ↓
Activity Diagram
      ↓
Sequence Diagram
      ↓
Class Diagram
```

## 5. Konsep Dasar Analisis & Perancangan Sistem Informasi

### A. Analisis Sistem (*System Analysis*)

**Definisi:** Proses menguraikan sistem informasi yang utuh menjadi komponen-komponennya untuk mengidentifikasi dan mengevaluasi permasalahan, hambatan, serta kebutuhan bisnis.
**Fokus analisis:**

1. Mempelajari proses yang sedang berjalan (**As-Is**).
2. Mengidentifikasi kekuatan dan kelemahan sistem lama.
3. Menentukan kebutuhan informasi pengguna, seperti **User, Admin, dan Pimpinan/Manajemen**.
   **Tujuan:** Memberikan landasan bagi perancang sistem agar solusi teknologi tepat sasaran, meningkatkan efisiensi operasional, dan mendukung pengambilan keputusan manajemen.

### B. Perancangan Sistem (*System Design*)

**Definisi:** Proses membentuk cetak biru (*blueprint*) yang menjelaskan bagaimana sistem akan diimplementasikan secara teknis dan fungsional.
**Komponen utama:**

* Desain data/database.
* Desain proses/alur kerja.
* Desain antarmuka/*wireframe*.

## 6. Contoh Kasus: Perpustakaan Fakultas Teknik

### Sistem Lama — *As-Is*

Operasional perpustakaan masih dilakukan secara **manual**, seperti:

* Pengisian buku presensi kunjungan.
* Pencarian buku tanpa katalog komputer terintegrasi.
* Pencatatan transaksi peminjaman menggunakan buku besar.

Kondisi tersebut tidak efisien karena jumlah aset buku yang banyak.

### Sistem Usulan — *To-Be*

Membangun rancangan **aplikasi perpustakaan terkomputerisasi** dengan:

* **Tabel Buku:** kode, judul, penulis, penerbit, tahun, ISBN.
* **Tabel Member/Mahasiswa.**
* **Tabel Petugas.**
* Tabel transaksi peminjaman/pengembalian yang menggunakan *foreign key* dari tabel master.
* **Reservasi online:** Mahasiswa dapat melakukan *booking* ketika buku sedang habis.
* **Notifikasi pengembalian:** Mengingatkan anggota mengenai batas waktu pengembalian.
* **Katalog online:** Anggota dapat mencari buku secara mandiri.
* **Riwayat transaksi:** Anggota dapat melihat riwayat peminjaman.

### Kebutuhan Berdasarkan Pengguna

| Pengguna          | Kebutuhan                                                                                           |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| **Mahasiswa**     | Katalog, riwayat peminjaman, dan status reservasi.                                                  |
| **Admin/Petugas** | Pengelolaan buku, data member, dan transaksi.                                                       |
| **Pimpinan**      | Rekap transaksi bulanan dan evaluasi kelancaran pengembalian untuk mendukung pengambilan keputusan. |

## 7. Sembilan Tahapan Pengembangan Sistem Informasi (SDLC)

Secara garis besar, pengembangan sistem informasi terdiri dari **9 tahapan**:

1. **Identifikasi Masalah** — Mengenali masalah awal pada organisasi, misalnya operasional yang masih manual.
2. **Pengumpulan Data** — Melakukan observasi, survei, dan wawancara untuk mengetahui kebutuhan sistem.
3. **Desain Konseptual** — Merancang model proses menggunakan diagram seperti DFD atau UML.
4. **Desain Fisik/Database** — Merancang struktur database menggunakan CDM/PDM atau Class Diagram.
5. **Desain Antarmuka** — Membuat rancangan tampilan visual aplikasi berupa **Wireframe (UI)**.
6. **Konstruksi/Pembangunan Aplikasi** — Melakukan *coding* untuk mengimplementasikan rancangan. Tahap ini dilanjutkan pada mata kuliah **Pemrograman Web**.
7. **Uji Coba (*Testing*)** — Menguji sistem, salah satunya menggunakan **Black Box Testing** untuk menguji fungsi aplikasi.
8. **Serah Terima & Pelatihan** — Menyerahkan aplikasi kepada pengguna dan memberikan pelatihan penggunaan.
9. **Pemeliharaan (*Maintenance*)** — Melakukan pemeliharaan dan memberikan dukungan ketika ditemukan *error* setelah sistem dirilis.

> **Batas tugas APSI:** Pengerjaan mata kuliah ini hanya sampai **Tahap 5 — Desain Antarmuka/Wireframe**. Tahap konstruksi atau coding dilanjutkan pada mata kuliah **Pemrograman Web**.

## 8. Alur Besar Mata Kuliah

```text
Analisis Masalah
      ↓
Pengumpulan Data
      ↓
Analisis Sistem Berjalan (As-Is)
      ↓
Perancangan Sistem (To-Be)
      ↓
Flow Map
      ↓
DFD / UML
      ↓
ERD / Class Diagram
      ↓
Database
      ↓
Wireframe / UI
      ↓
UAS — Presentasi Proyek
```

## 9. Inti yang Perlu Dipahami

> **APSI bukan langsung membuat aplikasi. APSI berfokus pada memahami masalah, menganalisis sistem yang berjalan, merancang sistem yang diusulkan, memodelkan proses dan data, lalu menghasilkan blueprint/wireframe sebagai dasar pembangunan aplikasi.**

Urutan sederhananya:

```text
MASALAH
  ↓
ANALISIS
  ↓
KEBUTUHAN
  ↓
AS-IS
  ↓
TO-BE
  ↓
PEMODELAN
  ↓
DATABASE
  ↓
WIREFRAME
  ↓
APLIKASI
```

**Catatan:** Dalam mata kuliah APSI, mahasiswa berhenti pada tahap **Wireframe/UI**. Pembangunan aplikasi dilakukan pada mata kuliah **Pemrograman Web**.

