<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedProject = ref(null)

const projects = [
  {
    id: 'orion',
    title: 'ORION',
    subtitle: 'Enterprise Knowledge Retrieval & Hybrid RAG',
    badge: 'AI / RAG ARCHITECTURE',
    metric: 'Latency: <120ms • Recall: 96.4%',
    description: 'Hybrid RAG architecture combining Parallel Search (BM25 keyword search + Cosine Dense Vector Similarity) via ChromaDB with Human-in-the-Loop evaluation loop.',
    highlights: [
      'Parallel Search (BM25 + Dense Embeddings)',
      'Cross-Encoder Re-Ranking Pipeline',
      'Human-in-the-loop Active Verification',
      'FastAPI Microservice + Async Streaming'
    ],
    stack: ['Python', 'FastAPI', 'ChromaDB', 'LangChain', 'Vue 3', 'Docker'],
    accentColor: '#D9381E'
  },
  {
    id: 'chitose',
    title: 'PT Chitose Internasional Tbk',
    subtitle: 'Supplier Evaluation & Procurement Matrix',
    badge: 'DUAL-DB ENTERPRISE SYSTEM',
    metric: '100% Audit Compliance • 2x Faster Cycle',
    description: 'Mission-critical Dual-Database architecture bridging SAP SQL Server ERP and modern MySQL data warehouse with SSO CodeIgniter 4 for procurement digitalization.',
    highlights: [
      'Dual-Database Architecture (SAP SQL Server & MySQL)',
      'Single Sign-On (SSO) Centralized Authentication',
      'Automated Multi-Criteria Supplier Grading Matrix',
      'Role-based Access Control & Audit Trail'
    ],
    stack: ['PHP 8.2', 'CodeIgniter 4', 'SQL Server (SAP)', 'MySQL', 'Bootstrap / Tailwind'],
    accentColor: '#D9381E'
  },
  {
    id: 'mbg-iot',
    title: 'MBG Tracker',
    subtitle: 'IoT Food Waste & Menu Optimization',
    badge: 'IOT SENSORS + GENERATIVE AI',
    metric: 'Food Waste Reduced by 38%',
    description: 'Edge IoT telemetry system analyzing daily food waste using Weighted Moving Average (WMA) predictive models and Generative AI dynamic meal recommendation.',
    highlights: [
      'IoT Sensor Telemetry (ESP32 + MQTT Broker)',
      'Weighted Moving Average (WMA) Waste Prediction',
      'Generative AI Nutritious Menu Adaptation',
      'Real-time Dashboard & Anomaly Alerts'
    ],
    stack: ['Python', 'MQTT Broker', 'FastAPI', 'Gemini AI API', 'PostgreSQL', 'Vue 3'],
    accentColor: '#D9381E'
  }
]

const openPreview = (project, event) => {
  event.stopPropagation()
  selectedProject.value = project
}

const navigateToCaseStudy = (id) => {
  router.push(`/project/${id}`)
}
</script>

