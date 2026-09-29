<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../../composables/useLanguage'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const selectedProject = ref(null)
const isModalLoading = ref(false)

const { currentLocale, toggleLanguage } = useLanguage()

const projectTranslations = {
  en: {
    subHeader: 'Selected high-impact architectures covering Enterprise AI/RAG, ERP Integrations, and IoT Telemetry Systems.',
    modalHighlights: 'Key Architecture Highlights:',
    readCaseStudy: 'Read Case Study',
    closePreview: 'Close Preview',
    openFullCaseStudy: 'Open Full Case Study',
    orion: {
      description: 'Hybrid RAG architecture combining Parallel Search (BM25 keyword search + Cosine Dense Vector Similarity) via ChromaDB with Cross-Encoder re-ranking and Human-in-the-Loop evaluation.',
      highlights: [
        'Parallel Search (BM25 + Dense Embeddings)',
        'Cross-Encoder Re-Ranking Pipeline',
        'Human-in-the-loop Active Verification',
        'FastAPI Microservice + Async Streaming'
      ]
    },
    chitose: {
      description: 'Mission-critical Dual-Database architecture bridging SAP SQL Server ERP and modern MySQL data warehouse with SSO CodeIgniter 4 for procurement digitalization.',
      highlights: [
        'Dual-Database Architecture (SAP SQL Server & MySQL)',
        'Single Sign-On (SSO) Centralized Authentication',
        'Automated Multi-Criteria Supplier Grading Matrix',
        'Role-based Access Control & Audit Trail'
      ]
    },
    'mbg-iot': {
      description: 'Institutional food waste telemetry system with IoT scale sensors (ESP32) analyzing historical data trends via Weighted Moving Average (WMA) for portion forecasting and formulating nutritious menu recommendations with Generative AI.',
      highlights: [
        'IoT Sensor Telemetry (ESP32 Load Cells + MQTT Broker)',
        'Weighted Moving Average (WMA) for Waste Forecasting & Portion Calibration',
        'Generative AI Menu Builder (Filtering Ingredients with High Waste Trends)',
        'Real-time Dashboard & Raw Ingredient Cost Optimization'
      ]
    }
  },
  id: {
    subHeader: 'Arsitektur pilihan berdampak tinggi mencakup Enterprise AI/RAG, Integrasi ERP, dan Sistem Telemetri IoT.',
    modalHighlights: 'Sorotan Utama Arsitektur:',
    readCaseStudy: 'Baca Studi Kasus',
    closePreview: 'Tutup Preview',
    openFullCaseStudy: 'Buka Studi Kasus Lengkap',
    orion: {
      description: 'Arsitektur Hybrid RAG yang menggabungkan Pencarian Paralel (kata kunci BM25 + Kedekatan Vektor Kosinus) via ChromaDB dengan model pemeringkat ulang Cross-Encoder dan evaluasi Human-in-the-Loop.',
      highlights: [
        'Pencarian Paralel (BM25 + Dense Embeddings)',
        'Pipeline Pemeringkatan Ulang Cross-Encoder',
        'Verifikasi Aktif Human-in-the-Loop',
        'Microservice FastAPI + Async Streaming'
      ]
    },
    chitose: {
      description: 'Arsitektur Dual-Database untuk sistem krusial yang menjembatani SAP SQL Server ERP dan data warehouse MySQL modern dengan SSO CodeIgniter 4 untuk digitalisasi pengadaan.',
      highlights: [
        'Arsitektur Dual-Database (SAP SQL Server & MySQL)',
        'Autentikasi Terpusat Single Sign-On (SSO)',
        'Matriks Penilaian Pemasok Multi-Kriteria Otomatis',
        'Kontrol Akses Berbasis Peran & Jejak Audit'
      ]
    },
    'mbg-iot': {
      description: 'Sistem monitoring limbah makanan institusional dengan sensor timbangan IoT (ESP32) yang menganalisis tren data historis via Weighted Moving Average (WMA) untuk prediksi porsi dan menyusun rekomendasi menu bergizi baru dengan Generative AI.',
      highlights: [
        'Telemetri Sensor IoT (ESP32 Load Cells + Broker MQTT)',
        'Weighted Moving Average (WMA) untuk Prediksi Limbah & Kalibrasi Porsi',
        'Generative AI Menu Builder (Memfilter Bahan dengan Tren Waste Tinggi)',
        'Dashboard Real-time & Optimasi Efisiensi Anggaran Bahan Baku'
      ]
    }
  }
}

