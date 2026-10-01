---
title: "Pertemuan 3"
minutes: 30
updated: "2026-09-29"
---

## 1. PENDAHULUAN & IDENTIFIKASI AKTIVITAS PERUSAHAAN

Setiap jenis industri atau perusahaan memiliki karakteristik operasional yang berbeda. Perbedaan aktivitas utama ini secara langsung menentukan kebutuhan modul dan konfigurasi sistem **Enterprise Resource Planning (ERP)** yang akan diterapkan.

### Analisis Aktivitas Utama pada 4 Tipe Perusahaan
1. **Pabrik Manufaktur** *(contoh: Pabrik Minyak Goreng / Sepatu)*
   - **Pengadaan (*Procurement*)**: Pembelian bahan baku utama dan bahan penolong.
   - **Produksi**: Pemrosesan bahan baku menjadi produk jadi.
   - **Manajemen Persediaan (*Inventory*)**: Pengelolaan stok bahan mentah, barang setengah jadi, dan barang jadi.
   - **Penjualan & Pemasaran**: Distribusi produk ke *distributor* atau *retailer*.

2. **Perusahaan Jasa Perjalanan** *(Tour & Travel)*
   - **Pelayanan Pelanggan & Pemesanan (*Booking*)**: Penjualan paket wisata, tiket, dan reservasi.
   - **Manajemen Hubungan Vendor**: Koordinasi dengan penyedia armada (maskapai/bus), hotel, dan restoran.
   - **Penjadwalan & Operasional**: Pengaturan *tour guide*, rute perjalanan, dan ketersediaan armada.
   - **Keuangan & SDM**: Pengelolaan arus kas paket perjalanan dan manajemen staf/pemandu wisata.

3. **Perusahaan Distributor**
   - **Distribusi & Logistik**: Pengaturan armada pengiriman dan rute transportasi.
   - **Manajemen Persediaan (*Inventory*)**: Pengelolaan gudang transit dan stok barang siap kirim.
   - **Pengadaan & Penjualan**: Pembelian barang dari produsen dan penjualan ke pengecer.
   - **Pemeliharaan (*Maintenance*)**: Perawatan armada kendaraan operasional.

4. **Rumah Sakit**
   - **Pelayanan Pasien & Rekam Medis**: Pendaftaran, rekam medis digital, dan rawat inap/jalan.
   - **Pengadaan Obat & Farmasi**: Pengelolaan persediaan obat-obatan dan alat kesehatan.
   - **Pengelolaan SDM Spesifik**: Penjadwalan giliran kerja (*shift*) dokter, perawat, dan staf medis.
   - **Pemeliharaan Alat Medis**: Kalibrasi dan *maintenance* peralatan medis.

> **💡 Kesimpulan Kunci:**  
> Bisnis yang berbeda tidak bisa menggunakan sistem ERP dengan konfigurasi yang persis sama. Aktivitas utama perusahaan menentukan modul apa saja yang wajib diaktifkan.

---

## 2. REKAPITULASI KONSEP DASAR ERP

- **Definisi ERP**: Sistem informasi terintegrasi yang dirancang untuk mengelola dan merencanakan seluruh sumber daya perusahaan guna meningkatkan efisiensi proses bisnis dan mengurangi kesalahan manual (*human error*).
- **Elemen Terintegrasi**: Data, informasi, modul fungsional, dan aliran proses bisnis secara *real-time*.
- **Sejarah Singkat**: ERP berevolusi dari **Material Requirement Planning (MRP)** pada tahun 1980-an yang awalnya hanya digunakan untuk perencanaan material di sektor manufaktur, sebelum berkembang melayani sektor jasa.

---

## 3. KLASIFIKASI PERUSAHAAN: BARANG (MANUFAKTUR) VS. JASA (SERVICE)

Perusahaan dibedakan berdasarkan output utama yang dihasilkan, yaitu **Barang (Produk Fisik)** atau **Jasa (Layanan)**.

### Perbedaan Karakteristik Barang dan Jasa

