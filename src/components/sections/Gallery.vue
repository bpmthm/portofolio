<script setup>
import { ref, computed, inject, watch, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../../composables/useLanguage'

gsap.registerPlugin(ScrollTrigger)

const lenis = inject('lenis', null)
const { currentLocale, toggleLanguage } = useLanguage()

const activeCamera = ref('all')
const activePhoto = ref(null)
const imageErrors = ref({})

const handleImageError = (id) => {
  imageErrors.value[id] = true
}

const openPhotoModal = (photo) => {
  activePhoto.value = photo
}

const closePhotoModal = () => {
  activePhoto.value = null
}

const cameras = [
  { id: 'all', label: 'All Gear' },
  { id: 'fuji', label: 'Fujifilm X-T50' },
  { id: 'analog', label: '35mm Film Analog' },
  { id: 'phone', label: 'Phone' },
]

const photoStories = {
  en: {
    1: 'The historic colonial facade of Bala Keselamatan standing serene amidst urban Bandung, marked by classic wooden mullions and timeless white walls.',
    3: 'Navigating windswept grassy mountain ridges on 35mm film, chasing distant summits blanketed in drifting alpine fog.',
    4: 'A high-altitude basecamp engulfed in dense mountain mist, framed by fluttering prayer flags and stark monochrome tranquility.',
    5: 'Following expedition comrades bearing heavy carrier packs through high-altitude savannas, immortalized in raw chemical grain.',
    6: 'Sharp triangular rooflines and cross fenestration of a minimalist chapel cutting cleanly into an immaculate blue sky.',
    7: 'A dramatic downward beam of sunlight piercing through a raw concrete hall, casting a solitary figure into deep chiaroscuro contemplation.',
    8: 'Clean architectural angles and pure white facade set against an expansive ultramarine void, punctuated by the flight of a lone bird.',
    9: 'A layered glimpse through black iron railings into colonial residence No. 20, where midday sunlight sculpts sharp architectural shadows.',
    10: 'The curved glass of the Panoramic railcar gliding past railway crossings, contrasting luxury transit against gritty street-level stickers.',
    11: 'Expansive wide-angle cityscape capturing the passenger railcar cutting across downtown tracks before the towering Bank Mandiri building.',
    12: 'A quiet cigarette pause on the steps outside EST Fashion Gallery, surrounded by lush vertical greenery and the slow tempo of the street.'
  },
  id: {
    1: 'Fasad kolonial bersejarah Bala Keselamatan yang berdiri tenang di tengah hiruk-pikuk Bandung, ditandai jendela kayu klasik dan dinding putih bersahaja.',
    3: 'Menyusuri punggungan gunung berumput di atas roll film 35mm, melangkah menuju puncak berapi yang samar diselimuti kabut dan awan.',
    4: 'Basecamp dataran tinggi yang tenggelam dalam keheningan kabut tebal pegunungan, dihiasi bendera ekspedisi dalam kontras monokrom yang kuat.',
    5: 'Melangkah di belakang rekan pendaki dengan tas keril sarat beban, menyusuri padang savana terbuka dalam estetika butiran film analog.',
    6: 'Garis atap segitiga kapel modern yang tegas dan jendela salib minimalis, membelah langit biru bersih berpadu kanopi pepohonan rimbun.',
    7: 'Seberkas cahaya alami menembus ruang beton tua, menyinari sosok pria yang terdiam dalam momen perenungan chiaroscuro yang sunyi.',
    8: 'Geometri fasad putih berpadu dengan luasnya ruang negatif langit biru pekat, diabadikan tepat saat seekor burung melintas bebas.',
    9: 'Membingkai rumah warisan kolonial No. 20 dari balik jeruji besi hitam; bayangan tajam sinar matahari siang mempertegas tekstur bangunan kuno.',
    10: 'Kaca lengkung megah gerbong Kereta Panoramic melintasi perlintasan rel kota, menyajikan kontras antara kemewahan armada dan tekstur jalanan.',
    11: 'Lanskap monokrom sudut lebar yang mempertemukan jalur kereta api dan megahnya gedung Bank Mandiri di bawah langit cerah perkotaan.',
    12: 'Momen rehat santai seorang bapak di tangga EST Fashion Gallery, duduk bersahaja diapit tanaman vertikal rimbun di tepi jalan Bandung.'
  }
}

const photoBase = [
  {
    id: 1,
    title: 'The Heritage Citadel',
    imagePath: '/images/gallery/photo1.jpg',
    cameraType: 'fuji',
    cameraName: 'Fujifilm X-T50',
    lens: 'XF 18mm F1.4 R LM WR',
    exif: 'f/4.5 • 1/700s • ISO 125 • 18mm',
    vibe: 'Colonial Heritage & Geometry',
    gradient: 'from-amber-950/40 via-stone-900/30 to-zinc-950',
    heightClass: 'h-[420px]',
    aspect: 'Heritage Architecture',
    location: 'BANDUNG // BALA KESELAMATAN'
  },
  {
    id: 3,
    title: 'Alpine Ridge Ascent',
    imagePath: '/images/gallery/photo3.jpg',
    cameraType: 'analog',
    cameraName: '35mm Film Camera',
    lens: '35mm Prime',
    exif: 'f/8.0 • 1/250s • ISO 400 • 35mm',
    vibe: 'Warm Chemical Grain',
    gradient: 'from-emerald-950/40 via-teal-950/30 to-zinc-950',
    heightClass: 'h-72',
    aspect: 'Mountain Ridge',
    location: 'HIGHLAND // TRAIL'
  },
  {
    id: 4,
    title: 'Sanctuary in the Mist',
    imagePath: '/images/gallery/photo4.jpg',
    cameraType: 'analog',
    cameraName: '35mm Film Camera',
    lens: '35mm Prime',
    exif: 'f/5.6 • 1/125s • ISO 400 • 35mm',
    vibe: 'Ethereal Monochrome Mist',
    gradient: 'from-zinc-900/40 via-slate-950/30 to-black',
    heightClass: 'h-80',
    aspect: 'High Altitude Camp',
    location: 'ALPINE // BASECAMP'
  },
  {
    id: 5,
    title: 'Carriers of the Savanna',
    imagePath: '/images/gallery/photo5.jpg',
    cameraType: 'analog',
    cameraName: '35mm Film Camera',
    lens: '35mm Prime',
    exif: 'f/8.0 • 1/250s • ISO 400 • 35mm',
    vibe: 'Raw Expedition Grain',
    gradient: 'from-stone-900/40 via-zinc-950/30 to-black',
    heightClass: 'h-72',
    aspect: 'Trail Documentary',
    location: 'EXPEDITION // SAVANNA'
  },
  {
    id: 6,
    title: 'The Geometric Chapel',
    imagePath: '/images/gallery/photo6.jpg',
    cameraType: 'phone',
    cameraName: 'Samsung Galaxy S21',
    lens: 'Main Wide 26mm',
    exif: 'f/1.8 • 1/1050s • ISO 50 • 26mm',
    vibe: 'Crisp Geometric Elevation',
    gradient: 'from-sky-950/40 via-teal-950/30 to-zinc-950',
    heightClass: 'h-[400px]',
    aspect: 'Chapel Architecture',
    location: 'URBAN // SANCTUARY'
  },
  {
    id: 7,
    title: 'Chiaroscuro Contemplation',
    imagePath: '/images/gallery/photo7.jpg',
    cameraType: 'phone',
    cameraName: 'Samsung Galaxy S21',
    lens: 'Main Wide 26mm',
    exif: 'f/2.0 • 1/50s • ISO 50 • 26mm',
    vibe: 'Dramatic Low-Key Light',
    gradient: 'from-zinc-950/60 via-stone-950/40 to-black',
    heightClass: 'h-72',
    aspect: 'Cinematic Portrait',
    location: 'STUDIO // MONOCHROME'
  },
  {
    id: 8,
    title: 'Urban Negative Space',
    imagePath: '/images/gallery/photo8.jpg',
    cameraType: 'phone',
    cameraName: 'Samsung Galaxy S21',
    lens: 'Main Wide 26mm',
    exif: 'f/2.0 • 1/2000s • ISO 25 • 26mm',
    vibe: 'Ultramarine Negative Space',
    gradient: 'from-blue-950/40 via-indigo-950/30 to-zinc-950',
    heightClass: 'h-80',
    aspect: 'Minimalist Geometry',
    location: 'ROOFTOP // SKYLINE'
  },
  {
    id: 9,
    title: 'Residence No. 20',
    imagePath: '/images/gallery/photo9.jpg',
    cameraType: 'fuji',
    cameraName: 'Fujifilm X-T50',
    lens: 'XF 18mm F1.4 R LM WR',
    exif: 'f/4.5 • 1/680s • ISO 125 • 18mm',
    vibe: 'Layered Street Heritage',
    gradient: 'from-amber-950/40 via-stone-900/30 to-zinc-950',
    heightClass: 'h-[440px]',
    aspect: 'Colonial Residence',
    location: 'BANDUNG // STREET'
  },
  {
    id: 10,
    title: 'Panoramic Railcar Transit',
    imagePath: '/images/gallery/photo10.jpg',
    cameraType: 'fuji',
    cameraName: 'Fujifilm X-T50',
    lens: 'XF 18mm F1.4 R LM WR',
    exif: 'f/5.6 • 1/500s • ISO 125 • 18mm',
    vibe: 'High Contrast Railway',
    gradient: 'from-zinc-900/40 via-stone-950/30 to-black',
    heightClass: 'h-[420px]',
    aspect: 'Urban Railway',
    location: 'BANDUNG // CROSSING'
  },
  {
    id: 11,
    title: 'The Steel Corridor & Mandiri',
    imagePath: '/images/gallery/photo11.jpg',
    cameraType: 'fuji',
    cameraName: 'Fujifilm X-T50',
    lens: 'XF 18mm F1.4 R LM WR',
    exif: 'f/5.6 • 1/500s • ISO 125 • 18mm',
    vibe: 'Metropolitan Pulse & Rails',
    gradient: 'from-zinc-800/40 via-zinc-900/30 to-black',
    heightClass: 'h-80',
    aspect: 'Cityscape Monolith',
    location: 'BANDUNG // DOWNTOWN'
  },
  {
    id: 12,
    title: 'The Staircase Respite',
    imagePath: '/images/gallery/photo12.jpg',
    cameraType: 'fuji',
    cameraName: 'Fujifilm X-T50',
    lens: '27mm Equivalent',
    exif: 'f/6.4 • 1/125s • ISO 100 • 27mm',
    vibe: 'Street Human Interest',
    gradient: 'from-stone-900/40 via-zinc-950/30 to-black',
    heightClass: 'h-[460px]',
    aspect: 'Street Human Interest',
    location: 'BANDUNG // EST GALLERY'
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

const currentIndex = computed(() => {
  if (!activePhoto.value) return -1
  return filteredPhotos.value.findIndex((p) => p.id === activePhoto.value.id)
})

const nextPhoto = () => {
  if (filteredPhotos.value.length === 0) return
  const nextIdx = (currentIndex.value + 1) % filteredPhotos.value.length
  activePhoto.value = filteredPhotos.value[nextIdx]
}

const prevPhoto = () => {
  if (filteredPhotos.value.length === 0) return
  const prevIdx = (currentIndex.value - 1 + filteredPhotos.value.length) % filteredPhotos.value.length
  activePhoto.value = filteredPhotos.value[prevIdx]
}

const handleKeydown = (e) => {
  if (!activePhoto.value) return
  if (e.key === 'Escape') {
    closePhotoModal()
  } else if (e.key === 'ArrowRight') {
    nextPhoto()
  } else if (e.key === 'ArrowLeft') {
    prevPhoto()
  }
}

// Complete Lenis smooth scroll & body scroll freeze while lightbox is active
watch(activePhoto, (newVal) => {
  if (typeof document !== 'undefined') {
    if (newVal) {
      document.body.style.overflow = 'hidden'
      if (lenis?.value) {
        lenis.value.stop()
      }
    } else {
      document.body.style.overflow = ''
      if (lenis?.value) {
        lenis.value.start()
      }
    }
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
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

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
  if (lenis?.value) {
    lenis.value.start()
  }
})
</script>

<template>
  <section id="gallery" class="py-28 px-6 max-w-7xl mx-auto relative overflow-hidden">
    
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-paper-border dark:border-white/10">
      <div>
        <span class="font-mono text-xs uppercase tracking-widest text-accent font-bold">// 04. VISUAL ARCHIVE</span>
        <h2 class="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight text-ink dark:text-light mt-1">
          The Lens
        </h2>
      </div>
      
      <!-- Header Actions: Filters & In-Section Story Lang Switch -->
      <div class="flex flex-wrap items-center gap-3 mt-4 md:mt-0 font-mono text-xs">
        <!-- Minimalist In-Section Story Translate Toggle -->
        <button
          @click="toggleLanguage"
          class="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-paper-alt dark:bg-white/[0.04] hover:bg-accent/15 border border-paper-border dark:border-white/10 hover:border-accent text-ink dark:text-gray-300 hover:text-black dark:hover:text-white font-mono text-[11px] tracking-wider transition-all duration-200 cursor-pointer group"
          :title="currentLocale === 'en' ? 'Ganti cerita foto ke Bahasa Indonesia' : 'Switch photo stories to English'"
        >
          <span class="text-accent text-[11px] group-hover:rotate-12 transition-transform">🌐</span>
          <span class="text-ink-muted dark:text-muted text-[10px]">STORY:</span>
          <span :class="currentLocale === 'id' ? 'text-accent font-bold' : 'text-ink-muted dark:text-gray-400'">ID</span>
          <span class="text-ink-muted/20 dark:text-white/20">/</span>
          <span :class="currentLocale === 'en' ? 'text-accent font-bold' : 'text-ink-muted dark:text-gray-400'">EN</span>
        </button>

        <div class="h-4 w-[1px] bg-paper-border dark:bg-white/15 hidden sm:block"></div>

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
                : 'bg-paper-alt dark:bg-white/[0.04] text-ink-muted dark:text-gray-400 hover:text-ink dark:hover:text-white border border-paper-border dark:border-white/5'
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
        @click="openPhotoModal(photo)"
        :class="[
          'gallery-item break-inside-avoid relative rounded-lg overflow-hidden border border-paper-border dark:border-white/10 hover:border-accent dark:hover:border-accent transition-all duration-300 group cursor-pointer shadow-xl bg-gradient-to-b',
          photo.gradient,
          photo.heightClass
        ]"
      >
        <!-- Real Image Render with Fallback -->
        <img
          v-if="photo.imagePath && !imageErrors[photo.id]"
          :src="photo.imagePath"
          :alt="photo.title"
          class="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out group-hover:scale-105"
          @error="handleImageError(photo.id)"
          loading="lazy"
        />

        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(black_1px,transparent_1px)] dark:bg-[radial-gradient(white_1px,transparent_1px)] [background-size:12px_12px] z-10 pointer-events-none"></div>

        <div class="absolute top-3 left-3 z-20 font-mono text-[9px] text-white/75 bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
          {{ photo.cameraName }}
        </div>
        <div class="absolute top-3 right-3 z-20 font-mono text-[9px] text-accent bg-black/70 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 font-bold">
          {{ photo.aspect }}
        </div>

        <div class="absolute inset-0 bg-paper/90 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 p-6 flex flex-col justify-end space-y-2.5 backdrop-blur-sm">
          <span class="text-[11px] font-mono text-accent font-bold uppercase tracking-widest">// NARRATIVE & TELEMETRY</span>
          <h4 class="text-xl font-heading font-bold text-ink dark:text-white uppercase">{{ photo.title }}</h4>
          <p class="text-xs text-ink-muted dark:text-gray-300 font-sans leading-relaxed">
            {{ photo.story }}
          </p>
          <div class="pt-2 border-t border-paper-border dark:border-white/10 flex justify-between items-center text-[11px] font-mono text-ink-muted dark:text-muted">
            <span class="text-ink dark:text-gray-300">{{ photo.exif }}</span>
            <span class="text-accent font-bold">[{{ currentLocale === 'id' ? 'Buka Detail' : 'Inspect Full' }} ↗]</span>
          </div>
        </div>

        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-paper/95 via-paper/60 dark:from-black/95 dark:via-black/60 to-transparent z-10 group-hover:opacity-0 transition-opacity">
          <h4 class="text-base font-heading font-bold text-ink dark:text-white uppercase tracking-wider">{{ photo.title }}</h4>
          <p class="text-xs text-ink-muted dark:text-gray-400 font-sans line-clamp-1 mt-0.5">{{ photo.story }}</p>
          <span class="text-[10px] font-mono text-accent block mt-1">{{ photo.vibe }}</span>
        </div>

      </div>

    </div>

    <!-- Interactive Lightbox Modal (Split-View Studio Exhibition) -->
    <div
      v-if="activePhoto"
      class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-xl"
      data-lenis-prevent
      @wheel.stop
      @touchmove.stop
      @click="closePhotoModal"
    >
      <div
        class="glass-panel w-full max-w-6xl max-h-[92vh] md:max-h-[88vh] rounded-xl border border-accent/40 dark:border-white/15 shadow-2xl overflow-hidden flex flex-col lg:flex-row relative bg-paper dark:bg-[#0c0c0e]"
        data-lenis-prevent
        @wheel.stop
        @touchmove.stop
        @click.stop
      >
        <!-- Left Stage: Photo Presentation (Uncropped, pure focus on visual art) -->
        <div class="lg:w-7/12 xl:w-2/3 bg-black/95 flex items-center justify-center relative p-4 sm:p-6 min-h-[300px] sm:min-h-[420px] lg:min-h-[580px] group overflow-hidden select-none">
          
          <!-- Top Left Badge: Camera & Index Counter -->
          <div class="absolute top-3.5 left-3.5 z-20 flex items-center gap-2 font-mono text-[10px]">
            <span class="px-2.5 py-1 rounded bg-black/80 text-white/90 border border-white/15 backdrop-blur-md">
              {{ activePhoto.cameraName }}
            </span>
            <span class="px-2 py-1 rounded bg-accent text-white font-bold backdrop-blur-md shadow-accent-glow">
              {{ String(currentIndex + 1).padStart(2, '0') }} / {{ String(filteredPhotos.length).padStart(2, '0') }}
            </span>
          </div>

          <!-- Top Right Close on Mobile -->
          <button
            @click="closePhotoModal"
            class="lg:hidden absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-black/80 text-white hover:bg-accent flex items-center justify-center border border-white/20 cursor-pointer shadow-lg"
            aria-label="Close"
          >
            ✕
          </button>

          <!-- Floating Prev/Next Buttons on Stage -->
          <button
            v-if="filteredPhotos.length > 1"
            @click.stop="prevPhoto"
            class="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-accent text-white text-xl flex items-center justify-center backdrop-blur-md border border-white/15 opacity-70 hover:opacity-100 transition-all cursor-pointer shadow-lg"
            title="Previous (←)"
          >
            ‹
          </button>
          <button
            v-if="filteredPhotos.length > 1"
            @click.stop="nextPhoto"
            class="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-accent text-white text-xl flex items-center justify-center backdrop-blur-md border border-white/15 opacity-70 hover:opacity-100 transition-all cursor-pointer shadow-lg"
            title="Next (→)"
          >
            ›
          </button>

          <!-- The Real Photo: Fully Uncropped with object-contain -->
          <img
            v-if="activePhoto.imagePath && !imageErrors[activePhoto.id]"
            :src="activePhoto.imagePath"
            :alt="activePhoto.title"
            class="max-w-full max-h-[46vh] sm:max-h-[52vh] lg:max-h-[80vh] w-auto h-auto object-contain rounded shadow-2xl transition-all duration-300"
            @error="handleImageError(activePhoto.id)"
          />
        </div>

        <!-- Right Sidebar: Metadata & Narrative -->
        <div class="lg:w-5/12 xl:w-1/3 bg-paper-alt dark:bg-[#111114] border-t lg:border-t-0 lg:border-l border-paper-border dark:border-white/10 p-5 sm:p-6 lg:p-7 flex flex-col justify-between overflow-y-auto max-h-[44vh] sm:max-h-[40vh] lg:max-h-[88vh]">
          
          <!-- Upper Section: Header, Story, & Telemetry -->
          <div class="space-y-4">
            
            <!-- Top Controls in Sidebar -->
            <div class="flex items-center justify-between pb-3 border-b border-paper-border dark:border-white/10">
              <span class="font-mono text-[10px] text-accent font-bold uppercase tracking-widest">// VISUAL ARCHIVE</span>
              
              <div class="flex items-center gap-2">
                <button
                  @click="toggleLanguage"
                  class="font-mono text-[10px] px-2 py-0.5 rounded bg-paper dark:bg-white/5 border border-paper-border dark:border-white/10 hover:border-accent text-ink dark:text-gray-300 cursor-pointer"
                  :title="currentLocale === 'en' ? 'Ganti ke Bahasa Indonesia' : 'Switch to English'"
                >
                  STORY: <span class="text-accent font-bold">{{ currentLocale.toUpperCase() }}</span>
                </button>
                <button
                  @click="closePhotoModal"
                  class="hidden lg:flex items-center justify-center w-7 h-7 rounded bg-paper dark:bg-white/10 hover:bg-accent hover:text-white text-ink-muted dark:text-gray-300 transition-colors cursor-pointer text-xs"
                  title="Close (ESC)"
                >
                  ✕
                </button>
              </div>
            </div>

            <!-- Title & Lens info -->
            <div>
              <div class="flex items-center gap-2 mb-1.5 flex-wrap">
                <span class="px-2 py-0.5 rounded bg-accent/15 border border-accent/30 text-accent font-mono text-[10px] font-bold">
                  {{ activePhoto.vibe }}
                </span>
                <span class="px-2 py-0.5 rounded bg-paper dark:bg-white/5 border border-paper-border dark:border-white/10 text-ink-muted dark:text-gray-400 font-mono text-[10px]">
                  {{ activePhoto.aspect }}
                </span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-heading font-bold uppercase tracking-tight text-ink dark:text-white leading-tight">
                {{ activePhoto.title }}
              </h3>
              <p class="text-xs font-mono text-ink-muted dark:text-gray-400 mt-1">
                {{ activePhoto.cameraName }} — {{ activePhoto.lens }}
              </p>
            </div>

            <!-- Narrative / Story Callout -->
            <div class="p-3.5 rounded-lg bg-paper dark:bg-white/[0.03] border border-paper-border dark:border-white/10">
              <span class="font-mono text-[9px] uppercase tracking-wider text-accent font-bold block mb-1">
                // {{ currentLocale === 'id' ? 'CATATAN KURATOR' : "CURATOR'S NOTE" }}
              </span>
              <p class="text-xs sm:text-sm font-sans text-ink dark:text-gray-200 leading-relaxed italic">
                "{{ activePhoto.story }}"
              </p>
            </div>

            <!-- Technical EXIF Matrix -->
            <div class="space-y-2 pt-1">
              <span class="font-mono text-[9px] uppercase tracking-wider text-ink-muted dark:text-gray-500 font-bold block">
                // OPTICAL TELEMETRY
              </span>
              <div class="grid grid-cols-2 gap-2 font-mono text-xs">
                <div class="p-2.5 bg-paper dark:bg-black/40 border border-paper-border dark:border-white/10 rounded">
                  <span class="text-ink-muted dark:text-gray-400 block text-[9px] uppercase">APERTURE</span>
                  <span class="text-ink dark:text-light font-bold">{{ activePhoto.exif.split('•')[0]?.trim() }}</span>
                </div>
                <div class="p-2.5 bg-paper dark:bg-black/40 border border-paper-border dark:border-white/10 rounded">
                  <span class="text-ink-muted dark:text-gray-400 block text-[9px] uppercase">SHUTTER</span>
                  <span class="text-ink dark:text-light font-bold">{{ activePhoto.exif.split('•')[1]?.trim() }}</span>
                </div>
                <div class="p-2.5 bg-paper dark:bg-black/40 border border-paper-border dark:border-white/10 rounded">
                  <span class="text-ink-muted dark:text-gray-400 block text-[9px] uppercase">SENSITIVITY</span>
                  <span class="text-accent font-bold">{{ activePhoto.exif.split('•')[2]?.trim() }}</span>
                </div>
                <div class="p-2.5 bg-paper dark:bg-black/40 border border-paper-border dark:border-white/10 rounded">
                  <span class="text-ink-muted dark:text-gray-400 block text-[9px] uppercase">PROFILE</span>
                  <span class="text-ink dark:text-light font-bold">{{ activePhoto.exif.split('•')[3]?.trim() }}</span>
                </div>
              </div>

              <div class="p-2.5 bg-paper dark:bg-black/40 border border-paper-border dark:border-white/10 rounded flex items-center justify-between font-mono text-xs">
                <span class="text-ink-muted dark:text-gray-400 text-[9px] uppercase">LOCATION</span>
                <span class="text-emerald-600 dark:text-emerald-400 font-bold text-[11px]">{{ activePhoto.location || 'BANDUNG // STREET' }}</span>
              </div>
            </div>

          </div>

          <!-- Bottom Navigation Controls -->
          <div class="pt-4 mt-4 border-t border-paper-border dark:border-white/10 flex items-center justify-between font-mono text-xs">
            <button
              @click="prevPhoto"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-paper dark:bg-white/5 hover:bg-accent hover:text-white border border-paper-border dark:border-white/10 transition-colors cursor-pointer group"
              title="Previous Photo (←)"
            >
              <span class="group-hover:-translate-x-0.5 transition-transform">←</span>
              <span>{{ currentLocale === 'id' ? 'Sebelumnya' : 'Prev' }}</span>
            </button>

            <span class="text-[10px] text-ink-muted dark:text-gray-500 font-mono hidden sm:inline">
              [←] [→] KEYBOARD
            </span>

            <button
              @click="nextPhoto"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-paper dark:bg-white/5 hover:bg-accent hover:text-white border border-paper-border dark:border-white/10 transition-colors cursor-pointer group"
              title="Next Photo (→)"
            >
              <span>{{ currentLocale === 'id' ? 'Berikutnya' : 'Next' }}</span>
              <span class="group-hover:translate-x-0.5 transition-transform">→</span>
            </button>
          </div>

        </div>

      </div>
    </div>

  </section>
</template>