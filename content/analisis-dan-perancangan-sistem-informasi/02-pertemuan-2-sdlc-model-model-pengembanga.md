---
title: "Pertemuan 2: SDLC & Model-Model Pengembangan Sistem Informasi"
description: "Catatan perkuliahan Analisis dan Perancangan Sistem Informasi (APSI) Week 2. Membahas batasan ruang lingkup analisis-desain, komparasi mendalam 5 metodologi SDLC (Waterfall, Prototyping, RAD, Spiral, dan Agile/Scrum), serta pedoman teknis pengerjaan proyek studi kasus kelompok di lapangan (pemetaan Flow Map As-Is vs To-Be)."
minutes: 30
updated: "2026-09-07"
---



## 1. Konsep Dasar SDLC & Batasan Ruang Lingkup APSI

* **Definisi SDLC (*Software Development Life Cycle*):**  
  Kerangka kerja terstruktur yang memandu siklus hidup rekayasa perangkat lunak mulai dari inisiasi, perancangan arsitektur, konstruksi kode, pengujian kualitas, hingga pemeliharaan sistem operasional.
* **Batasan Ruang Lingkup Kuliah APSI:**  
  Fokus perkuliahan dibatasi secara ketat pada **fase Analisis Kebutuhan dan Perancangan Sistem (Desain)**. Mahasiswa tidak dituntut melakukan penulisan kode (*coding*) maupun pengujian fungsional aplikasi nyata, karena kompetensi implementasi teknis dialokasikan pada mata kuliah lanjutan (seperti Pemrograman Web).

---

## 2. Eksplorasi 5 Model Pengembangan Sistem

### A. Model Waterfall (Linear Sequential / Klasik)

Model klasik dengan alur linier bertingkat yang mengharuskan penyelesaian tuntas setiap fase sebelum beralih ke fase berikutnya.


```

[ Analisis Kebutuhan ]  --> Flow Map As-Is/To-Be, Dokumen SRS
│
▼
[ Desain Sistem ]     --> DFD/UML, CDM/PDM, Wireframe UI
│
▼
[ Implementasi ]      --> Pengodean (Coding) & Dokumentasi Kode
│
▼
[ Pengujian ]       --> Black Box Testing, Bug Report
│
▼
[ Pemeliharaan ]      --> Pelatihan Pengguna & Operasional

```

* **Rincian Fase Analisis & Desain (Fokus APSI):**
  * **Requirement Analysis:** Pemetaan alur data eksisting (*Flow Map As-Is*), identifikasi *bottleneck*, dan perumusan usulan sistem baru (*Flow Map To-Be*) yang dituangkan dalam dokumen SRS (*System Requirement Specification*).
  * **System Design:** 
    * *Pendekatan Terstruktur:* Diagram Konteks, DFD Level 1, CDM (*Conceptual Data Model*), dan PDM (*Physical Data Model*).
    * *Pendekatan Berorientasi Objek:* Diagram UML (*Use Case*, *Activity*, *Sequence*, *Class Diagram*).
    * *Antarmuka Pengguna:* Perancangan *wireframe* antarmuka (UI).
* **Aturan Pasca-Rilis (*Maintenance*):**  
  Penambahan modul/fitur baru setelah rilis operasional tidak boleh disisipkan ke dalam lingkup proyek lama, melainkan wajib didefinisikan sebagai kontrak proyek baru karena mengubah estimasi anggaran dan durasi.
* **Evaluasi Model:**
  * **Kelebihan:** Dokumentasi artefak sangat lengkap dan terstruktur; pengelolaan mudah dipantau melalui kejelasan *deliverables*.
  * **Kekurangan:** Sangat kaku (*inflexible*); komunikasi minim dengan pengguna hingga akhir fase; risiko kegagalan fatal jika analisis kebutuhan awal keliru; **tidak disarankan untuk skripsi** karena rentang waktunya yang panjang.

---

### B. Model Prototyping

Pendekatan iteratif cepat yang digunakan ketika pengguna belum memiliki gambaran spesifikasi kebutuhan secara mendalam.

* **Alur Siklus:**  
  $\text{Requirement Gathering} \rightarrow \text{Quick Design} \rightarrow \text{Build Prototype} \rightarrow \text{User Evaluation} \rightarrow \text{Refine Prototype} \rightarrow \text{Full Implementation}$
* **Karakteristik:** Menghadirkan wujud produk visual/percontohan di awal agar pengguna dapat mengoreksi kekurangan fungsionalitas secara langsung.
* **Evaluasi Model:**
  * **Kelebihan:** Spesifikasi kebutuhan akhir jauh lebih presisi; meminimalkan kesalahpahaman ekspektasi UI; deteksi cacat sistem sejak dini.
  * **Kekurangan:** Rawan terjebak dalam siklus revisi tanpa akhir jika batasan revisi tidak disepakati di awal; risiko pengembang mengambil jalan pintas kualitas (*code shortcut*); klien sering salah mengira prototipe kasar sebagai produk siap rilis.

