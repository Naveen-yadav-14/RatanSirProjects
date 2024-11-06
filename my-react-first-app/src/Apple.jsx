import { useState } from "react";

function Apple(){

    const[Apples,setApples] = useState(0)

    return(
        <>
        <h1>Number of Apples:{Apples}</h1>
        <p>{Apples===0?"no apples are present":"great you have some apples"}</p>
        <button onClick={()=>{setApples(Apples+1)}}>add apple</button>
        <button onClick={()=>{Apples>0&&setApples(Apples-1)}}>remove apple</button>
        <button onClick={()=>setApples(0)}>reset</button>
        </>
    )
}
export default Apple;