import React from "react";
import { useThemeStore } from "../../store/themeStore";
import { useCodeStore } from "../../store/codeStore";
import MonacoEditor from "../monaco-editor/MonacoEditor";
import LanguageSelectBtn from "../actionComponents/LanguageSelectBtn";
import ThemeSelectionBtn from "../actionComponents/ThemeSelectionBtn";
import CopyButton from "../actionComponents/CopyButton";
import ShareButton from "../actionComponents/ShareButton";

export default function EditorContainer() {
    const { theme } = useThemeStore();
    const { code, setCode } = useCodeStore();

    return  <div className={`${theme == "vs"?"bg-white":"bg-[#1e1e1e]"} shadow-2xl m-auto mb-10 py-4 rounded-lg rounded-l-lg min-w-[80vw] max-w-[70vw] min-h-96 editor`}>
        <main className='flex flex-col justify-center items-cente pb-5 min-h-[80%]'>
          <MonacoEditor setCode={setCode} value={code} />
        </main>

        {/* Action Buttons */}
        <footer className='flex justify-between items-center px-8 action-btns'>
          <div className='flex gap-2'>
            <LanguageSelectBtn />
            <ThemeSelectionBtn />
          </div>
          <div className='flex gap-2'>
            <CopyButton buttonLable={"Copy"} code={code} />
            <ShareButton buttonLable={"Share"} />
          </div>
        </footer>
      </div>
}