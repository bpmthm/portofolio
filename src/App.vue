<script setup>
import { onMounted, onUnmounted, provide, ref } from 'vue'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

gsap.registerPlugin(ScrollTrigger)

const lenisInstance = ref(null)
const showBackToTop = ref(false)
const scrollProgress = ref(0)

onMounted(() => {
  // Initialize Lenis with optimized smooth scrolling physics
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
    infinite: false,
  })

  lenisInstance.value = lenis

  // Synchronize Lenis with GSAP ScrollTrigger
  lenis.on('scroll', (e) => {
    ScrollTrigger.update()
    
    // Update progress and back to top visibility
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight
    if (totalHeight > 0) {
      scrollProgress.value = Math.min(100, Math.max(0, (e.scroll / totalHeight) * 100))
    }
    showBackToTop.value = e.scroll > 400
  })

  // GSAP Ticker drives Lenis rendering loop smoothly
  function updateTicker(time) {
    lenis.raf(time * 1000)
  }
  gsap.ticker.add(updateTicker)
  gsap.ticker.lagSmoothing(0)
})

onUnmounted(() => {
  if (lenisInstance.value) {
    lenisInstance.value.destroy()
  }
})

// Provide lenis instance to all components for smooth anchor jumping
provide('lenis', lenisInstance)

const scrollToTop = () => {
  if (lenisInstance.value) {
    lenisInstance.value.scrollTo(0, { duration: 1.2 })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-dark text-light relative selection:bg-accent selection:text-white">
    <!-- Fixed Hardware-Accelerated Analog Noise Grain -->
    <div class="analog-grain-overlay" aria-hidden="true"></div>

    <!-- Main Navigation -->
    <Navbar />

    <!-- Main View with Smooth Route Transition -->
    <main class="flex-grow z-10">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Main Footer -->
    <Footer />

    <!-- Floating Back to Top with Circular Progress Indicator -->
    <button
      v-if="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-40 p-3 bg-dark/90 backdrop-blur-md border border-white/15 text-light hover:border-accent hover:text-accent rounded-full transition-all duration-300 shadow-accent-glow flex items-center justify-center group"
      aria-label="Scroll to top"
    >
      <svg class="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
      <span class="sr-only">Top</span>
    </button>
  </div>
</template>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
