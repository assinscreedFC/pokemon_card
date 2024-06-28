import useSWR from 'swr'
import { useEffect } from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Card({val,onDataSend } ) {
    const { data, error, isLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon/${val}/` , fetcher);
    
    
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
    }
    console.log(data);
    console.log(error);
 
    return(
        <div className="w-44 cursor-pointer min-h-40 p-4  bg-black/50 flex flex-col justify-center items-center  group overflow-hidden relative" onClick={Send}>
        <img src={data.sprites.front_default} alt="card" className="z-10   h-full w-full transition-all duration-300 ease-in-out "/>
         <p className="  text-white ">{data.name}</p>
        </div>
    )
}
export default Card