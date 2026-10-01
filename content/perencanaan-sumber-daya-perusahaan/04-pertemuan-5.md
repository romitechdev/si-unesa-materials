---
title: "Pertemuan 5"
minutes: 30
updated: "2026-09-29"
---




## 📌 AGENDA PERKULIAHAN & PENGANTAR
Pada Pertemuan Minggu ke-5, materi berfokus pada hubungan antara area fungsional, analisis proses bisnis, dan pengenalan modul-modul ERP. Perkuliahan mencakup enam poin utama:
1. **Area Fungsional & Proses Bisnis Organisasi**
2. **Kategori & Spesifikasi Proses Bisnis** (*Core, Support, Management*)
3. **Simulasi Alur Transaksi & Integrasi Lintas Fungsi** (Latihan 15 Aktivitas Operasional)
4. **Modul-Modul ERP & Kerangka Kerja PCF** (*Process Classification Framework*)
5. **Klasifikasi Data dalam Sistem ERP** (*Master Data, Transaction Data, Organizational Data*)
6. **Informasi & Pengumuman Penting Perkuliahan**

---

## 1. AREA FUNGSIONAL DARI PROSES BISNIS

Sebagian besar organisasi perusahaan, khususnya pada industri manufaktur, memiliki **4 area fungsional utama** yang menjalankan fungsi operasional spesifik:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        4 AREA FUNGSIONAL UTAMA                         │
└───────┬───────────────────┬───────────────────┬───────────────────┬────┘
        │                   │                   │                   │
        ▼                   ▼                   ▼                   ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│ Pemasaran &   │   │ Manajemen     │   │ Akuntansi &   │   │ Sumber Daya   │
│ Penjualan     │   │ Rantai Pasok  │   │ Keuangan      │   │ Manusia (SDM) │
│ (Marketing &  │   │ (Supply Chain │   │ (Accounting & │   │ (Human        │
│ Sales)        │   │ Management)   │   │ Finance)      │   │ Resources)    │
└───────────────┘   └───────────────┘   └───────────────┘   └───────────────┘
```

### Detail Aktivitas Operasional Masing-Masing Area Fungsional

| Area Fungsional | Aktivitas Operasional Utama |
| :--- | :--- |
| **Pemasaran & Penjualan** *(Marketing & Sales)* | Pemasaran produk, penerimaan pesanan penjualan (*sales order*), pengelolaan hubungan pelanggan (*CRM*), dukungan pelanggan, peramalan penjualan, dan periklanan. |
| **Manajemen Rantai Pasok** *(Supply Chain Management / SCM)* | Pembelian bahan baku dari *vendor/supplier*, penerimaan barang, pengelolaan transportasi & logistik, penjadwalan produksi, serta pemeliharaan pabrik (*plant maintenance*). |
| **Akuntansi & Keuangan** *(Accounting & Finance)* | Pengelolaan arus kas (*cash flow*), pencatatan transaksi, pengaturan pemasukan & pengeluaran, perencanaan keuangan, dan penganggaran (*budgeting*). |
| **Sumber Daya Manusia** *(Human Resources / HR)* | Rekrutmen pegawai, pelatihan (*training*), manajemen kinerja, hingga pengelolaan masa pensiun (*retirement*). |

> **⚠️ Dampak Struktur Silo vs. Kebutuhan Integrasi**  
> - **Model Silo (Terkotak-kotak)**: Memisahkan area fungsional secara kaku, memicu **asimetri data**, keterlambatan pengambilan keputusan, dan aliran informasi yang tidak akurat.  
> - **Kebutuhan Integrasi**: Sangat dibutuhkan untuk meningkatkan komunikasi, memperlancar alur kerja (*workflow*), dan mencapai kesuksesan organisasi secara komprehensif.

---

## 2. PROSES BISNIS & PERSPEKTIF PELANGGAN

### Definisi Proses Bisnis
Proses bisnis adalah **sekumpulan aktivitas, kegiatan, dan keputusan yang saling terkait antara seluruh sumber daya perusahaan untuk menghasilkan nilai (*value*)**. Nilai ini diciptakan untuk pelanggan dan untuk mencapai keuntungan (*profit*) organisasi.

### Pengalaman Pelanggan (*Customer Experience*) & Efisiensi Data
1. **Pengalaman Satu Pintu**: Pelanggan hanya perlu berinteraksi dengan satu pintu (misal: staf Penjualan/CS), tanpa perlu tahu atau berhubungan langsung dengan divisi internal seperti gudang atau akuntansi.
2. **Efisien Lewat *Sharing Data***: Sistem ERP menghubungkan data antar-fungsi sehingga data yang diinput satu kali oleh bagian Sales dapat langsung diakses oleh bagian Gudang dan Keuangan tanpa penginputan ulang.

### Matriks Pemenuhan Pesanan Komputer (*Computer Order Fulfillment*)

| Input (Kebutuhan Pelanggan) | Area Fungsional Penanggung Jawab | Proses / Aktivitas Transformasi | Output (Hasil) |
| :--- | :--- | :--- | :--- |
| **Permintaan Pembelian Komputer** | Marketing & Sales | Memproses permintaan pembeli | Dokumen *Sales Order* terbuat |
| **Pembayaran Transaksi** | Accounting & Finance | Verifikasi & pencatatan pembayaran | Pembayaran terkonfirmasi |
| **Dukungan Teknis Perangkat** | Marketing & Sales | Penyiapan konfigurasi teknis | Komputer siap dikirim |
| **Penerimaan Produk Fisik** | Supply Chain Management (SCM) | Pengiriman & pemenuhan pesanan | Pelanggan menerima komputer |

---

## 3. KATEGORISASI & SPEKTRUM PROSES BISNIS

Proses bisnis di dalam ERP terbagi menjadi **3 kategori utama**:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        KATEGORI PROSES BISNIS                          │
└───────┬───────────────────────────┬───────────────────────────┬────────┘
        │                           │                           │
        ▼                           ▼                           ▼
┌───────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐
│ 1. Proses Inti        │   │ 2. Proses Pendukung   │   │ 3. Proses Manajemen   │
│    (Core Process)     │   │    (Support Process)  │   │    (Management Proc.) │
└───────────────────────┘   └───────────────────────┘   └───────────────────────┘
```

