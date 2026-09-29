import { ref, nextTick } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Singleton state: Shared across all components via JavaScript module caching
const savedLocale = typeof window !== 'undefined' ? localStorage.getItem('preferred_locale') : null
export const currentLocale = ref(savedLocale === 'id' ? 'id' : 'en')

export const dictionary = {
  en: {
    nav: {
      about: 'About',
      works: 'Works',
      impact: 'Impact',
      theLens: 'The Lens',
      status: 'AVAILABLE',
      contact: 'Contact',
      switchLanguage: 'Language',
      openOpportunities: '● OPEN FOR OPPORTUNITIES',
      getInTouch: 'Get in Touch',
    },
    hero: {
      role: 'Full-Stack Developer & Network Engineer',
      subtitleBefore: 'Building robust ',
      backendArch: 'backend architectures',
      subtitleMid: ', high-performance ',
      networkSys: 'network systems',
      subtitleAfter: ', and capturing urban narratives through the lens.',
      whoamiLabel: 'whoami',
      whoamiVal: 'Lutfi • D3 Informatics • Backend & System Builder',
      focusLabel: 'current_focus',
      focusVal: 'Hybrid RAG Search, Distributed Systems, IoT Architecture',
      exploreBtn: 'Explore Arsenal',
      bioBtn: 'The Operator Bio',
      stats: {
        years: 'Years Dev & Infra',
        systems: 'Systems Shipped',
        reliability: 'Target Reliability',
        workstation: 'Linux Workstation',
      },
    },
    about: {
      photoSub: 'Associate Degree in Informatics • Network & Systems Enthusiast • Art & Local Cultures Aficionado',
      bioGreeting: "Hello! I'm ",
      bioNicknamePrefix: ', commonly called ',
      bioDesc1: '. An Informatics graduate who spends days tinkering with backend architectures, servers, and networks.',
      bioComfort: 'My comfort zone is in the terminal ',
      bioDesc2: ', engineering system architectures, project documentation, playing music, capturing streetscapes of Bandung, and brewing coffee at home.',
      philosophyText: "To me, a great backend isn't the most complex one, but the most predictable, well-documented, and capable of handling failures gracefully. Always prioritizing zero-latency bottlenecks and auditability.",
    },
  },
  id: {
    nav: {
      about: 'Tentang',
      works: 'Karya',
      impact: 'Dampak',
      theLens: 'Lensa',
      status: 'TERSEDIA',
      contact: 'Kontak',
      switchLanguage: 'Bahasa',
      openOpportunities: '● TERBUKA UNTUK KOLABORASI',
      getInTouch: 'Hubungi Saya',
    },
    hero: {
      role: 'Full-Stack Developer & Network Engineer',
      subtitleBefore: 'Merancang ',
      backendArch: 'arsitektur backend tangguh',
      subtitleMid: ', sistem ',
      networkSys: 'jaringan berkinerja tinggi',
      subtitleAfter: ', serta mendokumentasikan narasi sudut kota lewat lensa kamera.',
      whoamiLabel: 'whoami',
      whoamiVal: 'Lutfi • D3 Teknik Informatika • Backend & System Builder',
      focusLabel: 'current_focus',
      focusVal: 'Hybrid RAG Search, Distributed Systems, IoT Architecture',
      exploreBtn: 'Jelajahi Arsenal',
      bioBtn: 'Profil Operator',
      stats: {
        years: 'Tahun Pengalaman',
        systems: 'Sistem Terdistribusi',
        reliability: 'Target Keandalan',
        workstation: 'Linux Workstation',
      },
    },
    about: {
      photoSub: 'Lulusan D3 Teknik Informatika • Network & Systems Enthusiast • Art & Local Cultures Aficionado',
      bioGreeting: 'Halo! Gue ',
      bioNicknamePrefix: ', akrab dipanggil ',
      bioDesc1: '. Lulusan D3 Teknik Informatika yang sehari-hari ngoprek backend, kadang server, dan jaringan.',
      bioComfort: 'Comfort zone gue ada di terminal ',
      bioDesc2: ', ngeracik arsitektur sistem, dokumentasi proyek, main musik, motret sudut kota Bandung, dan ngeracik kopi di rumah.',
      philosophyText: 'Bagi gue, backend yang hebat bukan yang paling rumit, melainkan yang paling terprediksi, terdokumentasi, dan mampu menangani failure secara elegan. Selalu mengutamakan zero-latency bottleneck dan auditability.',
    },
  },
}

/**
 * Access nested dictionary translation safely
 * Example: t('nav.about') or t('hero.exploreBtn')
 */
export function t(path) {
  if (!path) return ''
  const keys = path.split('.')
  let current = dictionary[currentLocale.value]

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key]
    } else {
      // Fallback to English if translation is missing in the target locale
      let fallback = dictionary.en
      for (const fKey of keys) {
        if (fallback && typeof fallback === 'object' && fKey in fallback) {
          fallback = fallback[fKey]
        } else {
          return path
        }
      }
      return fallback
    }
  }
  return current
}

/**
 * Toggle active language between English and Bahasa Indonesia
 * Automatically refreshes GSAP ScrollTrigger to prevent layout shift offset bugs
 */
export function toggleLanguage() {
  currentLocale.value = currentLocale.value === 'en' ? 'id' : 'en'

  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred_locale', currentLocale.value)
  }

  // Safeguard: Refresh ScrollTrigger after Vue completes reactivity DOM patch
  nextTick(() => {
    try {
      if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.refresh) {
        ScrollTrigger.refresh()
      }
    } catch {
      // Ignore if ScrollTrigger is not active
    }
  })
}

/**
 * Set explicit language ('en' | 'id')
 */
export function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'id') return
  currentLocale.value = lang
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred_locale', lang)
  }
  nextTick(() => {
    try {
      if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger.refresh) {
        ScrollTrigger.refresh()
      }
    } catch {
      // Ignore
    }
  })
}

export function useLanguage() {
  return {
    currentLocale,
    toggleLanguage,
    setLanguage,
    t,
    dictionary,
  }
}

export default useLanguage
