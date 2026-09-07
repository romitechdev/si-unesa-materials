---
title: "Pertemuan 1"
description: "Catatan perkuliahan perdana mata kuliah PSDP. Merangkum informasi kontrak kuliah, silabus 1 semester & proyek Odoo, program sertifikasi internasional, konsep integrasi data, risiko sistem silo, perbandingan sistem enterprise, diskursus paradoks implementasi ERP, serta instruksi tugas individu infografis."
minutes: 30
updated: "2026-09-03"
---



## 1. Administrasi Perkuliahan & Tata Tertib

* **Beban Akademik & Prasyarat:**
  * Bobot: **3 SKS** (Kombinasi teori dan praktikum teknis).
  * **Prasyarat Mutlak:** Wajib telah lulus mata kuliah **MRP (*Material Requirements Planning*)** atau **SCM (*Supply Chain Management*)**. Mahasiswa yang belum lulus prasyarat wajib melakukan *drop* mata kuliah.
* **Jadwal Perkuliahan:**
  * Waktu: **07:50 – 09:30 WIB** (Penetapan resmi hasil voting kelas).
  * Komitmen kehadiran: Mahasiswa wajib hadir tepat waktu tanpa keterlambatan.
* **Platform & Referensi:**
  * **LMS:** Menggunakan platform baru (*Sindiaks*) secara bertahap seiring penanganan kendala teknis sistem.
  * **Buku Pegangan Utama:** *Sistem ERP: Konsep dan Implementasi* karya Hendrawati (Buku fisik ungu).

---

## 2. Rencana Pembelajaran Semester & Skema Proyek Akhir

### A. *Roadmap* Pembelajaran
* **Minggu 1:** Pengantar dan Gambaran Umum ERP.
* **Minggu 3:** Konsep Mendalam Integrasi Sistem.
* **Minggu 4:** Tipologi Perusahaan & Karakteristik Arsitektur ERP.
* **Minggu 5 – 7:** Proses Bisnis & Eksplorasi Modul ERP Agnostik (Konseptual).
* **UTS:** Evaluasi formatif berbasis pilihan ganda (*multiple choice*) + 1 kali kuis semester.
* **Minggu 9:** Arsitektur CCU & CRM (*Customer Relationship Management*).
* **Minggu 11:** *ERP Life Cycle* & Strategi Implementasi.
* **Minggu 12 – 15:** Pengerjaan Proyek Akhir Kelompok (4 Minggu).
* **Minggu 16:** Presentasi Final Proyek di hadapan dosen pengampu.

### B. Ketentuan Proyek Akhir Kelompok (Minggu 12–15)
* **Teknologi:** Konfigurasi dan kustomisasi menggunakan **Odoo ERP**.
* **Struktur Tim:** Total 31 mahasiswa dibagi menjadi kelompok beranggotakan 4 orang. Setiap tim menganalisis studi kasus bisnis unik (analisis kebutuhan modul, integrasi data, dan alur proses bisnis).
* **Mekanisme Asistensi:**
  * Pengerjaan didampingi penuh oleh Asisten Praktikum.
  * Mahasiswa wajib asistensi dan setor progres mingguan.
  * **Sanksi:** Absen asistensi atau tidak melaporkan progres menghasilkan **nilai progres 0** untuk pekan berjalan.

---

## 3. Program Sertifikasi Resmi Odoo

Melalui kemitraan strategis jurusan dengan pihak Odoo:
* **Fasilitas:** Setiap mahasiswa mendapatkan akun resmi Odoo versi penuh (*full enterprise/education access*, non-trial) untuk eksplorasi proyek.
* **Ujian Sertifikasi Gratis:** Kesempatan menempuh sertifikasi internasional resmi dari Odoo tanpa biaya sebagai portofolio profesional magang/karir.
* **Syarat Akses Ujian:** Wajib menuntaskan 100% materi pelatihan (*e-learning course*) resmi Odoo.
* **Sosialisasi Teknis:** Panduan detail dibagikan pada **Minggu ke-9** (pasca-UTS).

---

## 4. Konsep Fundamental: Hakikat Integrasi Data

* **Definisi ERP:** Kumpulan modul perangkat lunak yang terintegrasi secara dinamis untuk merencanakan dan mengelola seluruh sumber daya organisasi secara terpusat.
* **Prinsip Kunci (Data-Centric Integration):**
  > *"Esensi utama ERP terletak pada **Integrasi Data**, bukan sekadar integrasi modul aplikasi. Modul hanyalah wadah pengelompokan fungsi kerja, sedangkan data adalah entitas terpusat yang saling terhubung."*
* **Mekanisme *Shared Data*:** Entitas data tunggal diakses bersamaan secara *real-time* oleh berbagai divisi kerja:
  * **Modul Inventory:** Memantau stok fisik, lokasi rak, dan valuasi aset.
  * **Modul Sales:** Memeriksa ketersediaan barang untuk reservasi pesanan.
  * **Modul Produksi:** Menjadwalkan konsumsi bahan baku dan kapasitas mesin.

---

## 5. Dampak Sistem Tanpa Integrasi (Sistem Terisolasi)

