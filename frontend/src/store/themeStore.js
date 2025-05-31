import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'vs-dark',
  setTheme: (theme) => set({ theme }),
}));