---

### C. Model RAD (*Rapid Application Development*)

Metode pengembangan inkremental yang menekankan pada kecepatan eksekusi tinggi dan modularitas paralel.

* **Siklus Hidup (60 – 90 Hari):**
  1. **Requirement Planning:** Penetapan ruang lingkup dan batasan modul fungsional.
  2. **User Design Workshop:** Kolaborasi intensif merancang *Flow Map*, diagram sistem, dan *wireframe* bersama pengguna.
  3. **Rapid Construction:** Perakitan modul kerja menggunakan komponen yang dapat digunakan ulang (*reusable components*).
  4. **Cut Over:** Pengujian terpadu bersama pengguna dan serah terima rilis.
* **Evaluasi Model:**
  * **Kelebihan:** Sangat cepat; umpan balik intensif; **sangat direkomendasikan untuk tugas akhir/skripsi** yang memiliki batas waktu 2–3 bulan.
  * **Kekurangan:** Memerlukan komitmen kedisiplinan tinggi dari tim; tidak cocok untuk sistem raksasa yang sulit didekomposisi menjadi modul independen.

---

### D. Model Spiral

Model pengembangan berbasis risiko (*risk-driven*) yang menggabungkan sifat iteratif *Prototyping* dengan kontrol ketat *Waterfall*.

* **Struktur Putaran (*Spiral Loop*):**  
  Penentuan Tujuan, Analisis & Mitigasi Risiko (Prototipe) Konstruksi & Uji Evaluasi & Rencana Iterasi Berikutnya
* **Karakteristik Khusus:** Setiap putaran wajib menghasilkan analisis manajemen risiko komprehensif. Umumnya diimplementasikan pada proyek skala enterprise raksasa atau inisiatif instansi pemerintah (misal: sistem SPBE) untuk mencegah inefisiensi anggaran publik.
* **Evaluasi Model:**
  * **Kelebihan:** Perlindungan manajemen risiko paling ketat; fleksibel menampung perubahan pada putaran iterasi baru.
  * **Kekurangan:** Biaya konsultasi/pengembangan sangat mahal; membutuhkan keahlian penilai risiko spesialis; berlebihan (*overkill*) untuk proyek berskala kecil hingga menengah.

---

### E. Model Agile / Scrum

Kerangka kerja inkremental adaptif yang memecah proyek menjadi siklus-siklus kerja bertahap yang berorientasi pada kolaborasi aktif.

* **Komponen & Alur Kerja:**
  * **Product Backlog:** Daftar prioritas kebutuhan fitur dan modul fungsional sistem.
  * **Sprint Planning & Execution:** Perencanaan siklus kerja pendek (Sprint berdurasi 1–4 minggu) untuk menyelesaikan sekumpulan fitur secara mandiri.
  * **Sprint Review & Retrospective:** Demonstrasi produk fungsional kepada klien di setiap akhir Sprint untuk evaluasi sebelum digabungkan ke sistem utama.
* **Evaluasi Model:**
  * **Kelebihan:** Daya adaptasi tinggi terhadap perubahan; nilai nyata (*usable software*) dapat dirasakan pengguna secara berkala; perubahan fitur pada satu modul tidak mengganggu kerja tim modul lain.
  * **Kekurangan:** Menuntut komitmen dan ketersediaan waktu tinggi dari *Product Owner*; artefak dokumentasi formal sering kali kurang detail karena fokus tercurah pada kode/produk.

---

### Tabel Matriks Komparasi 5 Model SDLC

| Metodologi SDLC | Durasi Pengembangan | Fleksibilitas Perubahan | Kompleksitas Manajemen | Fokus Utama | Rekomendasi Kasus Penggunaan |
|---|---|---|---|---|---|
| **Waterfall** | Panjang | Sangat Rendah (Kaku) | Terstruktur / Terprediksi | Kelengkapan Dokumentasi & Kejelasan Tahapan | Sistem dengan kebutuhan stabil dan regulasi ketat |
| **Prototyping** | Sedang | Tinggi | Sedang (Perlu Batasan Revisi) | Visualisasi UI & Validasi Kebutuhan Awal | Proyek dengan *user requirements* yang belum jelas |
| **RAD** | Singkat (60–90 hari) | Sedang | Tinggi (Tergantung Tim) | Kecepatan Rilis & Modul *Reusable* | Proyek skripsi / aplikasi mendesak berskala modular |
| **Spiral** | Sangat Panjang | Tinggi (Per Iterasi) | Sangat Kompleks | Identifikasi & Mitigasi Risiko Proyek | Sistem kritis enterprise / SPBE bernilai investasi besar |
| **Agile / Scrum** | Iteratif (1–4 minggu/Sprint) | Sangat Tinggi | Kolaboratif / Dinamis | Pengiriman Fitur Fungsional Bertahap | Startup teknologi / produk yang dinamis terhadap pasar |

