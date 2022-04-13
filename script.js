//Efecto Scroll
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop()>350){
			$('nav').addClass('header2');
			$('nav li').addClass('color');
			$('#Ir').slideDown();
		}
		else{
			$('nav').removeClass('header2');
			$('nav li').removeClass('color');
			$('#Ir').slideUp();
		}
	});
});

/*Efecto Scroll*/
$(document).ready(function() {
	$('#sobreMi').click(function(){
		$('html, body').animate({scrollTop:450});
		return false;
	});
	$('#mas').click(function(){
		$('html, body').animate({scrollTop:450});
		return false;
	});
	$('#aprender').click(function(){
		$('html, body').animate({scrollTop:950});
		return false;
	});
	$('#inspiracion').click(function(){
		$('html, body').animate({scrollTop:1600});
		return false;
	});
	$('#dreams').click(function(){
		$('html, body').animate({scrollTop:2250});
		return false;
	});
});


//Efecto Typing
var contadorI=0;
var Ti=0;
var texto=["Bienvenidos a mi Página","Yilver Quevedo","JavaScript"];

function typing(){
	if(contadorI<texto[Ti].length){
		document.getElementById('text').innerHTML += texto[Ti].charAt(contadorI);
		contadorI++;
		setTimeout(typing,80);
	}
	else{
		Ti++;
		setTimeout(typingVacio,2000);
	}
}

function typingVacio(){
		document.getElementById('text').innerHTML = " ";
		contadorI=0;
		if(Ti==3){
			Ti=0;
		}
		typing();
}

typing();



//Efecto Slider -- Lenguajes
var Btn1=document.getElementById('boton1'),Btn2=document.getElementById('boton2'),Btn3=document.getElementById('boton3');
var slider = document.querySelector('.contenedorSlider');
var sliderInd = document.querySelectorAll('.parteColor');
let tamWidth = sliderInd[0].clientWidth;

function slides1(){
	slider.style.transform='translate('+(-tamWidth*0)+'px)';
	slider.style.transition='transform 1s';
}
function slides2(){
	slider.style.transform='translate('+(-tamWidth*1)+'px)';
	slider.style.transition='transform 1s';
}
function slides3(){
	slider.style.transform='translate('+(-tamWidth*2)+'px)';
	slider.style.transition='transform 1s';
}
Btn1.addEventListener("click",slides1);
Btn2.addEventListener("click",slides2);
Btn3.addEventListener("click",slides3);


//Efecto Carta 3d
var lado=0;
contenido1Z='<img src="img/desarrollo.jpg" class="headerCard"><h2>Trabajar de Desarrollador</h2><div class="letrasCarta"><p>Me gustaría trabajar para una empresa para fortalecerme lo más que pueda mis conocimientos en programación, principalmente en el <b>Desarrollo Web</b> considero que es un mercado que se puede explotar muchisímo y se puede sacar beneficio de ello. Además, tengo muchos <b>proyectos</b> que serían interesantes ponerlos en <b>Internet</b>. Otra cosa a considerar sería tengo que tener capital y que mejor para ello que trabajando como <b>desarrollador</b>.</p></div>';
contenido2Z='<img src="img/instituto.jpg" class="headerCard"><h2>Instituto</h2><div class="letrasCarta"><p>Un tema que siempre me ha llamado la atención es la <b>Educación</b>. Considero que en este sistema educativo tan roto solo se puede mejorar es desde dentro, pero también haciendo algo sumamente <b>revolucionario</b>. Últimamente ha sonado mucho  la educación abierta en internet (<b>MOOC</b>), este es un nicho del que todavía se puede sacar mucho provecho así como mejorar exponencialemente.</p></div>';
contenido3Z='<img src="img/juegos.jpg" class="headerCard"><h2>Federación Venezolana de VideoJuegos</h2><div class="letrasCarta"><p>La industria de los <b>VideoJuegos</b> ha crecido mucho, y es que si vemos las de personas que siguen competencias mundiales como la final del Mundial de <b>League of Legends</b> la cúal alcanzó una cifra cerca de los 75M de espectadores, cifra que supera la de los Juegos Olimpicos o la final de la NBA Vemos el potencial que tiene esta industría. mi ambición es crear la primera <b>Federacion Venezola de Juegos</b>, cuya federación pueda competir a nivel internacional en los <b>ESports</b>.</p></div>';

function transformar(){
	if(lado==0){
		$('.front').css({'transform':'perspective(600px) rotateY(360deg)','transition':'1s all'});
		lado=1;
	}
	else{
		$('.front').css({'transform':'perspective(600px) rotateY(0deg)','transition':'1s all'});
		lado=0;
	}
}

$('#boton11').click(function(){
	transformar();
	$("#contenido1").html(contenido1Z);
});

$('#boton22').click(function(){
	transformar();
	$("#contenido1").html(contenido2Z);
});

$('#boton33').click(function(){
	transformar();
	$("#contenido1").html(contenido3Z);
});