---
title: "Pertemuan 1"
description: "Pengantar Keamanan jaringan week 1"
minutes: 30
updated: "2026-09-02"
resources:
  - title: "PPT WEEK 1"
    url: "https://drive.google.com/file/d/1Y11vZurT7HZKmc5DAKbHgMymJH-nCw6T/view?usp=classroom_web&authuser=0"
    type: ppt
  - title: "PPT WEEK 2"
    url: "https://drive.google.com/file/d/1hA_A7hj7JnW_Bze_JCCHCjOyiOWZwrFP/view?usp=classroom_web&authuser=0"
    type: ppt
---


## 1. Pengantar Manajemen Risiko TI

Manajemen risiko TI merupakan fondasi utama dalam melindungi kelangsungan operasional organisasi dari berbagai ancaman siber.

* **Identifikasi Ancaman:** Proses awal dan berkesinambungan untuk memetakan potensi gangguan keamanan, seperti *Distributed Denial of Service* (DDoS), peretasan, dan kebocoran data. Identifikasi wajib dilakukan secara rutin agar tim IT dapat menyadari dan menangani insiden sejak dini.
* **Evaluasi Risiko:** Menilai tingkat bahaya dengan mengukur dua variabel utama:

 Tingkat Risiko = Probabilitas Serangan Dampak Kerusakan

**Konsekuensi Pembiaran (*Risk Neglect*):** Membiarkan celah sistem tanpa mitigasi, misalnya tanpa *firewall* yang terkonfigurasi dengan baik, dapat membuka peluang *easy penetration* dan penyusupan *malware*. Tim IT bertanggung jawab memastikan kontrol keamanan berjalan tepat sasaran.

## 2. Tiga Pilar Strategi Pengendalian Risiko

Upaya mengeliminasi atau meminimalkan dampak ancaman siber berlandaskan pada tiga pilar:

| Pilar                           | Fokus Implementasi                                                                   | Contoh Penerapan                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| **Pengamanan Teknologi**        | Perlindungan berbasis perangkat keras (*hardware*) dan perangkat lunak (*software*). | *Next-gen firewall*, antivirus ter-update otomatis, *programmable routers*.                           |
| **Kebijakan Internal**          | Regulasi tertulis dan pembatasan hak akses.                                          | *Captive portal* WiFi kantor/kampus dengan autentikasi *username* dan *password* unik melalui router. |
| **Pelatihan SDM (*Awareness*)** | Edukasi mengenai batasan penggunaan aset TI dan internet kantor.                     | Larangan mengunduh file sembarangan atau menggunakan situs bajakan yang rawan injeksi *malware*.      |

> 🎬 **Studi Kasus Kelas: Backdoor Akibat File Film di Server Sensitif**
> Dosen memaparkan kasus jebolnya server finansial/HRD akibat oknum internal yang mengunduh dan menyimpan file film ilegal di server kerja. Hacker dapat menyisipkan *malware* ke dalam file media bajakan. Saat file diunduh ke lingkungan server, skrip jahat dapat membuka celah pintu belakang (*backdoor*) yang memberikan akses ilegal bagi penyerang luar.

## 3. Urgensi Manajemen Risiko TI

### A. Perlindungan Aset & Data

* Di era modern, **data bernilai jauh lebih tinggi dibanding infrastruktur fisik**. Kerusakan fisik server dapat diganti dengan biaya terukur, sedangkan kebocoran atau kehilangan database dapat menghancurkan bisnis secara permanen.
* **Contoh:** Kasus pemerasan siber instansi pemerintah melalui serangan enkripsi data, di mana penyerang menuntut uang tebusan (*ransom*) ratusan ribu dolar untuk kunci dekripsi.

### B. Kelangsungan Operasional (*Business Continuity*)

* **Prinsip Multi-Server (365/24/7):** Layanan kritikal perbankan tidak boleh mengalami *downtime*. Wajib memiliki redundansi minimal **≥ 2 server** agar pemeliharaan (*maintenance*) dapat dilakukan secara bergantian tanpa memutus layanan publik.

> 🏦 **Komparasi Operasional Sektor Perbankan:**
> * **Bank BTN:** Dosen menyoroti kerentanan transaksi di jam malam, khususnya tanggal 1 dan 2 awal bulan, seperti kegagalan proses pembayaran *virtual account* ketika saldo nasabah terdebit tetapi status transaksi tidak tervalidasi.
> * **Bank BCA:** Mengalami rata-rata gangguan yang sangat minim, sekitar 2–3 kali per tahun, karena alokasi investasi pada perekrutan talenta IT spesialis dan arsitektur pemantauan jaringan tingkat lanjut.

### C. Reputasi Organisasi & Aspek Legal

* Kepercayaan pada ekosistem digital seperti *e-commerce*, *e-wallet*, dan *m-banking* sangat sensitif terhadap isu keamanan. Kegagalan sistem dapat membuat pengguna berpindah ke kompetitor.
* **Integritas Hukum:** Kualitas sistem harus selaras dengan kepatuhan hukum. Institusi dilarang membekukan dana/rekening nasabah secara sepihak tanpa putusan pengadilan atau mekanisme audit yang berkekuatan hukum tetap (*inkrah*).

## 4. Taksonomi Jenis-Jenis Risiko TI

1. **Risiko Keuangan (*Financial Risk*):** Kerugian materiil langsung atau kerugian akibat terhentinya perputaran uang.

   * **Studi Kasus:** Serangan *ransomware* Bank Syariah Indonesia (BSI) tahun 2024 yang disebut melumpuhkan layanan perbankan hingga sekitar 1 bulan akibat penguncian basis data.
