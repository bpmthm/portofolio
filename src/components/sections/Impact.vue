<script setup>
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../../composables/useLanguage'

gsap.registerPlugin(ScrollTrigger)

const { currentLocale, toggleLanguage } = useLanguage()

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
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
      <div>
        <span class="font-mono text-xs uppercase tracking-widest text-accent font-bold">// 03. ECOLOGICAL INITIATIVE</span>
        <h2 class="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight text-light mt-1">
          Ground Zero
        </h2>
      </div>
      <div class="font-mono text-xs text-muted mt-2 md:mt-0">
        [PROJECT: KOMUNITAS TJIBADAK1921] • [LOC: GEDONG CAI TJIBADAK 1921]
      </div>
    </div>

    <!-- Impact Showcase Banner Card -->
    <div class="impact-card glass-panel rounded-lg border border-white/15 overflow-hidden p-8 md:p-12 relative tech-bracket">
      
      <!-- Top Badges -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div class="flex items-center space-x-3">
          <span class="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono text-xs uppercase font-bold rounded">
            ● Active Community Leadership
          </span>
          <span class="font-mono text-xs text-gray-400">
            EST. 1921 HERITAGE SPRING
          </span>
        </div>
        <div class="font-mono text-xs text-muted">
          COORD: 6°52'42.1"S 107°36'18.4"E • BANDUNG
        </div>
      </div>

      <!-- Narrative Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <div class="lg:col-span-7 space-y-6">
          <!-- In-Section Minimalist Translate Header -->
          <div class="flex items-center justify-between pb-2 border-b border-white/5">
            <span class="text-xs font-mono text-accent font-bold uppercase tracking-wider">
              // {{ impactTranslations[currentLocale]?.descTag }}
            </span>
            <!-- Minimalist In-Section Translation Switch -->
            <button
              @click="toggleLanguage"
              class="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-white/[0.04] hover:bg-accent/15 border border-white/10 hover:border-accent text-gray-300 hover:text-white font-mono text-[11px] tracking-wider transition-all duration-200 cursor-pointer group"
              :title="currentLocale === 'en' ? 'Ganti narasi ke Bahasa Indonesia' : 'Switch narrative to English'"
            >
              <span class="text-accent text-[11px] group-hover:rotate-12 transition-transform">🌐</span>
              <span class="text-muted text-[10px]">LANG:</span>
              <span :class="currentLocale === 'id' ? 'text-accent font-bold' : 'text-gray-400'">ID</span>
              <span class="text-white/20">/</span>
              <span :class="currentLocale === 'en' ? 'text-accent font-bold' : 'text-gray-400'">EN</span>
            </button>
          </div>

          <h3 class="impact-element text-3xl md:text-4xl font-heading font-bold uppercase text-white leading-tight">
            TJIBADAK1921: Safeguarding 100+ Years of Urban Spring Heritage
          </h3>

          <p class="impact-element text-gray-300 font-body text-base leading-relaxed">
            {{ impactTranslations[currentLocale]?.p1Before }}<span class="text-white font-semibold">{{ impactTranslations[currentLocale]?.p1Role }}</span>{{ impactTranslations[currentLocale]?.p1Mid1 }}<span class="text-accent font-medium">{{ impactTranslations[currentLocale]?.p1Focus }}</span>{{ impactTranslations[currentLocale]?.p1Mid2 }}<span class="text-white font-medium">{{ impactTranslations[currentLocale]?.p1Heritage }}</span>{{ impactTranslations[currentLocale]?.p1After }}
          </p>

          <p class="impact-element text-gray-400 font-body text-sm leading-relaxed">
            {{ impactTranslations[currentLocale]?.p2 }}
          </p>

          <!-- Impact Metrics Grid -->
          <div class="impact-element grid grid-cols-3 gap-4 pt-4 border-t border-white/10 font-mono">
            <div>
              <div class="text-2xl md:text-3xl font-heading font-bold text-accent">1921</div>
              <div class="text-[11px] text-gray-400 uppercase">Heritage Spring</div>
            </div>
            <div>
              <div class="text-2xl md:text-3xl font-heading font-bold text-accent">200+</div>
              <div class="text-[11px] text-gray-400 uppercase">Trees Planted</div>
            </div>
            <div>
              <div class="text-2xl md:text-3xl font-heading font-bold text-accent">60+</div>
              <div class="text-[11px] text-gray-400 uppercase">Youth Activists</div>
            </div>
          </div>
        </div>

        <!-- Right Side: Field Note / Archival Display -->
        <div class="impact-element lg:col-span-5">
          <div class="bg-black/80 rounded border border-white/15 p-6 font-mono text-xs space-y-4 relative scanline-card">
            <div class="flex justify-between items-center text-gray-400 pb-3 border-b border-white/10">
              <span class="text-accent font-bold">{{ impactTranslations[currentLocale]?.roleTitle }}</span>
              <span>TJILEBAK ARCHIVE</span>
            </div>
            
            <div class="space-y-2.5 text-gray-300">
              <p><span class="text-accent font-bold">{{ impactTranslations[currentLocale]?.action1Title }}</span> {{ impactTranslations[currentLocale]?.action1Desc }}</p>
              <p><span class="text-accent font-bold">{{ impactTranslations[currentLocale]?.action2Title }}</span> {{ impactTranslations[currentLocale]?.action2Desc }}</p>
              <p><span class="text-accent font-bold">{{ impactTranslations[currentLocale]?.action3Title }}</span> {{ impactTranslations[currentLocale]?.action3Desc }}</p>
            </div>

            <div class="p-3 bg-white/[0.03] border border-white/10 rounded text-[11px] text-gray-400 italic">
              {{ impactTranslations[currentLocale]?.quote }}
            </div>

            <div class="pt-2 flex justify-between items-center text-[10px] text-muted">
              <span>LEADERSHIP & COLLABORATION</span>
              <span class="text-emerald-400 font-bold">BANDUNG, JAWA BARAT</span>
            </div>
          </div>
        </div>

      </div>

    </div>

  </section>
</template>