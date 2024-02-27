import { URL_SERVER } from "../../variable/ip"
import { useState } from "react"
export default function Registrar({setIsUsuario,setClickRegistro}){
    const [nombre,setNombre]=useState("")
    const [apellidos,setApellidos]=useState("")
    const [usuario,setUsuario]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [repassword,setRepassword]=useState("")

    function registrar(){
        if(password===repassword){
            fetch(URL_SERVER+"usuarios/",{
            method: "POST",
            body: JSON.stringify({
                nombre:nombre,
                apellidos:apellidos,
                username: usuario,
                email:email,
               password: password
                }),
            headers: {
                     "Content-Type": "application/json",
                },
        })
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{
                throw new Error("Problemas en la red")
            }
        })
        .then(data=>{
            setIsUsuario(usuario)
        })
        }else{
            alert("Las contraseñas son distintas")
            document.getElementById("repa").focus()
        }
    }
    return (
        <>
        <h1>Registrar</h1>

            <label>Nombre</label>
            <input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)}></input>
            <br></br>
            <label>Apellidos</label>
            <input type="text" value={apellidos} onChange={(e)=>setApellidos(e.target.value)}></input>
            <br></br>
            <label>Usuario</label>
            <input type="text" value={usuario} onChange={(e)=>setUsuario(e.target.value)}></input>
            <br></br>
            <label>Email</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <br></br>
            <label>Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <br></br>
            <label>Repetir Password</label>
            <input type="password" id="repa" value={repassword} onChange={(e)=>setRepassword(e.target.value)}></input>
            <br/>
            <button onClick={()=>registrar()}>Registrar usuario</button>
            <button onClick={()=>{
                setNombre("")
                setApellidos("")
                setUsuario("")
                setEmail("")
                setPassword("")
                setRepassword("")
                setClickRegistro(false)
            }}>Volver a inicio sesion</button>
        </>
    )
}