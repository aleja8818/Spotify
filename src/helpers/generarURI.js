export function generarURI(idArtista){
    
    let URI=`https://api.spotify.com/v1/artists/${idArtista}/top-tracks?market=US`
   
    return URI

}