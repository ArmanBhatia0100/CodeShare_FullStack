import './App.css'
import React from 'react'
import logo from './assets/images/NoteCodeLogo.svg'
import EditorContainer from './components/editor/EditorContainer'

function App() {

  return (
    <React.Fragment>
      <div className={`min-h-[100vh] min-w-screen bg-[url(src/assets/images/Hero-Background-notecode@2x.png)] bg-cover bg-no-repeat pt-2`}>
        
        {/* Header */}
        <div className="flex flex-col justify-between items-center pb-4 header">
          <img src={logo} alt="logo" className='w-40 h-20' />
          <h3 className='font-bold text-xl'>Create & Share</h3>
          <h1 className='font-bold text-2xl'>Code with the world</h1>
        </div>

        {/* Editor */}
        <EditorContainer />
      </div>
    </React.Fragment>
  )
}

export default App
