<script setup>
import { inject } from 'vue'

const lenis = inject('lenis', null)

const scrollToSection = (target) => {
  if (lenis?.value) {
    lenis.value.scrollTo(target, { offset: -70, duration: 1.2 })
  } else {
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid">
    <!-- Ambient Radial Glow Overlay -->
    <div class="absolute inset-0 bg-radial-glow pointer-events-none"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-dark/60 to-dark pointer-events-none"></div>

    <!-- Decorative Corner Crosshairs -->
    <div class="absolute top-24 left-8 text-white/20 font-mono text-xs hidden lg:block select-none">
      + LAT: -6.9175° // LON: 107.6191°
    </div>
    <div class="absolute top-24 right-8 text-white/20 font-mono text-xs hidden lg:block select-none">
      + PORT: 5173 // SYSTEM: FEDORA_LINUX
    </div>
    <div class="absolute bottom-12 left-8 text-white/20 font-mono text-xs hidden lg:block select-none">
      [001_HERO_INITIALIZE]
    </div>

    <div class="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
      
      <!-- Top Status Chip -->
      <div class="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 animate-float">
        <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        <span class="font-mono text-xs uppercase tracking-wider text-gray-300">
          Full-Stack Developer & Network Engineer
        </span>
      </div>

      <!-- Main Headline Typography -->
      <h1 class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold uppercase tracking-tighter text-light mb-4 leading-none select-none">
        LUTFI CANDAKA <span class="text-accent underline decoration-accent/40 decoration-4 underline-offset-8">K.</span>
      </h1>

      <!-- Subtitle Tagline -->
      <p class="text-lg md:text-2xl font-body text-gray-300 max-w-3xl mb-8 font-light leading-relaxed">
        Building robust <span class="text-white font-medium">backend architectures</span>, high-performance <span class="text-white font-medium">network systems</span>, and capturing urban narratives through the lens.
      </p>

      <!-- Terminal Command Snippet Box -->
      <div class="w-full max-w-xl bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded mb-10 text-left font-mono text-xs text-gray-300 shadow-2xl relative tech-bracket">
        <div class="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-muted">
          <div class="flex items-center space-x-2">
            <span class="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block"></span>
            <span class="text-[11px] text-gray-400 ml-2">pi@fedora-workstation:~</span>
          </div>
          <span class="text-[10px] text-accent font-bold">BASH 5.2</span>
        </div>
        <div class="space-y-1 text-gray-300">
          <p><span class="text-accent font-bold">➜</span> <span class="text-emerald-400 font-semibold">whoami</span></p>
          <p class="text-gray-400 pl-4">Lutfi (Pi) • D3 Informatics • Backend & System Builder</p>
          <p><span class="text-accent font-bold">➜</span> <span class="text-emerald-400 font-semibold">current_focus</span></p>
          <p class="text-gray-400 pl-4">Hybrid RAG Search, Distributed Systems, IoT Architecture</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
        <button
          @click="scrollToSection('#projects')"
          class="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-light uppercase font-heading font-bold text-lg tracking-wider transition-all duration-300 shadow-accent-glow hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 group"
        >
          <span>Explore Arsenal</span>
          <span class="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
        </button>

        <button
          @click="scrollToSection('#about')"
          class="w-full sm:w-auto px-8 py-4 bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-accent text-light uppercase font-heading font-bold text-lg tracking-wider transition-all duration-300"
        >
          The Operator Bio
        </button>
      </div>

      <!-- Floating Stats Bar -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-6 border-t border-white/10 font-mono">
        <div class="p-3 text-center">
          <div class="text-2xl md:text-3xl font-heading font-bold text-accent">4+</div>
          <div class="text-xs text-gray-400 uppercase tracking-wider">Years Dev & Infra</div>
        </div>
        <div class="p-3 text-center">
          <div class="text-2xl md:text-3xl font-heading font-bold text-accent">15+</div>
          <div class="text-xs text-gray-400 uppercase tracking-wider">Systems Shipped</div>
        </div>
        <div class="p-3 text-center">
          <div class="text-2xl md:text-3xl font-heading font-bold text-accent">99.9%</div>
          <div class="text-xs text-gray-400 uppercase tracking-wider">Target Reliability</div>
        </div>
        <div class="p-3 text-center">
          <div class="text-2xl md:text-3xl font-heading font-bold text-accent">FEDORA</div>
          <div class="text-xs text-gray-400 uppercase tracking-wider">Linux Workstation</div>
        </div>
      </div>

    </div>
  </section>
</template>
