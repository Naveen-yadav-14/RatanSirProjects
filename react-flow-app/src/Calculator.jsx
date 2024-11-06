import { useRef } from "react";

function Calculator(){

    const num1 = useRef(null)
    const num2 = useRef(null)
    const total = useRef(null);
    const selectRef = useRef(null)

    const handleAction = ()=>{
        const n1 = parseInt(num1.current.value)
        const n2 = parseInt(num2.current.value)

        const selectedOption = selectRef.current.value

        let result;
        switch(selectedOption){
            case "add":
                result = n1+n2
                break
            case "subtract":
                result=n1-n2;
                break
            case "mul":
                result=n1*n2;
                break
            case "div":
                result = n2==0?0:n1/n2;
                break
            default:
                result="please select defalult"
        }

        total.current.value=result;
        
    }

    const handleReset = ()=>{
        num1.current.value="";
        num2.current.value="";
        total.current.value="";
    }

    return(
        <>
        <h2>Calculator</h2>
        <input ref={num1} type="number" placeholder="Enter first number"/>
        <input ref={num2} type="number" placeholder="Enter second number"/>
        <br></br>
        <select ref={selectRef} onClick={handleAction}>
            <option value={""}>select option</option>
            <option value={"add"}>Add</option>
            <option value={"subtract"}>Subtract</option>
            <option value={"mul"}>Multiply</option>
            <option value={"div"}>Divide</option>
        </select>
        <br></br>
        <input ref={total} type="text" placeholder="result"/>
        <br></br>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default Calculator;