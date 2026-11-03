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
      title: 'ORION',
      subtitle: 'Enterprise Knowledge Retrieval & Parallel RAG Microservices',
      badge: 'MICROSERVICES RAG & PARALLEL SEARCH',
      metric: 'Zero Hallucination • 1.39s E2E Latency',
      description: 'Distributed microservices architecture combining asynchronous Parallel Search (BM25 lexical + ChromaDB dense vector search) fused via Reciprocal Rank Fusion (RRF) with Groq Llama 3.1, divisional RBAC, and Human-in-the-Loop governance.',
      highlights: [
        'Asynchronous Parallel Search (BM25 Lexical + ChromaDB Cosine Semantic)',
        'Reciprocal Rank Fusion (RRF) Hybrid Re-ranking Algorithm',
        'Distributed 3-Tier Microservices (Vue 3 + CI4 Gateway + FastAPI Engine)',
        'Zero Data Leakage RBAC & Smart Page-Level Source Citation',
        'Human-in-the-Loop (HITL) Fallback & RLHF Feedback Loop'
      ]
    },
    chitose: {
      subtitle: 'Supplier Performance Evaluation (SPE) & ERP Integration',
      badge: 'MULTI-TIER DUAL-DB & SSO',
      metric: 'Zero SAP Lock • 4 Roles Unified',
      description: 'Multi-tier architecture bridging production SAP SQL Server (read-only logistical extraction) with local transactional MySQL 8.0, integrated with enterprise Single Sign-On (SSO) and modular multi-criteria scoring.',
      highlights: [
        'Dual-Database Decoupling (SAP SQL Server & MySQL Data Warehouse)',
        'Centralized HRIS SSO & Role-Based Dynamic DOM Encapsulation (QC, PPIC, PCH, HSE)',
        'User-Driven On-Demand Vendor Synchronization Pipeline',
        'Modular Multi-Criteria Performance Scoring & Historical KPI Dashboard'
      ]
    },
    'mbg-iot': {
      title: 'MBG Decision Support System',
      subtitle: 'Nutrition Planning & Time-Series Food Waste Forecasting',
      badge: 'TIME-SERIES (WMA) & GEN-AI',
      metric: '5 Nutrition Slots • Early Warning Alert',
      description: 'Web-based Decision Support System (DSS) digitalizing weekly menu planning via 5-slot "Isi Piringku" standard, leveraging Weighted Moving Average (WMA n=3) to flag waste trends into "Zona Merah" alerts and Google Gemini AI for adaptive recipe formulation.',
      highlights: [
        '5-Slot "Isi Piringku" Standardized Tray Menu Planner',
        'Weighted Moving Average (WMA, n=3) Time-Series Early Warning',
        'Automated "Zona Merah" Blacklist & Threshold Detection',
        'Google Gemini Generative AI Adaptive Menu Builder with Budget Guardrails',
        'Digital Plate Waste Telemetry & Centralized Ledger'
      ]
    }
  },
  id: {
    subHeader: 'Arsitektur pilihan berdampak tinggi mencakup Enterprise AI/RAG, Integrasi ERP, dan Sistem Telemetri & Prediksi AI.',
    modalHighlights: 'Sorotan Utama Arsitektur:',
    readCaseStudy: 'Baca Studi Kasus',
    closePreview: 'Tutup Preview',
    openFullCaseStudy: 'Buka Studi Kasus Lengkap',
    orion: {
      title: 'ORION',
      subtitle: 'Sistem Temu Balik Informasi & Paralel RAG Berbasis Microservices',
      badge: 'MICROSERVICES RAG & PARALLEL SEARCH',
      metric: 'Zero Halusinasi • 1.39s Total Latensi',
      description: 'Arsitektur microservices terdistribusi yang mengeksekusi Paralel Search (leksikal BM25 + pencarian semantik vektor ChromaDB) secara asinkron, digabungkan algoritma Reciprocal Rank Fusion (RRF), inferensi Groq Llama 3.1, RBAC divisi, dan Human-in-the-Loop.',
      highlights: [
        'Paralel Search Asinkron (Leksikal BM25 + Semantik Cosine ChromaDB)',
        'Algoritma Pemeringkat Ulang Reciprocal Rank Fusion (RRF)',
        'Arsitektur 3-Tier Microservices (Vue 3 + CI4 Gateway + FastAPI Engine)',
        'Isolasi Data RBAC Multidivisi & Sitasi Rujukan Halaman Akurat (Smart Citation)',
        'Eskalasi Human-in-the-Loop (HITL) & Evaluasi Umpan Balik RLHF'
      ]
    },
    chitose: {
      subtitle: 'Supplier Performance Evaluation (SPE) & Integrasi ERP',
      badge: 'MULTI-TIER DUAL-DB & SSO',
      metric: 'Zero Lock SAP ERP • 4 Divisi Terpadu',
      description: 'Arsitektur multi-tier yang menjembatani SAP SQL Server produksi (ekstraksi logistik read-only) dengan MySQL lokal, terintegrasi Single Sign-On (SSO) perusahaan dan kalkulasi multi-kriteria modular.',
      highlights: [
        'Pemisahan Arsitektur Dual-Database (SAP SQL Server & MySQL Data Warehouse)',
        'Autentikasi Terpusat SSO HRIS & Enkapsulasi DOM Berbasis Peran (QC, PPIC, PCH, HSE)',
        'Sinkronisasi Master Vendor Hibrida Berbasis Aksi Pengguna',
        'Algoritma Kalkulasi Multi-Kriteria Otomatis & Dasbor KPI Historis'
      ]
    },
    'mbg-iot': {
      title: 'Sistem Rekomendasi Menu MBG',
      subtitle: 'Perencanaan Gizi & Prediksi Tren Limbah Pangan',
      badge: 'TIME-SERIES (WMA) & GEN-AI',
      metric: '5 Slot Gizi • Early Warning Zona Merah',
      description: 'Sistem Pendukung Keputusan (DSS) berbasis web yang mendigitalkan perencanaan menu mingguan standar 5-slot "Isi Piringku", memanfaatkan algoritma Weighted Moving Average (WMA n=3) untuk mendeteksi tren limbah "Zona Merah" serta Google Gemini AI untuk peracikan menu adaptif.',
      highlights: [
        'Tray Menu Planner Terstandarisasi 5-Slot "Isi Piringku"',
        'Prediksi Tren Deret Waktu Weighted Moving Average (WMA, n=3)',
        'Klasifikasi Otomatis "Zona Merah" & Deteksi Ambang Batas Limbah',
        'Peracik Menu Adaptif Google Gemini Gen-AI dengan Pembatas Anggaran',
        'Telemetri Persentase Limbah Makanan Harian & Buku Besar Terpusat'
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
      subtitle: t.orion.subtitle || 'Enterprise Knowledge Retrieval & Parallel RAG Microservices',
      badge: t.orion.badge || 'MICROSERVICES RAG & PARALLEL SEARCH',
      metric: t.orion.metric || 'Zero Hallucination • 1.39s E2E Latency',
      description: t.orion.description,
      highlights: t.orion.highlights,
      stack: ['Python 3.11', 'FastAPI', 'ChromaDB', 'Groq (Llama 3.1)', 'CodeIgniter 4', 'Vue 3', 'Docker'],
      repoUrl: 'https://github.com/bpmthm/portofolio',
      accentColor: '#D9381E'
    },
    {
      id: 'chitose',
      title: 'PT Chitose Internasional Tbk',
      subtitle: t.chitose.subtitle || 'Supplier Performance Evaluation (SPE) & ERP Integration',
      badge: t.chitose.badge || 'MULTI-TIER DUAL-DB & SSO',
      metric: t.chitose.metric || 'Zero SAP Lock • 4 Roles Unified',
      description: t.chitose.description,
      highlights: t.chitose.highlights,
      stack: ['PHP 8.4', 'CodeIgniter 4', 'SQL Server (SAP ERP)', 'MySQL 8.0', 'HRIS SSO (CI3/JWT)', 'JavaScript (DOM)'],
      repoUrl: 'https://github.com/bpmthm/portofolio',
      accentColor: '#D9381E'
    },
    {
      id: 'mbg-iot',
      title: t['mbg-iot'].title || 'MBG Decision Support System',
      subtitle: t['mbg-iot'].subtitle || 'Nutrition Planning & Time-Series Food Waste Forecasting',
      badge: t['mbg-iot'].badge || 'TIME-SERIES (WMA) & GEN-AI',
      metric: t['mbg-iot'].metric || '5 Nutrition Slots • Early Warning Alert',
      description: t['mbg-iot'].description,
      highlights: t['mbg-iot'].highlights,
      stack: ['PHP 8.2', 'Laravel (MVC)', 'Google Gemini AI', 'MySQL / MariaDB', 'Weighted Moving Average (WMA)', 'Tailwind CSS'],
      repoUrl: 'https://github.com/bpmthm/portofolio',
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