import { create } from 'zustand';
import defaultHTMLCode from '../components/monaco-editor/defaultHTMLCode';

export const useCodeStore = create((set) => ({
  defaultHTMLCode: defaultHTMLCode,
  language: "html",
  code: defaultHTMLCode,
  setCode: (code) => set({ code }),
  setLanguage: (language) => set({ language }),
}));