1. **Proses Inti (*Core Process*)**: Aktivitas utama penciptaan nilai.  
   - *Di Manufaktur*: Produksi, penjualan, distribusi, pengadaan, dan layanan pelanggan.  
   - *Di Perusahaan Jasa*: Pelayanan pelanggan (*CRM*) dan pengelolaan SDM/tenaga ahli (*HCM*).
2. **Proses Pendukung (*Support Process*)**: Aktivitas yang mendukung kelancaran proses inti (contoh: Manajemen SDM, Akuntansi/Keuangan, IT Support). *Catatan: Pada perusahaan ISP, IT Support bergeser menjadi Core Process.*
3. **Proses Manajemen (*Management Process*)**: Aktivitas perencanaan, pengawasan, dan pengendalian strategi (contoh: *controlling*, laporan manajemen, perencanaan strategis).

### Alur Proses Bisnis Utama pada Industri Manufaktur
- **Proses Penjualan (*Order to Cash*)**: Penawaran (*Request for Quotation*) → *Sales Order* → Pengecekan stok & limit kredit → Penyiapan & pengiriman barang → Penerimaan pembayaran.
- **Proses Pembelian (*Procurement / Purchase to Pay*)**: Permintaan pengadaan internal (*Purchase Requisition* / PR) → Pemilihan vendor → *Purchase Order* (PO) → Penerimaan barang (*Goods Receipt*) → Pembayaran ke supplier.
- **Proses Perencanaan Produksi**: Peramalan (*forecasting*) → *Sales & Operation Planning* (S&OP) → Disagregasi rencana agregat → *Material Requirements Planning* (MRP).

### Proses Bisnis Spesifik Industri Lain
1. **Issue to Resolution**: Dimulai saat pelanggan melaporkan keluhan dan berakhir saat masalah teratasi (Contoh: Pelaporan gangguan WiFi hingga teknisi menyelesaikan perbaikan).
2. **Application to Approval**: Diawali saat seseorang mengajukan permohonan fasilitas dan berakhir saat disetujui/ditolak (Contoh: Pengajuan kredit bank, pendaftaran asuransi, pengajuan beasiswa).

---

## 4. SIMULASI LATIHAN KELAS: ALUR & PENGELOMPOKAN 15 AKTIVITAS

