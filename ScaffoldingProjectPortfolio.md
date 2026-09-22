Instruksi Pembuatan Scaffolding Project: Portfolio Urban Dev

Silakan buat struktur folder dan file di bawah ini di dalam folder `src`. Gunakan Vue 3 (Composition API `<script setup>`), Tailwind CSS, GSAP, Lenis, dan Vue Router. Terapkan warna tema `dark`, `light`, dan `accent` sesuai konfigurasi Tailwind.

## 1. Struktur Folder
Buat direktori berikut di dalam folder `src/`:
- `src/assets/images/`
- `src/assets/videos/`
- `src/assets/css/`
- `src/components/ui/`
- `src/components/layout/`
- `src/components/sections/`
- `src/views/`
- `src/router/`

## 2. File Konfigurasi

### `tailwind.config.js`
(Timpa file yang ada di root project dengan konfigurasi ini)
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        light: '#F5F5F5',
        accent: '#D9381E',
      },
      fontFamily: {
        heading: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'monospace'],
      }
    },
  },
  plugins: [],
}

src/assets/css/style.css
CSS
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-dark text-light font-body antialiased;
  overflow-x: hidden;
}

/* Efek grain/noise tipis buat vibes analog */
.analog-grain {
  position: relative;
}
.analog-grain::before {
  content: "";
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22[http://www.w3.org/2000/svg%22%3E%3Cfilter](http://www.w3.org/2000/svg%22%3E%3Cfilter) id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E');
  pointer-events: none;
  z-index: 50;
}

src/main.js
JavaScript
import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

src/router/index.js
JavaScript
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CaseStudy from '../views/CaseStudy.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/project/:id', name: 'CaseStudy', component: CaseStudy }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router

3. Komponen Inti Vue
src/App.vue
Cuplikan kode
<script setup>
import { onMounted } from 'vue'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

onMounted(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
})
</script>

<template>
  <div class="analog-grain min-h-screen flex flex-col">
    <Navbar/>
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <Footer/>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

src/views/Home.vue
Cuplikan kode
<script setup>
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue'
import Projects from '../components/sections/Projects.vue'
import Impact from '../components/sections/Impact.vue'
import Gallery from '../components/sections/Gallery.vue'
</script>

<template>
  <div>
    <Hero/>
    <About/>
    <Projects/>
    <Impact/>
    <Gallery/>
  </div>
</template>

src/views/CaseStudy.vue
Cuplikan kode
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <section class="pt-32 pb-20 px-6 max-w-5xl mx-auto">
    <router-link to="/" class="text-accent hover:underline mb-8 inline-block">&larr; Back to Base</router-link>
    <h1 class="text-5xl font-heading font-bold uppercase mb-4">Project: {{ route.params.id }}</h1>
    <div class="prose prose-invert max-w-none">
      <p class="text-lg text-gray-400">Case study details for {{ route.params.id }} will be loaded here. Features ORION, PT Chitose Internasional Tbk, and MBG IoT systems.</p>
    </div>
  </section>
</template>

4. Komponen Bagian (Sections & Layout)
src/components/layout/Navbar.vue
Cuplikan kode
<template>
  <nav class="fixed w-full top-0 z-40 bg-dark/80 backdrop-blur-md border-b border-gray-800">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <router-link to="/" class="text-2xl font-heading font-bold tracking-wider">PI.</router-link>
      <ul class="flex space-x-6 text-sm uppercase tracking-widest">
        <li><a href="#about" class="hover:text-accent transition-colors">About</a></li>
        <li><a href="#projects" class="hover:text-accent transition-colors">Works</a></li>
        <li><a href="#impact" class="hover:text-accent transition-colors">Impact</a></li>
        <li><a href="#gallery" class="hover:text-accent transition-colors">Lens</a></li>
      </ul>
    </div>
  </nav>
</template>

src/components/layout/Footer.vue
Cuplikan kode:
<template>
  <footer class="bg-black py-12 border-t border-gray-900 mt-20">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div class="text-center md:text-left mb-6 md:mb-0">
        <h2 class="text-3xl font-heading font-bold uppercase mb-2">Let's build something.</h2>
        <p class="text-gray-500 text-sm">Powered by Fedora Linux.</p>
      </div>
      <div class="flex flex-col items-end">
        <div class="flex space-x-4 mb-2">
          <a href="#" class="hover:text-accent transition-colors">GitHub</a>
          <a href="#" class="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" class="hover:text-accent transition-colors">Email</a>
        </div>
        <p class="text-xs text-gray-600">Currently listening to: Midwest Emo / Shoegaze</p>
      </div>
    </div>
  </footer>
</template>

src/components/sections/Hero.vue
Cuplikan kode:
<template>
  <section class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Placeholder for street photography background -->
    <div class="absolute inset-0 bg-gray-900"></div>
    <div class="absolute inset-0 bg-black/60 z-10"></div>
    <div class="relative z-20 text-center px-4">
      <h1 class="text-6xl md:text-8xl font-heading font-bold uppercase tracking-tighter mb-4 text-light">Lutfi Candaka K.</h1>
      <p class="text-xl md:text-2xl font-body text-gray-300 mb-8">Full-Stack Dev — Network Engineer — Visual Enthusiast</p>
      <div class="flex justify-center space-x-4">
        <a href="#projects" class="bg-accent text-light px-8 py-3 uppercase tracking-wider font-bold hover:bg-red-700 transition-colors">Explore Stack</a>
      </div>
    </div>
  </section>