Ketiadaan integrasi antar-divisi memicu risiko bisnis yang fatal:

| Bentuk Risiko | Deskripsi Dampak | Contoh Kasus Nyata |
|---|---|---|
| **Asimetri Data (*Data Asymmetry*)** | Ketidaksinkronan status operasional antar-departemen akibat sistem pencatatan mandiri yang terputus. | Divisi Produksi telah menghentikan Produk C, namun Divisi Sales tetap menjualnya ke konsumen karena basis data katalog belum terbarui. |
| **Human Error** | Tingginya tingkat kekeliruan data akibat proses pemindahan/input manual berulang lintas aplikasi. | Kesalahan pengetikan kode barang (*SKU*) saat menyalin rekap Excel gudang ke faktur tagihan. |
| **Redundansi Data** | Duplikasi data identik di berbagai basis data parsial yang memboroskan kapasitas penyimpanan. | Inkonsistensi versi data pelanggan valid antara rekapan tim penagihan dan tim pemasaran. |
| **Kelumpuhan Keputusan (*Decision Paralysis*)** | Pimpinan puncak (*top management*) tidak dapat mengambil keputusan strategis akibat disparitas angka laporan. | Rapat koordinasi mandek karena Divisi Produksi melaporkan sisa stok 10,5 unit, Gudang mencatat 1.000 unit, dan Sales mencatat 800 unit. |

---

## 6. Taksonomi Sistem Enterprise (*Enterprise Systems*)

```
                    ┌─────────────────────────────────────┐
                    │      SISTEM ENTERPRISE (ES)         │
                    │    (Integrasi Aliran Informasi)     │
                    └──────────────────┬──────────────────┘
                                       │
     ┌──────────────────┬──────────────┴─────┬──────────────────┐
     ▼                  ▼                    ▼                  ▼


┌──────────────────┐┌──────────────────┐┌──────────────────┐┌──────────────────┐
│       CRM        ││       SCM        ││       PLM        ││       ERP        │
│    (Customer)    ││  (Supply Chain)  ││    (Lifecycle)   ││   (Enterprise)   │
├──────────────────┤├──────────────────┤├──────────────────┤├──────────────────┤
│ Fokus interaksi, ││ Manajemen rantai ││ Manajemen siklus ││ Fondasi terluas; │
│ retensi, layanan,││ pasok: vendor,   ││ produk: desain,  ││ menyatukan data  │
│ & basis data     ││ logistik, hingga ││ manufaktur,      ││ seluruh fungsi   │
│ pelanggan.       ││ konsumen akhir.  ││ pemeliharaan.    ││ operasional.     │
└──────────────────┘└──────────────────┘└──────────────────┘└──────────────────┘

```

---

## 7. Dimensi Non-Teknis dalam Keberhasilan Implementasi

Keberhasilan implementasi ERP tidak hanya bergantung pada kecanggihan perangkat lunak, tetapi sangat ditentukan oleh kesiapan organisasi:

1. **Kesiapan SDM (*User Readiness*):** Mengatasi resistensi karyawan saat berpindah dari sistem manual/Excel sederhana menuju sistem ERP yang berbasis aturan ketat (*rigid*).
2. **Kurva Pembelajaran & Adaptasi:** Kompleksitas sistem baru dapat menurunkan produktivitas sementara selama masa transisi jika tata kelola pelatihan tidak memadai.
3. **Standarisasi Proses Bisnis:** Proses nonformal (seperti pembuatan dokumen di Word yang tidak terlacak) wajib dirombak total menjadi Standard Operating Procedure (SOP) baku sistemik.
4. **Resiko Investasi (*Financial Exposure*):** Biaya lisensi, infrastruktur, dan konsultasi sangat besar; kegagalan manajemen perubahan (*change management*) berisiko menimbulkan kerugian finansial masif.

---

## 8. Transformasi Struktur Organisasi: Silo vs. Modern


```

MODEL TRADISIONAL (SILO)                 MODEL MODERN (PROSES LINTAS FUNGSI)

Top Management                                 Top Management
│                                              │
┌───────┼───────┐                      ┌───────────────┴───────────────┐
▼       ▼       ▼                      ▼                               ▼
[Sales] [Gudang] [Finance]           Divisi Fungsional: [Sales] [Gudang] [Finance]
(X)     (X)     (X)                    ═════════════════════════════════════════
(Data terisolasi, sekat horizontal     Alur Proses: Order-to-Cash / Procure-to-Pay
dan vertikal menghambat koordinasi)    (Aliran data real-time melintasi batas divisi)

```

* **Model Tradisional (Siloed Organization):**
  * *Silo Horizontal:* Pemisahan fungsional yang kaku; departemen enggan berbagi data secara terbuka.
  * *Silo Vertikal:* Sekat birokrasi hierarkis; komunikasi operasional di lapangan terlambat sampai ke jajaran manajemen strategis.
  * *Dampak TI:* Sistem terfragmentasi, mengharuskan staf melakukan konfirmasi manual (telepon/kunjungan fisik) sekadar untuk mengecek ketersediaan inventaris.
