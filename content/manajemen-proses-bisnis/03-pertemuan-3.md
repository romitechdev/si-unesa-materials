---
title: "Pertemuan 3"
description: "Catatan perkuliahan Manajemen Proses Bisnis (MPB) Week 3. Memuat panduan teknis proyek akhir semester (sinkronisasi dengan mata kuliah Transformasi Digital, kriteria organisasi sasaran, dan mitigasi izin administrasi), hasil review pemodelan proses via Camunda, serta eksplorasi mendalam jenis-jenis *control flow* BPMN 2.0 (*Sequence Pattern*, XOR, AND, dan Inclusive OR)."
minutes: 30
updated: "2026-09-17"
---

## 1. Ketentuan & Panduan Proyek Akhir Semester

### A. Struktur Tim & Skema Evaluasi
* **Integrasi Lintas Matkul:** Anggota tim disamakan 1:1 dengan kelompok mata kuliah **Transformasi Digital (Bu Widya)** guna efisiensi observasi lapangan.
* **Formasi:** Beranggotakan **4 hingga 5 orang** per kelompok dengan menunjuk satu orang sebagai penanggung jawab (ketua kelompok).
* **Proporsi Penilaian:** Porsi nilai terbesar bertumpu pada **kontribusi individu**. Parameter diukur dari kontribusi riil, keaktifan progres, serta kemampuan artikulasi saat sesi konsultasi berkala.

### B. Kriteria & Aksesibilitas Organisasi Sasaran
* **Kriteria Organisasi:** Wajib entitas nyata (*real business*), beroperasi aktif, dan bukan fiktif atau organisasi rintisan baru agar kendala operasional riil dapat dipetakan secara akurat.
* **Sektor Sasaran:** Terbuka luas mencakup instansi pemerintah, UMKM aktif, korporasi swasta, BUMN, hingga institusi pendidikan/sekolah.
* **Strategi Administrasi & Perizinan:**
  * **Jalur Relasi/Keluarga (Sangat Disarankan):** Memanfaatkan koneksi orang dalam untuk memangkas birokrasi izin dan mempercepat pengambilan data.
  * **Jalur Mandiri (Surat Pengantar TU):** Memerlukan proses permohonan ke Tata Usaha (TU) Fakultas dengan durasi 3–4 minggu serta memiliki risiko penolakan dari pihak manajemen lokasi sasaran.

### C. *Timeline* & Beban Kerja Pemodelan BPMN
* **Target Minggu ke-8 (Pra-UTS):** Batas akhir penyerahan nama organisasi sasaran yang telah berstatus *fix/approved*.
* **Observasi Lapangan:** Diestimasikan membutuhkan minimal **2 kali kunjungan fisik** untuk validasi data alur kerja.
* **Distribusi Beban Diagram:**
  * Setiap anggota tim minimal memodelkan **1 proses bisnis**.
  * Total minimal: 4 diagram per kelompok (jika beranggotakan 4 orang).
  * **Keseimbangan Beban (*Workload Balancing*):** Anggota yang memodelkan proses sederhana (12–15 elemen notasi) disarankan menyusun 2–3 proses bisnis agar setara dengan rekan yang menganalisis alur kompleks ($\approx 50$ notasi).
* **Fase Pasca-UTS:** Pelaksanaan konsultasi mingguan berkala untuk membedah progres laporan dan mendiskusikan kendala teknis pemodelan.

---

## 2. Review Tugas 1 & Standar Desain Notasi (Camunda Modeler)

Evaluasi tugas pemodelan sebelumnya menetapkan aturan konvensi visual baku:

