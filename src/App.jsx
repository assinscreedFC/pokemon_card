import { useState } from 'react'
import Aceuille from './components/Aceuille.jsx'
import './App.css'
import Game from './components/Game.jsx'
// flex justify-center items-center
function App() {

  return (
    <>
   
    <div className="bg-poke max-w-svh min-h-svh bg-cover bg-fixed bg-center cursor-custom ">
       {/* <div className=' w-12  h-12 absolute z-50 m-4 bg-white rounded-[50%] flex justify-center items-center cursor-pointer '> <img src="./music-on.png" className='w-5 bg-white cursor-pointer' alt="" /></div> */}
     <Aceuille/>
    </div>
    </>
  )
}

export default App
