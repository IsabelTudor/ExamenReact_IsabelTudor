import { useState } from "react"
import {URL_SERVER} from "../../variable/ip"
export default function InicioSesion({setClickRegistro,setIsUsuario}){
    const [usuario,setUsuario]=useState("")
    const [password,setPassword]=useState("")
    function iniciaSesion(){
            fetch(URL_SERVER+"usuarios/?username="+usuario)
            .then(response=>{
                if(response.ok){
                    return response.json();
                }else throw new Error("Problemas con la red")
            })
            .then(data=>{
                if(data.length===1){
                    if(data[0].password===password){  
                        console.log(data[0]); 
                     setIsUsuario(usuario)
                }else{
                     alert("Contraseña incorrecta")
                }
            }else{
                alert ("Mas de un usuario con el mismo usuario")
            }
                
            })
            .catch(error=>{
                throw new Error("Error en el inicio de sesion")
            })
            
        }
    
    return(
        <>
        <h1>Inicio sesion</h1>
            <label>Nombre Usuario:</label>
            <input type="text" value={usuario} onChange={(e)=>setUsuario(e.target.value)}></input>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={()=>iniciaSesion()}>Iniciar sesión</button>
            <button onClick={()=>{
                setUsuario("")
                setPassword("")
                setClickRegistro(true)
            }}>Registrar nuevo usuario</button>
        </>
    )
        }