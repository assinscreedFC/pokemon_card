import { useState } from 'react'
import Aceuille from './components/Aceuille.jsx'
import './App.css'
import Game from './components/Game.jsx'
// flex justify-center items-center
function App() {

  return (
    <>
    <div className=' w-9 float-start m-4 bg-white rounded-[50%] flex justify-center items-center '> <img src="./music-on.png" className='w-5' alt="" /></div>
    <div className="bg-poke max-w-svh min-h-svh bg-cover bg-fixed bg-center cursor-custom ">
      
     <Aceuille/>
    </div>
    </>
  )
}

export default App
