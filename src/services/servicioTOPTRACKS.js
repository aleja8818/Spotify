
export async function consultarCanciones(URI,PETICION){

    let respuesta = await fetch(URI,PETICION)
    let canciones = await respuesta.json()
    return(canciones)
    
    


}