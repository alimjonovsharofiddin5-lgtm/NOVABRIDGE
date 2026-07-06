import { create } from 'zustand'

interface UIStore {
  isDarkMode: boolean
  sidebarOpen: boolean
  toggleDarkMode: () => void
  toggleSidebar: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  isDarkMode: true,
  sidebarOpen: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}))