const projects = computed(() => {
  const t = projectTranslations[currentLocale.value] || projectTranslations.en
  return [
    {
      id: 'orion',
      title: 'ORION',
      subtitle: 'Enterprise Knowledge Retrieval & Hybrid RAG',
      badge: 'AI / RAG ARCHITECTURE',
      metric: 'Latency: <120ms • Recall: 96.4%',
      description: t.orion.description,
      highlights: t.orion.highlights,
      stack: ['Python', 'FastAPI', 'ChromaDB', 'LangChain', 'Vue 3', 'Docker'],
      repoUrl: 'https://github.com/lutficandaka/orion-hybrid-rag',
      accentColor: '#D9381E'
    },
    {
      id: 'chitose',
      title: 'PT Chitose Internasional Tbk',
      subtitle: 'Supplier Evaluation & Procurement Matrix',
      badge: 'DUAL-DB ENTERPRISE SYSTEM',
      metric: '100% Audit Compliance • 2x Faster Cycle',
      description: t.chitose.description,
      highlights: t.chitose.highlights,
      stack: ['PHP 8.2', 'CodeIgniter 4', 'SQL Server (SAP)', 'MySQL', 'Bootstrap / Tailwind'],
      repoUrl: 'https://github.com/lutficandaka/chitose-procurement-system',
      accentColor: '#D9381E'
    },
    {
      id: 'mbg-iot',
      title: 'MBG Tracker',
      subtitle: 'Food Waste Analytics & Generative AI Menu',
      badge: 'MACHINE LEARNING & GENERATIVE AI',
      metric: 'Food Waste Reduced by 38%',
      description: t['mbg-iot'].description,
      highlights: t['mbg-iot'].highlights,
      stack: ['ESP32 / C++', 'MQTT / Mosquitto', 'Python / FastAPI', 'Gemini AI API', 'PostgreSQL', 'Vue 3'],
      repoUrl: 'https://github.com/lutficandaka/mbg-food-waste-iot',
      accentColor: '#D9381E'
    }
  ]
})

onMounted(() => {
  nextTick(() => {
    gsap.fromTo('.project-card',
      {
        y: 50,
        opacity: 0 // Titik awal: Turun 50px dan ngilang
      },
      {
        scrollTrigger: {
          trigger: '#projects',
          start: 'top 80%', // Animasi mulai saat bagian atas '#projects' menyentuh 80% layar
        },
        y: 0,
        opacity: 1, // Titik akhir: Kembali ke posisi asli dan muncul
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }
    )
  })
})

const openPreview = (project, event) => {
  event.stopPropagation()
  isModalLoading.value = true
  selectedProject.value = project
  setTimeout(() => {
    isModalLoading.value = false
  }, 200)
}

const navigateToCaseStudy = (id) => {
  router.push(`/project/${id}`)
}
</script>