Simulasi mengurutkan **15 aktivitas operasional** dan mengelompokkannya ke dalam fungsi bisnis melalui diskusi interaktif.

### Skenario Alur Transaksi Penjualan & Pengadaan

```text
Menerima Pesanan Pelanggan (6)
               │
               ▼
Mengecek Ketersediaan Stok (13)
               │
      ┌────────┴────────────────────────────────────────┐
      ▼ (Jika Stok Cukup)                               ▼ (Jika Stok Tidak Cukup / 14)
Membuat Sales Order (10)                       Membuat Permintaan Pembelian / PR (5)
      │                                                 │
Menyiapkan Barang (2)                          Memilih Supplier (8)
      │                                                 │
Membuat Invoice (12)                           Membuat Purchase Order / PO (3)
      │                                                 │
Menerima Pembayaran (4)                        Membayar Supplier (1)
      │                                                 │
Mengirim Barang ke Pelanggan (9)               Menerima Barang dari Supplier (11)
      │                                                 │
Memperbarui Data Stok (15)                     Memperbarui Data Stok (15)
      │                                                 │
      └────────────────────────┬────────────────────────┘
                               │
                               ▼
            Membuat Laporan Transaksi Keuangan (7)
```

### Pengelompokan 15 Aktivitas ke Area Fungsional

| Area Fungsional Bisnis | Nomor & Deskripsi Aktivitas |
| :--- | :--- |
| **Penjualan (*Sales*)** | **(6)** Menerima pesanan, **(10)** Membuat *Sales Order*, **(2)** Menyiapkan barang, **(12)** Membuat *invoice*, **(4)** Menerima pembayaran, **(9)** Mengirim barang. |
| **Pembelian (*Procurement*)** | **(8)** Memilih supplier, **(3)** Membuat *Purchase Order* (PO), **(1)** Membayar supplier, **(11)** Menerima barang dari supplier. |
| **Keuangan (*Finance*)** | **(7)** Membuat laporan transaksi/jurnal keuangan *(Finance menyusun laporan dari transaksi yang dicatat Sales/Procurement, bukan mencatat eceran harian)*. |
| **Persediaan / Gudang (*Inventory*)** | **(13)** Mengecek ketersediaan stok, **(5)** Membuat permintaan pembelian (PR) jika stok kurang, **(15)** Memperbarui data stok. |

---

## 5. MODUL ERP & KERANGKA KERJA PCF (*PROCESS CLASSIFICATION FRAMEWORK*)

### Konsep Modul & *Best Practice*
- **Modul ERP**: Sekumpulan transaksi terhubung dalam fungsi bisnis tertentu.
- ***Best Practice***: Pengalaman terbaik yang telah dilalui oleh perusahaan-perusahaan pendahulu dan dijadikan standar acuan dalam mengembangkan sistem ERP.

### Process Classification Framework (PCF)
PCF adalah kerangka kerja terstruktur untuk mengklasifikasikan proses bisnis, memungkinkan organisasi melakukan *benchmarking* secara objektif, serta memberikan panduan konfigurasi modul ERP.

```text
┌────────────────────────────────────────────────────────────────────────┐
│         PARADOKS IMPLEMENTASI ERP: PILIHAN A VS. PILIHAN B             │
└──────────────────┬──────────────────────────────────┬──────────────────┘
                   │                                  │
                   ▼                                  ▼
┌──────────────────────────────────────┐  ┌──────────────────────────────────────┐
│ PILIHAN A (Direkomendasikan PCF)     │  │ PILIHAN B (Sangat Tidak Disarankan)  │
├──────────────────────────────────────┤  ├──────────────────────────────────────┤
│ Perusahaan MENYESUAIKAN proses       │  │ Memaksa sistem ERP DIMODIFIKASI      │
│ bisnisnya mengikuti standar/best     │  │ untuk mengikuti kebiasaan lama       │
│ practice ERP bawaan.                 │  │ (proses 'As-Is') perusahaan.         │
└──────────────────────────────────────┘  └──────────────────────────────────────┘
```

