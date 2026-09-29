<script setup>
import { ref, computed, onMounted, nextTick } from 'vue' // Tambahin onMounted & nextTick
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../../composables/useLanguage'

gsap.registerPlugin(ScrollTrigger)

const { currentLocale, toggleLanguage } = useLanguage()

const activeCamera = ref('all')
const activePhoto = ref(null)

const cameras = [
  { id: 'all', label: 'All Gear' },
  { id: 'fuji', label: 'Fujifilm X-T50' },
  { id: 'nikon', label: 'Nikon Coolpix' },
  { id: 'analog', label: '35mm Film Analog' },
]

const photoStories = {
  en: {
    1: 'Navigating the narrow alleys of Braga in the night rain, capturing neon coffee shop reflections shimmering across wet asphalt.',
    2: 'Steamy coffee shop windowpane during an afternoon storm in Dago. Water droplets refracting streetlights into a warm, wistful spectrum.',
    3: 'Documenting the ancient banyan canopy sheltering the 1921 heritage spring. Morning sunlight piercing through the quiet, dew-laden foliage.',
    4: 'The evening rhythm at Bandung Railway Station as the dusk train docks. Sharp contrast between rushing passenger silhouettes and long shadows of the rails.',
    5: 'A pour-over coffee break at the home desk set to the mellow guitar strains of Midwest Emo. Analog warmth evoking stillness and nostalgia.',
    6: 'The stark geometry of urban concrete facades slicing across Bandung’s sky, capturing a precise, raw industrial aesthetic.'
  },
  id: {
    1: 'Menyusuri gang sempit sekitaran Braga di tengah rintik hujan malam hari, menangkap pantulan lampu neon warung kopi di atas genangan aspal basah.',
    2: 'Kaca jendela kedai kopi berembun saat badai sore di Dago. Butiran air memecah cahaya lampu jalanan menjadi spektrum warna yang hangat dan sendu.',
    3: 'Dokumentasi kanopi pohon beringin tua yang memayungi mata air warisan 1921. Cahaya matahari pagi menerobos dedaunan lembap yang hening.',
    4: 'Dinamika peron Stasiun Bandung saat kereta senja merapat. Kontras tinggi antara siluet penumpang bergegas dan bayangan panjang rel kereta.',
    5: 'Momen rehat seduh kopi manual di meja kerja rumahan ditemani alunan gitar Midwest Emo. Warna analog memberikan rasa tenang dan nostalgia.',
    6: 'Geometri fasad gedung beton perkotaan yang tegas membelah langit biru Bandung, merefleksikan estetika raw industrial yang presisi.'
  }
}

const photoBase = [
  {
    id: 1,
    title: 'Nocturnal Bandung Alleyways',
    cameraType: 'fuji',
    cameraName: 'Fujifilm X-T50',
    lens: 'XF 23mm F1.4 R LM WR',
    exif: 'f/1.4 • 1/125s • ISO 1600 • 23mm',
    vibe: 'Film Sim: Classic Neg',
    gradient: 'from-amber-950/40 via-red-950/30 to-zinc-950',
    heightClass: 'h-80',
    aspect: 'Urban Street Night'
  },
  {
    id: 2,
    title: 'Raindrops & Neon Glare',
    cameraType: 'nikon',
    cameraName: 'Nikon Coolpix',
    lens: 'Built-in 28-112mm',
    exif: 'f/2.8 • 1/60s • ISO 800 • 28mm',
    vibe: 'Lo-Fi Digital Grain',
    gradient: 'from-blue-950/40 via-cyan-950/30 to-zinc-950',
    heightClass: 'h-96',
    aspect: 'Candid Low-Light'
  },
  {
    id: 3,
    title: 'Gedong Cai Tjibadak Canopy',
    cameraType: 'analog',
    cameraName: 'Olympus OM-1 (35mm)',
    lens: 'Zuiko 50mm f/1.8',
    exif: 'f/4.0 • 1/250s • ISO 400 • Kodak UltraMax',
    vibe: 'Chemical Film Grain',
    gradient: 'from-emerald-950/40 via-teal-950/30 to-zinc-950',
    heightClass: 'h-72',
    aspect: 'Environmental Documentary'
  },
  {
    id: 4,
    title: 'Train Station Commute Transit',
    cameraType: 'fuji',
    cameraName: 'Fujifilm X-T50',
    lens: 'XF 35mm F2 R WR',
    exif: 'f/2.0 • 1/500s • ISO 320 • 35mm',
    vibe: 'Film Sim: Acros B&W',
    gradient: 'from-zinc-800/40 via-zinc-900/30 to-black',
    heightClass: 'h-96',
    aspect: 'Monochrome Street'
  },
  {
    id: 5,
    title: 'Midwest Emo Coffee Hour',
    cameraType: 'analog',
    cameraName: 'Canon Canonet QL17',
    lens: '40mm f/1.7',
    exif: 'f/2.8 • 1/60s • ISO 200 • Fujicolor C200',
    vibe: 'Warm Vintage Cast',
    gradient: 'from-orange-950/40 via-amber-950/30 to-zinc-950',
    heightClass: 'h-72',
    aspect: 'Daily Narrative'
  },
  {
    id: 6,
    title: 'Brutalist Concrete & Shadow',
    cameraType: 'nikon',
    cameraName: 'Nikon Coolpix',
    lens: 'Built-in Zoom',
    exif: 'f/3.5 • 1/1000s • ISO 100 • 35mm',
    vibe: 'Hard Contrast Punch',
    gradient: 'from-stone-900/40 via-zinc-950/30 to-black',
    heightClass: 'h-80',
    aspect: 'Architectural Framing'
  }
]

