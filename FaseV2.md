**Pembaruan Product Requirements Document (PRD) \- Fase V2.0**

| Fitur / Komponen | Spesifikasi & Ekspektasi Baru |
| :---- | :---- |
| **Hero Section** | Penambahan tombol akses langsung ke LinkedIn dan Email (sejajar dengan CTA utama). |
| **About (The Operator)** | Perluasan tab terminal mencakup: **Edu** (SMKN 2 Bandung & D3 ULBI), **Org** (Pembuatan identitas visual UNDERDOG), dan **Certs** (Daftar sertifikat dengan tautan ke PDF). |
| **Projects (The Arsenal)** | Penambahan tombol \[ VIEW REPO \] di dalam *Modal Case Study*. |
| **Impact (Ground Zero)** | Penambahan fitur *Modal Pop-up* (seperti di Projects) untuk menjabarkan detail kampanye digital dan restorasi ekologi Tjibadak1921. |
| **Gallery (The Lens)** | Penyediaan properti imagePath pada *state* data untuk merender *file* foto asli. |
| **Theme (Dark/Light)** | Implementasi sistem *toggle* tema berbasis state Tailwind (dark: class). Tema *light* akan menggunakan palet *retro/e-ink terminal* (abu-abu/putih kusam) agar estetika *raw* tetap terjaga. |

### **Rancangan Arsitektur & Desain**

Pembaruan ini menuntut kita memodifikasi struktur data di dalam komponen Vue. Karena lo mau masukin gambar dan PDF manual di akhir, gue akan nyiapin *placeholder* (variabel kosong atau *dummy path*) di kodingan.

Untuk **Light Mode**, kita gak akan pakai warna putih bersih karena bakal ngerusak *vibe* terminal/hacker. Kita akan rancang palet *Light Mode* layaknya kertas usam (*parchment*) atau layar monitor CRT lama pas lagi *invert colors* (latar abu-abu terang, teks hitam karbon, aksen merah bata tetap dipertahankan).

### **To-Do List & How-To Execution**

Kita akan bagi pengerjaannya jadi 3 etape biar GSAP lo gak hancur lagi:

**Etape 1: Pembaruan Konten Statis & Tautan (Risiko Rendah)**

* **Hero.vue:**  
* 

  * *How-to:* Tambahkan div *container* baru di bawah deskripsi untuk tombol LinkedIn dan Email. Gunakan tag \<a\> dengan atribut target="\_blank".  
  *   
* **Projects.vue:**  
* 

  * *How-to:* Di dalam HTML *Modal*, tambahkan div *flex* baru di sebelah tombol "Close". Isi dengan tag \<a\> yang datanya diambil dari selectedProject.repoUrl. (Gue bakal tambahin *key* repoUrl di *array* datanya).  
  *   
* **Gallery.vue:**  
* 

  * *How-to:* Tambahkan *key* image: '/images/dummy.jpg' di setiap *object* pada *array* photos. Ubah div latar belakang masonry menjadi tag \<img\> atau *background-image* dinamis. Nanti lo tinggal ganti *path* /images/... dengan lokasi file asli lo.  
  * 

**Etape 2: Perombakan Modal & Tab Terminal (Risiko Menengah)**

* **About.vue:**  
* 

  * *How-to:* Update array *tabs* di bagian terminal. Tambahkan logika v-if="activeTab \=== 'edu'", v-if="activeTab \=== 'org'", dan v-if="activeTab \=== 'certs'". Susun layout menggunakan list \<ul\> atau tabel sederhana ala terminal. Untuk sertifikat, buat tombol \<a href="/certs/file.pdf" target="\_blank"\> yang nanti file-nya lo taruh di folder public/certs/.  
  *   
* **Impact.vue:**  
* 

  * *How-to:* Buat *state* selectedImpact dan isModalOpen. *Copy-paste* kerangka GSAP dan HTML Modal dari Projects.vue ke sini. Sesuaikan isinya dengan detail Tjibadak1921.  
  * 

**Etape 3: Rekayasa Light Mode (Risiko Tinggi pada CSS)**

* **Tailwind Config & State:**  
* 

  * *How-to:* Buat *composable* useTheme.js atau taruh *state* isDark di App.vue. Hubungkan ke sebuah tombol *toggle* di *Navbar*.  
  *   
  * Seting Tailwind lo pakai konfigurasi darkMode: 'class'.  
  *   
  * Kita harus menyisir semua komponen dan menambahkan prefix dark:. Contoh: bg-gray-100 dark:bg-darker text-gray-900 dark:text-light. Ini memakan waktu paling lama karena harus mengecek ulang seluruh warna.  
  * 

Etape 1 dan 2 bisa kita sikat dengan cepat karena murni mainan struktur Vue dan GSAP. Etape 3 (Light Mode) mending kita kerjain belakangan setelah semua konten dan animasi lo benar-benar *settle*.