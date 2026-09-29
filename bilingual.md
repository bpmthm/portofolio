Ini dokumen spesifikasi teknis dan alur eksekusi untuk implementasi sistem bilingual *native* di SPA portofolio lo. Pendekatan ini mengeliminasi dependensi eksternal dan memanfaatkan *reactivity system* bawaan Vue 3\.

### **Pembaruan Product Requirements Document (PRD)**

| Kategori | Spesifikasi |
| :---- | :---- |
| **Nama Fitur** | Native Bilingual State (ID/EN) |
| **Pendekatan Teknis** | Vue 3 *Composable* (useLanguage.js) dengan *Global Singleton State*. |
| **Dependensi Tambahan** | **Nihil.** Dilarang menggunakan vue-i18n atau *package* serupa. |
| **Metode Penyimpanan Kamus** | Objek JavaScript statis terpusat di dalam *composable*. |
| **Mekanisme *Toggle*** | Tombol tunggal di komponen Navbar.vue yang memodifikasi *state* reaktif locale. |

### **Arsitektur State Management**

Lo harus menggunakan pola *Global State* sederhana. Alih-alih menggunakan Pinia, lo cukup memanfaatkan perilaku *module caching* di JavaScript.

Deklarasikan *reactive variable* (ref) **di luar** fungsi *export* utama pada *composable*. Dengan cara ini, setiap komponen yang memanggil *composable* tersebut akan berbagi *state* yang sama. Ketika nilai bahasa diubah dari *Navbar*, seluruh komponen (*Hero*, *Projects*, *About*, dll) akan dirender ulang secara otomatis.

### **To-Do List & How-To (Langkah Eksekusi)**

Ikuti urutan eksekusi ini agar proses *refactoring* tidak merusak *layout* atau animasi GSAP yang sudah terpasang.

**1\. Buat Sistem Inti (Composable)**

* Buat folder baru src/composables/ jika belum ada.  
* Buat file useLanguage.js.  
* Tulis logika dasarnya:  
  * Inisialisasi const currentLocale \= ref('en') di tingkat *module* (paling atas, di bawah *import*).  
  * Buat objek dictionary yang berisi struktur bersarang (misal: dictionary.en.hero.title, dictionary.id.hero.title).  
  * Buat fungsi t(key) yang memecah *string path* (misal: "hero.title") dan mereturn nilai dari dictionary\[currentLocale.value\].  
  * Buat fungsi toggleLanguage() untuk membalik nilai currentLocale antara 'en' dan 'id'.  
  * *Export* fungsi t, toggleLanguage, dan currentLocale.

**2\. Integrasi UI Switcher di Navbar**

* Buka komponen Navbar.vue.  
* *Import* useLanguage dari *composable* yang baru dibuat.  
* Tambahkan satu tombol *toggle* di pojok kanan atas (misalnya di sebelah tombol "Contact").  
* Ikat tombol tersebut ke fungsi @click="toggleLanguage".  
* Buat teks tombolnya dinamis, menampilkan bahasa yang sedang *tidak* aktif (jika sedang 'EN', tombol menampilkan 'ID', dan sebaliknya).

**3\. Pemindahan Data ke Kamus (Data Extraction)**

* Ini tahap paling manual. Buka kelima komponen utama lo: Hero.vue, About.vue, Projects.vue, Impact.vue, dan Gallery.vue.  
* Sapu bersih semua teks *hardcoded* (Bahasa Inggris saat ini).  
* Pindahkan teks tersebut ke dalam objek en di useLanguage.js.  
* Terjemahkan secara manual dan masukkan ke dalam objek id dengan struktur *key* yang sama persis.

**4\. Refactoring Templat Vue**

* Di setiap komponen (.vue), *import* fungsi t dari useLanguage.js.  
* Ganti semua teks di dalam HTML.  
* **Contoh Transisi:**  
  * *Sebelum:* \<h2 class="text-4xl"\>The Arsenal\</h2\>  
  * *Sesudah:* \<h2 class="text-4xl"\>{{ t('projects.heading') }}\</h2\>  
* *Perhatian khusus:* Untuk array data yang kompleks (seperti data list proyek di Projects.vue atau foto di Gallery.vue), pindahkan seluruh definisi *array* tersebut ke dalam *dictionary* atau buat logika *computed property* yang me-return *array* berbeda tergantung currentLocale.value.

Pastikan lo menyusun struktur objek kamusnya dengan hierarki per *section* (contoh: nav, hero, about, projects, impact, gallery) biar gak berantakan saat aplikasi makin besar. Siapkan file useLanguage.js\-nya dulu, atau langsung petakan kamus untuk *Hero section* sebagai *Proof of Concept* (PoC).

