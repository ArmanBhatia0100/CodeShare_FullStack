import './App.css'
import React, { useState } from 'react'
import logo from './assets/images/NoteCodeLogo.svg'
import LanguageSelectBtn from './components/LanguageSelectBtn'
import ThemeSelectionBtn from './components/ThemeSelectionBtn'
import CopyButton from './components/CopyButton'
import ShareButton from './components/ShareButton'
import MonacoEditor from './components/monaco-editor/MonacoEditor'
import defaultHTMLCode from './components/monaco-editor/defaultHTMLCode'
import { useThemeStore } from './store/themeStore'



function App() {
  const [code, setCode] = useState(defaultHTMLCode);
  const { theme } = useThemeStore();


  return (
    <React.Fragment>
      <div className={`min-h-[100vh] min-w-screen bg-[url(src/assets/images/Hero-Background-notecode@2x.png)] bg-cover bg-no-repeat pt-2`}>
        {/* Header */}
        <div className="flex flex-col justify-between items-center pb-4 header">
          <img src={logo} alt="logo" className='w-40 h-20' />
          <h3 className='font-bold text-xl'>Create & Share</h3>
          <h1 className='font-bold text-2xl'>Code with the world</h1>
        </div>
        ~
        {/* Editor */}
        <div className={`${theme == "vs"?"bg-white":"bg-[#1e1e1e]"} shadow-2xl m-auto mb-10 py-4 rounded-lg rounded-l-lg min-w-[80vw] max-w-[70vw] min-h-96 editor`}>
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

      </div>
    </React.Fragment>
  )
}

export default App
