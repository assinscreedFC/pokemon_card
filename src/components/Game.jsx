import NavBar from "./NavBar.jsx"
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())
function Game() {
    const { data, error, isLoading } = useSWR(' https://pokeapi.co/api/v2/pokemon/35/', fetcher);
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    let inf=data.sprites.front_default;
    console.log(inf);




    return(
        <>
    <div className="flex flex-col  content-start">  <NavBar/></div>
    <div className=" w-full flex flex-wrap justify-center items-center gap-10">
    <div className="w-40 min-h-40  group overflow-hidden relative">
        <img src="./card-back.png" alt="card" className="absolute inset-0 z-10  opacity-50 h-full w-full transition-all duration-300 ease-in-out group-hover:h-40 group-hover:w-40"/>
    </div>
        <p className=" absolute bottom-0 z-20 p-4">afewwwfefefefefefefefefeffefefefenis</p>
  
  
  
 
    </div>
     
          

        </>
    )
}



export default Game