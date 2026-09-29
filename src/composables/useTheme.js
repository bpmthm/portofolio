import { ref, onMounted, watch } from 'vue'

const theme = ref('dark')

export function useTheme() {
  const initTheme = () => {
    // Force dark mode initially if no preference or load from localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      theme.value = savedTheme
    } else {
      theme.value = 'dark' // Default to dark for this project
    }
    applyTheme()
  }

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', theme.value)
    applyTheme()
  }

  const applyTheme = () => {
    if (theme.value === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return {
    theme,
    initTheme,
    toggleTheme
  }
}
