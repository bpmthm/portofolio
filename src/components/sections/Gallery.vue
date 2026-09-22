<script setup>
import { ref, computed } from 'vue'

const activeCamera = ref('all')
const activePhoto = ref(null)

const cameras = [
  { id: 'all', label: 'All Gear' },
  { id: 'fuji', label: 'Fujifilm X-T50' },
  { id: 'nikon', label: 'Nikon Coolpix' },
  { id: 'analog', label: '35mm Film Analog' },
]

const photos = [
  {
    id: 1,
    title: 'Nocturnal Bandung Alleyways',
    cameraType: 'fuji',
    cameraName: 'Fujifilm X-T50',
    lens: 'XF 23mm F1.4 R LM WR',
    exif: 'f/1.4 • 1/125s • ISO 1600 • 23mm',
    vibe: 'Film Simulation: Classic Neg',
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
    vibe: 'Film Simulation: Acros (B&W)',
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

const filteredPhotos = computed(() => {
  if (activeCamera.value === 'all') return photos
  return photos.filter((p) => p.cameraType === activeCamera.value)
})
</script>

<template>
  <section id="gallery" class="py-28 px-6 max-w-7xl mx-auto relative">
    
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
      <div>
        <span class="font-mono text-xs uppercase tracking-widest text-accent font-bold">// 04. VISUAL ARCHIVE</span>
        <h2 class="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight text-light mt-1">
          The Lens
        </h2>
      </div>
      
      <!-- Filter Tabs -->
      <div class="flex flex-wrap gap-2 mt-4 md:mt-0 font-mono text-xs">
        <button
          v-for="cam in cameras"
          :key="cam.id"
          @click="activeCamera = cam.id"
          :class="[
            'px-3.5 py-1.5 rounded transition-all',
            activeCamera === cam.id
              ? 'bg-accent text-white font-bold shadow-accent-glow'
              : 'bg-white/[0.04] text-gray-400 hover:text-white border border-white/5'
          ]"
        >
          {{ cam.label }}
        </button>
      </div>
    </div>

    <!-- Masonry Photo Grid -->
    <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      
      <div
        v-for="photo in filteredPhotos"
        :key="photo.id"
        @click="activePhoto = photo"
        :class="[
          'break-inside-avoid relative rounded-lg overflow-hidden border border-white/10 hover:border-accent transition-all duration-300 group cursor-pointer shadow-xl bg-gradient-to-b',
          photo.gradient,
          photo.heightClass
        ]"
      >
        <!-- Background Pattern / Noise Texture -->
        <div class="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:12px_12px]"></div>

        <!-- Frame HUD Corner Marks -->
        <div class="absolute top-3 left-3 z-20 font-mono text-[9px] text-white/60 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
          {{ photo.cameraName }}
        </div>
        <div class="absolute top-3 right-3 z-20 font-mono text-[9px] text-accent bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
          {{ photo.aspect }}
        </div>

        <!-- Hover Overlay with Detailed EXIF -->
        <div class="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 p-6 flex flex-col justify-end space-y-2 backdrop-blur-sm">
          <span class="text-xs font-mono text-accent font-bold uppercase tracking-widest">// EXIF TELEMETRY</span>
          <h4 class="text-xl font-heading font-bold text-white uppercase">{{ photo.title }}</h4>
          <p class="text-xs font-mono text-gray-300">{{ photo.lens }}</p>
          <div class="pt-2 border-t border-white/10 flex justify-between items-center text-[11px] font-mono text-muted">
            <span class="text-gray-200">{{ photo.exif }}</span>
            <span class="text-accent font-bold">[Inspect ↗]</span>
          </div>
        </div>

        <!-- Ambient Bottom Gradient Tag (When not hovering) -->
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-10 group-hover:opacity-0 transition-opacity">
          <h4 class="text-base font-heading font-bold text-white uppercase tracking-wider">{{ photo.title }}</h4>
          <span class="text-[10px] font-mono text-gray-400">{{ photo.vibe }}</span>
        </div>

      </div>

    </div>

    <!-- Interactive Lightbox Modal -->
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
            <span class="text-xs font-mono text-accent font-bold uppercase tracking-wider">// PHOTO TELEMETRY</span>
            <h3 class="text-3xl font-heading font-bold uppercase text-white mt-1">{{ activePhoto.title }}</h3>
            <p class="text-xs font-mono text-gray-400">{{ activePhoto.cameraName }} — {{ activePhoto.lens }}</p>
          </div>
          <button
            @click="activePhoto = null"
            class="text-gray-400 hover:text-white font-mono text-sm px-3 py-1 bg-white/10 rounded"
          >
            ✕ Close
          </button>
        </div>

        <!-- Frame Display -->
        <div
          :class="[
            'w-full h-80 md:h-96 rounded flex items-center justify-center relative overflow-hidden bg-gradient-to-b border border-white/10',
            activePhoto.gradient
          ]"
        >
          <div class="text-center p-8 space-y-3 relative z-10">
            <span class="px-3 py-1 bg-accent/20 border border-accent text-accent font-mono text-xs uppercase font-bold rounded">
              {{ activePhoto.vibe }}
            </span>
            <p class="text-2xl font-heading font-bold text-white uppercase">{{ activePhoto.title }}</p>
            <p class="text-xs font-mono text-gray-400 max-w-md mx-auto">
              Visual narrative recorded across urban nightscapes and analog street documentation.
            </p>
          </div>
        </div>

        <!-- EXIF Badges -->
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
            <span class="text-gray-400 block text-[10px]">ARCHIVE STAMP</span>
            <span class="text-emerald-400 font-bold">BANDUNG // 35MM</span>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>
