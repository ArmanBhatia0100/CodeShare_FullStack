import './App.css'
import React from 'react'
import logo from './assets/images/NoteCodeLogo.svg'
import LanguageSelectBtn from './components/LanguageSelectBtn'
import CopyButton from './components/CopyButton'
import ShareButton from './components/ShareButton'
function App() {


  return (
    <React.Fragment>
      <div className={`min-h-[100vh] min-w-screen bg-[url(src/assets/images/Hero-Background-notecode@2x.png)] bg-cover bg-no-repeat pt-2`}>
      {/* Header */}
      <div className="header flex flex-col items-center justify-between pb-4">
        <img src={logo} alt="logo" className='w-40 h-20' />
        <h3 className=' text-xl font-bold'>Create & Share</h3>
        <h1 className='text-2xl font-bold'>Code with the world</h1>
      </div>

      {/* Editor */}
      <div className="editor  bg-red-300 mb-10 min-h-80 max-w-[70vw] min-w-[80vw] rounded-lg m-auto">
        <main className='flex flex-col justify-center items-cente min-h-[80%] h-96'>
          <div className="editor-container ">Editor</div>
        </main>
        <footer className='action-btns flex justify-between items-center px-8'>
          <div className='flex gap-2'>
            <LanguageSelectBtn  options={["Html", "Css", "Javascript"]}/>
            <LanguageSelectBtn  options={["Dark", "Light"]}/></div>
          <div className='flex gap-2'>
            <CopyButton buttonLable={"Copy"}/>
          <ShareButton buttonLable={"Share"}/>
          </div>
        </footer>
      </div>

     </div>
    </React.Fragment>
  )
}

export default App