| Parameter Perbandingan | Barang (Manufaktur) | Jasa (Service) |
| :--- | :--- | :--- |
| **Wujud (*Tangibility*)** | Berwujud (dapat dilihat dan disentuh secara fisik). | Tidak berwujud (hanya dapat dirasakan manfaatnya). |
| **Daya Simpan (*Storage*)** | Dapat disimpan dalam jangka waktu tertentu sebagai inventaris. | Tidak dapat disimpan (dikonsumsi saat itu juga saat diproduksi). |
| **Mobilitas** | Dapat dipindahkan secara fisik dari satu lokasi ke lokasi lain. | Tidak dapat dipindahkan secara fisik. |
| **Waktu Produksi & Konsumsi** | Waktu produksi dan konsumsi terpisah (diproduksi dulu, baru dikonsumsi). | Produksi dan konsumsi terjadi secara bersamaan (*simultaneous*). |
| **Keterlibatan Pelanggan** | Pelanggan umumnya tidak terlibat dalam proses produksi fisik. | Pelanggan terlibat langsung dalam proses pemberian layanan. |

### Spektrum Kombinasi Barang & Jasa
Dalam dunia nyata, mayoritas perusahaan berada di antara batas murni barang dan murni jasa:
- **Murni Barang**: Produksi Minyak Mentah (fokus penuh pada ekstraksi fisik).
- **Dominan Barang dengan Elemen Jasa (*Custom Order*)**: Pengolahan Aluminium, Produsen Mesin Khusus (membuat barang fisik berdasarkan spesifikasi pesanan pelanggan).
- **Kombinasi Seimbang**: Restoran (menghasilkan makanan fisik sekaligus memberikan layanan penyajian/kenyamanan).
- **Dominan Jasa**: Layanan Sistem Komputer (*Software/Web Developer*), Konsultan Manajemen, Klinik Psikoterapi.

---

## 4. TIPE PERUSAHAAN MANUFAKTUR BERDASARKAN 3 KRITERIA OPERASIONAL

Sektor manufaktur diklasifikasikan berdasarkan tiga dimensi utama pendorong operasinya:

```text
                          ┌────────────────────────────────────────────────────────┐
                          │     KLASIFIKASI PERUSAHAAN MANUFAKTUR DENGAN ERP      │
                          └───────────────────────────┬────────────────────────────┘
                                                      │
         ┌────────────────────────────────────────────┼────────────────────────────────────────────┐
         │                                            │                                            │
         ▼                                            ▼                                            ▼
┌─────────────────────────────────┐        ┌─────────────────────────────────┐        ┌─────────────────────────────────┐
│  1. Pendorong Proses Produksi   │        │     2. Peran Persediaan (VATI)    │        │  3. Volume & Variasi Produksi   │
├─────────────────────────────────┤        ├─────────────────────────────────┤        ├─────────────────────────────────┤
│ • Make to Order (MTO)           │        │ • Tipe V (One-to-Many)          │        │ • Project (Variasi Max, Vol Min)│
│ • Make to Stock (MTS)           │        │ • Tipe A (Many-to-One)          │        │ • Make to Order (MTO)           │
│                                 │        │ • Tipe T (Many-to-Many)         │        │ • Assembly to Order (ATO)       │
│                                 │        │ • Tipe I (One-to-One)           │        │ • Make to Stock (MTS)           │
└─────────────────────────────────┘        └─────────────────────────────────┘        └─────────────────────────────────┘
```

### Kriteria 1: Pendorong Proses Produksi (*Production Driver*)
1. **Make to Order (MTO)**
   - **Mekanisme**: Proses produksi baru dijalankan hanya setelah ada pesanan resmi dari pelanggan.
   - **Kelebihan**: Tidak ada masalah ketidaksesuaian jumlah produk atau penumpukan stok barang jadi (*zero finished goods buffer*).
   - **Kekurangan**: Pelanggan harus menunggu tenggat waktu (*lead time*) proses produksi hingga barang selesai.
