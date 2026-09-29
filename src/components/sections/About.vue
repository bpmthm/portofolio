<script setup>
import { ref, computed, onMounted, nextTick } from 'vue' // Tambahin onMounted & nextTick
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { t } from '../../composables/useLanguage'

gsap.registerPlugin(ScrollTrigger)

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

onMounted(() => {
  nextTick(() => {
    // Animasi muncul berurutan antara foto dan terminal
    gsap.fromTo('.about-block', 
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }
    )
  })
})
</script>

<template>
  <section id="about" class="py-28 px-6 max-w-7xl mx-auto relative overflow-hidden">
    
    <!-- Section Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-paper-border dark:border-white/10">
      <div>
        <span class="font-mono text-xs uppercase tracking-widest text-accent font-bold">// 01. PROFILE</span>
        <h2 class="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight text-ink dark:text-light mt-1">
          The Operator
        </h2>
      </div>
      <div class="font-mono text-xs text-ink-muted dark:text-muted mt-2 md:mt-0">
        [ID: LUTFI_CANDAKA_KUSUMAH] • [ROLE: FULLSTACK_ARCHITECT]
      </div>
    </div>

    <!-- Main Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      <!-- Left Column: Analog Photo Frame / HUD Visual (5 Cols) -->
      <div class="about-block lg:col-span-5 relative">
        <div class="glass-panel p-3 rounded-lg border border-paper-border dark:border-white/15 relative tech-bracket scanline-card">
          
          <!-- Viewfinder HUD Elements -->
          <div class="absolute top-5 left-5 z-20 font-mono text-[10px] text-red-500 flex items-center space-x-1.5 font-bold">
            <span class="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
            <span>● REC [00:24:19]</span>
          </div>
          <div class="absolute top-5 right-5 z-20 font-mono text-[10px] text-ink-muted dark:text-gray-400">
            ISO 400 • 35mm
          </div>
          <div class="absolute bottom-5 left-5 z-20 font-mono text-[10px] text-ink-muted dark:text-gray-400">
            F/2.8 • 1/250s
          </div>
          <div class="absolute bottom-5 right-5 z-20 font-mono text-[10px] text-accent font-bold">
            RAW+FINE
          </div>

          <!-- Photo Canvas with Analog Styling -->
          <div class="relative w-full aspect-[4/5] bg-paper-alt dark:bg-darker rounded overflow-hidden flex flex-col justify-end p-6 border border-paper-border dark:border-white/5">
            <div class="absolute inset-0 bg-gradient-to-t from-paper via-paper-alt/40 to-transparent dark:from-black dark:via-black/40 dark:to-transparent z-10"></div>
            <div class="absolute inset-0 opacity-40 bg-[radial-gradient(#D9381E_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div class="relative z-20 space-y-2">
              <span class="px-2 py-0.5 bg-accent text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                PI // OPERATOR
              </span>
              <h3 class="text-2xl font-heading font-bold text-ink dark:text-light uppercase">
                Lutfi Candaka KUSUMAH
              </h3>
              <p class="text-xs font-mono text-ink-muted dark:text-gray-300">
                {{ t('about.photoSub') }}
              </p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3 mt-4 font-mono text-xs">
          <div class="glass-panel p-3 rounded border border-paper-border dark:border-white/10 text-center bg-paper-alt/50 dark:bg-transparent">
            <span class="text-ink-muted dark:text-gray-400 block text-[10px] uppercase">Base Station</span>
            <span class="text-ink dark:text-light font-bold">Bandung, ID</span>
          </div>
          <div class="glass-panel p-3 rounded border border-paper-border dark:border-white/10 text-center bg-paper-alt/50 dark:bg-transparent">
            <span class="text-ink-muted dark:text-gray-400 block text-[10px] uppercase">Daily Driver</span>
            <span class="text-accent font-bold">Fedora Workstation</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Interactive Terminal Tabs & Tech Badges (7 Cols) -->
      <div class="about-block lg:col-span-7 space-y-8">
        
        <!-- Interactive Terminal Window -->
        <div class="glass-panel rounded-lg border border-paper-border dark:border-white/15 overflow-hidden shadow-lg dark:shadow-2xl">
          
          <div class="bg-paper-alt dark:bg-black/80 px-4 py-3 border-b border-paper-border dark:border-white/10 flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
            </div>
            
            <div class="flex space-x-2 font-mono text-xs overflow-x-auto hide-scrollbar whitespace-nowrap pb-1">
              <button
                @click="activeTab = 'bio'"
                :class="[
                  'px-3 py-1 rounded transition-colors',
                  activeTab === 'bio' ? 'bg-accent text-white font-bold' : 'text-ink-muted dark:text-gray-400 hover:text-ink dark:hover:text-light'
                ]"
              >
                01. Bio
              </button>
              <button
                @click="activeTab = 'specs'"
                :class="[
                  'px-3 py-1 rounded transition-colors',
                  activeTab === 'specs' ? 'bg-accent text-white font-bold' : 'text-ink-muted dark:text-gray-400 hover:text-ink dark:hover:text-light'
                ]"
              >
                02. Specs
              </button>
              <button
                @click="activeTab = 'philosophy'"
                :class="[
                  'px-3 py-1 rounded transition-colors',
                  activeTab === 'philosophy' ? 'bg-accent text-white font-bold' : 'text-ink-muted dark:text-gray-400 hover:text-ink dark:hover:text-light'
                ]"
              >
                03. Philosophy
              </button>
              <button
                @click="activeTab = 'edu'"
                :class="[
                  'px-3 py-1 rounded transition-colors',
                  activeTab === 'edu' ? 'bg-accent text-white font-bold' : 'text-ink-muted dark:text-gray-400 hover:text-ink dark:hover:text-light'
                ]"
              >
                04. Edu
              </button>
              <button
                @click="activeTab = 'org'"
                :class="[
                  'px-3 py-1 rounded transition-colors',
                  activeTab === 'org' ? 'bg-accent text-white font-bold' : 'text-ink-muted dark:text-gray-400 hover:text-ink dark:hover:text-light'
                ]"
              >
                05. Org
              </button>
              <button
                @click="activeTab = 'certs'"
                :class="[
                  'px-3 py-1 rounded transition-colors',
                  activeTab === 'certs' ? 'bg-accent text-white font-bold' : 'text-ink-muted dark:text-gray-400 hover:text-ink dark:hover:text-light'
                ]"
              >
                06. Certs
              </button>
            </div>
          </div>

          <div class="p-6 font-mono text-sm leading-relaxed min-h-[260px] bg-paper dark:bg-darker/90">
            
            <div v-if="activeTab === 'bio'" class="space-y-4">
              <p class="text-gray-300">
                <span class="text-accent font-bold">➜</span> {{ t('about.bioGreeting') }}<span class="text-white font-semibold">Lutfi Candaka KUSUMAH</span>{{ t('about.bioNicknamePrefix') }}<span class="text-accent font-semibold">Lutfi/Pi</span>{{ t('about.bioDesc1') }}
              </p>
              <p class="text-gray-400">
                <span class="text-accent font-bold">➜</span> {{ t('about.bioComfort') }}<span class="text-white font-medium">Fedora Linux</span>{{ t('about.bioDesc2') }}
              </p>
              <div class="pt-2 border-t border-white/5 flex items-center space-x-3 text-xs text-muted">
                <span class="text-emerald-400">✓ Systems Mindset</span>
                <span class="text-emerald-400">✓ Observability & Docs</span>
                <span class="text-emerald-400">✓ Clean Modular Code</span>
              </div>
            </div>

            <div v-if="activeTab === 'specs'" class="space-y-1.5 text-xs">
              <p><span class="text-accent font-bold">lutfi@fedora-operator</span>:~$ neofetch</p>
              <div class="grid grid-cols-2 gap-x-4 gap-y-1 pt-2 text-gray-300">
                <div><span class="text-accent">OS:</span> Fedora Linux 41 (Workstation)</div>
                <div><span class="text-accent">Host:</span> Custom Dev Machine</div>
                <div><span class="text-accent">Kernel:</span> 6.12.x-x86_64</div>
                <div><span class="text-accent">Shell:</span> Zsh / Bash with Starship</div>
                <div><span class="text-accent">WM/DE:</span> Hyprland / GNOME</div>
                <div><span class="text-accent">Editor:</span> Antigravity & VS Code</div>
                <div><span class="text-accent">Container:</span> Podman & Docker Compose</div>
                <div><span class="text-accent">Network:</span> WireGuard, MikroTik, VLAN</div>
              </div>
            </div>

            <div v-if="activeTab === 'philosophy'" class="space-y-3">
              <blockquote class="border-l-2 border-accent pl-4 italic text-gray-300">
                "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra
              </blockquote>
              <p class="text-gray-400 text-xs leading-normal">
                {{ t('about.philosophyText') }}
              </p>
            </div>

            <div v-if="activeTab === 'edu'" class="space-y-4 text-xs text-gray-300">
              <p><span class="text-accent font-bold">lutfi@fedora-operator</span>:~/education$ tree .</p>
              <div class="pl-2 border-l border-white/10 space-y-3">
                <div>
                  <div class="text-white font-bold">├── Universitas Logistik dan Bisnis Internasional (ULBI)</div>
                  <div class="pl-4 text-gray-400">│   ├── D3 Teknik Informatika (Informatics)</div>
                  <div class="pl-4 text-gray-400">│   └── [Focus: Backend, Networking, System Admin]</div>
                </div>
                <div>
                  <div class="text-white font-bold">└── SMKN 2 Bandung</div>
                  <div class="pl-4 text-gray-400">    ├── Teknik Komputer dan Jaringan (TKJ)</div>
                  <div class="pl-4 text-gray-400">    └── [Focus: Cisco, MikroTik, Linux Server]</div>
                </div>
              </div>
            </div>

            <div v-if="activeTab === 'org'" class="space-y-3 text-xs text-gray-300">
              <p><span class="text-accent font-bold">lutfi@fedora-operator</span>:~/organizations$ cat underdog.md</p>
              <div class="p-4 bg-black/50 border border-white/5 rounded space-y-2 text-gray-400 font-sans">
                <h4 class="text-white font-bold text-sm">UNDERDOG</h4>
                <p>Role: <span class="text-emerald-400 font-semibold">Visual Identity & Creative Lead</span></p>
                <div class="pt-2 border-t border-white/5">
                  <p class="font-bold text-gray-300 mb-1">Core contributions:</p>
                  <ul class="list-disc pl-4 space-y-1">
                    <li>Branding, typography, and visual design.</li>
                    <li>Merchandise design and street-culture aesthetic direction.</li>
                    <li>Audio-visual narrative and community engagement.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div v-if="activeTab === 'certs'" class="space-y-3 text-xs text-gray-300">
              <p><span class="text-accent font-bold">lutfi@fedora-operator</span>:~/certificates$ ls -la</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                <a href="/certs/bnsp-cloud.pdf" target="_blank" class="p-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-accent rounded transition-all group flex flex-col justify-between h-full">
                  <span class="text-white font-bold group-hover:text-accent mb-1 truncate block">BNSP Cloud Computing</span>
                  <span class="text-[10px] text-gray-500 flex items-center justify-between mt-2">
                    <span>[ VIEW PDF ]</span>
                    <span class="text-accent">↗</span>
                  </span>
                </a>
                <a href="/certs/cisco-ccna.pdf" target="_blank" class="p-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-accent rounded transition-all group flex flex-col justify-between h-full">
                  <span class="text-white font-bold group-hover:text-accent mb-1 truncate block">Cisco CCNA (NetAcad)</span>
                  <span class="text-[10px] text-gray-500 flex items-center justify-between mt-2">
                    <span>[ VIEW PDF ]</span>
                    <span class="text-accent">↗</span>
                  </span>
                </a>
                <a href="/certs/mikrotik-mtcna.pdf" target="_blank" class="p-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-accent rounded transition-all group flex flex-col justify-between h-full">
                  <span class="text-white font-bold group-hover:text-accent mb-1 truncate block">MikroTik MTCNA</span>
                  <span class="text-[10px] text-gray-500 flex items-center justify-between mt-2">
                    <span>[ VIEW PDF ]</span>
                    <span class="text-accent">↗</span>
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="font-mono text-xs uppercase tracking-widest text-gray-400 font-bold">
              // ARSENAL & PROFICIENCIES
            </h4>
            
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