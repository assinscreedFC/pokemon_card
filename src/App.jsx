import { useState,useEffect } from 'react'
import Aceuille from './components/Aceuille.jsx'

import './App.css'
import useAudioPlayer from './components/hook/useAudioPlayer.js'
// flex justify-center items-center
function App() {
  const {play,pause}=useAudioPlayer("./assets/opening.mp3",true)
  
   
    
  
  
  const [sound,setSound]=useState(true)
  const handlechange=()=>{
    setSound(!sound);
    play();
    pause();
  }
  return (
    <>
   
    <div className="zdefir max-w-svh min-h-svh bg-cover bg-fixed bg-center cursor-custom ">
      {!sound ?
        <div className=' w-12  h-12 absolute z-50 m-4 bg-white rounded-[50%] flex justify-center items-center cursor-pointer ' onClick={handlechange}> <img src="./music-on.png" className='w-5 bg-white cursor-pointer' alt="" /></div>
      :
      <div className=' w-12  h-12 absolute z-50 m-4 bg-white rounded-[50%] flex justify-center items-center cursor-pointer ' onClick={handlechange}> <img src="./music-off.png" className='w-5 bg-white cursor-pointer' alt="" /></div>
      } 
       
     <Aceuille/>
    </div>
    </>
  )
}

export default App