2. **Make to Stock (MTS)**
   - **Mekanisme**: Produksi dilakukan berdasarkan peramalan (*forecast*) atau prediksi permintaan tanpa menunggu pesanan pasti.
   - **Kelebihan**: Pelanggan tidak perlu menunggu; barang langsung dapat dibeli dan dikonsumsi.
   - **Kekurangan**: Risiko tinggi terjadi ketidaksesuaian prediksi (stok berlebih yang menumpuk di gudang atau kekurangan stok saat permintaan melonjak).

### Kriteria 2: Peran Persediaan & Strategi Penempatan *Buffer* (Stok Cadangan)
- **Definisi *Buffer***: Stok cadangan atau kapasitas tambahan yang diletakkan pada titik-titik kritis proses operasional untuk mengisolasi dan menanggulangi ketidakpastian.
- **Bentuk-Bentuk *Buffer***:
  1. ***Inventory Buffer***: Cadangan fisik berupa bahan baku, komponen setengah jadi, atau produk jadi.
  2. ***Capacity Buffer***: Cadangan berbasis kapasitas operasional, seperti penyediaan jam kerja lembur, mesin dalam kondisi *standby*, atau penambahan tenaga kerja cadangan.
- **3 Sumber Ketidakpastian (*Uncertainties*)**:
  - *Ketidakpastian Pasokan (Supply Uncertainty)*: Keterlambatan pengiriman bahan baku, pasokan cacat/kualitas tidak sesuai, atau jumlah pengiriman kurang.
  - *Ketidakpastian Permintaan (Demand Uncertainty)*: Lonjakan pesanan pelanggan yang mendadak atau fluktuatif.
  - *Ketidakpastian Internal*: Kerusakan mesin mendadak, kesalahan operasional, atau aksi mogok kerja karyawan.

#### Strategi Penempatan *Buffer* Berdasarkan Struktur VATI
Pengelompokan pola aliran material dari bawah (*raw material*) ke atas (*finished product*):

```text
  [TIPE V]             [TIPE A]             [TIPE T]             [TIPE I]
Finished Goods      Finished Goods       Finished Goods       Finished Goods
  \  |  /                 |                 /  |  \                 |
   \ | /                  |                /   |   \                |
    \|/                  / \              /    |    \               |
     |                  /   \            /     |     \              |
Raw Material        Raw Materials        Raw Materials        Raw Material
```

1. **Tipe V (One-to-Many)**:
   - *Karakteristik*: Sedikit jenis bahan baku diolah menjadi berbagai macam variasi produk akhir (contoh: industri pengolahan minyak bumi/kelapa sawit).
   - *Strategi Buffer*: *Buffer* diletakkan pada **bahan baku utama (*raw material*)** di tingkat paling bawah.
2. **Tipe A (Many-to-One)**:
   - *Karakteristik*: Banyak jenis bahan baku/komponen dirakit menjadi satu jenis produk akhir utama (contoh: pabrik perakitan pesawat terbang, sepeda motor).
   - *Strategi Buffer*: *Buffer* diletakkan pada **komponen atau produk setengah jadi**.
3. **Tipe T (Many-to-Many)**:
   - *Karakteristik*: Banyak bahan baku dirakit menjadi komponen dasar, lalu dikonfigurasi menjadi berbagai variasi produk akhir di tahap akhir (contoh: pabrik perakitan elektronik/komputer ATO).
   - *Strategi Buffer*: Menyimpan **komponen setengah jadi (*sub-assembly*)** dan menerapkan ***capacity buffer*** pada tahap kustomisasi akhir.
4. **Tipe I (One-to-One)**:
   - *Karakteristik*: Aliran material lurus kontinu dari satu jenis bahan baku menjadi satu jenis produk akhir (contoh: pabrik air mineral, pabrik gula tebu).
   - *Strategi Buffer*: *Buffer* diletakkan di **hampir setiap titik tahapan proses** karena seluruh rantai bersifat kritis.

### Kriteria 3: Volume dan Variasi Produksi