---

## 3. Pedoman Tugas Kelompok Studi Kasus APSI

### A. Regulasi Anggota & Akuntabilitas Tim
* **Formasi:** 3 orang per kelompok (toleransi maksimal 4 orang jika total mahasiswa kelas ganjil).
* **Komposisi Disarankan:** Memadukan anggota lintas gender (pria dan wanita) untuk menjaga objektivitas dan dinamika komunikasi kerja tim.
* **Prinsip Tanggung Jawab Kolektif:** Meskipun ada pembagian peran spesifik (Analisis Kebutuhan, Desain Diagram UML/DFD, dan Perancangan Wireframe/Database), **seluruh anggota memikul akuntabilitas nilai yang sama**. Kegagalan parsial salah satu anggota menjadi kegagalan tim.

---

### B. Kriteria Pemilihan Objek Studi Kasus
* **Wajib:** Entitas atau organisasi yang memiliki proses operasional kompleks, volume transaksi tinggi, dan mendesak membutuhkan komputerisasi sistem informasi.
* ❌ **Objek Terlarang:** Usaha mikro dengan alur kerja sederhana satu arah yang mudah dikerjakan manual (contoh: kios penatu/laundry kiloan kecil rumahan, Toko Madura).
*  **Objek yang Direkomendasikan:**
  * Bengkel kendaraan bermotor ramai (mengelola variasi suku cadang, inventaris gudang, antrean mekanik, dan tagihan jasa servis).
  * Perpustakaan instansi/sekolah (pencatatan sirkulasi manual ribuan koleksi buku).
  * Unit fungsional departemen perusahaan, seperti Sistem Informasi SDM (rekrutmen, presensi, metrik kinerja, dan penggajian).
  * Sistem pengelolaan aset atau sarana prasarana unit internal kampus/prodi.

---

### C. Protokol Analisis Lapangan: Penentuan Metode Flow Map

```text
                     ┌───────────────────────────┐
                     │ Kondisi Objek di Lapangan │
                     └─────────────┬─────────────┘
                                   │
         ┌─────────────────────────┴─────────────────────────┐
         ▼                                                   ▼
┌───────────────────────────────┐   ┌───────────────────────────────┐
│       BELUM ADA SISTEM        │   │       SUDAH ADA SISTEM        │
│   (Analisis Normal Terbuka)   │   │   (Analisis Rekayasa Mundur)  │
├───────────────────────────────┤   ├───────────────────────────────┤
│ • Wawancara alur manual       │   │ • Gali masalah masa lalu      │
│ • Kumpulkan formulir fisik    │   │   sebelum aplikasi dibuat     │
│ • Petakan Flow Map As-Is      │   │ • Petakan kondisi manual      │
│ • Deteksi inefisiensi &       │   │   tersebut ke Flow Map As-Is  │
│   bottleneck kerja            │   │ • Petakan alur kerja aplikasi │
│ • Rancang solusi ke dalam     │   │   yang berjalan saat ini      │
│   Flow Map To-Be              │   │   ke dalam Flow Map To-Be     │
└───────────────────────────────┘   └───────────────────────────────┘
```

---

### D. Strategi Efisiensi Waktu & Eksekusi

1. **Pemanfaatan Relasi Internal (*Insider Access*):** Prioritaskan organisasi/unit bisnis yang dikelola oleh relasi terdekat (orang tua, keluarga, atau kerabat) untuk mempercepat perizinan data internal dan kemudahan wawancara mendalam.
2. **Mitigasi Hambatan Birokrasi:** Sebisa mungkin pilih entitas yang tidak mewajibkan pengurusan surat izin resmi kampus yang panjang (memerlukan 1–2 pekan), agar waktu efektif semesteran tidak terpotong untuk urusan administrasi.

---

## 4. Rencana Aksi (*Action Items*) Minggu Ini

- [ ] **Pembentukan Tim:** Finalisasi 3 anggota kelompok tetap.
- [ ] **Penetapan Lokasi Objek:** Diskusikan dan kunci target studi kasus yang memenuhi kriteria kompleksitas transaksi.
- [ ] **Observasi Awal:** Mulai susun instrumen wawancara serta identifikasi titik masalah (*pain points*) operasional pada organisasi target.


