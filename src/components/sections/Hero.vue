<script setup>
import { inject, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lenis = inject('lenis', null)

const scrollToSection = (target) => {
  if (lenis?.value) {
    lenis.value.scrollTo(target, { offset: -70, duration: 1.2 })
  } else {
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  nextTick(() => {
    // 1. Marquee Background Animation (Infinite Loop)
    gsap.to('.marquee-text', {
      xPercent: -50,
      repeat: -1,
      duration: 30,
      ease: 'linear'
    })

    // 2. Initial Booting / Entrance Timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo('.hero-crosshair', 
      { opacity: 0 }, 
      { opacity: 1, duration: 1, stagger: 0.2 }
    )
    .fromTo('.hero-chip', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }, 
      '-=0.6'
    )
    .fromTo('.hero-title', 
      { y: 60, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.15 }, 
      '-=0.5'
    )
    .fromTo('.hero-subtitle', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }, 
      '-=0.6'
    )
    .fromTo('.hero-terminal', 
      { y: 40, opacity: 0, scale: 0.98 }, 
      { y: 0, opacity: 1, scale: 1, duration: 0.8 }, 
      '-=0.5'
    )
    .fromTo('.hero-actions', 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8 }, 
      '-=0.6'
    )
    .fromTo('.hero-stats', 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }, 
      '-=0.5'
    )

    // 3. Parallax Effect on Scroll for the Main Title
    gsap.to('.hero-title-wrapper', {
      y: 150, // Bergerak 150px ke bawah saat di-scroll (efek tertinggal)
      opacity: 0,
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
  })
})
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid">
    <!-- Ambient Radial Glow Overlay -->
    <div class="absolute inset-0 bg-radial-glow pointer-events-none z-0"></div>
    
    <!-- NEW: Infinite Marquee Background -->
    <div class="absolute top-1/3 left-0 w-[200%] md:w-[300%] -translate-y-1/2 opacity-[0.03] text-[10vw] font-heading font-bold whitespace-nowrap z-0 overflow-hidden pointer-events-none select-none text-white">
      <div class="marquee-text inline-block">
        FULL-STACK DEV — NETWORK ENGINEER — COMMUNITY BUILDER — VISUAL ENTHUSIAST — FULL-STACK DEV — NETWORK ENGINEER — COMMUNITY BUILDER —
      </div>
    </div>

    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-dark/60 to-dark pointer-events-none z-10"></div>

    <!-- Decorative Corner Crosshairs -->
    <div class="hero-crosshair absolute top-24 left-8 text-white/20 font-mono text-xs hidden lg:block select-none z-20">
      + LAT: -6.9175° // LON: 107.6191°
    </div>
    <div class="hero-crosshair absolute top-24 right-8 text-white/20 font-mono text-xs hidden lg:block select-none z-20">
      + PORT: 5173 // SYSTEM: FEDORA_LINUX
    </div>
    <div class="hero-crosshair absolute bottom-12 left-8 text-white/20 font-mono text-xs hidden lg:block select-none z-20">
      [001_HERO_INITIALIZE]
    </div>

    <div class="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
      
      <!-- Top Status Chip -->
      <div class="hero-chip inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 animate-float">
        <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        <span class="font-mono text-xs uppercase tracking-wider text-gray-300">
          Full-Stack Developer & Network Engineer
        </span>
      </div>

      <!-- Main Headline Typography -->
      <div class="hero-title-wrapper flex flex-col items-center">
        <h1 class="hero-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold uppercase tracking-tighter text-light mb-2 leading-none select-none">
          LUTFI CANDAKA
        </h1>
        <h1 class="hero-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-bold uppercase tracking-tighter text-light mb-4 leading-none select-none">
          <span class="text-accent underline decoration-accent/40 decoration-4 underline-offset-8">KUSUMAH</span>
        </h1>
      </div>

      <!-- Subtitle Tagline -->
      <p class="hero-subtitle text-lg md:text-2xl font-body text-gray-300 max-w-3xl mb-8 font-light leading-relaxed">
        Building robust <span class="text-white font-medium">backend architectures</span>, high-performance <span class="text-white font-medium">network systems</span>, and capturing urban narratives through the lens.
      </p>

      <!-- Terminal Command Snippet Box -->
      <div class="hero-terminal w-full max-w-xl bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded mb-10 text-left font-mono text-xs text-gray-300 shadow-2xl relative tech-bracket">
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
          <p class="text-gray-400 pl-4">Lutfi • D3 Informatics • Backend & System Builder</p>
          <p><span class="text-accent font-bold">➜</span> <span class="text-emerald-400 font-semibold">current_focus</span></p>
          <p class="text-gray-400 pl-4">Hybrid RAG Search, Distributed Systems, IoT Architecture</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="hero-actions flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
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
        <div class="hero-stats p-3 text-center">
          <div class="text-2xl md:text-3xl font-heading font-bold text-accent">4+</div>
          <div class="text-xs text-gray-400 uppercase tracking-wider">Years Dev & Infra</div>
        </div>
        <div class="hero-stats p-3 text-center">
          <div class="text-2xl md:text-3xl font-heading font-bold text-accent">15+</div>
          <div class="text-xs text-gray-400 uppercase tracking-wider">Systems Shipped</div>
        </div>
        <div class="hero-stats p-3 text-center">
          <div class="text-2xl md:text-3xl font-heading font-bold text-accent">99.9%</div>
          <div class="text-xs text-gray-400 uppercase tracking-wider">Target Reliability</div>
        </div>
        <div class="hero-stats p-3 text-center">
          <div class="text-2xl md:text-3xl font-heading font-bold text-accent">FEDORA</div>
          <div class="text-xs text-gray-400 uppercase tracking-wider">Linux Workstation</div>
        </div>
      </div>

    </div>
  </section>
</template>