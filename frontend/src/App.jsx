import './App.css'
import React from 'react'
import logo from './assets/images/NoteCodeLogo.svg'
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
      <div className="editor">
        <h1>Editor</h1>
      </div>

     </div>
    </React.Fragment>
  )
}

export default App