</template>

src/components/sections/About.vue
Cuplikan kode:
<template>
  <section id="about" class="py-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
    <div class="w-full md:w-1/2 aspect-square bg-gray-800 rounded-sm">
      <!-- Placeholder for casual profile photo -->
    </div>
    <div class="w-full md:w-1/2">
      <h2 class="text-4xl font-heading font-bold uppercase mb-6">The Operator</h2>
      <p class="text-gray-300 mb-6 leading-relaxed">
        Gue Lutfi, biasa dipanggil Pi. Lulusan D3 Teknik Informatika yang sehari-hari ngoprek backend, server, dan jaringan. Comfort zone gue ada di terminal Fedora, ngeracik arsitektur sistem, dan brewing coffee mocktails.
      </p>
      <div class="flex flex-wrap gap-3 mt-8">
        <span class="px-3 py-1 border border-gray-700 text-sm">Vue 3</span>
        <span class="px-3 py-1 border border-gray-700 text-sm">Python / FastAPI</span>
        <span class="px-3 py-1 border border-gray-700 text-sm">Go</span>
        <span class="px-3 py-1 border border-gray-700 text-sm">PHP / CodeIgniter 4</span>
        <span class="px-3 py-1 border border-gray-700 text-sm">Docker / Podman</span>
        <span class="px-3 py-1 border border-gray-700 text-sm">ChromaDB / PostgreSQL</span>
      </div>
    </div>
  </section>
</template>

src/components/sections/Projects.vue
Cuplikan kode:
<template>
  <section id="projects" class="py-24 px-6 bg-black/50">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-heading font-bold uppercase mb-12">The Arsenal</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- ORION -->
        <div class="border border-gray-800 bg-dark p-6 group hover:border-accent transition-colors cursor-pointer" @click="$router.push('/project/orion')">
          <h3 class="text-2xl font-heading font-bold mb-2">ORION</h3>
          <p class="text-sm text-accent mb-4">Enterprise Knowledge Retrieval</p>
          <p class="text-gray-400 text-sm mb-6">Hybrid RAG architecture dengan Paralel Search (BM25 + Cosine Similarity) dan Human-in-the-Loop.</p>
          <span class="text-xs uppercase tracking-widest group-hover:text-accent transition-colors">Read Case Study &rarr;</span>
        </div>

        <!-- Chitose -->
        <div class="border border-gray-800 bg-dark p-6 group hover:border-accent transition-colors cursor-pointer" @click="$router.push('/project/chitose')">
          <h3 class="text-2xl font-heading font-bold mb-2">PT Chitose Tbk</h3>
          <p class="text-sm text-accent mb-4">Supplier Evaluation System</p>
          <p class="text-gray-400 text-sm mb-6">Arsitektur Dual-Database (SQL Server SAP & MySQL) terintegrasi SSO CodeIgniter untuk digitalisasi procurement.</p>
          <span class="text-xs uppercase tracking-widest group-hover:text-accent transition-colors">Read Case Study &rarr;</span>
        </div>

        <!-- MBG-->
        <div class="border border-gray-800 bg-dark p-6 group hover:border-accent transition-colors cursor-pointer" @click="$router.push('/project/mbg-iot')">
          <h3 class="text-2xl font-heading font-bold mb-2">MBG Tracker</h3>
          <p class="text-sm text-accent mb-4">IoT Food Waste System</p>
          <p class="text-gray-400 text-sm mb-6">Perancangan sistem pendeteksi sisa makanan menggunakan Weighted Moving Average dan rekomendasi menu Generative AI.</p>
          <span class="text-xs uppercase tracking-widest group-hover:text-accent transition-colors">Read Case Study &rarr;</span>
        </div>
      </div>
    </div>
  </section>
</template>

src/components/sections/Impact.vue
Cuplikan kode:
<template>
  <section id="impact" class="py-24 px-6 max-w-7xl mx-auto text-center">
    <h2 class="text-4xl font-heading font-bold uppercase mb-6">Ground Zero</h2>
    <p class="text-gray-300 max-w-2xl mx-auto mb-12">
      Co-founder Tjilebak.id. Membangun inisiatif kolektif komunitas lokal untuk konservasi lingkungan dan perlindungan mata air di Gedong Cai Tjibadak 1921.
    </p>
    <!-- Placeholder for Tjilebak photos -->
    <div class="w-full h-64 bg-gray-800 rounded-sm"></div>
  </section>
</template>

src/components/sections/Gallery.vue
Cuplikan kode:
<template>
  <section id="gallery" class="py-24 px-6 max-w-7xl mx-auto">
    <h2 class="text-4xl font-heading font-bold uppercase mb-12 text-center">The Lens</h2>
    <div class="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
      <!-- Placeholder for Masonry Gallery (Street & Analog) -->
      <div class="w-full h-64 bg-gray-800 break-inside-avoid relative group">
         <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="text-xs uppercase tracking-widest text-white">Shot on Fuji X-T50</span>
         </div>
      </div>
      <div class="w-full h-96 bg-gray-900 break-inside-avoid relative group">
         <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="text-xs uppercase tracking-widest text-white">Shot on Nikon Coolpix</span>
         </div>
      </div>
      <div class="w-full h-72 bg-gray-800 break-inside-avoid relative group">
         <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="text-xs uppercase tracking-widest text-white">Analog Vibe</span>
         </div>
      </div>
    </div>
  </section>
</template>
