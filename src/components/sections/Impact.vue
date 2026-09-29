<script setup>
import { ref, onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../../composables/useLanguage'

gsap.registerPlugin(ScrollTrigger)

const { currentLocale, toggleLanguage } = useLanguage()

const isModalOpen = ref(false)
const isModalLoading = ref(true)

const openModal = () => {
  isModalOpen.value = true
  isModalLoading.value = true
  document.body.style.overflow = 'hidden' // Prevent background scrolling
  
  // Simulate loading delay for aesthetic
  setTimeout(() => {
    isModalLoading.value = false
  }, 400)
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
}

const impactTranslations = {
  en: {
    descTag: 'COMMUNITY NARRATIVE',
    p1Before: 'As ',
    p1Role: 'Co-founder of TJIBADAK1921',
    p1Mid1: ', my role encompasses ',
    p1Focus: 'initiating tree planting and allocation programs for spring catchment zones',
    p1Mid2: ', restoring riparian borders at ',
    p1Heritage: 'Gedong Cai Tjibadak (constructed in 1921)',
    p1After: ', and fostering collective civic awareness through digital campaigns and youth ecological workshops.',
    p2: "This initiative merges grassroots leadership, advocacy for Bandung's urban groundwater conservation, and the utilization of digital platforms for sustainable public education and telemetry.",
    roleTitle: '[SPECIFIC ROLE & ACTIONS]',
    action1Title: '1. TREE PLANTING:',
    action1Desc: 'Initiating tree planting and land allocation in spring catchment zones and slope areas.',
    action2Title: '2. DIGITAL CAMPAIGN:',
    action2Desc: 'Crafting social media narratives and public information channels.',
    action3Title: '3. YOUTH WORKSHOPS:',
    action3Desc: 'Hosting watershed sanitation and water conservation education with local youth.',
    quote: '"Water is not merely a commodity, but a civilization heritage that we must steward together."',
  },
  id: {
    descTag: 'NARASI KOMUNITAS',
    p1Before: 'Sebagai ',
    p1Role: 'Co-founder TJIBADAK1921',
    p1Mid1: ', peran gue adalah ',
    p1Focus: 'menginisiasi program penanaman dan pengalokasian pohon untuk area sempadan mata air',
    p1Mid2: ', merestorasi area sempadan di ',
    p1Heritage: 'Gedong Cai Tjibadak (dibangun tahun 1921)',
    p1After: ', serta membangun kesadaran kolektif warga melalui kampanye digital dan lokakarya ekologi pemuda.',
    p2: 'Inisiatif ini memadukan kepemimpinan akar rumput, advokasi konservasi air tanah kota Bandung, serta pemanfaatan platform digital untuk pendataan dan edukasi publik berkelanjutan.',
    roleTitle: '[PERAN & AKSI SPESIFIK]',
    action1Title: '1. TREE PLANTING:',
    action1Desc: 'Menginisiasikan penanaman dan pengalokasian pohon di zona resapan mata air dan daerah tebing.',
    action2Title: '2. DIGITAL CAMPAIGN:',
    action2Desc: 'Membangun konten narasi media sosial dan platform informasi publik.',
    action3Title: '3. YOUTH WORKSHOPS:',
    action3Desc: 'Mengadakan edukasi sanitasi DAS dan konservasi air bersama pemuda lokal.',
    quote: '"Air bukan sekadar komoditas, tapi warisan peradaban kota yang harus kita rawat bersama."',
  }
}

onMounted(() => {
  nextTick(() => {
    gsap.fromTo('.impact-card',
      { y: 60, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '#impact',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }
    )

    gsap.fromTo('.impact-element',
      { y: 30, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '#impact',
          start: 'top 75%',
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
      }
    )
  })
})
</script>

<template>
  <section id="impact" class="py-28 px-6 max-w-7xl mx-auto relative overflow-hidden">
    
    <!-- Section Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-paper-border dark:border-white/10">
      <div>
        <span class="font-mono text-xs uppercase tracking-widest text-accent font-bold">// 03. ECOLOGICAL INITIATIVE</span>
        <h2 class="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight text-ink dark:text-light mt-1">
          Ground Zero
        </h2>
      </div>
      <div class="font-mono text-xs text-ink-muted dark:text-muted mt-2 md:mt-0">
        [PROJECT: KOMUNITAS TJIBADAK1921] • [LOC: GEDONG CAI TJIBADAK 1921]
      </div>
    </div>

    <!-- Impact Showcase Banner Card -->
    <div class="impact-card glass-panel rounded-lg border border-paper-border dark:border-white/15 overflow-hidden p-8 md:p-12 relative tech-bracket">
      
      <!-- Top Badges -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div class="flex items-center space-x-3">
          <span class="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono text-xs uppercase font-bold rounded">
            ● Active Community Leadership
          </span>
          <span class="font-mono text-xs text-ink-muted dark:text-gray-400">
            EST. 1921 HERITAGE SPRING
          </span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="font-mono text-xs text-ink-muted dark:text-muted hidden md:block">
            COORD: 6°52'42.1"S 107°36'18.4"E • BANDUNG
          </div>
          <button @click="openModal" class="px-3 py-1.5 bg-accent hover:bg-paper-alt dark:hover:bg-white text-white hover:text-ink dark:hover:text-black font-mono text-[11px] font-bold tracking-widest rounded transition-colors uppercase">
            [ QUICK PREVIEW ↗ ]
          </button>
        </div>
      </div>

      <!-- Narrative Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div class="lg:col-span-7 space-y-6">
          <!-- In-Section Minimalist Translate Header -->
          <div class="flex items-center justify-between pb-2 border-b border-paper-border dark:border-white/5">
            <span class="text-xs font-mono text-accent font-bold uppercase tracking-wider">
              // {{ impactTranslations[currentLocale]?.descTag }}
            </span>
            <!-- Minimalist In-Section Translation Switch -->
            <button
              @click="toggleLanguage"
              class="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-paper-alt dark:bg-white/[0.04] hover:bg-accent/15 border border-paper-border dark:border-white/10 hover:border-accent text-ink dark:text-gray-300 hover:text-black dark:hover:text-white font-mono text-[11px] tracking-wider transition-all duration-200 cursor-pointer group"
              :title="currentLocale === 'en' ? 'Ganti narasi ke Bahasa Indonesia' : 'Switch narrative to English'"
            >
              <span class="text-accent text-[11px] group-hover:rotate-12 transition-transform">🌐</span>
              <span class="text-ink-muted dark:text-muted text-[10px]">LANG:</span>
              <span :class="currentLocale === 'id' ? 'text-accent font-bold' : 'text-ink-muted dark:text-gray-400'">ID</span>
              <span class="text-ink-muted/20 dark:text-white/20">/</span>
              <span :class="currentLocale === 'en' ? 'text-accent font-bold' : 'text-ink-muted dark:text-gray-400'">EN</span>
            </button>
          </div>

          <h3 class="impact-element text-3xl md:text-4xl font-heading font-bold uppercase text-ink dark:text-white leading-tight">
            TJIBADAK1921: Safeguarding 100+ Years of Urban Spring Heritage
          </h3>

          <p class="impact-element text-ink dark:text-gray-300 font-body text-base leading-relaxed">
            {{ impactTranslations[currentLocale]?.p1Before }}<span class="text-ink dark:text-white font-semibold">{{ impactTranslations[currentLocale]?.p1Role }}</span>{{ impactTranslations[currentLocale]?.p1Mid1 }}<span class="text-accent font-medium">{{ impactTranslations[currentLocale]?.p1Focus }}</span>{{ impactTranslations[currentLocale]?.p1Mid2 }}<span class="text-ink dark:text-white font-medium">{{ impactTranslations[currentLocale]?.p1Heritage }}</span>{{ impactTranslations[currentLocale]?.p1After }}
          </p>

          <p class="impact-element text-ink-muted dark:text-gray-400 font-body text-sm leading-relaxed">
            {{ impactTranslations[currentLocale]?.p2 }}
          </p>

          <!-- Impact Metrics Grid -->
          <div class="impact-element grid grid-cols-3 gap-4 pt-4 border-t border-paper-border dark:border-white/10 font-mono">
            <div>
              <div class="text-2xl md:text-3xl font-heading font-bold text-accent">1921</div>
              <div class="text-[11px] text-ink-muted dark:text-gray-400 uppercase">Heritage Spring</div>
            </div>
            <div>
              <div class="text-2xl md:text-3xl font-heading font-bold text-accent">200+</div>
              <div class="text-[11px] text-ink-muted dark:text-gray-400 uppercase">Trees Planted</div>
            </div>
            <div>
              <div class="text-2xl md:text-3xl font-heading font-bold text-accent">60+</div>
              <div class="text-[11px] text-ink-muted dark:text-gray-400 uppercase">Youth Activists</div>
            </div>
          </div>
        </div>

        <!-- Right Side: Field Note / Archival Display -->
        <div class="impact-element lg:col-span-5">
          <div class="bg-paper-alt dark:bg-black/80 rounded border border-paper-border dark:border-white/15 p-6 font-mono text-xs space-y-4 relative scanline-card shadow-lg dark:shadow-none">
            <div class="flex justify-between items-center text-ink-muted dark:text-gray-400 pb-3 border-b border-paper-border dark:border-white/10">
              <span class="text-accent font-bold">{{ impactTranslations[currentLocale]?.roleTitle }}</span>
              <span>TJILEBAK ARCHIVE</span>
            </div>
            
            <div class="space-y-2.5 text-ink dark:text-gray-300">
              <p><span class="text-accent font-bold">{{ impactTranslations[currentLocale]?.action1Title }}</span> {{ impactTranslations[currentLocale]?.action1Desc }}</p>
              <p><span class="text-accent font-bold">{{ impactTranslations[currentLocale]?.action2Title }}</span> {{ impactTranslations[currentLocale]?.action2Desc }}</p>
              <p><span class="text-accent font-bold">{{ impactTranslations[currentLocale]?.action3Title }}</span> {{ impactTranslations[currentLocale]?.action3Desc }}</p>
            </div>

            <div class="p-3 bg-paper dark:bg-white/[0.03] border border-paper-border dark:border-white/10 rounded text-[11px] text-ink-muted dark:text-gray-400 italic">
              {{ impactTranslations[currentLocale]?.quote }}
            </div>

            <div class="pt-2 flex justify-between items-center text-[10px] text-ink-muted dark:text-muted">
              <span>LEADERSHIP & COLLABORATION</span>
              <span class="text-emerald-600 dark:text-emerald-400 font-bold">BANDUNG, JAWA BARAT</span>
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- Quick Preview Modal for Impact -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-paper/80 dark:bg-black/80 backdrop-blur-sm" @click="closeModal"></div>
          
          <!-- Modal Content -->
          <div class="relative w-full max-w-4xl bg-paper dark:bg-darker border border-paper-border dark:border-white/20 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-full">
            
            <!-- Modal Header -->
            <div class="px-6 py-4 border-b border-paper-border dark:border-white/10 flex items-center justify-between bg-paper-alt dark:bg-black/50">
              <h3 class="font-mono font-bold text-ink dark:text-light uppercase tracking-widest text-sm">
                // TJIBADAK1921 : ECOLOGICAL INITIATIVE
              </h3>
              <button @click="closeModal" class="text-ink-muted dark:text-gray-400 hover:text-accent transition-colors p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <!-- Modal Body with Scroll -->
            <div class="p-6 overflow-y-auto hide-scrollbar relative bg-paper dark:bg-darker/90">
              <!-- Loading State -->
              <div v-if="isModalLoading" class="absolute inset-0 bg-paper/90 dark:bg-darker/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                <div class="w-8 h-8 border-2 border-accent/20 border-t-accent rounded-full animate-spin mb-4"></div>
                <div class="font-mono text-xs text-accent animate-pulse">FETCHING ARCHIVE...</div>
              </div>
              
              <!-- Content -->
              <div :class="['transition-opacity duration-500', isModalLoading ? 'opacity-0' : 'opacity-100']">
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <!-- Visual Placeholder / System Output -->
                  <div class="md:col-span-5 bg-paper-alt dark:bg-black/80 rounded border border-paper-border dark:border-white/10 p-4 font-mono text-[10px] text-gray-500 overflow-hidden relative shadow-inner">
                    <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
                    <p class="text-accent mb-2">> INITIATING VISUAL ARCHIVE...</p>
                    <p class="text-emerald-600 dark:text-emerald-400 font-bold mb-4">> GROUND ZERO: GEDONG CAI TJIBADAK</p>
                    <div class="space-y-1 text-ink dark:text-gray-500">
                      <p>0x001: SCANNING ECOLOGICAL ZONE...</p>
                      <p>0x002: DEPLOYING TREE PLANTING PROTOCOL [DONE]</p>
                      <p>0x003: INITIATING YOUTH WORKSHOP [DONE]</p>
                      <p>0x004: DIGITAL CAMPAIGN ONLINE.</p>
                      <br>
                      <p class="text-ink-muted dark:text-gray-400 text-xs text-center border border-paper-border dark:border-white/10 p-8 mt-4 rounded bg-paper dark:bg-white/[0.02]">
                        [ MEDIA ATTACHMENT ]<br>NO PREVIEW AVAILABLE
                      </p>
                    </div>
                  </div>
                  
                  <!-- Details -->
                  <div class="md:col-span-7 space-y-6">
                    <div>
                      <h4 class="text-2xl font-bold font-heading text-ink dark:text-white mb-2 uppercase">TJIBADAK1921 Digital Campaign</h4>
                      <div class="flex flex-wrap gap-2 font-mono text-[10px]">
                        <span class="px-2 py-1 bg-paper-alt dark:bg-white/[0.05] border border-paper-border dark:border-white/10 rounded text-ink-muted dark:text-gray-400">LEADERSHIP</span>
                        <span class="px-2 py-1 bg-paper-alt dark:bg-white/[0.05] border border-paper-border dark:border-white/10 rounded text-ink-muted dark:text-gray-400">ECOLOGY</span>
                        <span class="px-2 py-1 bg-paper-alt dark:bg-white/[0.05] border border-paper-border dark:border-white/10 rounded text-ink-muted dark:text-gray-400">ADVOCACY</span>
                      </div>
                    </div>
                    
                    <div class="space-y-4 font-sans text-sm text-ink dark:text-gray-300 leading-relaxed">
                      <p>
                        Sebagai <span class="text-ink dark:text-white font-bold">Co-founder TJIBADAK1921</span>, inisiatif ini merestorasi area sempadan mata air bersejarah Gedong Cai Tjibadak yang dibangun pada tahun 1921.
                      </p>
                      <p>
                        Kampanye ini memadukan aksi di lapangan seperti <span class="text-accent">penanaman pohon</span> dan <span class="text-emerald-600 dark:text-emerald-400">edukasi konservasi</span> dengan taktik advokasi digital untuk membangun kesadaran kritis generasi muda mengenai krisis air tanah perkotaan.
                      </p>
                      <blockquote class="pl-4 border-l-2 border-accent text-ink-muted dark:text-gray-400 italic">
                        "Mengkoneksikan sejarah, ekologi, dan teknologi digital untuk merevitalisasi warisan air peradaban Bandung."
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </section>
</template>