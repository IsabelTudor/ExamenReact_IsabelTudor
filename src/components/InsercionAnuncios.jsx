import { useState } from "react"
import { URL_SERVER } from "../variable/ip"

export default function InsercionAnuncios({isUsuario}){
    const [asunto,setAsunto]=useState("")
    const [texto,setTexto]=useState("")
    const [anunciosAnunciante,setAnunciosAnunciante]=useState([])
    const fecha=new Date
    const ahora=fecha.toLocaleString()
    function publicarAnuncio(){
        fetch(URL_SERVER+"anuncios/",{
            method: "POST",
            body: JSON.stringify({
                subject:asunto,
                anunciante:isUsuario,
                texto: texto,
                fecha_publicacion:ahora
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
            recargar()
        })
        .catch(error=>{
            throw new Error(error)
        })
        
    }
    function recargar(){
        fetch(URL_SERVER+"anuncios/?anunciante="+isUsuario)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else throw new Error ("No hay conexión de red")
        })
        .then(data=>{
            setAnunciosAnunciante(data)
        })
        .catch(error=>{
            throw new Error(error)
        })
    }
    function eliminar(anuncio){
        const fecha=new Date
        const ahora=fecha.toLocaleString()
        fetch(URL_SERVER+"anuncios/"+anuncio.id,{
            method: "DELETE",
            body: JSON.stringify({
                subject:asunto,
                anunciante:isUsuario,
                texto: texto,
                fecha_publicacion:ahora
                }),
                headers: {
                     "Content-Type": "application/json",
                },
        })
        .then(response=>{
            if(response.ok){
                return response.json();
            }else throw new Error ("No hay conexión a la red")
        })
        .then(data=>{
            recargar()
        })
        .catch(error=>{
            throw new Error(error)
        })
    }
    
    return(
        <>
        <h1>Añadir Nuevo Anuncio</h1>
        <h2>Anuncios:{isUsuario}</h2>
       
            <label>Asunto:</label>
            <input type="text" value={asunto} onChange={(e)=>{setAsunto(e.target.value)}}></input>
            <label>Texto:</label>
            <input type="text" value={texto} onChange={(e)=>{setTexto(e.target.value)}}></input>
            <button onClick={()=>publicarAnuncio()}>Publicar Anuncio</button>
            {anunciosAnunciante.map(anuncio=>(
            <ul key={anuncio.id}>
                <li>Asunto:{anuncio.subject} Anunciante:{anuncio.anunciante} Texto:{anuncio.texto} Fecha Publicacion:{anuncio.fecha_publicacion}<button onClick={()=>eliminar(anuncio)}>Eliminar Anuncio</button></li>
            </ul>
        ))}
        </>

    )
}