<script setup>
import { ref } from 'vue'

const activeTab = ref('bio')
const activeFilter = ref('all')

const techCategories = [
  { id: 'all', label: 'All Stack' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'devops', label: 'DevOps & Systems' },
  { id: 'data', label: 'Data & AI' },
  { id: 'frontend', label: 'Frontend' },
]

const technologies = [
  { name: 'Python / FastAPI', category: 'backend', level: 'Advanced' },
  { name: 'Go (Golang)', category: 'backend', level: 'Intermediate' },
  { name: 'PHP / CodeIgniter 4', category: 'backend', level: 'Advanced' },
  { name: 'Node.js / Express', category: 'backend', level: 'Intermediate' },
  { name: 'Docker / Podman', category: 'devops', level: 'Advanced' },
  { name: 'Fedora / Linux CLI', category: 'devops', level: 'Advanced' },
  { name: 'Nginx / Reverse Proxy', category: 'devops', level: 'Intermediate' },
  { name: 'ChromaDB / Vector DB', category: 'data', level: 'Intermediate' },
  { name: 'PostgreSQL / MySQL', category: 'data', level: 'Advanced' },
  { name: 'SQL Server (SAP RFC)', category: 'data', level: 'Intermediate' },
  { name: 'Vue 3 / Composition API', category: 'frontend', level: 'Advanced' },
  { name: 'Tailwind CSS', category: 'frontend', level: 'Advanced' },
  { name: 'GSAP / Lenis Animation', category: 'frontend', level: 'Intermediate' },
]

const filteredTech = computed(() => {
  if (activeFilter.value === 'all') return technologies
  return technologies.filter((t) => t.category === activeFilter.value)
})
import { computed } from 'vue'
</script>

