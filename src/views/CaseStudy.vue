<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isLoading = ref(false)

const caseStudiesData = {
  orion: {
    id: 'orion',
    title: 'ORION',
    tagline: 'Enterprise Knowledge Retrieval & Hybrid RAG System',
    category: 'Artificial Intelligence / Distributed Search',
    status: 'PRODUCTION READY',
    timeline: '2024 • 4 Months',
    client: 'Enterprise Knowledge Management',
    role: 'Lead AI & Backend Architect',
    overview: 'ORION adalah sistem pencarian dan penalaran dokumen perusahaan berarsitektur Hybrid RAG (Retrieval-Augmented Generation) yang memadukan keyword search berkecepatan tinggi (BM25) dengan dense vector similarity berbasis embeddings.',
    problem: 'Sistem pencarian tradisional berbasis full-text search seringkali gagal menangkap konteks semantik teknis yang kompleks, sedangkan pure vector search rentan terhadap hallucination dan lambat dalam mencocokkan kode part atau istilah eksak spesifik pada dokumen teknis SOP perusahaan.',
    solution: 'Membangun pipeline hybrid search paralel yang memproses query secara bersamaan ke ChromaDB (Cosine Vector Search) dan BM25 Sparse Index. Hasil dari kedua engine kemudian dilewatkan ke Cross-Encoder Re-Ranking model sebelum disintesis oleh LLM dengan mekanisme Human-in-the-Loop active feedback.',
    architectureSteps: [
      { step: '01', title: 'Document Ingestion & Chunking', desc: 'Pemrosesan PDF, DOCX, dan Markdown secara asinkron dengan smart chunking berbasis semantik.' },
      { step: '02', title: 'Dual Parallel Retrieval', desc: 'Query pengguna dieksekusi secara paralel ke BM25 Sparse Index dan ChromaDB Vector Embeddings.' },
      { step: '03', title: 'Cross-Encoder Re-Ranking', desc: 'Top-K kandidat dari kedua pencarian digabungkan dan di-skor ulang menggunakan Cross-Encoder.' },
      { step: '04', title: 'Grounded LLM Generation', desc: 'LLM menyusun jawaban lengkap dengan sitasi dokumen sumber dan skor keyakinan terverifikasi.' }
    ],
    techStack: ['Python 3.11', 'FastAPI', 'ChromaDB', 'Sentence Transformers', 'LangChain', 'Docker Compose', 'Vue 3'],
    metrics: [
      { label: 'Retrieval Latency', value: '<120ms' },
      { label: 'Recall Accuracy', value: '96.4%' },
      { label: 'Hallucination Drop', value: '-82%' }
    ]
  },
  chitose: {
    id: 'chitose',
    title: 'PT Chitose Internasional Tbk',
    tagline: 'Dual-Database Supplier Evaluation & Procurement Portal',
    category: 'Enterprise ERP & Systems Integration',
    status: 'DEPLOYED IN ENTERPRISE',
    timeline: '2023 • 6 Months',
    client: 'PT Chitose Internasional Tbk (Furniture Industry)',
    role: 'Full-Stack Systems Engineer',
    overview: 'Digitalisasi sistem evaluasi vendor dan manajemen procurement PT Chitose Internasional Tbk menggunakan arsitektur Dual-Database yang terhubung langsung dengan sistem core SAP ERP dan MySQL data warehouse.',
    problem: 'Proses evaluasi ratusan supplier sebelumnya dilakukan manual dengan spreadsheet yang terfragmentasi, menyebabkan keterlambatan penentuan purchasing order dan risiko inkonsistensi data dengan database SAP utama.',
    solution: 'Merancang arsitektur sistem berbasis CodeIgniter 4 dengan integrasi dual connection: SQL Server (SAP RFC Live Tables) untuk data transaksi pengadaan dan MySQL untuk parameter kriteria evaluasi dinamis. Dilengkapi Single Sign-On (SSO) internal dan kalkulasi otomatis matriks skor supplier.',
    architectureSteps: [
      { step: '01', title: 'SAP Data Extraction', desc: 'Sinkronisasi berkala data PO dan delivery reliability dari SQL Server SAP ERP.' },
      { step: '02', title: 'Dual-DB Query Engine', desc: 'Koneksi simultan terisolasi untuk menjaga integritas data core ERP tanpa risiko write lock.' },
      { step: '03', title: 'Multi-Criteria Scoring', desc: 'Algoritma pembobotan otomatis (Quality, Delivery, Price, ESG Compliance).' },
      { step: '04', title: 'SSO & Executive Portal', desc: 'Autentikasi terpusat dan dashboard analitik evaluasi vendor untuk manajemen.' }
    ],
    techStack: ['PHP 8.2', 'CodeIgniter 4', 'SQL Server (SAP ERP)', 'MySQL', 'JavaScript', 'Bootstrap & Tailwind'],
    metrics: [
      { label: 'Audit Compliance', value: '100%' },
      { label: 'Procurement Cycle', value: '2x Faster' },
      { label: 'Supplier Coverage', value: '500+ Vendors' }
    ]
  },
  'mbg-iot': {
    id: 'mbg-iot',
    title: 'MBG Tracker',
    tagline: 'IoT-Driven Food Waste Telemetry & Generative AI Menu Optimizer',
    category: 'Internet of Things & Predictive AI',
    status: 'PILOT DEPLOYMENT',
    timeline: '2024 • 3 Months',
    client: 'Institutional Catering & School Nutrition Program',
    role: 'IoT Hardware & Backend Architect',
    overview: 'Sistem monitoring limbah makanan cerdas berbasis stasiun timbangan IoT (ESP32) yang menganalisis pola konsumsi harian menggunakan algoritma Weighted Moving Average (WMA) dan mengoptimalkan komposisi menu bergizi dengan Generative AI.',
    problem: 'Tingginya tingkat makanan terbuang (food waste) di fasilitas penyedia makanan institusional/sekolah akibat menu yang tidak sesuai preferensi/selera siswa serta estimasi porsi berlebihan tanpa dasar data terukur. Hal ini memicu pemborosan anggaran bahan baku dan dampak lingkungan yang signifikan.',
    solution: '1. Menggunakan algoritma Weighted Moving Average (WMA) untuk menganalisis tren historis limbah makanan (memberikan bobot lebih tinggi pada data konsumsi hari-hari terkini) guna memprediksi volume limbah masa depan dan membantu pengelola mengkalibrasi gramasi porsi secara presisi.\n2. Mengintegrasikan Generative AI (Gemini API) untuk menyusun rekomendasi variasi menu baru yang seimbang gizi dan ramah budget, dengan secara otomatis memfilter atau menghindari bahan-bahan makanan yang terbukti memiliki tren waste tinggi pada data historis WMA.',
    architectureSteps: [
      { step: '01', title: 'Edge Weight Sensing (ESP32)', desc: 'Sensor load cell di stasiun pengembalian baki menimbang dan mengategorikan massa limbah sisa makanan per jenis menu secara real-time.' },
      { step: '02', title: 'MQTT Telemetry & Pipeline', desc: 'Data bobot dikirim melalui broker MQTT berlatensi rendah ke FastAPI backend dan disimpan terstruktur di PostgreSQL.' },
      { step: '03', title: 'WMA Historical Trend Forecasting', desc: 'Algoritma Weighted Moving Average menghitung bobot tren waste harian untuk memprediksi sisa dan merekomendasikan penyesuaian porsi.' },
      { step: '04', title: 'GenAI Recipe Formulation', desc: 'Gemini API merancang alternatif menu bergizi baru dengan memperhitungkan batasan budget dan memfilter bahan makanan pemicu waste tinggi.' }
    ],
    techStack: ['ESP32 / C++', 'MQTT / Mosquitto', 'Python / FastAPI', 'Gemini AI API', 'PostgreSQL', 'Vue 3', 'Docker'],
    metrics: [
      { label: 'Food Waste Reduction', value: '38%' },
      { label: 'Telemetry Uptime', value: '99.8%' },
      { label: 'Raw Ingredient Savings', value: '22%' }
    ]
  }
}

