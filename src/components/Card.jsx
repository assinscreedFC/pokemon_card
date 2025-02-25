import useSWR from 'swr'
import { useEffect } from 'react';
import useAudioPlayer from './hook/useAudioPlayer.js';

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Card({val,onDataSend } ) {
    const { data, error, isLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon/${val}/` , fetcher);
    const { play, pause, isPlaying } = useAudioPlayer(["./assets/pokemon-a-button.mp3"]);
    
    
      if (isLoading) {
        return (
          <div className="w-44 cursor-pointer min-h-40 p-4 bg-black/50 flex flex-col justify-center items-center group overflow-hidden relative">
            <img src="./assets/giphy.webp" alt="Loading..." className="z-10 h-full w-full transition-all duration-300 ease-in-out" />
          </div>
        );
      }

    if(error){
        return console.log(error);
    }

    const Send=()=>{
        
        onDataSend(data.id);
        play();
    }
    console.log(data);
    console.log(error);
 
    return(
        
        <div className="w-44 sm:w-32 cursor-pointer min-h-40 p-4  bg-black/50 flex flex-col justify-center items-center  group overflow-hidden relative" onClick={Send}>

        <img src={data.sprites.front_default} alt="card" className="z-10   h-full w-full transition-all duration-300 ease-in-out "/>
         <p className="  text-white ">{data.name}</p>
        </div>
    )
}
export default Card