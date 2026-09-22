<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const lenis = inject('lenis', null)
const route = useRoute()
const router = useRouter()
const isMobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navItems = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Works', href: '#projects', id: 'projects' },
  { label: 'Impact', href: '#impact', id: 'impact' },
  { label: 'The Lens', href: '#gallery', id: 'gallery' },
]

const handleNavClick = async (href) => {
  isMobileMenuOpen.value = false

  if (route.path !== '/') {
    await router.push('/')
    // Wait for DOM update
    setTimeout(() => {
      scrollToElement(href)
    }, 150)
  } else {
    scrollToElement(href)
  }
}

const scrollToElement = (target) => {
  if (lenis?.value) {
    lenis.value.scrollTo(target, { offset: -70, duration: 1.2 })
  } else {
    const el = document.querySelector(target)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

// Track active section on scroll
let observer = null

onMounted(() => {
  const sections = document.querySelectorAll('section[id]')
  if (sections.length > 0) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((sec) => observer.observe(sec))
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <header class="fixed w-full top-0 z-50 bg-dark/85 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
      
      <!-- Brand / Identity -->
      <router-link to="/" class="flex items-center space-x-3 group">
        <div class="w-8 h-8 bg-black border border-white/20 flex items-center justify-center font-heading font-bold text-accent group-hover:border-accent transition-colors">
          PI
        </div>
        <div class="flex flex-col">
          <span class="font-heading font-bold tracking-wider text-base text-light group-hover:text-accent transition-colors">
            LUTFI CANDAKA
          </span>
          <span class="font-mono text-[10px] text-muted tracking-tight -mt-1">
            [SYS.ONLINE // F41]
          </span>
        </div>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center space-x-1 font-mono text-xs uppercase tracking-wider">
        <button
          v-for="item in navItems"
          :key="item.href"
          @click="handleNavClick(item.href)"
          :class="[
            'px-4 py-2 transition-all duration-200 hover:text-accent relative',
            activeSection === item.id ? 'text-accent font-semibold' : 'text-gray-300'
          ]"
        >
          <span class="text-accent/60 mr-1">//</span>{{ item.label }}
          <span
            v-if="activeSection === item.id"
            class="absolute bottom-0 left-4 right-4 h-0.5 bg-accent shadow-accent-glow"
          ></span>
        </button>
      </nav>

      <!-- Right Action: Status / Contact -->
      <div class="hidden md:flex items-center space-x-4">
        <div class="flex items-center space-x-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded text-[11px] font-mono text-gray-300">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>AVAILABLE</span>
        </div>
        <a
          href="mailto:lutficandaka@gmail.com"
          class="px-4 py-1.5 bg-accent hover:bg-accent-hover text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-accent-glow"
        >
          Contact
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 text-gray-300 hover:text-accent focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

    </div>

    <!-- Mobile Drawer Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-darker/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 font-mono text-sm uppercase"
    >
      <div class="flex flex-col space-y-3">
        <button
          v-for="item in navItems"
          :key="item.href"
          @click="handleNavClick(item.href)"
          class="text-left py-2 border-b border-white/5 hover:text-accent transition-colors flex justify-between items-center"
        >
          <span><span class="text-accent mr-2">//</span>{{ item.label }}</span>
          <span class="text-xs text-muted">&rarr;</span>
        </button>
      </div>
      <div class="pt-2 flex justify-between items-center">
        <span class="text-xs text-emerald-400 font-mono">● OPEN FOR OPPORTUNITIES</span>
        <a
          href="mailto:lutficandaka@gmail.com"
          class="px-4 py-2 bg-accent text-white text-xs font-bold uppercase"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </header>
</template>
