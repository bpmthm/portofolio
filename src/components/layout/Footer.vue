<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentTime = ref('')
let timer = null

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('id-ID', {
    timeZone: 'Asia/Jakarta',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }) + ' WIB'
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <footer class="bg-darker border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
    <!-- Subtle top red accent line -->
    <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>

    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Strong Action-Oriented CTA Banner -->
      <div class="glass-panel p-8 md:p-10 rounded-lg border border-accent/40 mb-16 relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-6 shadow-accent-glow">
        <div class="space-y-2 text-center md:text-left">
          <span class="text-accent font-mono text-xs uppercase font-bold tracking-widest">// COLLABORATION READY</span>
          <h2 class="text-3xl md:text-4xl font-heading font-bold uppercase text-white">
            Tertarik berkolaborasi? Mari kita ngobrol!
          </h2>
          <p class="text-gray-300 text-sm font-body max-w-xl">
            Punya project backend, pipeline AI/RAG, infrastruktur jaringan, atau ide kreatif yang menantang? Gue selalu terbuka untuk diskusi teknis dan kolaborasi.
          </p>
        </div>

        <div class="flex flex-wrap gap-3">
          <a
            href="mailto:lutficandaka@gmail.com"
            class="px-6 py-3.5 bg-accent hover:bg-accent-hover text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg hover:scale-105 flex items-center space-x-2"
          >
            <span>Hubungi Gue (Email)</span>
            <span>✉</span>
          </a>
          <a
            href="https://linkedin.com/in/lutficandaka"
            target="_blank"
            rel="noopener"
            class="px-5 py-3.5 bg-white/[0.05] hover:bg-white/10 border border-white/15 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center space-x-2"
          >
            <span>LinkedIn Connect</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      <!-- Footer Columns -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
        
        <!-- Col 1: Bio & Manifesto -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <span class="w-2.5 h-2.5 bg-accent"></span>
            <h3 class="font-heading text-2xl font-bold uppercase tracking-wider text-light">
              Lutfi Candaka K.
            </h3>
          </div>
          <p class="text-sm text-gray-400 font-body leading-relaxed max-w-sm">
            Architecting reliable backend systems, containerized cloud infrastructure, and human-centric digital experiences. Always brewing ideas and coffee at home.
          </p>
          <div class="font-mono text-xs text-gray-500 flex items-center space-x-2">
            <span>LOCATION: BANDUNG (BDO), ID</span>
            <span>•</span>
            <span class="text-accent">{{ currentTime }}</span>
          </div>
        </div>

        <!-- Col 2: Audio & Vibe Card -->
        <div class="glass-panel p-5 rounded border border-white/10 flex flex-col justify-between">
          <div class="flex justify-between items-start mb-3">
            <div class="flex items-center space-x-2">
              <span class="text-xs font-mono text-accent uppercase font-bold tracking-wider">// CURRENT VIBE</span>
            </div>
            <!-- Animated Equalizer Bars -->
            <div class="flex items-end space-x-1 h-4">
              <span class="w-1 bg-accent h-3 animate-pulse"></span>
              <span class="w-1 bg-accent h-4 animate-ping"></span>
              <span class="w-1 bg-accent h-2 animate-pulse"></span>
              <span class="w-1 bg-accent h-3.5 animate-bounce"></span>
            </div>
          </div>
          
          <div class="space-y-1">
            <p class="text-sm font-semibold text-light flex items-center">
              <span class="mr-2">🎵</span> Midwest Emo & Japanese Shoegaze
            </p>
            <p class="text-xs text-gray-400 font-mono">
              American Football / toe / Mass of the Fermenting Dregs
            </p>
          </div>

          <div class="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[11px] font-mono text-muted">
            <span>STATION: WORKSTATION // HYPRLAND</span>
            <span class="text-emerald-400">STATUS: IN FLOW</span>
          </div>
        </div>

        <!-- Col 3: Transmissions -->
        <div class="space-y-4 md:text-right flex flex-col md:items-end justify-between">
          <div>
            <h4 class="font-mono text-xs uppercase tracking-widest text-gray-400 mb-4">// TRANSMISSIONS</h4>
            <div class="flex flex-wrap md:justify-end gap-3 font-mono text-xs">
              <a
                href="https://github.com/bpmthm"
                target="_blank"
                rel="noopener"
                class="px-3 py-1.5 bg-white/[0.03] hover:bg-accent/20 border border-white/10 hover:border-accent text-light hover:text-accent transition-all"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/lutficandaka"
                target="_blank"
                rel="noopener"
                class="px-3 py-1.5 bg-white/[0.03] hover:bg-accent/20 border border-white/10 hover:border-accent text-light hover:text-accent transition-all"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:lutficandaka@gmail.com"
                class="px-3 py-1.5 bg-accent hover:bg-accent-hover text-white font-bold transition-all shadow-accent-glow"
              >
                Email Me ✉
              </a>
            </div>
          </div>

          <div class="font-mono text-xs text-gray-500">
            <span>POWERED BY FEDORA LINUX 41</span>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-500 gap-4">
        <div>
          © {{ new Date().getFullYear() }} LUTFI CANDAKA K. (PI). ALL RIGHTS RESERVED.
        </div>
        <div class="flex space-x-6">
          <span class="hover:text-gray-400">DESIGN: NEO-BRUTALIST ANALOG</span>
          <span>STACK: VUE 3 + LENIS + TAILWIND</span>
        </div>
      </div>

    </div>
  </footer>
</template>
