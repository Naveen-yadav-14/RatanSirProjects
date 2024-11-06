import { useRef } from "react";

function Marks()
{
    const science = useRef(null)
    const maths = useRef(null)
    const social = useRef(null)

    const total = useRef(null)
    const avg = useRef(null)

    const handleTotal = ()=>{
        const num1 = parseInt(science.current.value)
        const num2 = parseInt(maths.current.value)
        const num3 = parseInt(social.current.value)

        const totalValue=num1+num2+num3
        total.current.value = totalValue
        avg.current.value = totalValue/3;
    }

    return(
        <>
        <h2>Student Marks</h2>
        <input ref={science} type="number" placeholder="Enter science marks" ></input>
        <br></br>
        <input ref={maths} type="number" placeholder="Enter maths marks"></input>
        <br></br>
        <input ref={social} type="number" placeholder="Enter social marks"></input>
        <br></br>
        <button onClick={handleTotal}>submit</button>
        <br></br>
        <p>Total marks</p>
        <input ref={total} type="text" placeholder="total"></input>
        <p>Average Marks</p>
        <input ref={avg} type="text" placeholder="average"></input>
        </>
    )
}
export default Marks;