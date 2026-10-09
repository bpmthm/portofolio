<script setup>
import { inject, ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLanguage } from '../../composables/useLanguage'
import { useTheme } from '../../composables/useTheme'

const lenis = inject('lenis', null)
const route = useRoute()
const router = useRouter()
const isMobileMenuOpen = ref(false)
const activeSection = ref('hero')

const { currentLocale, toggleLanguage, t } = useLanguage()
const { theme, toggleTheme } = useTheme()

const navItems = computed(() => [
  { label: t('nav.about'), href: '#about', id: 'about' },
  { label: t('nav.works'), href: '#projects', id: 'projects' },
  { label: t('nav.impact'), href: '#impact', id: 'impact' },
  { label: t('nav.theLens'), href: '#gallery', id: 'gallery' },
])

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
  <header class="fixed w-full top-0 z-50 bg-paper/85 dark:bg-dark/85 backdrop-blur-xl border-b border-paper-border dark:border-white/10 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
      
      <!-- Brand / Identity -->
      <router-link to="/" class="flex items-center space-x-3 group">
        <div class="w-8 h-8 bg-paper-alt dark:bg-black border border-paper-border dark:border-white/20 flex items-center justify-center font-heading font-bold text-accent group-hover:border-accent transition-colors">
          PI
        </div>
        <div class="flex flex-col">
          <span class="font-heading font-bold tracking-wider text-base text-ink dark:text-light group-hover:text-accent transition-colors">
            LUTFI CANDAKA KUSUMAH
          </span>
          <span class="font-mono text-[10px] text-ink-muted dark:text-muted tracking-tight -mt-1">
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
            activeSection === item.id ? 'text-accent font-semibold' : 'text-ink-muted dark:text-gray-300'
          ]"
        >
          <span class="text-accent/60 mr-1">//</span>{{ item.label }}
          <span
            v-if="activeSection === item.id"
            class="absolute bottom-0 left-4 right-4 h-0.5 bg-accent shadow-accent-glow"
          ></span>
        </button>
      </nav>

      <!-- Right Action: Status / Language Switcher / Contact -->
      <div class="hidden md:flex items-center space-x-3">
        <!-- Language Switcher Toggle Button -->
        <button
          @click="toggleLanguage"
          class="px-2.5 py-1 bg-paper-alt dark:bg-white/[0.04] hover:bg-accent/20 border border-paper-border dark:border-white/15 hover:border-accent rounded text-xs font-mono tracking-wider transition-all duration-200 flex items-center space-x-1.5 text-ink dark:text-gray-200 group cursor-pointer"
          :title="currentLocale === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'"
          aria-label="Toggle Language"
        >
          <span class="text-[11px] text-accent font-bold group-hover:rotate-12 transition-transform inline-block">🌐</span>
          <span class="font-bold text-ink dark:text-light group-hover:text-accent transition-colors">
            {{ currentLocale === 'en' ? 'ID' : 'EN' }}
          </span>
        </button>

        <!-- Theme Switcher Toggle Button -->
        <button
          @click="toggleTheme"
          class="px-2.5 py-1 bg-paper-alt dark:bg-white/[0.04] hover:bg-accent/20 border border-paper-border dark:border-white/15 hover:border-accent rounded text-xs font-mono tracking-wider transition-all duration-200 flex items-center space-x-1.5 text-ink dark:text-gray-200 group cursor-pointer"
          :title="theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          aria-label="Toggle Theme"
        >
          <span class="text-[11px] text-accent font-bold group-hover:rotate-12 transition-transform inline-block">
            {{ theme === 'dark' ? '🌙' : '☀️' }}
          </span>
          <span class="font-bold text-ink dark:text-light group-hover:text-accent transition-colors">
            {{ theme === 'dark' ? 'DARK' : 'LIGHT' }}
          </span>
        </button>

        <div class="flex items-center space-x-2 px-3 py-1 bg-paper-alt dark:bg-white/[0.03] border border-paper-border dark:border-white/10 rounded text-[11px] font-mono text-ink-muted dark:text-gray-300">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>{{ t('nav.status') }}</span>
        </div>
        <a
          href="mailto:lutficandaka@gmail.com"
          class="px-4 py-1.5 bg-accent hover:bg-accent-hover text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-accent-glow"
        >
          {{ t('nav.contact') }}
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 text-ink-muted dark:text-gray-300 hover:text-accent focus:outline-none"
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
      class="md:hidden bg-paper-alt/95 dark:bg-darker/95 backdrop-blur-2xl border-b border-paper-border dark:border-white/10 px-6 py-6 space-y-4 font-mono text-sm uppercase"
    >
      <div class="flex flex-col space-y-3">
        <button
          v-for="item in navItems"
          :key="item.href"
          @click="handleNavClick(item.href)"
          class="text-left py-2 border-b border-paper-border dark:border-white/5 hover:text-accent transition-colors flex justify-between items-center text-ink dark:text-white"
        >
          <span><span class="text-accent mr-2">//</span>{{ item.label }}</span>
          <span class="text-xs text-ink-muted dark:text-muted">&rarr;</span>
        </button>
      </div>

      <!-- Mobile Language & Theme Switcher Row -->
      <div class="pt-2 pb-1 border-b border-paper-border dark:border-white/5 flex flex-col space-y-3">
        <div class="flex justify-between items-center">
          <span class="text-xs text-ink-muted dark:text-gray-400 font-mono flex items-center space-x-1.5">
            <span>🌐</span>
            <span>{{ t('nav.switchLanguage') }}</span>
          </span>
          <button
            @click="toggleLanguage"
            class="px-3 py-1 bg-paper-alt dark:bg-white/10 hover:bg-accent/20 border border-paper-border dark:border-white/15 hover:border-accent text-accent font-mono text-xs font-bold rounded flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <span>SWITCH:</span>
            <span class="underline decoration-accent font-extrabold">{{ currentLocale === 'en' ? 'ID' : 'EN' }}</span>
          </button>
        </div>

        <div class="flex justify-between items-center">
          <span class="text-xs text-ink-muted dark:text-gray-400 font-mono flex items-center space-x-1.5">
            <span>{{ theme === 'dark' ? '🌙' : '☀️' }}</span>
            <span>SWITCH THEME</span>
          </span>
          <button
            @click="toggleTheme"
            class="px-3 py-1 bg-paper-alt dark:bg-white/10 hover:bg-accent/20 border border-paper-border dark:border-white/15 hover:border-accent text-accent font-mono text-xs font-bold rounded flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <span>MODE:</span>
            <span class="underline decoration-accent font-extrabold">{{ theme === 'dark' ? 'DARK' : 'LIGHT' }}</span>
          </button>
        </div>
      </div>

      <div class="pt-2 flex justify-between items-center">
        <span class="text-xs text-emerald-600 dark:text-emerald-400 font-mono">{{ t('nav.openOpportunities') }}</span>
        <a
          href="mailto:lutficandaka@gmail.com"
          class="px-4 py-2 bg-accent text-white text-xs font-bold uppercase"
        >
          {{ t('nav.getInTouch') }}
        </a>
      </div>
    </div>
  </header>
</template>
