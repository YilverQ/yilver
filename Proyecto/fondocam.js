$( function(){
    var arrImagenes = [ 'fondo1.jpg','fondo2.jpg', 'fondo3.jpg', 'fondo4.jpg' ];
    var imagenActual = 'fondo1.jpg';
    var tiempo = 3000;
    var id_contenedor = 'main-wrap'
    setInterval( function(){
        do{
            var randImage = arrImagenes[Math.ceil(Math.random()*(arrImagenes.length-1))];
        }while( randImage == imagenActual )
        imagenActual = randImage;
        cambiarImagenFondo(imagenActual, id_contenedor);
    }, tiempo)
})
 
function cambiarImagenFondo(nuevaImagen, contenedor){
    var contenedor = $('#' + contenedor);
    //cargar imagen primero
    var tempImagen = new Image();
    $(tempImagen).load( function(){
        contenedor.css('backgroundImage', 'url('+tempImagen.src+')');
    });
    tempImagen.src = 'img/' + nuevaImagen;
}