import { useRef } from "react";

function Login(){

    const userName= useRef(null)
    const password = useRef(null)

    const handleLogin=()=>{
        const name = userName.current.value;
        const pass = password.current.value

        if(name==='Ratan'&&pass==='Ratan@123')
        {
            alert("Login Successfull")
        }
        else{
            alert("username or password incorrect")
        }
    }


    return(
        <>
        <h2>Login</h2>
        <input ref={userName} type="text" placeholder="Enter user name"/>
        <br></br>
        <input ref={password} type="password" placeholder="enter password"/>
        <br></br>
        <button onClick={handleLogin}>submit</button>
        </>
    )
}
export default Login;