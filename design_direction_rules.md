# Design System & Creative Direction: Portofolio `piporto.my.id`

Dokumen ini memuat panduan, aturan main, dan arah arsitektur visual untuk pengembangan portofolio web (`piporto.my.id`). Konsep utama memadukan estetika **Maximalist Ethnic-Hippie** yang ekspresif dengan **Modern Glassmorphism** dan identitas teknis yang kuat, menghindari kesan template AI generik.

## I. Aturan Main & Technical Guidelines

1. **Custom Micro-Interactions (GSAP Engine):**

   * Hindari animasi transisi bawaan CSS standar yang kaku.

   * Gunakan pustaka GSAP (GreenSock Animation Platform) untuk mengatur efek transisi halus pada *hover card*, pergerakan elemen, dan *scroll trigger* yang dinamis di setiap section web.

2. **Subtle Noise & Grain Texture:**

   * Jangan biarkan latar belakang gelap web terlihat *flat* atau polos.

   * Terapkan *subtle CSS noise texture* atau *overlay SVG grain* di atas background utama untuk memberikan tekstur visual yang organik dan mendalam.

3. **Human & Authentic Copywriting:**

   * Haram hukumnya menggunakan kalimat klise buatan AI seperti *"Welcome to my digital space, I am a passionate developer..."*.

   * Gunakan gaya bahasa personal yang santai, lugas, apa adanya, dan tegas mencerminkan *vibe* sehari-hari (menonjolkan *hard skills* dan mentalitas eksekusi tanpa basa-basi).

## II. Konsep Visual & Arah Desain

1. **Maximalist Ethnic-Hippie Canvas (The Background Vibe):**

   * Mengambil inspirasi dari palet warna hangat (*earthy-warm tones*), motif kain *patchwork*, corak matahari retro, dan kekayaan tekstur etnik hippie  yang ekspresif dan "ramai".

   * Alih-alih membuat teks tidak terbaca, gunakan sistem *layering* di mana latar belakang yang kaya corak ini diredam dengan *dark overlay* tipis.

2. **Glassmorphism sebagai "Modern Shield":**

   * Gunakan elemen *card*, panel navigasi, dan kontainer konten dengan efek kaca buram (`background: rgba(20, 15, 12, 0.75)`, *backdrop-filter: blur(12px)*, serta *border* tipis bersinar warna tembaga/gold).

   * Efek transparan ini memastikan konten teks kode dan portofolio tetap *clean*, futuristik, dan sangat mudah dibaca di atas kanvas yang ramai.

3. **Seni Etnik sebagai Aksen Fokus:**

   * Tempatkan ornamen atau motif geometris tradisional (seperti pola tenun/ikat atau garis ukiran) sebagai *watermark* tipis di balik *glass card*, *border frame*, atau sekat pemisah antar section agar jiwa seninya tetap hidup tanpa membuat visual kotor.

## III. Inspirasi Elemen Etnik & Modern Integration

1. **Pola Geometris & Tekstur Tradisional:**

   * Mengadaptasi pola garis matematis dari tenun/songket tradisional  sebagai pola transparan mikro di balik elemen *glass card*.

   * Ornamen ukiran klasik (seperti garis tegas Toraja/Sunda Kuno/Lombok) diekstrak menjadi *vectorized outline* dengan efek *glow* tipis bernuansa tembaga.

2. **Tipografi Nusantara & Modern Fusion:**

   * Mengombinasikan *sans-serif font* modern yang tajam dan bersih untuk isi teks/kodingan, dipadukan dengan aksen *serif/display font* berkarakter klasik/vintage untuk judul section dan *tagline*.

## IV. Palet Warna (Color Palette)

Perpaduan antara *earthy tones* ala hippie-ethnic dengan nuansa gelap khas *system administrator* (Linux/Fedora environment):

* **Base Background:** Hitam arang tua / abu-abu gelap bertekstur noise (`#121212` / `#1a1716`).

* **Glass Panel:** Panel transparan dengan opasitas rendah dan *backdrop blur* (`rgba(30, 24, 21, 0.75)`).

* **Ethnic & Accent Colors:**

  * *Terracotta / Burnt Orange* (`#CC5500` / `#D95325`)

  * *Sun Gold / Mustard* (`#E6A129`)

  * *Copper / Tembaga* (`#B87333`)

  * *Deep Earth Maroon* (`#3D1C14`)