const photos = computed(() => {
  const stories = photoStories[currentLocale.value] || photoStories.en
  return photoBase.map((p) => ({
    ...p,
    story: stories[p.id] || stories[1]
  }))
})

const filteredPhotos = computed(() => {
  if (activeCamera.value === 'all') return photos.value
  return photos.value.filter((p) => p.cameraType === activeCamera.value)
})

onMounted(() => {
  nextTick(() => {
    // Animasi Staggered Masuk untuk Grid Foto
    gsap.fromTo('.gallery-item',
      { y: 40, opacity: 0, scale: 0.95 },
      {
        scrollTrigger: {
          trigger: '#gallery',
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.2)',
      }
    )
  })
})
</script>

<template>
  <section id="gallery" class="py-28 px-6 max-w-7xl mx-auto relative overflow-hidden">
    
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
      <div>
        <span class="font-mono text-xs uppercase tracking-widest text-accent font-bold">// 04. VISUAL ARCHIVE</span>
        <h2 class="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight text-light mt-1">
          The Lens
        </h2>
      </div>
      
      <!-- Header Actions: Filters & In-Section Story Lang Switch -->
      <div class="flex flex-wrap items-center gap-3 mt-4 md:mt-0 font-mono text-xs">
        <!-- Minimalist In-Section Story Translate Toggle -->
        <button
          @click="toggleLanguage"
          class="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-white/[0.04] hover:bg-accent/15 border border-white/10 hover:border-accent text-gray-300 hover:text-white font-mono text-[11px] tracking-wider transition-all duration-200 cursor-pointer group"
          :title="currentLocale === 'en' ? 'Ganti cerita foto ke Bahasa Indonesia' : 'Switch photo stories to English'"
        >
          <span class="text-accent text-[11px] group-hover:rotate-12 transition-transform">🌐</span>
          <span class="text-muted text-[10px]">STORY:</span>
          <span :class="currentLocale === 'id' ? 'text-accent font-bold' : 'text-gray-400'">ID</span>
          <span class="text-white/20">/</span>
          <span :class="currentLocale === 'en' ? 'text-accent font-bold' : 'text-gray-400'">EN</span>
        </button>

        <div class="h-4 w-[1px] bg-white/15 hidden sm:block"></div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cam in cameras"
            :key="cam.id"
            @click="activeCamera = cam.id"
            :class="[
              'px-3.5 py-1.5 rounded transition-all cursor-pointer',
              activeCamera === cam.id
                ? 'bg-accent text-white font-bold shadow-accent-glow'
                : 'bg-white/[0.04] text-gray-400 hover:text-white border border-white/5'
            ]"
          >
            {{ cam.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Masonry Photo Grid -->
    <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      
      <div
        v-for="photo in filteredPhotos"
        :key="photo.id"
        @click="activePhoto = photo"
        :class="[
          'gallery-item break-inside-avoid relative rounded-lg overflow-hidden border border-white/10 hover:border-accent transition-all duration-300 group cursor-pointer shadow-xl bg-gradient-to-b',
          photo.gradient,
          photo.heightClass
        ]"
      >
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:12px_12px]"></div>

        <div class="absolute top-3 left-3 z-20 font-mono text-[9px] text-white/75 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
          {{ photo.cameraName }}
        </div>
        <div class="absolute top-3 right-3 z-20 font-mono text-[9px] text-accent bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 font-bold">
          {{ photo.aspect }}
        </div>

        <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 p-6 flex flex-col justify-end space-y-2.5 backdrop-blur-sm">
          <span class="text-[11px] font-mono text-accent font-bold uppercase tracking-widest">// NARRATIVE & TELEMETRY</span>
          <h4 class="text-xl font-heading font-bold text-white uppercase">{{ photo.title }}</h4>
          <p class="text-xs text-gray-300 font-sans leading-relaxed">
            {{ photo.story }}
          </p>
          <div class="pt-2 border-t border-white/10 flex justify-between items-center text-[11px] font-mono text-muted">
            <span class="text-gray-300">{{ photo.exif }}</span>
            <span class="text-accent font-bold">[{{ currentLocale === 'id' ? 'Buka Detail' : 'Inspect Full' }} ↗]</span>
          </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-10 group-hover:opacity-0 transition-opacity">
          <h4 class="text-base font-heading font-bold text-white uppercase tracking-wider">{{ photo.title }}</h4>
          <p class="text-xs text-gray-400 font-sans line-clamp-1 mt-0.5">{{ photo.story }}</p>
          <span class="text-[10px] font-mono text-accent block mt-1">{{ photo.vibe }}</span>
        </div>

      </div>

    </div>

    <!-- Interactive Lightbox Modal with Storytelling -->
    <div
      v-if="activePhoto"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
      @click="activePhoto = null"
    >
      <div
        class="glass-panel w-full max-w-4xl p-6 md:p-8 rounded-lg border border-accent relative shadow-2xl space-y-6"
        @click.stop
      >
        <div class="flex justify-between items-start pb-4 border-b border-white/10">
          <div>
            <span class="text-xs font-mono text-accent font-bold uppercase tracking-wider">// VISUAL ARCHIVE & STORY</span>
            <h3 class="text-3xl font-heading font-bold uppercase text-white mt-1">{{ activePhoto.title }}</h3>
            <p class="text-xs font-mono text-gray-400">{{ activePhoto.cameraName }} — {{ activePhoto.lens }}</p>
          </div>
          <button
            @click="activePhoto = null"
            class="text-gray-400 hover:text-white font-mono text-sm px-3 py-1 bg-white/10 rounded cursor-pointer"
          >
            ✕ {{ currentLocale === 'id' ? 'Tutup' : 'Close' }}
          </button>
        </div>

        <div
          :class="[
            'w-full h-72 md:h-80 rounded flex items-center justify-center relative overflow-hidden bg-gradient-to-b border border-white/10',
            activePhoto.gradient
          ]"
        >
          <div class="text-center p-8 space-y-3 relative z-10 max-w-2xl">
            <span class="px-3 py-1 bg-accent/20 border border-accent text-accent font-mono text-xs uppercase font-bold rounded inline-block">
              {{ activePhoto.vibe }}
            </span>
            <p class="text-2xl font-heading font-bold text-white uppercase">{{ activePhoto.title }}</p>
            <p class="text-sm font-body text-gray-200 leading-relaxed italic">
              "{{ activePhoto.story }}"
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
          <div class="p-3 bg-black/50 border border-white/10 rounded text-center">
            <span class="text-gray-400 block text-[10px]">APERTURE / SPEED</span>
            <span class="text-light font-bold">{{ activePhoto.exif.split('•')[0] }} / {{ activePhoto.exif.split('•')[1] }}</span>
          </div>
          <div class="p-3 bg-black/50 border border-white/10 rounded text-center">
            <span class="text-gray-400 block text-[10px]">SENSITIVITY</span>
            <span class="text-accent font-bold">{{ activePhoto.exif.split('•')[2] }}</span>
          </div>
          <div class="p-3 bg-black/50 border border-white/10 rounded text-center">
            <span class="text-gray-400 block text-[10px]">OPTICAL PROFILE</span>
            <span class="text-light font-bold">{{ activePhoto.exif.split('•')[3] }}</span>
          </div>
          <div class="p-3 bg-black/50 border border-white/10 rounded text-center">
            <span class="text-gray-400 block text-[10px]">LOCATION ARCHIVE</span>
            <span class="text-emerald-400 font-bold">BANDUNG // STREET</span>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>