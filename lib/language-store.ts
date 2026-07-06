import { create } from 'zustand'

interface LanguageStore {
  language: 'en' | 'uz' | 'ru'
  setLanguage: (lang: 'en' | 'uz' | 'ru') => void
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: 'en',
  setLanguage: (language) => {
    localStorage.setItem('language', language)
    set({ language })
  },
}))
