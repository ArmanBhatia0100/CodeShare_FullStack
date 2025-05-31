import { create } from 'zustand';
import defaultHTMLCode from '../components/monaco-editor/defaultHTMLCode';

export const useCodeStore = create((set) => ({
  code: defaultHTMLCode,
  setCode: (code) => set({ code }),
}));
