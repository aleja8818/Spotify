import {generarURI} from '../helpers/generarURI.js'
import{consultarCanciones} from "../services/servicioTOPTRACKS.js"
import{PETICION} from "../helpers/constantesGET.js"
import{pintarCanciones} from "./controladorPintarCanciones.js"

let buscar=document.getElementById("buscar")
buscar.addEventListener("click",function(evento){
evento.preventDefault()

//obtengo el id del artista que busca el usuario
let idArtistaSeleccionado=document.getElementById("artista").value
let uri=generarURI(idArtistaSeleccionado) 

//llamando al servicio(asincrono) desde el controlador
consultarCanciones(uri,PETICION)
.then(function(canciones){
  pintarCanciones(canciones)
})


})