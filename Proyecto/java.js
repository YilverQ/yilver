

function info_person() {
	document.getElementById("contenido").innerHTML = " <h2>Informácion Personal</h2> <p>Mi nombre es Vanessa Alexandra Longa Otero, tengo 18 años y vivo en Caracas</p> <p>Nací aquí en Caracas el 06/12/2001, no me acuerdo a que hora y tampoco te interesa xD</p> <p>C.I 27.914.751</p> <p>Soltera(Así es baby ;3)</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br>";
}

function familia() {
	document.getElementById('contenido').innerHTML = " <h2>Mi Familia</h2> <p>Tengo a mis dos padres y dos hermanos... <p>Mi mamá: Jannet Otero</p> <p>Mi papá: Carlos Longa </p> <p>Un hermano mayor: Carlos Longa </p> <p>Y una hermana menor: Genesis Longa <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
}

function gustos() {
	document.getElementById('contenido').innerHTML = "<h2>Gustos</h2> <p>Me gusta el Futbol, los videojuegos, el anime, series, peliculas y la música.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br>"
}

function hobbys(argument) {
	document.getElementById('contenido').innerHTML = "<h2>Pasatiempos</h2> <p>Estudio en la mañana de 7:30am a 12pm, en la tarde voy al Gym y el resto lo que se me de la gana.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br>"
}



$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('header').addClass('header2');
		} else {
			$('header').removeClass('header2');
		}
	});

});

$('.carousel').carousel({
  interval: 2000
});