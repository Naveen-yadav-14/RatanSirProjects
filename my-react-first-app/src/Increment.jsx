import { useState } from "react"

function Increment(){

    const[count,setCount] = useState(0)
    const increment =()=>{
        setCount(count+1)
    }

    const decrement = ()=>{
        setCount(count-1)
    }

    return(
        <>
        <h1>counter value is:{count}</h1>
        <button style={{color:"green"}} onClick={increment}>+1</button>
        <button style={{color:"red"}} onClick={decrement}>-1</button>
        </>
    )

}
export default Increment;