2. **Risiko Hukum (*Legal Risk*):** Gugatan perdata atau denda regulator akibat kebocoran data pribadi nasabah/konsumen yang dapat memicu kepanikan dan aksi penarikan dana massal (*rush money*).
3. **Risiko Strategis (*Strategic Risk*):** Kegagalan pencapaian visi jangka panjang akibat salah langkah teknologi. Tim IT wajib menyusun *business case* yang meyakinkan *stakeholder* agar menyetujui anggaran keamanan preventif.
4. **Risiko Keamanan Siber (*Cybersecurity Risk*):** Ancaman penetrasi harian seperti *phishing*, *trojan*, *ransomware*, dan *brute-force*.
5. **Risiko Fisik & Bencana Alam (*Physical/Disaster Risk*):** Kerusakan pusat data fisik akibat gempa, banjir, maupun kebakaran.

   * **Mitigasi Geografis (*Server Mirroring*):** Server cadangan sebaiknya ditempatkan pada lokasi yang tidak berdekatan dengan server utama dan memiliki karakteristik risiko bencana yang berbeda, dengan jaminan keandalan suplai kelistrikan (*power grid*).

## 5. Analisis Celah Keamanan & Mitigasi Operasional

### Tipe Ancaman

```text
                    TIPE RISIKO & CELAH
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
     ┌──────────────────┐        ┌──────────────────┐
     │ Ancaman Eksternal│        │ Ancaman Internal │
     ├──────────────────┤        ├──────────────────┤
     │ • Serangan DDoS  │        │ • Human Error    │
     │ • Web Defacement │        │ • Oknum Tim IT   │
     │ • Credential Leak│        │   Nakal (Abuse)  │
     └──────────────────┘        └──────────────────┘
```

* **Manajemen Pemeliharaan (*Maintenance Window*):** Pembaruan infrastruktur dialokasikan pada jam beban terendah (*off-peak hours*, pukul 00.00–03.00) untuk meminimalkan komplain dan potensi disrupsi transaksi.
* **Standar Audit ISO 27001 / ISO 27000 Series:** Menjadi kerangka acuan formal kepatuhan sistem keamanan untuk mendukung proses sertifikasi dan audit pihak ketiga.
* **Penetration Testing (*Ethical Hacking*):** Simulasi serangan nyata menggunakan jasa *white-hat hacker* untuk menemukan kerentanan keamanan. Memerlukan alokasi anggaran yang signifikan bagi perusahaan skala kecil/menengah.

## 6. Arsitektur Pertahanan & Tanggap Insiden

### A. Kontrol Teknis & Segmentasi Jaringan

* **Segmentasi Jaringan Fisik/Logis:** Memisahkan jaringan publik (*Guest WiFi*) dan jaringan inti (*Core DB Server*) melalui konfigurasi multi-router. Jika titik akses publik diserang, isolasi (*cut-off*) dapat dilakukan tanpa membahayakan data inti.
* **Alat Pemantauan Keamanan:**

  * **SIEM (*Security Information and Event Management*):** Agregator dan analisis log terpusat untuk mendeteksi pola anomali.
  * **IPS (*Intrusion Prevention System*):** Inspeksi paket aktif untuk menolak intrusi secara otomatis.
  * **AI Behavioral Analytics:** Deteksi perilaku menyimpang (*abnormal user pattern*).
  * **Automated Vulnerability Scanner:** Pemindai celah keamanan otomatis secara berkala.

### B. Prosedur Tanggap Darurat (*Incident Response*)

> 🚨 **Analogi: Unit Siber sebagai "BPBD Siber"**
> Seperti BPBD menghadapi bencana alam, unit penanganan insiden siber bertindak sebagai tim tanggap cepat yang mengisolasi kerusakan, menyelamatkan aset cadangan (*mirroring*), dan memulihkan operasi utama sebelum kelumpuhan meluas.

* **Evaluasi Pasca-Insiden (*Post-Mortem Analysis*):** Melakukan analisis akar masalah (*root cause analysis*), penambalan celah (*patching*), serta pembaruan SOP pertahanan agar eksploitasi serupa tidak berulang.

## 7. Nilai Tambah & Keuntungan Bisnis (*Business Value*)

> 🏍️ **Analogi: Berkendara Menggunakan Helm dan Jaket**
> Manajemen risiko bukan jaminan nol kecelakaan, melainkan perangkat proteksi. Helm dan jaket tidak memastikan motor tidak tergelincir, tetapi mengurangi dampak ketika insiden terjadi.

* **Kesiapan Listing Pasar Modal (BEI):** Lolos audit tata kelola keamanan sistem informasi dan jaringan komputer merupakan bagian penting dari kesiapan perusahaan yang merencanakan *Initial Public Offering* (IPO).
* **Efisiensi Anggaran Jangka Panjang:** Investasi preventif seperti perangkat lunak, pelatihan, dan arsitektur redundansi dapat lebih terjangkau dibanding biaya pemulihan insiden, denda regulasi, atau kompensasi kerugian akibat basis data yang terkompromi.

## 8. Catatan & Agenda Perkuliahan

* [ ] **Pertemuan Minggu Depan (Week 3):** Sesi demonstrasi langsung (*live demo*) pemantauan *traffic* keluar-masuk jaringan komputer dan WiFi melalui alat inspeksi berbasis web.


