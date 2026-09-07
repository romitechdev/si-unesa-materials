---
title: "Pertemuan 2: Siklus Hidup Manajemen Proses Bisnis (BPM Life Cycle) & Standar Notasi BPMN"
description: "Catatan perkuliahan Manajemen Proses Bisnis (MPB) Week 2. Membahas evolusi konsep proses bisnis menuju Business Process Management System (BPMS), eksplorasi komprehensif 5 tahapan BPM Life Cycle (As-Is hingga To-Be), strategi manajemen perubahan organisasi (*change management*), serta aturan baku notasi pemodelan BPMN 2.0."
minutes: 30
updated: "2026-09-07"
---

## 1. Konsep Dasar BPM & BPMS

* **Proses Bisnis:**  
  Rangkaian aktivitas, *events*, *decision points*, aktor, dan *resources* yang saling berkolaborasi secara terkoordinasi untuk menghasilkan nilai tambah (*value*) atau luaran positif bagi organisasi.
* **BPM (*Business Process Management*):**  
  Disiplin manajerial dan metodologis komprehensif untuk memodelkan, menganalisis, mengukur, memperbaiki, serta mengoptimalkan alur proses bisnis secara berkelanjutan.
* **BPMS (*Business Process Management System*):**  
  Infrastruktur perangkat lunak yang bertugas mengeksekusi, mengotomasi, dan memonitor alur proses bisnis organisasi secara terintegrasi.
  * **Contoh Nyata BPMS (Odoo ERP):** Mengintegrasikan berbagai divisi kerja melalui modul-modul fungsional, seperti modul *Accounting* untuk otomasi pencatatan finansial dan modul *Inventory* untuk pelacakan pergerakan stok gudang secara *real-time*.

---

## 2. Siklus Hidup Manajemen Proses Bisnis (*BPM Life Cycle*)

Siklus hidup BPM bekerja secara iteratif dan berkesinambungan untuk menjamin peningkatan mutu proses yang berkelanjutan (*continuous process improvement*):

```text
       ┌────────────────────────────────────────────────────────────┐
       │                                                            │
       ▼                                                            │
┌───────────────┐        ┌───────────────┐        ┌───────────────┐ │
│    Process    │  ───►  │    Process    │  ───►  │    Process    │ │
│   Discovery   │        │   Analysis    │        │   Redesign    │ │
│ (Model As-Is) │        │(Kuan & Kualit)│        │ (Model To-Be) │ │
└───────────────┘        └───────────────┘        └───────┬───────┘ │
                                                          │         │
                                                          ▼         │
┌───────────────┐                                 ┌───────────────┐ │
│    Process    │                                 │    Process    │ │
│  Monitoring   │  ◄────────────────────────────  │Implementation │ │
│(Evaluasi To-Be)│                                │(Change Mgmt)  │ │
└───────┬───────┘                                 └───────────────┘ │
        │                                                           │
        └───────────────────────────────────────────────────────────┘
```

### A. *Process Discovery*
* **Definisi & Tujuan:** Tahap awal untuk mengidentifikasi dan memetakan alur kerja operasional nyata yang saat ini sedang berjalan di organisasi ke dalam bentuk diagram proses formal.
* **Artefak Luaran:** **Model Proses As-Is** (*existing process model*).
* **Prasyarat Objek:** Entitas organisasi yang diamati minimal harus sudah memiliki rutinitas operasional nyata yang sedang berjalan.

### B. *Process Analysis*
* **Definisi & Tujuan:** Tahap menguji, mengidentifikasi kelemahan, serta membedah titik hambatan (*bottleneck*) dari model proses *As-Is* yang telah dipetakan (dapat dibantu melalui fitur simulasi pada *tools* seperti Bizagi Modeler).
* **Dua Pendekatan Analisis:**
  1. **Pendekatan Kuantitatif (Objektif Berbasis Angka):**  
     Pengukuran berbasis data numerik yang seragam dan terukur secara pasti (*single point of view*).  
     *Contoh Analogi:* Penentuan indeks prestasi pada KHS, di mana mahasiswa yang memperoleh nilai angka $\ge 80$ secara otomatis terkonversi menjadi nilai huruf A-.
  2. **Pendekatan Kualitatif (Subjektif Berbasis Deskripsi):**  
     Pengukuran berbasis penilaian non-angka (seperti kata atau deskripsi) yang cenderung bervariasi bergantung pada persepsi individu (misalnya: definisi layanan yang "bagus" bagi satu pihak belum tentu sama bagi pihak lain).

### C. *Process Redesign*
* **Definisi & Tujuan:** Tahap merumuskan alternatif solusi dan perbaikan atas inefisiensi yang ditemukan sebelumnya agar alur kerja berjalan lebih cepat, efisien, dan memangkas waktu siklus (*cycle time*).
* **Artefak Luaran:** **Model Proses To-Be** (*future-state process model*).
* **Contoh Kasus:** Pemangkasan alur birokrasi pengurusan KTP. Alur verifikasi berjenjang manual (harus mendatangi RT/RW fisik terlebih dahulu) dipotong menjadi akses langsung (*by-pass*) ke tingkat kelurahan melalui bantuan aplikasi digital.

