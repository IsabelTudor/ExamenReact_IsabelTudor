export default function BarraBusqueda({filter,setFilter}){
    return(
        <>
        <form>
            <input type="text" placeholder="Buscar anuncio por asunto" value={filter} onChange={(e)=>setFilter(e.target.value)}></input>
        </form>
        </>
    )
}