```text
Variasi Tinggi  ▲
                │  [PROJECT]
                │     • Variasi Produk : Sangat Tinggi
                │     • Volume Produksi: Sangat Rendah
                │
                │         [MAKE TO ORDER (MTO)]
                │            • Variasi Produk : Tinggi
                │            • Volume Produksi: Rendah
                │
                │                [ASSEMBLY TO ORDER (ATO)]
                │                   • Variasi Produk : Sedang
                │                   • Volume Produksi: Sedang
                │
                │                        [MAKE TO STOCK (MTS)]
                │                           • Variasi Produk : Sangat Rendah
                │                           • Volume Produksi: Sangat Tinggi
                │
Variasi Rendah  └────────────────────────────────────────────────────────►
                Volume Rendah                               Volume Tinggi
```

- **Manufaktur Berbasis Proyek (*Project*)**:  
  Membutuhkan alat bantu *Project Management* khusus seperti **Critical Path Method (CPM)** untuk menentukan jadwal *forward scheduling* (penyelesaian tercepat) dan *backward scheduling* (tenggat paling lambat), serta **Gantt Chart** untuk memantau alokasi SDM, biaya, dan peralatan.

---

## 5. TANTANGAN OPERASIONAL & CARA MENYESUAIKAN FITUR ERP

| Tipe Perusahaan | Tantangan Operasional Utama | Karakteristik Fitur ERP yang Dibutuhkan |
| :--- | :--- | :--- |
| **Proyek (*Project*)** | Mengelola sumber daya terbatas dan mematuhi *deadline* proyek yang ketat dengan durasi *lead time* panjang. | **Project Management Tools**: CPM, Gantt Chart, pelacakan alokasi anggaran, alat, dan SDM. |
| **Make to Order (MTO)** | Mengonfigurasi kebutuhan material dengan cepat untuk pesanan yang permintaannya fluktuatif. | **Product Data Management (PDM)**: Pengelolaan *Bill of Materials* (BOM) dan variasi konfigurasi produk secara fleksibel. |
| **Assembly to Order (ATO)** | Memastikan kapasitas pemasok mampu menyediakan komponen dalam waktu singkat. | **Capable to Promise (CTP)**: Fitur untuk menghitung kepastian tanggal penyelesaian pesanan berdasarkan ketersediaan kapasitas & material. |
| **Make to Stock (MTS)** | Memastikan stok teralokasi secara optimal tanpa menyebabkan penumpukan atau kehabisan barang. | **Available to Promise (ATP)**: Fitur untuk mengunci dan menjamin ketersediaan stok produk jadi bagi pelanggan. |
| **Perusahaan Jasa (*Service*)** | Mengendalikan alokasi SDM (tenaga ahli/staf) dan menjaga tingkat kepuasan layanan pelanggan. | **Human Capital Management (HCM) & CRM**: Fokus pada penjadwalan ketersediaan staf, manajemen reservasi, dan integrasi penagihan (*billing*). |

---

## 6. SOAL EVALUASI PEMAHAMAN (SESI KUIS)

1. **Di manakah lokasi persediaan produk utama pada strategi *Make to Stock* (MTS)?**  
   - **Jawaban**: Pada **produk akhir (*finished goods*)**. Barang sudah selesai diproduksi dan siap di gudang sebelum pesanan pelanggan masuk.

2. **Apakah pada *Make to Order* (MTO) terdapat stok produk jadi sebelum pesanan masuk?**  
   - **Jawaban**: **Tidak ada**. Produk jadi baru dibuat setelah pesanan pelanggan dikonfirmasi.

3. **Mengapa perusahaan manufaktur ATO menyimpan barang setengah jadi atau komponen?**  
   - **Jawaban**: Agar ketika pesanan kustom masuk, perusahaan dapat langsung merakit komponen tersebut tanpa harus memproses dari bahan mentah awal, sehingga mempercepat waktu pengiriman.

4. **Apa fungsi utama dari penempatan *buffer* (stok cadangan/kapasitas)?**  
   - **Jawaban**: Untuk menyerap ketidakpastian (*uncertainties*) operasional sehingga gangguan pada satu tahapan proses tidak menghentikan kelangsungan seluruh tahapan produksi lainnya.