### D. *Process Implementation*
* **Definisi & Tujuan:** Tahap menerapkan model proses baru (*To-Be*) secara langsung ke lingkungan kerja nyata sebagai fase uji operasional ("cek ombak") guna memantau kesiapan sistem dan respon pengguna.
* **Manajemen Perubahan Organisasi (*Organizational Change Management*):**  
  Mengelola resistensi pengguna akibat transisi dari cara kerja manual ke sistem otomatis/digital melalui mitigasi yang tepat:
  * **Strategi Transisi Berdampingan (Kasus Unesa):** Migrasi sistem akademik dari Sidia Lama ke Sidia Baru tidak mematikan sistem lama secara mendadak. Pihak kampus tetap menyediakan akses ke kedua versi serta menyelenggarakan pelatihan berkala agar tenaga kependidikan dan dosen tidak mengalami gegar sistem (*system shock*).
  * **Pelatihan Adopsi AI bagi Dosen Senior:** Direktorat kampus menyelenggarakan pelatihan penggunaan kecerdasan buatan generatif (seperti Gemini AI) khusus bagi kalangan dosen lanjut usia (usia 60–70 tahun dan profesor) guna mempermudah penulisan instruksi (*prompting*) dan menunjang efisiensi administrasi akademik.
  * **Pergeseran Pola Perilaku Digital Harian:** Terjadinya transformasi perilaku masyarakat dari forum tanya-jawab manual (seperti Brainly) menuju pemanfaatan AI generatif instan, serta meluasnya transaksi nirkartu (*cashless*) melalui QRIS dan *mobile banking* yang mulai menggantikan uang tunai dan mesin EDC fisik.

### E. *Process Monitoring*
* **Definisi & Tujuan:** Tahap memantau, mengaudit, dan mengukur kembali performa dari model proses baru (*To-Be*) yang telah berjalan secara reguler.
* **Mekanisme Pengukuran:** Menggunakan parameter evaluasi yang serupa dengan tahap *Process Analysis*, namun data dan objek pengamatan difokuskan secara khusus pada alur proses baru hasil redesain untuk memastikan target efisiensi tercapai.

---

## 3. Standar Baku Notasi Pemodelan BPMN 2.0

Dalam perancangan diagram alur kerja menggunakan standar **Business Process Model and Notation (BPMN 2.0)**, terdapat aturan sintaksis mutlak:

| Komponen | Notasi & Karakteristik Visual | Aturan Penggunaan |
|---|---|---|
| **Pool** | Kotak kontainer persegi panjang besar. | Merepresentasikan **entitas organisasi independen** yang terpisah (contoh: Pool *Customer* vs Pool *Pizza House*). |
| **Lane** | Sub-partisi horizontal/vertikal di dalam satu Pool. | Merepresentasikan **peran/aktor spesifik** (contoh: *Frontline Staff*, *Chef*, *Courier*).<br> **Aturan Mutlak:** Nama Lane **wajib nama aktor/peran**, dilarang menggunakan keterangan waktu (pagi/malam) atau lokasi fisik (rumah/kampus). |
| **Sequence Flow** | Garis panah solid tegas (`───►`). | Menghubungkan urutan aktivitas di dalam **satu Pool yang sama** (lintas Lane diperbolehkan selama masih satu Pool). |
| **Message Flow** | Garis panah putus-putus berujung lingkaran terbuka (`- - ▷`). | Menunjukkan komunikasi/pertukaran data **lintas Pool yang berbeda** (dilarang digunakan di dalam satu Pool). |
| **Association Flow**| Garis putus-putus halus bertitik (`····>`). | Menghubungkan aktivitas atau peristiwa dengan elemen artefak/data objek. |
| **Activity (Task)**| Kotak persegi panjang dengan **sudut melengkung (*rounded corners*)**. | Menunjukkan unit kerja. Dilarang menggunakan kotak bersudut lancip (flowchart biasa). Diberi penanda visual: <br>• **Manual Task** (Ikon Tangan): Dikerjakan manual oleh manusia.<br>• **Service Task** (Ikon Roda Gerigi): Dijalankan otomatis oleh sistem perangkat lunak. |
| **Gateway** | Bentuk belah ketupat (*diamond*) **berpenanda simbol logika**. | Menunjukkan titik percabangan keputusan. **Wajib berisi simbol logika** (misal: tanda silang `X` untuk Exclusive/XOR, tanda tambah `+` untuk Parallel/AND). Tidak boleh dibiarkan kosong. |
| **Data Object** | Ikon lembaran kertas dengan lipatan sudut. | Merepresentasikan dokumen, arsip, data, atau muatan informasi fisik/digital yang dihasilkan atau dibutuhkan oleh aktivitas. |

---

## 4. Rangkuman Perbedaan Model Alur: As-Is vs To-Be


```

┌───────────────────────────────────────────┐      ┌───────────────────────────────────────────┐
│              MODEL AS-IS                  │      │               MODEL TO-BE                 │
├───────────────────────────────────────────┤      ├───────────────────────────────────────────┤
│ • Potret proses bisnis eksisting/faktual  │      │ • Potret usulan perbaikan/optimalisasi    │
│ • Mengidentifikasi inefisiensi/bottleneck │ ───> │ • Menghilangkan birokrasi & pemborosan    │
│ • Menjadi dasar pijakan analisis performa │      │ • Mengintegrasikan otomasi sistem/BPMS   │
└───────────────────────────────────────────┘      └───────────────────────────────────────────┘

```