* **Model Modern (*Process-Oriented Organization*):**
  * Mengikis batasan sekat antar-departemen dengan memprioritaskan alur proses bisnis lintas fungsi (*cross-functional business processes*).
  * Data operasional mengalir bebas, transparan, dan terintegrasi secara *real-time*.

---

## 9. Klasifikasi Sistem: ERP vs Non-ERP

| Aplikasi / Sistem | Klasifikasi | Rationale / Analisis Karakteristik |
|---|---|---|
| **WhatsApp Business** | **Bukan ERP** | Murni media komunikasi dan transaksi interaksi pelanggan; tidak mengelola aliran sumber daya internal perusahaan. |
| **Microsoft Excel** | **Bukan ERP** | Aplikasi *spreadsheet* kalkulasi lokal/parsial; tidak memiliki arsitektur *shared database* terpusat skala korporasi. |
| **Point of Sale (POS)** | **Bukan ERP** | Perangkat lunak transaksi kasir mandiri. Dapat berperan sebagai modul input kasir, tetapi berdiri sendiri tanpa cakupan perencanaan sumber daya menyeluruh. |
| **SSO Terpadu Kampus (cth. SSO Unesa)** | **Termasuk ERP** | Arsitektur sentral yang mengintegrasikan data akademik, kepegawaian, sarana, dan transaksi keuangan dalam satu gerbang akses. |
| **CRM Standalone** | **Keduanya (*Hybrid*)** | Dapat beroperasi mandiri (*standalone*), namun lumrah disematkan sebagai modul operasional di dalam arsitektur ERP. |
| **SAP** | **ERP Komersial** | Sistem ERP skala *enterprise* global berbasis sumber kode tertutup (*proprietary/closed source*). |
| **Odoo** | **ERP Modular** | Sistem ERP fleksibel berbasis modularitas sumber kode terbuka (*open-source/open-core*). |
| **E-Commerce / Marketplace** | **Bukan ERP** | Kanal penjualan pihak ketiga (*third-party commerce platform*); bukan sistem pengelolaan internal korporasi. |

---

## 10. Paradoks Implementasi ERP & Diskursus Kelas

1. **"ERP harus menggunakan satu software untuk seluruh perusahaan."**  
   *Sikap:* **Tidak Setuju.** Solusi ERP dapat mengadopsi pendekatan integrasi multi-sistem (*best-of-breed*) sepanjang saluran data dan proses bisnis terhubung utuh.
2. **"Banyak aplikasi di perusahaan mencerminkan penerapan ERP."**  
   *Sikap:* **Tidak Setuju.** Kumpulan banyak aplikasi yang berjalan secara terpisah (*silo*) justru memperbesar kekacauan asimetri data.
3. **"Divisi Sales tidak perlu menginput ulang data yang telah dientri divisi lain."**  
   *Sikap:* **Setuju.** Merupakan prinsip dasar *single source of truth* dan *shared data repository*.
4. **"ERP merupakan domain pekerjaan divisi IT semata."**  
   *Sikap:* **Tidak Setuju.** Divisi operasional (HR, Gudang, Sales, Finance) adalah pemilik data harian (*data owner/business user*); divisi IT hanya bertindak sebagai pengelola infrastruktur teknis.
5. **"ERP otomatis meningkatkan kualitas proses bisnis."**  
   *Sikap:* **Tidak Setuju.** ERP adalah instrumen pengungkit. Jika proses dasar rusak dan SDM resistan, ERP justru akan mengautomasi ketidakefisienan operasional.
6. **"Apakah perusahaan harus menyesuaikan proses bisnisnya ke ERP, atau ERP yang menyesuaikan proses bisnis?"**  
   *Sikap:* **Topik Kajian Pertemuan Berikutnya.** Diskursus mendalam mengenai analisis perbandingan antara model **As-Is** (proses berjalan saat ini) melawan **To-Be** (rancangan proses optimal masa depan).

---

## 11. Penugasan: Tugas Individu 1 (Infografis)

- [ ] **Riset Entitas Nyata:** Tentukan satu perusahaan nyata (non-fiktif) beserta model bisnis dan industri operasionalnya.
- [ ] **Identifikasi Komponen Analisis:**
  1. *Brand Software* ERP yang diimplementasikan (misal: SAP, Oracle, Odoo, In-house custom, dll.).
  2. Cakupan proses bisnis internal yang diotomasikan oleh sistem ERP tersebut.
  3. Bukti manfaat konkret (*business value*) yang terukur pasca-implementasi.
- [ ] **Format Luaran:** Infografis visual interaktif/kreatif (bukan dokumen teks/makalah konvensional).
- [ ] **Batasan Integritas Akademik:**
  * **Dilarang keras** menggunakan generator kecerdasan buatan (*AI generation tools*).
  * Penggunaan software grafis (seperti Canva) diperbolehkan hanya untuk *layouting* manual, bukan fitur *AI image/content generator*.
- [ ] **Sitasi & Validitas:** Wajib menyertakan tautan sumber referensi kredibel (jurnal ilmiah, laporan tahunan emiten, buku, atau portal berita industri resmi) langsung pada infografis.