| Komponen | Aturan Baku | Konsekuensi / Catatan Khusus |
|---|---|---|
| **Latar Belakang (*Canvas*)** | **Wajib latar belakang putih murni.** | Penggunaan *background* gelap/hitam dilarang keras karena teks dan notasi tidak terbaca saat dicetak/diekspor ke laporan PDF. |
| **Labeling Pool** | Menuliskan nama tempat atau organisasi langsung (misal: `Kampus`, `Tempat Makan`). | Jangan menambahkan kata redundan seperti "Entitas Kampus". |
| **Labeling Lane** | Merepresentasikan **aktor atau peran spesifik** (misal: `Mahasiswa`, `Dosen`, `Tendik`, `LMS`, `Penjual`). | Dilarang menggunakan keterangan waktu (pagi/siang) atau tempat fisik. |
| **Dekomposisi Tugas (*Task Decomposition*)** | **Satu kotak aktivitas hanya memuat satu kata kerja operasional.** | Dilarang menggabungkan dua aksi sekaligus: <br>❌ *"Mencuci beras dan menanak nasi"* <br>✔️ Dipisah: `[Mencuci Beras]` $\rightarrow$ `[Menanak Nasi]`. |

---

## 3. Taksonomi Kontrol Alur BPMN (*Control Flows / Gateways*)

*Gateway* berfungsi sebagai mekanisme pengarah aliran proses yang menjalankan dua operasi dasar:
* **Branching / Splitting (Split):** Memecah satu aliran masuk (*incoming flow*) menjadi dua atau lebih aliran keluar (*outgoing flows*).
* **Merging / Joining (Join):** Menyatukan kembali beberapa cabang aliran masuk menjadi satu aliran tunggal.

```text
CONTROL FLOWS (GATEWAYS)
 ├── 1. Sequence Pattern       --> Pola linier berurutan tanpa gateway
 ├── 2. Exclusive Gateway (XOR) --> Memilih HANYA SATU cabang yang aktif
 ├── 3. Parallel Gateway (AND)  --> Menjalankan SEMUA cabang secara bersamaan
 └── 4. Inclusive Gateway (OR)  --> Menjalankan SATU, BEBERAPA, atau SEMUA cabang

```

---

### A. Sequence Pattern (Pola Sekuensial)

Pola paling mendasar di mana aliran token berpindah langsung dari Aktivitas A ke Aktivitas B secara linier tanpa memerlukan percabangan logika.

---

### B. Exclusive Gateway (XOR)

* **Sifat Logika:** Kondisi percabangan berbasis kondisi mutual eksklusif. Hanya ada **tepat satu jalur** yang dapat dipilih dan aktif.
* **XOR Split vs XOR Join:**
* **XOR Split:** Memvalidasi kondisi; jika kondisi terpenuhi, token dialihkan ke satu cabang terpilih.
* **XOR Join:** Titik temu beberapa cabang alternatif menuju aktivitas downstream berikutnya.


* **Aturan Mutlak XOR Join:**
XOR Split **TIDAK WAJIB** ditutup oleh XOR Join. Cabang-cabang yang terpisah boleh berakhir di *End Event* masing-masing jika memang tidak memiliki aktivitas bersama berikutnya.

```text
                      ┌───► [Opsi B: Koreksi Invoice] ───┐
[Validasi Invoice] ─►[X]───► [Opsi C: Proses Invoice] ───┼──►[X]──► [Arsip Transaksi]
                      │                                  │
                      └───► [Default: Blokir Invoice] ───┘
                            (Garis Coret Diagonal)

```

* **Studi Kasus Penanganan Invoice:**
* Skenario 1: Tidak ada kekeliruan $\rightarrow$ Proses pembayaran.
* Skenario 2: Ditemukan salah ketik ringan $\rightarrow$ Koreksi dokumen dan kirim ulang.
* Skenario 3: Kesalahan data fatal $\rightarrow$ Pemblokiran invoice (*blocking*).


* **Default Flow (Garis Coret / Diagonal):** Jalur cadangan otomatis yang dieksekusi jika kondisi di lapangan tidak memenuhi kriteria skenario mana pun yang telah terdefinisi.

---

### C. Parallel Gateway (AND)

* **Sifat Logika:** Eksekusi konkuren. Mengaktifkan **seluruh cabang keluar secara simultan** pada waktu yang sama.
* **Mekanisme Kerja:**
* **AND Split:** Memecah aliran menjadi beberapa cabang paralel tanpa memerlukan syarat/kondisi logika.
* **AND Join (Titik Sinkronisasi):** Bertindak sebagai gerbang penahan (*synchronization point*); aktivitas berikutnya baru bisa berjalan jika seluruh cabang paralel telah selesai dieksekusi.