<template>
  <section id="projects" class="py-28 px-6 bg-paper-alt/60 dark:bg-darker/60 relative border-t border-b border-paper-border dark:border-white/5 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      
      <!-- Header with In-Section Minimalist Translate Toggle -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-paper-border dark:border-white/10 gap-4">
        <div>
          <span class="font-mono text-xs uppercase tracking-widest text-accent font-bold">// 02. ARCHITECTURE & WORKS</span>
          <h2 class="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight text-ink dark:text-light mt-1">
            The Arsenal
          </h2>
        </div>
        
        <div class="flex flex-col md:items-end gap-2.5">
          <!-- Minimalist In-Section Translation Switch -->
          <button
            @click="toggleLanguage"
            class="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-paper-alt dark:bg-white/[0.04] hover:bg-accent/15 border border-paper-border dark:border-white/10 hover:border-accent text-ink dark:text-gray-300 hover:text-black dark:hover:text-white font-mono text-[11px] tracking-wider transition-all duration-200 cursor-pointer w-fit group"
            :title="currentLocale === 'en' ? 'Ganti deskripsi ke Bahasa Indonesia' : 'Switch descriptions to English'"
          >
            <span class="text-accent text-[11px] group-hover:rotate-12 transition-transform">🌐</span>
            <span class="text-ink-muted dark:text-muted text-[10px]">DESC:</span>
            <span :class="currentLocale === 'id' ? 'text-accent font-bold' : 'text-ink-muted dark:text-gray-400'">ID</span>
            <span class="text-ink-muted/20 dark:text-white/20">/</span>
            <span :class="currentLocale === 'en' ? 'text-accent font-bold' : 'text-ink-muted dark:text-gray-400'">EN</span>
          </button>

          <p class="text-ink-muted dark:text-gray-400 font-mono text-xs max-w-md md:text-right">
            {{ projectTranslations[currentLocale]?.subHeader || projectTranslations.en.subHeader }}
          </p>
        </div>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-card glass-panel p-7 rounded-lg border border-paper-border dark:border-white/10 hover:border-accent dark:hover:border-accent transition-all duration-300 flex flex-col justify-between group cursor-pointer relative tech-bracket"
          @click="navigateToCaseStudy(project.id)"
        >
          <!-- Top Badge & Metric -->
          <div>
            <div class="flex justify-between items-start mb-4">
              <span class="px-2.5 py-1 bg-accent/15 border border-accent/40 text-accent font-mono text-[11px] font-bold tracking-wider uppercase rounded">
                {{ project.badge }}
              </span>
              <button
                @click="openPreview(project, $event)"
                class="text-xs font-mono text-ink-muted dark:text-gray-400 hover:text-ink dark:hover:text-white p-1 hover:bg-paper-alt dark:hover:bg-white/10 rounded transition-colors"
                title="Quick Architecture Preview"
              >
                [Preview]
              </button>
            </div>

            <!-- Title & Subtitle -->
            <h3 class="text-3xl font-heading font-bold uppercase text-ink dark:text-light group-hover:text-accent transition-colors mb-1">
              {{ project.title }}
            </h3>
            <p class="text-xs font-mono text-ink-muted dark:text-gray-400 mb-4 font-medium">
              {{ project.subtitle }}
            </p>

            <!-- Description -->
            <p class="text-ink dark:text-gray-300 text-sm font-body leading-relaxed mb-6 line-clamp-3">
              {{ project.description }}
            </p>

            <!-- Key Metric Pill -->
            <div class="mb-6 p-2.5 bg-paper-alt dark:bg-black/40 border border-paper-border dark:border-white/5 rounded font-mono text-xs text-emerald-600 dark:text-emerald-400 flex items-center space-x-2">
              <span>⚡</span>
              <span>{{ project.metric }}</span>
            </div>

            <!-- Stack Tags -->
            <div class="flex flex-wrap gap-1.5 mb-8">
              <span
                v-for="tech in project.stack.slice(0, 4)"
                :key="tech"
                class="px-2 py-0.5 bg-paper-alt dark:bg-white/[0.04] border border-paper-border dark:border-white/5 rounded text-[11px] font-mono text-ink dark:text-gray-300"
              >
                {{ tech }}
              </span>
              <span v-if="project.stack.length > 4" class="text-[10px] font-mono text-ink-muted dark:text-muted self-center">
                +{{ project.stack.length - 4 }} more
              </span>
            </div>
          </div>

          <!-- Bottom Action Bar -->
          <div class="pt-4 border-t border-paper-border dark:border-white/10 flex justify-between items-center font-mono text-xs">
            <span class="text-ink dark:text-light group-hover:text-accent font-bold uppercase tracking-wider flex items-center space-x-1">
              <span>{{ projectTranslations[currentLocale]?.readCaseStudy || 'Read Case Study' }}</span>
              <span class="transform group-hover:translate-x-1.5 transition-transform">&rarr;</span>
            </span>
            <span class="text-ink-muted dark:text-muted text-[11px]">SYS.ID: {{ project.id }}</span>
          </div>

        </div>

      </div>

    </div>

    <!-- Quick Preview Modal Dialog with Smooth Loading Animation -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-paper/80 dark:bg-black/80 backdrop-blur-md"
      @click="selectedProject = null"
    >
      <div
        class="glass-panel w-full max-w-2xl p-8 rounded-lg border border-accent relative shadow-lg dark:shadow-2xl space-y-6"
        @click.stop
      >
        <div v-if="isModalLoading" class="py-16 text-center space-y-3">
          <div class="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p class="font-mono text-xs text-accent uppercase tracking-wider">// RETRIEVING ARSENAL SPECS...</p>
        </div>

        <div v-else class="space-y-6">
          <div class="flex justify-between items-start pb-4 border-b border-paper-border dark:border-white/10">
            <div>
              <span class="text-xs font-mono text-accent font-bold uppercase tracking-wider">// SYSTEM SPECS</span>
              <h3 class="text-3xl font-heading font-bold uppercase text-ink dark:text-white mt-1">{{ selectedProject.title }}</h3>
              <p class="text-xs font-mono text-ink-muted dark:text-gray-400">{{ selectedProject.subtitle }}</p>
            </div>
            <button
              @click="selectedProject = null"
              class="text-ink-muted dark:text-gray-400 hover:text-ink dark:hover:text-white font-mono text-sm px-2 py-1 bg-paper-alt dark:bg-white/5 rounded cursor-pointer"
            >
              ✕ {{ currentLocale === 'id' ? 'Tutup' : 'Close' }}
            </button>
          </div>

          <div class="space-y-3 font-mono text-xs">
            <h4 class="text-ink dark:text-white font-bold uppercase text-sm tracking-wider">
              {{ projectTranslations[currentLocale]?.modalHighlights || 'Key Architecture Highlights:' }}
            </h4>
            <ul class="space-y-2 text-ink dark:text-gray-300">
              <li v-for="(hl, idx) in selectedProject.highlights" :key="idx" class="flex items-start space-x-2">
                <span class="text-accent font-bold">▶</span>
                <span>{{ hl }}</span>
              </li>
            </ul>
          </div>

          <div class="space-y-2">
            <h4 class="font-mono text-xs uppercase text-ink-muted dark:text-gray-400 font-bold">Tech Stack:</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="st in selectedProject.stack"
                :key="st"
                class="px-2.5 py-1 bg-paper-alt dark:bg-white/10 rounded font-mono text-xs text-ink dark:text-white"
              >
                {{ st }}
              </span>
            </div>
          </div>

          <div class="pt-4 border-t border-paper-border dark:border-white/10 flex flex-wrap items-center justify-end gap-3">
            <button
              @click="selectedProject = null"
              class="px-4 py-2 bg-paper-alt dark:bg-white/5 hover:bg-paper dark:hover:bg-white/10 font-mono text-xs uppercase text-ink-muted dark:text-gray-300 cursor-pointer"
            >
              {{ projectTranslations[currentLocale]?.closePreview || 'Close Preview' }}
            </button>
            <a
              v-if="selectedProject.repoUrl"
              :href="selectedProject.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 bg-paper-alt dark:bg-white/[0.06] hover:bg-paper dark:hover:bg-white/15 border border-paper-border dark:border-white/15 hover:border-accent text-ink dark:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <span>[ VIEW REPO ↗ ]</span>
            </a>
            <button
              @click="navigateToCaseStudy(selectedProject.id)"
              class="px-5 py-2 bg-accent hover:bg-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider shadow-accent-glow cursor-pointer"
            >
              {{ projectTranslations[currentLocale]?.openFullCaseStudy || 'Open Full Case Study' }} &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>