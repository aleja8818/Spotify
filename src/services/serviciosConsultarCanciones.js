let URI="https://api.spotify.com/v1/artists/13JJKrUewC1CJYmIDXQNoH/top-tracks?market=US";
let buscar=document.getElementById("buscar")
buscar.addEventListener("click",function(evento){
    evento.preventDefault()
    let artista=document.getElementById("artista").value 
    console.log(artista)
    URI=`https://api.spotify.com/v1/artists/${artista}/top-tracks?market=US`
    const TOKEN="Bearer BQDFFYSs3s6QGMk52knQPY_V3XZlAEGjDjpnj_JAQVpPdtrH9VMW6T9wAuqO4sG1wUOBItTk1EnB2bkz0GHTttOlPoz5BpaUDaEgIP0pZa3kVI9Q0F2qIQLz__Fp488DMlowTIN1bAMBjkOayNj4vPcNYPfWWSmjT_ixJAvCVq0"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN},
    }
    fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json() //garantizo formato json
})
.then(function(respuesta){
    console.log(respuesta) //hago lo que quiera con respuesta
    console.log(respuesta.tracks) //accedo a un atributo de la respuesta

    //recorrer ese arreglo 
    let fila = document.getElementById("fila")
    fila.innerHTML=""
    respuesta.tracks.forEach(function(cancion){
        /*console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)
        console.log(cancion.popularity)
        console.log(cancion.album.name)
        console.log(cancion.album.release_date)*/
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
    })
   
.catch(function(respuestaError){
    console.log(respuestaError)
})
})


//RECETAS PARA CONSUMIR APIS CON JS PURO

//1. si yo quiero consumir un API 
//debo saber para donde debo ir y a que servicio
//debo configurar la uri


//2.configuro datos especiales o de control en el servidor 


//3.configuro la peticion
//nota: solo post y put configuran body
//para js la peticion es un objeto


//4. ARRANQUE PUES MIJO
//consuma el API 
