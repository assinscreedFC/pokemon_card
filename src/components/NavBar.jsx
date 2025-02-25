import useLocalStorage from "./hook/LocalStorageHook.js";

function NavBar({score ,nbr}) {
    const { getStoredValue, setStoredValue, removeStoredValue } =useLocalStorage();
    const scoreValue = getStoredValue("max");

    return(
        <>
            <nav className="w-full flex flex-col justify-center items-center p-4 gap-4">
                <div className="flex justify-center items-center gap-2">
                    <img src="./pokeball.png" alt="pkeballl" className="w-13"></img>
                  <div className="flex text-2xl justify-center items-center">
                    <span className=" text-[#ff1616]">Poké</span>
                    <span className="text-[#ffffff]">Memo</span>
                </div>  
              </div>
              <div>
                    <h2>SCORE: {score} HIGH SCORE: {scoreValue}</h2>
                </div>
                <div className=" mt-4"><h2>{score}/{nbr}</h2></div>
            </nav>
        </>
    )
}
export default NavBar