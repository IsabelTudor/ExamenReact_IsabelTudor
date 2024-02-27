import InsercionAnuncios from "./InsercionAnuncios"

export default function LogIn({isUsuario,setIsUsuario}){
    function cerrarSesion(){
        setIsUsuario(null)
    }
    return(
        <>
        <h1>Bienvenid@ {isUsuario} </h1>
        <button onClick={()=>{cerrarSesion()}}>Cerrar Sesion</button>
        <InsercionAnuncios isUsuario={isUsuario}/>
        </>
    )
}