#### Alasan Mengapa Pilihan A Wajib Dipilih:
1. **Mencegah Proses Tidak Efisien**: Kebiasaan lama (*As-Is*) sering kali mengandung tahapan manual dan lambat. Memaksa ERP mengikuti cara lama membuat sistem tetap tidak efisien.
2. **Menghindari Biaya & Kompleksitas**: Memodifikasi koding dasar ERP membutuhkan waktu sangat lama, biaya implementasi sangat mahal, dan biaya pemeliharaan (*maintenance*) membengkak.

### Tahapan Implementasi PCF
1. ***As-Is vs. To-Be Mapping***: Membandingkan proses bisnis saat ini (*As-Is*) dengan proses bisnis ideal (*To-Be*) pada ERP untuk menemukan kesenjangan (*Gap*).
2. ***Align dengan Modul ERP***: Penyelarasan proses bisnis ke dalam modul standar ERP (misal: modul *Sales & Distribution*).
3. ***Cross-Industry Benchmarking***: Membandingkan efisiensi proses dengan standar industri global.
4. ***Prioritisasi Implementasi***: Memprioritaskan pembuatan modul untuk **proses inti** terlebih dahulu mengingat keterbatasan anggaran.

---

## 6. KLASIFIKASI MODUL & TIPE DATA DALAM ERP

### 3 Kelompok Utama Modul ERP

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        KELOMPOK MODUL ERP                              │
└───────┬───────────────────────────┬───────────────────────────┬────────┘
        │                           │                           │
        ▼                           ▼                           ▼
┌───────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐
│ 1. Modul Operasi      │   │ 2. Modul Finance &    │   │ 3. Modul SDM          │
│                       │   │    Akuntansi          │   │    (Human Resources)  │
└───────────────────────┘   └───────────────────────┘   └───────────────────────┘
```
1. **Modul Operasi**: Mengelola operasional harian inti (*Sales & Distribution/SD, Materials Management/MM, Production Planning/PP, Quality Management/QM, Customer Service/CS, Plant Maintenance/PM*).
2. **Modul Finance & Akuntansi**: Pencatatan dan pengelolaan keuangan (*Financial Accounting/FI* dan *Controlling/CO*).
3. **Modul SDM (Human Resources)**: Pengelolaan tenaga kerja (*Personal Management, Personal Time Management, Payroll, Training*).

### 3 Jenis Data dalam Sistem ERP

```text
┌────────────────────────────────────────────────────────────────────────┐
│                          3 JENIS DATA ERP                              │
└───────┬───────────────────────────┬───────────────────────────┬────────┘
        │                           │                           │
        ▼                           ▼                           ▼
┌───────────────────────┐   ┌───────────────────────┐   ┌───────────────────────┐
│ Master Data           │   │ Transaction Data      │   │ Organizational Data   │
│ (Statis & Utama)      │   │ (Sangat Dinamis)      │   │ (Struktur Perusahaan) │
└───────────────────────┘   └───────────────────────┘   └───────────────────────┘
```

| Tipe Data | Sifat & Karakteristik | Contoh Data Spesifik |
| :--- | :--- | :--- |
| **Master Data** | Data utama yang digunakan di hampir semua proses bisnis, bersifat **statis** (jarang sekali berubah). | Data Produk/Barang, Data Pegawai, Data Supplier/Vendor, dan Data Pelanggan/Customer. |
| **Transaction Data** | Data operasional harian dari transaksi bisnis, bersifat **sangat dinamis** dan selalu bertambah. | Data Penjualan, Data Pembelian, dan Data Pembayaran. |
| **Organizational Data** | Data yang menggambarkan struktur organisasi perusahaan dan hubungan antar-entitas fisik/logis. | Kode Perusahaan (*Company Code*), Lokasi Pabrik, Lokasi Gudang, Saluran Distribusi, dan *Workspace*. |

---

## 📌 INFORMASI & CATATAN PERKULIAHAN

- 📅 **Jadwal UTS**: Kuis UTS akan dilaksanakan pada **Minggu ke-9** setelah seluruh pembahasan modul selesai.
- 📢 **Pengumuman Kuliah**: Tanggal **13 Oktober** tidak ada pertemuan kelas dikarenakan beberapa dosen dinas luar *(kecuali kelas Pak Di, Bu Arini, Bu Monika, dll.)*.
- 🛠️ **Workshop Odoo Resmi**: Kuliah tamu/workshop luring dari tim Odoo dijadwalkan pada **12 November**, menggabungkan 8 kelas.

