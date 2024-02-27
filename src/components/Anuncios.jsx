import { useEffect, useState } from "react";
import BarraBusqueda from "./BarraBusqueda";
import { URL_SERVER } from "../variable/ip";

export default function Anuncios(){
    const [filter,setFilter]=useState("");
    const [articulosDisponibles,setArticulosDisponibles]=useState([])

    useEffect(()=>{
        fetch(URL_SERVER+"anuncios/?subject_like="+filter)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else throw new Error("No se pudieron traer")
        })
        .then(data=>{
            setArticulosDisponibles(data)
        })
        .catch(error=>{
            throw new Error (error)
        })
    },[filter])
    return(
        <>
        <h1>Anuncios publicados</h1>
        <BarraBusqueda filter={filter} setFilter={setFilter}/>
        {articulosDisponibles.map(anuncio=>(
            <ul key={anuncio.id}>
                <li>Asunto:{anuncio.subject} Anunciante:{anuncio.anunciante} Texto:{anuncio.texto} Fecha Publicacion:{anuncio.fecha_publicacion}</li>
            </ul>
        ))}


        </>
    )
}