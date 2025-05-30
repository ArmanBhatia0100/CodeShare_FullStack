import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'vs',
  setTheme: (theme) => set({ theme }),
}));