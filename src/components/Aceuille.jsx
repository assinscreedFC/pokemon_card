
import { useState } from "react";
import Game from "./Game.jsx";
import useAudioPlayer from './hook/useAudioPlayer.js'


function Aceuille(){
    const audioSources = [
        './assets/opening.mp3',
        './assets/startup.mp3',
        './assets/victory.mp3'
      ];
      const { isPlaying, currentIndex, play, pause, stop, playNext, playPrevious, playByIndex, setNextTrack } = useAudioPlayer(audioSources);
    const [val,setval]=useState(0);
    const [etat,setetat]=useState(true);

const handeldata=()=>{
    setetat(true);
}
const handlegame=(valeur)=>{
    setval(valeur);
    setetat(false);
    playByIndex(1);
    setNextTrack(0);
    
}
  
   
    
  
  
  const [sound,setSound]=useState(true)
  const handlechange=()=>{
    setSound(!sound);
    playByIndex(0);
    pause();
  }


    return(
        <>

{!sound ?
        <div className=' w-12  h-12 absolute z-50 m-4 bg-white rounded-[50%] flex justify-center items-center cursor-pointer ' onClick={handlechange} > <img src="./music-on.png" className='w-5 bg-white cursor-pointer' alt="" /></div>
      :
      <div className=' w-12  h-12 absolute z-50 m-4 bg-white rounded-[50%] flex justify-center items-center cursor-pointer ' onClick={handlechange}> <img src="./music-off.png" className='w-5 bg-white cursor-pointer' alt="" /></div> 
      } 
        {etat ?  <div className=" w-full fixed  bg-black/40 flex justify-center items-center">
             <div className="h-svh  flex justify-center items-center  ">
            
            <div className=" w-full mx-20  modal-content p-8 flex flex-col  justify-center items-start gap-3 ">
                <h1 className=" cursor-pointer">Select a difficulty level</h1>
                <div className=" izan mx-4 text-lg flex flex-col gap-1">
                    <p className=" cursor-pointer" onClick={()=> handlegame(5)} >esay</p>
                    <p className=" cursor-pointer" onClick={()=> handlegame(7)} >medieum</p>
                    <p className=" cursor-pointer" onClick={()=> handlegame(10)} >hard</p>
                </div>
                

                <h3 className="izan mx-4 text-lg cursor-pointer">
            <a
              href="https://github.com/assinscreedFC"
              target="_blank"
              className="cursor-pointer"
            >
              GITHUB REPO
            </a>
          </h3>

            </div>
            
            </div>
        </div> : <Game onDataSend={handeldata} nombre={val} 
            onPlay={play}
            onPause={pause}
            onStop={stop}
            onNext={playNext}
            onPrevious={playPrevious}
            onPlayByIndex={playByIndex}
            onSetNextTrack={setNextTrack}
            isPlaying={isPlaying}
            currentTrack={audioSources[currentIndex]}
        
        />

        }
        
           
        
        </>
    )
}

export default Aceuille