const currentProject = computed(() => {
  const id = route.params.id
  return caseStudiesData[id] || {
    id: 'unknown',
    title: `Project: ${id}`,
    tagline: 'Enterprise System Case Study',
    category: 'Systems Architecture',
    status: 'ARCHIVE',
    timeline: 'Recent',
    overview: `Detailed technical architecture documentation for project ${id}.`,
    problem: 'Specifications are being indexed.',
    solution: 'Implemented using modular and resilient modern engineering practices.',
    architectureSteps: [],
    techStack: ['Linux', 'Docker', 'FastAPI'],
    metrics: [{ label: 'Status', value: 'Active' }]
  }
})

// Loading feedback simulation when changing case studies
watch(
  () => route.params.id,
  () => {
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
    }, 280)
  }
)

const navigateToProject = (id) => {
  isLoading.value = true
  router.push(`/project/${id}`)
}
</script>

<template>
  <div class="pt-28 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
    
    <!-- Top Nav Back -->
    <div class="mb-10 flex items-center justify-between">
      <router-link
        to="/"
        class="inline-flex items-center space-x-2 font-mono text-xs text-accent hover:text-accent-hover font-bold uppercase tracking-wider group"
      >
        <span class="transform group-hover:-translate-x-1 transition-transform">&larr;</span>
        <span>Back to Base Station</span>
      </router-link>

      <span class="font-mono text-xs text-gray-500">
        SYS.ID // {{ currentProject.id }}
      </span>
    </div>

    <!-- Loading State Indicator -->
    <div v-if="isLoading" class="glass-panel p-16 rounded-lg text-center space-y-4 my-12 animate-pulse">
      <div class="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p class="font-mono text-xs text-accent uppercase tracking-widest">// LOADING ARCHITECTURE TELEMETRY...</p>
    </div>

    <!-- Main Content (when not loading) -->
    <div v-else class="space-y-12">
      
      <!-- Hero Header of Case Study -->
      <div class="glass-panel p-8 md:p-12 rounded-lg border border-white/15 relative tech-bracket">
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <span class="px-3 py-1 bg-accent/20 border border-accent text-accent font-mono text-xs uppercase font-bold rounded">
            {{ currentProject.category }}
          </span>
          <span class="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 font-mono text-xs uppercase rounded">
            {{ currentProject.status }}
          </span>
          <span class="text-xs font-mono text-gray-500">
            {{ currentProject.timeline }}
          </span>
        </div>

        <h1 class="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight text-white mb-4">
          {{ currentProject.title }}
        </h1>

        <p class="text-lg md:text-xl font-body text-gray-300 max-w-3xl leading-relaxed">
          {{ currentProject.tagline }}
        </p>

        <!-- Impact Metrics -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10 font-mono">
          <div
            v-for="metric in currentProject.metrics"
            :key="metric.label"
            class="p-4 bg-black/50 border border-white/5 rounded"
          >
            <div class="text-2xl md:text-3xl font-heading font-bold text-accent">{{ metric.value }}</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">{{ metric.label }}</div>
          </div>
        </div>
      </div>

      <!-- Executive Overview -->
      <section class="glass-panel p-8 rounded-lg border border-white/10 space-y-4">
        <h2 class="text-2xl font-heading font-bold uppercase text-white tracking-wider flex items-center space-x-2">
          <span class="text-accent font-mono text-base">//</span>
          <span>Executive Overview</span>
        </h2>
        <p class="text-gray-300 font-body leading-relaxed">
          {{ currentProject.overview }}
        </p>
      </section>

      <!-- Problem & Solution Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div class="glass-panel p-8 rounded-lg border border-white/10 space-y-4">
          <div class="flex items-center space-x-2 text-red-400 font-mono text-xs font-bold uppercase">
            <span>● THE CHALLENGE (MASALAH)</span>
          </div>
          <h3 class="text-xl font-heading font-bold uppercase text-white">The Core Problem</h3>
          <p class="text-gray-300 text-sm font-body leading-relaxed whitespace-pre-line">
            {{ currentProject.problem }}
          </p>
        </div>

        <div class="glass-panel p-8 rounded-lg border border-white/10 space-y-4">
          <div class="flex items-center space-x-2 text-emerald-400 font-mono text-xs font-bold uppercase">
            <span>● THE ARCHITECTURE (SOLUSI)</span>
          </div>
          <h3 class="text-xl font-heading font-bold uppercase text-white">The Engineered Solution</h3>
          <p class="text-gray-300 text-sm font-body leading-relaxed whitespace-pre-line">
            {{ currentProject.solution }}
          </p>
        </div>

      </div>

      <!-- Architecture Pipeline Steps -->
      <section v-if="currentProject.architectureSteps.length > 0" class="glass-panel p-8 rounded-lg border border-white/10 space-y-6">
        <h2 class="text-2xl font-heading font-bold uppercase text-white tracking-wider flex items-center space-x-2">
          <span class="text-accent font-mono text-base">//</span>
          <span>System Execution Pipeline</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
          <div
            v-for="step in currentProject.architectureSteps"
            :key="step.step"
            class="p-5 bg-black/60 border border-white/10 rounded space-y-2 relative tech-bracket"
          >
            <div class="text-accent text-xs font-bold">{{ step.step }}. PIPELINE PHASE</div>
            <h4 class="text-base font-bold text-white uppercase">{{ step.title }}</h4>
            <p class="text-xs text-gray-400 font-sans leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </section>

      <!-- Tech Stack Badges -->
      <section class="glass-panel p-8 rounded-lg border border-white/10 space-y-4">
        <h2 class="text-2xl font-heading font-bold uppercase text-white tracking-wider flex items-center space-x-2">
          <span class="text-accent font-mono text-base">//</span>
          <span>Applied Tech Stack</span>
        </h2>
        <div class="flex flex-wrap gap-2.5 pt-2">
          <span
            v-for="tech in currentProject.techStack"
            :key="tech"
            class="px-3.5 py-1.5 bg-white/[0.04] border border-white/15 rounded text-xs font-mono text-light"
          >
            {{ tech }}
          </span>
        </div>
      </section>

      <!-- Cross Project Switcher -->
      <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <span class="text-gray-400">EXPLORE OTHER ARSENAL SYSTEMS:</span>
        <div class="flex space-x-3">
          <button
            v-if="currentProject.id !== 'orion'"
            @click="navigateToProject('orion')"
            class="px-3 py-1.5 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent text-gray-300 hover:text-accent rounded transition-colors"
          >
            ORION (RAG) &rarr;
          </button>
          <button
            v-if="currentProject.id !== 'chitose'"
            @click="navigateToProject('chitose')"
            class="px-3 py-1.5 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent text-gray-300 hover:text-accent rounded transition-colors"
          >
            PT Chitose Tbk &rarr;
          </button>
          <button
            v-if="currentProject.id !== 'mbg-iot'"
            @click="navigateToProject('mbg-iot')"
            class="px-3 py-1.5 bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent text-gray-300 hover:text-accent rounded transition-colors"
          >
            MBG Tracker &rarr;
          </button>
        </div>
      </div>

    </div>

  </div>
</template>
