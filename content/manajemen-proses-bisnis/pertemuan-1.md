---
title: "Pertemuan 1"
description: "Catatan pengantar perkuliahan Manajemen Proses Bisnis (Week 1)."
minutes: 30
updated: "2026-09-02"
---

## 1. Pengenalan Mata Kuliah & Rumpun Keahlian di SI

Program studi Sistem Informasi (SI) memiliki 3 fokus/rumpun keahlian utama yang pemilihannya dilakukan secara kompetitif pada semester 4:

1. **Rumpun Teknologi / Enterprise (DT)**  
   *Mata kuliah MPB berada di rumpun ini*, berfokus pada arsitektur organisasi, alur kerja, dan otomasi proses bisnis menggunakan dukungan teknologi.
2. **Rumpun Data**  
   Berfokus pada tata kelola data, analitik data, *business intelligence*, dan rekayasa data.
3. **Rumpun Manajemen**  
   Berfokus pada strategi bisnis, manajemen proyek TI, tata kelola TI (*IT governance*), dan manajemen layanan.

---

## 2. Definisi & Cakupan Proses Bisnis

* **Definisi Luas:** Proses bisnis bukan hanya tentang menghasilkan keuntungan (*profit*), melainkan rangkaian aktivitas terkoordinasi yang dilakukan secara berulang untuk mencapai tujuan yang terukur dan memberikan nilai tambah (*value*).
* **Studi Kasus — PTN-BH:**  
  Organisasi non-profit atau institusi pendidikan tinggi berstatus PTN-BH mengelola berbagai lini unit bisnis (misal: penyewaan gedung, pengelolaan *food court*, dll.). Dalam konteks ini, **mahasiswa diposisikan sebagai *customer*** yang berhak memperoleh standar layanan akademik dan operasional terbaik.

---

## 3. Lima Komponen Utama Proses Bisnis

Setiap proses bisnis tersusun atas lima elemen inti:

| No | Komponen | Penjelasan | Contoh Konkret |
|---|---|---|---|
| 1 | **Event** | Peristiwa pemicu (*trigger*) yang tidak memiliki durasi waktu, mengawali atau mengakhiri suatu proses. | Rasa lapar, notifikasi pesanan masuk, jam perkuliahan dimulai. |
| 2 | **Activity / Task** | Tindakan nyata atau pekerjaan yang membutuhkan waktu, sumber daya, dan usaha untuk diselesaikan. | Memasak makanan, memvalidasi KRS, mengirim email. |
| 3 | **Decision Point** | Titik percabangan logika untuk menentukan alur proses berikutnya (menggunakan gerbang logika **AND**, **OR**, **XOR**). | Pengecekan saldo: jika cukup lanjut bayar (**XOR**), jika tidak proses dibatalkan. |
| 4 | **Actor** | Entitas yang mengeksekusi aktivitas, baik berupa manusia maupun sistem/otomasi. | Dosen, Rektor, Mahasiswa, Payment Gateway, Server Otomatis. |
| 5 | **Object** | Benda atau elemen yang digunakan/dimanipulasi sepanjang alur proses: <br>• **Fisik (*Physical*):** Berwujud nyata.<br>• **Informasional (*Informational*):** Berupa data/digital. | • Fisik: Struk belanja cetak, formulir kertas.<br>• Informasional: PDF e-receipt, payload JSON, kode QR. |

### Hasil Proses (*Outcome*)
- **Positive Outcome:** Proses berhasil mencapai nilai/tujuan yang diharapkan (misal: pesanan terkirim tepat waktu).
- **Negative Outcome:** Proses gagal mencapai tujuan atau mengalami kendala (misal: pesanan dibatalkan/ditolak).

---

## 4. Urgensi MPB, SOP, dan Peran Teknologi

* **Pentingnya MPB & SOP (*Standard Operating Procedure*):**  
  Menjadi acuan standar operasional bersama agar kinerja organisasi tetap konsisten dan *scalable*, terutama menjaga kesinambungan kerja ketika terjadi rotasi atau pergantian personel (*turnover*).
* **Prinsip Hubungan Proses Bisnis & Teknologi:**
  > *"Teknologi bekerja sebagai pengganda (multiplier). Jika proses dasarnya sudah baik dan efisien, teknologi akan melipatgandakan efisiensinya. Sebaliknya, jika proses dasarnya berantakan/cacat, otomatisasi teknologi hanya akan mempercepat dan memperbesar kekacauan tersebut."*

---

## 5. Peran Mahasiswa Sistem Informasi

Mahasiswa SI memegang peran strategis sebagai **jembatan (bridge / translator)** antara:
* **Pihak Bisnis (*Business-oriented*):** Memahami kebutuhan operasional, target nilai, efisiensi biaya, dan kepuasan pelanggan.
* **Pihak Teknis (*Technical-oriented*):** Memahami arsitektur perangkat lunak, infrastruktur data, integrasi API, dan batasan teknologi.

---

## 6. Rencana Pembelajaran & Skema Penilaian

### Komponen Evaluasi Kelas:
1. **Tugas Individu:** Eksplorasi materi, analisis proses, dan latihan pemodelan.
2. **Kuis:** Ujian formatif berbasis pilihan ganda untuk menguji pemahaman konsep.
3. **UTS (Ujian Tengah Semester):** Evaluasi teori dan pemodelan proses.
4. **UAS (Proyek Kelompok):** Proyek integratif analisis dan perancangan proses bisnis nyata (diselaraskan objek studinya dengan mata kuliah *Transformasi Digital*).

---

## 7. Action Item / Tugas Pertemuan 1

- [ ] **Riset Tools BPMN:** Mencari dan mengeksplorasi perangkat lunak pemodelan proses bisnis berbasis BPMN 2.0 (misal: Camunda Modeler, Bizagi Modeler, Draw.io, Signavio).
- [ ] **Pemodelan BPMN Sederhana:** Memodelkan satu alur aktivitas harian (contoh: proses bangun pagi, memesan makanan via ojek online, atau registrasi KRS) menggunakan notasi standar BPMN (Event, Activity, Gateway/Decision, Flow).
