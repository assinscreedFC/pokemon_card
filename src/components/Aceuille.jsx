
import { useState } from "react";
import Game from "./Game.jsx"

function Aceuille(){
    const [val,setval]=useState(0);
    const [etat,setetat]=useState(true);

const handeldata=()=>{
    setetat(true);
}
const handlegame=(valeur)=>{
    setval(valeur);
    setetat(false);
}


    return(
        <>
        {etat ?  <div className=" w-full fixed  bg-black/40 flex justify-center items-center">
             <div className="h-svh  flex justify-center items-center  ">
            
            <div className=" w-full mx-20  modal-content p-8 flex flex-col  justify-center items-start gap-3 ">
                <h1 className=" cursor-pointer">Select a difficulty level</h1>
                <div className=" izan mx-4 text-lg flex flex-col gap-1">
                    <p className=" cursor-pointer" onClick={()=> handlegame(5)}>esay</p>
                    <p className=" cursor-pointer" onClick={()=> handlegame(7)}>medieum</p>
                    <p className=" cursor-pointer" onClick={()=> handlegame(10)}>hard</p>
                </div>
                

                <h3 className=" izan mx-4 text-lg cursor-pointer">GITHUB REPO</h3>

            </div>
            
            </div>
        </div> : <Game onDataSend={handeldata} nombre={val}/>

        }
        
           
        
        </>
    )
}

export default Aceuille