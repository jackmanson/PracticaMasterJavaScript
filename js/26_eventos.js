"use strict"

window.addEventListener('load',()=>{// Load --> permite colocar en head
	var cajaTexto=document.getElementById("campoNombre");

	cajaTexto.addEventListener('focus',function(){
		console.log("Esas en foco");
	});

	var boton=document.querySelector("#boton");

	boton.addEventListener('mouseover',function(){
		console.log("Boton en accion");
		boton.style.backgroundColor = "green";
	});
});
