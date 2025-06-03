import { create } from 'zustand';
import defaultHTMLCode from '../components/monaco-editor/defaultHTMLCode';

export const useCodeStore = create((set) => ({
  
  defaultHTMLCode: defaultHTMLCode,
  language: "html",
  updatedCode:"",
  code: defaultHTMLCode,
  publicLink: "",

  setCode: (code) => set({ code }),
  setLanguage: (language) => set({ language }),
  setPublicLink: (publicLink) => set({ publicLink }),
  setUpdatedCode: (updatedCode) => set({ updatedCode }),
}));