<template>
  <section id="about" class="py-28 px-6 max-w-7xl mx-auto relative">
    
    <!-- Section Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
      <div>
        <span class="font-mono text-xs uppercase tracking-widest text-accent font-bold">// 01. PROFILE</span>
        <h2 class="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight text-light mt-1">
          The Operator
        </h2>
      </div>
      <div class="font-mono text-xs text-muted mt-2 md:mt-0">
        [ID: LUTFI_CANDAKA_K] • [ROLE: FULLSTACK_ARCHITECT]
      </div>
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      <!-- Left Column: Analog Photo Frame / HUD Visual (5 Cols) -->
      <div class="lg:col-span-5 relative">
        <div class="glass-panel p-3 rounded-lg border border-white/15 relative tech-bracket scanline-card">
          
          <!-- Viewfinder HUD Elements -->
          <div class="absolute top-5 left-5 z-20 font-mono text-[10px] text-red-500 flex items-center space-x-1.5 font-bold">
            <span class="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span>● REC [00:24:19]</span>
          </div>
          <div class="absolute top-5 right-5 z-20 font-mono text-[10px] text-gray-400">
            ISO 400 • 35mm
          </div>
          <div class="absolute bottom-5 left-5 z-20 font-mono text-[10px] text-gray-400">
            F/2.8 • 1/250s
          </div>
          <div class="absolute bottom-5 right-5 z-20 font-mono text-[10px] text-accent font-bold">
            RAW+FINE
          </div>

          <!-- Photo Canvas with Analog Styling -->
          <div class="relative w-full aspect-[4/5] bg-darker rounded overflow-hidden flex flex-col justify-end p-6 border border-white/5">
            <!-- Background Visual Artwork -->
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
            
            <!-- Graphic Portrait Graphic Background -->
            <div class="absolute inset-0 opacity-40 bg-[radial-gradient(#D9381E_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <!-- Analog Persona Stamp -->
            <div class="relative z-20 space-y-2">
              <span class="px-2 py-0.5 bg-accent text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                PI // OPERATOR
              </span>
              <h3 class="text-2xl font-heading font-bold text-light uppercase">
                Lutfi Candaka K.
              </h3>
              <p class="text-xs font-mono text-gray-300">
                Lulusan D3 Teknik Informatika • Network & Systems Enthusiast • Coffee Alchemist
              </p>
            </div>
          </div>
        </div>

        <!-- Quick Spec Pills below photo -->
        <div class="grid grid-cols-2 gap-3 mt-4 font-mono text-xs">
          <div class="glass-panel p-3 rounded border border-white/10 text-center">
            <span class="text-gray-400 block text-[10px] uppercase">Base Station</span>
            <span class="text-light font-bold">Bandung, ID</span>
          </div>
          <div class="glass-panel p-3 rounded border border-white/10 text-center">
            <span class="text-gray-400 block text-[10px] uppercase">Daily Driver</span>
            <span class="text-accent font-bold">Fedora Workstation</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Interactive Terminal Tabs & Tech Badges (7 Cols) -->
      <div class="lg:col-span-7 space-y-8">
        
        <!-- Interactive Terminal Window -->
        <div class="glass-panel rounded-lg border border-white/15 overflow-hidden shadow-2xl">
          
          <!-- Terminal Header Tabs -->
          <div class="bg-black/80 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            
            <!-- Navigation Tabs -->
            <div class="flex space-x-2 font-mono text-xs">
              <button
                @click="activeTab = 'bio'"
                :class="[
                  'px-3 py-1 rounded transition-colors',
                  activeTab === 'bio' ? 'bg-accent text-white font-bold' : 'text-gray-400 hover:text-light'
                ]"
              >
                01. Bio
              </button>
              <button
                @click="activeTab = 'specs'"
                :class="[
                  'px-3 py-1 rounded transition-colors',
                  activeTab === 'specs' ? 'bg-accent text-white font-bold' : 'text-gray-400 hover:text-light'
                ]"
              >
                02. Neofetch / Specs
              </button>
              <button
                @click="activeTab = 'philosophy'"
                :class="[
                  'px-3 py-1 rounded transition-colors',
                  activeTab === 'philosophy' ? 'bg-accent text-white font-bold' : 'text-gray-400 hover:text-light'
                ]"
              >
                03. Philosophy
              </button>
            </div>
          </div>

          <!-- Terminal Content Body -->
          <div class="p-6 font-mono text-sm leading-relaxed min-h-[260px] bg-darker/90">
            
            <!-- Tab 1: Bio -->
            <div v-if="activeTab === 'bio'" class="space-y-4">
              <p class="text-gray-300">
                <span class="text-accent font-bold">➜</span> Halo! Gue <span class="text-white font-semibold">Lutfi Candaka K.</span>, akrab dipanggil <span class="text-accent font-semibold">Pi</span>. Lulusan D3 Teknik Informatika yang sehari-hari fokus ngoprek arsitektur backend, distributed services, server Linux, dan manajemen jaringan.
              </p>
              <p class="text-gray-400">
                <span class="text-accent font-bold">➜</span> Comfort zone gue ada di terminal <span class="text-white font-medium">Fedora Linux</span>, mendesain pipeline data berkinerja tinggi, menghubungkan database lintas platform (SAP SQL Server + MySQL), dan meracik coffee mocktails saat off-duty.
              </p>
              <div class="pt-2 border-t border-white/5 flex items-center space-x-3 text-xs text-muted">
                <span class="text-emerald-400">✓ Systems Mindset</span>
                <span class="text-emerald-400">✓ Security & Observability</span>
                <span class="text-emerald-400">✓ Clean Modular Code</span>
              </div>
            </div>

            <!-- Tab 2: Neofetch Specs -->
            <div v-if="activeTab === 'specs'" class="space-y-1.5 text-xs">
              <p><span class="text-accent font-bold">pi@fedora-operator</span>:~$ neofetch</p>
              <div class="grid grid-cols-2 gap-x-4 gap-y-1 pt-2 text-gray-300">
                <div><span class="text-accent">OS:</span> Fedora Linux 41 (Workstation)</div>
                <div><span class="text-accent">Host:</span> Custom Dev Machine</div>
                <div><span class="text-accent">Kernel:</span> 6.12.x-x86_64</div>
                <div><span class="text-accent">Shell:</span> Zsh / Bash with Starship</div>
                <div><span class="text-accent">WM/DE:</span> Hyprland / GNOME</div>
                <div><span class="text-accent">Editor:</span> Neovim & VS Code</div>
                <div><span class="text-accent">Container:</span> Podman & Docker Compose</div>
                <div><span class="text-accent">Network:</span> WireGuard, MikroTik, VLAN</div>
              </div>
            </div>

            <!-- Tab 3: Philosophy -->
            <div v-if="activeTab === 'philosophy'" class="space-y-3">
              <blockquote class="border-l-2 border-accent pl-4 italic text-gray-300">
                "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra
              </blockquote>
              <p class="text-gray-400 text-xs leading-normal">
                Bagi gue, backend yang hebat bukan yang paling rumit, melainkan yang paling terprediksi, terdokumentasi, dan mampu menangani failure secara elegan. Selalu mengutamakan zero-latency bottleneck dan auditability.
              </p>
            </div>

          </div>
        </div>

        <!-- Tech Stack Filter & Chips -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="font-mono text-xs uppercase tracking-widest text-gray-400 font-bold">
              // ARSENAL & PROFICIENCIES
            </h4>
            
            <!-- Category Filter Buttons -->
            <div class="flex flex-wrap gap-1.5 font-mono text-[11px]">
              <button
                v-for="cat in techCategories"
                :key="cat.id"
                @click="activeFilter = cat.id"
                :class="[
                  'px-2.5 py-1 rounded transition-colors',
                  activeFilter === cat.id ? 'bg-white/20 text-white font-bold border border-accent' : 'bg-white/[0.02] text-gray-400 hover:text-white border border-white/5'
                ]"
              >
                {{ cat.label }}
              </button>
            </div>
          </div>

          <!-- Technologies Grid -->
          <div class="flex flex-wrap gap-2.5">
            <div
              v-for="tech in filteredTech"
              :key="tech.name"
              class="px-3 py-1.5 rounded bg-white/[0.03] hover:bg-accent/15 border border-white/10 hover:border-accent transition-all duration-200 flex items-center space-x-2 group cursor-default"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform"></span>
              <span class="font-mono text-xs text-light group-hover:text-white">{{ tech.name }}</span>
              <span class="text-[10px] font-mono text-muted group-hover:text-accent font-light">({{ tech.level }})</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
