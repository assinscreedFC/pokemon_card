
function Aceuille(){
    return(
        <>
        <div className=" w-full fixed  bg-black/40 flex justify-center items-center">
             <div className="h-svh  flex justify-center items-center  ">
            
            <div className=" w-full mx-20  modal-content p-8 flex flex-col  justify-center items-start gap-3 ">
                <h1 className=" cursor-pointer">Select a difficulty level</h1>
                <div className=" font-custom mx-4 text-lg flex flex-col gap-1">
                    <p className=" cursor-pointer">esay</p>
                    <p className=" cursor-pointer">medieum</p>
                    <p className=" cursor-pointer">hard</p>
                </div>
                

                <h3 className=" font-custom mx-4 text-lg cursor-pointer">GITHUB REPO</h3>

            </div>
            
            </div>
        </div>
           
        
        </>
    )
}

export default Aceuille