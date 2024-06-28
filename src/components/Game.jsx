import NavBar from "./NavBar.jsx"
import useSWR from 'swr'
import { useEffect, useState } from "react";
import getRandomNumberInRange from "./hook/getRRandomNumbeInRange.js";
import Card from "./Card.jsx";
const fetcher = (...args) => fetch(...args).then(res => res.json())
function Game() {
   

  
    const fonc=()=>{
         
        return data;   
    }
    // useEffect(() => {
    //     const fetchRandomPokemon = async () => {
    //       let tabb = [];
    //       for (let index = 0; index < 5; index++) {
    //         const rand = getRandomNumberInRange(1, 130);
    //         const { data, error } = await useSWR(`https://pokeapi.co/api/v2/pokemon/40/`, fetcher);
    //         if (error) {
    //           console.error(`Failed to fetch Pokemon ${rand}:`, error);
    //         } else {
    //           tabb.push(data);
    //         }console.log(data);
    //       }
          
    //       settab(tabb);
    //     };
    
    //     fetchRandomPokemon();
    //   }, []);
     
      let tabb=[];
      for(let i=0;i<5;i++){
        const rand = getRandomNumberInRange(1, 130);
        tabb.push(<Card val={rand}/>);
    }

   
   



// group-hover:h-40 group-hover:w-40

    return(
        <>
    <div className="flex flex-col  content-start">  <NavBar/></div>
    <div className="  w-full flex flex-wrap justify-center items-center gap-10 px-4">
    
    
    {tabb}
    
    
   

  
  
  
  
 
    </div>
     
          

        </>
    )
}



export default Game