export function pintarCanciones(canciones){

    let fila = document.getElementById("fila")
    fila.innerHTML=""

    canciones.tracks.forEach(function(cancion){
 
        let columna =document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow","m-2")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let foto=document.createElement("img")
        foto.classList.add("card","w-100","h-100")
        foto.src=cancion.album.images[0].url

        let nombre=document.createElement("h2")
        nombre.classList.add("text-center")
        nombre.textContent=cancion.name

        let popularidad=document.createElement("h5")
        popularidad.classList.add("text-center")
        popularidad.textContent=cancion.popularity
        

        //padres e hijos
        tarjeta.appendChild(popularidad)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(foto)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })

}