```text
               ┌───► [Pengecekan X-Ray Bagasi] ───┐
[Check-in] ──►[+]                                 ├──►[+]──► [Boarding Gate]
               └───► [Pemeriksaan Metal Detector]─┘
                     (Eksekusi Simultan / Paralel)

```

* **Kaidah Logika Operasional:**
* Aktivitas yang diparalelkan harus realistis secara fisik (Contoh logis: Pengecekan barang di x-ray bersamaan dengan penumpang melintasi *metal detector*; Contoh tidak logis: Menyikat gigi sambil keramas).
* **Eksekusi Lintas Aktor:** Sangat lumrah diterapkan lintas divisi (misal: Divisi Finansial memverifikasi pembayaran sementara Divisi Gudang melakukan pengepakan barang).


* **Multiple Start & End Events:** Diagram BPMN valid memiliki lebih dari satu pemicu awal (*Start Event*) yang berjalan paralel, misalnya pemesanan restoran dari pelanggan fisik di kasir (*dine-in*) dan pesanan daring (*ShopeeFood*).

---

### D. Inclusive Gateway (OR)

* **Sifat Logika:** Penggabungan fleksibel antara sifat XOR dan AND. Memungkinkan pemilihan **satu cabang, beberapa kombinasi cabang, atau seluruh cabang sekaligus** sesuai kondisi dinamis di lapangan.

```text
                        ┌───► [Kirim ke Gudang Amsterdam] ───┐
[Proses Distribusi] ─►(O)───► [Kirim ke Gudang Hamburg]   ───┼──►(O)──► [Pengiriman Selesai]
                        └───► [Kirim ke Gudang Lainnya]   ───┘

```

* **Studi Kasus Distribusi Logistik Perusahaan:**
* *Kelemahan XOR:* Gagal menangani kiriman yang memuat paket untuk gudang Amsterdam dan gudang Hamburg sekaligus (karena XOR hanya mengizinkan 1 tujuan).
* *Kelemahan AND:* Akan mengalami galat/terhenti (*stuck*) jika suatu kiriman hanya ditujukan ke Amsterdam saja (karena AND memaksa semua jalur wajib dieksekusi).
* *Solusi Menggunakan OR:* Mampu mengakomodasi skenario Amsterdam saja, Hamburg saja, maupun keduanya secara simultan.


* **Skalabilitas Arsitektur (*Scalability*):** Menjamin diagram adaptif terhadap ekspansi bisnis. Jika kelak perusahaan menambah gudang cabang baru, struktur diagram tidak perlu dirombak total, melainkan cukup menambahkan cabang aktivitas baru di dalam rentang *gateway* OR tersebut.

---

## 4. Matriks Komparasi Karakteristik Tiga Gateway Utama

| Parameter | Exclusive Gateway (XOR) | Parallel Gateway (AND) | Inclusive Gateway (OR) |
| --- | --- | --- | --- |
| **Simbol Internal** | Tanda Silang (`X`) / Kosong | Tanda Tambah (`+`) | Lingkaran Terbuka (`O`) |
| **Jumlah Cabang Aktif** | **Tepat 1 Cabang** | **Semua Cabang** |  1 Cabang (1, sebagian, atau semua) |
| **Kebutuhan Kondisi** | Wajib ada evaluasi kondisi per cabang | Tanpa kondisi (semua jalan otomatis) | Ada evaluasi kondisi per cabang |
| **Fungsi Join** | Meneruskan token dari cabang mana pun yang datang pertama | Menunggu **seluruh cabang** selesai sebelum meneruskan token | Menunggu **hanya cabang-cabang yang aktif** selesai |
| **Kebutuhan Penutup Join** | Tidak wajib ditutup XOR Join | Wajib ditutup AND Join jika ada sinkronisasi | Wajib ditutup OR Join jika ada sinkronisasi |

