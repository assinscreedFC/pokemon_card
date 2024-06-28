import NavBar from "./NavBar.jsx"
import useSWR from 'swr'
import { useEffect, useState } from "react";
import getRandomNumberInRange from "./hook/getRRandomNumbeInRange.js";
import Card from "./Card.jsx";
import { data } from "autoprefixer";
const fetcher = (...args) => fetch(...args).then(res => res.json())
function Game({onDataSend ,nombre}) {
   


    const [cards, setCards] = useState([])
    // const [info,setinfo]=useState(); 
    const [poke,setpoke]=useState([]);
    const [click,setclick]=useState([]);
    const [etat,setetat]=useState(true);
    const handeldata=(dta)=>{
        let copy=[...click];
        console.log(dta);
        console.log(copy.includes(dta))
        console.log(copy);
        

        if(copy.includes(dta)){
           setetat(false);
        }else{
            
           copy.push(dta);
           setclick( copy);
        }
            
    }
    useEffect(()=>{
        let tabou=[];
        let tabb=[];
        let rand ;

        for (let index = 0; index < nombre; index++) { 
        do{
           rand = getRandomNumberInRange(0, nombre-1);
        }while(tabou.includes(rand))
            tabou.push(rand);
            console.log(poke[1])
            tabb.push(<Card val={poke[rand]} onDataSend={handeldata} key={index}/>);
            
        }
        setCards(tabb);
        setclick(click);
        
       

    },[click])
    
    useEffect(()=>{
     
      let tabb=[];
      let ceveau=[];
      let rand; 
      for(let i=0;i<nombre;i++){
        do{ 
          rand  = getRandomNumberInRange(1, 130);
        } while(ceveau.includes(rand))
            ceveau.push(rand);
       
        tabb.push(<Card val={rand} onDataSend={handeldata} key={i}/>);
        console.log("anisd");
    }
    setCards(tabb);
    setpoke(ceveau);
    },[])

    const aceuille=()=>{
        onDataSend(true);
    }   
   



// group-hover:h-40 group-hover:w-40

    return(
        <>
    <div className="flex flex-col  content-start">  <NavBar score={click.length} nbr={nombre}/></div>
    <div className="  w-full flex flex-wrap justify-center items-center gap-10 px-4">
    
    {etat ? cards : <div className=" w-full min-h-svh inset-0 absolute  bg-black/40 flex justify-center items-center">
             <div className="min-h-full  flex justify-center items-center  ">
            
            <div className=" w-full mx-20  modal-content p-8 flex flex-col  justify-center items-start gap-3 ">
                <h1 className=" ">Game Overr !!!</h1>
                <div className=" font-custom mx-4 text-lg flex flex-col gap-1">
                    <p className=" cursor-pointer"></p>
                    <p className=" cursor-pointer" onClick={aceuille}>Acueille</p>
                    <p className=" cursor-pointer">Retry</p>
                </div>
                

                <h3 className=" font-custom mx-4 text-lg cursor-pointer"><a href="https://github.com/assinscreedFC" target="_blank" className="cursor-pointer">GITHUB REPO</a></h3>

            </div>
            
            </div>
        </div>}
    
    
    
   

  
  
  
  
 
    </div>
     
          

        </>
    )
}



export default Game