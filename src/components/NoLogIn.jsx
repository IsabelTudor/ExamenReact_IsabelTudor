import { useState } from "react"
import InicioSesion from "./NoLogInComponents/InicioSesion"
import Registrar from "./NoLogInComponents/Registrar"
import Anuncios from "./Anuncios"


export default function NoLogIn({setIsUsuario}){
    
    const [clickRegistro,setClickRegistro]=useState(false)
  
    return(
        <>
        {clickRegistro?
        <Registrar setIsUsuario={setIsUsuario} setClickRegistro={setClickRegistro}/>:
        <InicioSesion setClickRegistro={setClickRegistro} setIsUsuario={setIsUsuario}/>}
        <Anuncios/>

        </>
    )
}