<template>
  <section id="projects" class="py-28 px-6 bg-darker/60 relative border-t border-b border-white/5">
    <div class="max-w-7xl mx-auto">
      
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
        <div>
          <span class="font-mono text-xs uppercase tracking-widest text-accent font-bold">// 02. ARCHITECTURE & WORKS</span>
          <h2 class="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight text-light mt-1">
            The Arsenal
          </h2>
        </div>
        <p class="text-gray-400 font-mono text-xs max-w-md mt-4 md:mt-0">
          Selected high-impact architectures covering Enterprise AI/RAG, ERP Integrations, and IoT Telemetry Systems.
        </p>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div
          v-for="project in projects"
          :key="project.id"
          class="glass-panel p-7 rounded-lg border border-white/10 hover:border-accent transition-all duration-300 flex flex-col justify-between group cursor-pointer relative tech-bracket"
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
                class="text-xs font-mono text-gray-400 hover:text-white p-1 hover:bg-white/10 rounded transition-colors"
                title="Quick Architecture Preview"
              >
                [Preview]
              </button>
            </div>

            <!-- Title & Subtitle -->
            <h3 class="text-3xl font-heading font-bold uppercase text-light group-hover:text-accent transition-colors mb-1">
              {{ project.title }}
            </h3>
            <p class="text-xs font-mono text-gray-400 mb-4 font-medium">
              {{ project.subtitle }}
            </p>

            <!-- Description -->
            <p class="text-gray-300 text-sm font-body leading-relaxed mb-6 line-clamp-3">
              {{ project.description }}
            </p>

            <!-- Key Metric Pill -->
            <div class="mb-6 p-2.5 bg-black/40 border border-white/5 rounded font-mono text-xs text-emerald-400 flex items-center space-x-2">
              <span>⚡</span>
              <span>{{ project.metric }}</span>
            </div>

            <!-- Stack Tags -->
            <div class="flex flex-wrap gap-1.5 mb-8">
              <span
                v-for="tech in project.stack.slice(0, 4)"
                :key="tech"
                class="px-2 py-0.5 bg-white/[0.04] border border-white/5 rounded text-[11px] font-mono text-gray-300"
              >
                {{ tech }}
              </span>
              <span v-if="project.stack.length > 4" class="text-[10px] font-mono text-muted self-center">
                +{{ project.stack.length - 4 }} more
              </span>
            </div>
          </div>

          <!-- Bottom Action Bar -->
          <div class="pt-4 border-t border-white/10 flex justify-between items-center font-mono text-xs">
            <span class="text-light group-hover:text-accent font-bold uppercase tracking-wider flex items-center space-x-1">
              <span>Read Case Study</span>
              <span class="transform group-hover:translate-x-1.5 transition-transform">&rarr;</span>
            </span>
            <span class="text-muted text-[11px]">SYS.ID: {{ project.id }}</span>
          </div>

        </div>

      </div>

    </div>

    <!-- Quick Preview Modal Dialog -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      @click="selectedProject = null"
    >
      <div
        class="glass-panel w-full max-w-2xl p-8 rounded-lg border border-accent relative shadow-2xl space-y-6"
        @click.stop
      >
        <div class="flex justify-between items-start pb-4 border-b border-white/10">
          <div>
            <span class="text-xs font-mono text-accent font-bold uppercase tracking-wider">// SYSTEM SPECS</span>
            <h3 class="text-3xl font-heading font-bold uppercase text-white mt-1">{{ selectedProject.title }}</h3>
            <p class="text-xs font-mono text-gray-400">{{ selectedProject.subtitle }}</p>
          </div>
          <button
            @click="selectedProject = null"
            class="text-gray-400 hover:text-white font-mono text-sm px-2 py-1 bg-white/5 rounded"
          >
            ✕ Close
          </button>
        </div>

        <div class="space-y-3 font-mono text-xs">
          <h4 class="text-white font-bold uppercase text-sm tracking-wider">Key Architecture Highlights:</h4>
          <ul class="space-y-2 text-gray-300">
            <li v-for="(hl, idx) in selectedProject.highlights" :key="idx" class="flex items-start space-x-2">
              <span class="text-accent font-bold">▶</span>
              <span>{{ hl }}</span>
            </li>
          </ul>
        </div>

        <div class="space-y-2">
          <h4 class="font-mono text-xs uppercase text-gray-400 font-bold">Tech Stack:</h4>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="st in selectedProject.stack"
              :key="st"
              class="px-2.5 py-1 bg-white/10 rounded font-mono text-xs text-white"
            >
              {{ st }}
            </span>
          </div>
        </div>

        <div class="pt-4 border-t border-white/10 flex justify-end space-x-3">
          <button
            @click="selectedProject = null"
            class="px-4 py-2 bg-white/5 hover:bg-white/10 font-mono text-xs uppercase text-gray-300"
          >
            Close Preview
          </button>
          <button
            @click="navigateToCaseStudy(selectedProject.id)"
            class="px-5 py-2 bg-accent hover:bg-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider shadow-accent-glow"
          >
            Open Full Case Study &rarr;
          </button>
        </div>
      </div>
    </div>

  </section>
</template>
