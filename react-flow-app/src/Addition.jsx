import { useRef } from "react";

function Addition(){

    const num1Ref=useRef(null)
    const num2Ref = useRef(null)
    const resultRef = useRef(null)

    const handelAddition = ()=>{
        const num1 = parseInt(num1Ref.current.value)
        const num2 = parseInt(num2Ref.current.value);

        const sum= num1+num2;
        resultRef.current.value = sum;
       
    }
    

    

    return(
        <>
        <h2>Addition of two numbers</h2>
        <input ref={num1Ref} type="number" placeholder="Enter first number"></input>
        <input ref={num2Ref} type="number" placeholder="Enter second number"></input>
        <button onClick={handelAddition}>Add</button>
        <input ref={resultRef} type="text" placeholder="result" readOnly></input>
        </>
    )
}
export default Addition;