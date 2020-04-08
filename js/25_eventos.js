"use strict"

var boton = document.querySelector("#boton");

// evento CLICK
boton.addEventListener('click',function(){// al hacer click
	function cambiarColor(){

		console.log("Me has dado click");
		var bg = boton.style.backgroundColor;

		if (bg == "red") {
			boton.style.backgroundColor = "yellow";
			boton.style.padding = "20px";
			boton.style.border = "10px solid black";
		}else{
			boton.style.backgroundColor = "red";
			boton.style.padding = "50px";
		}
		return true;
	}
	cambiarColor();
});

// evento MOUSEOVER --> realiza accion cuando puntero sobre objeto
boton.addEventListener('mouseover',function(){
	boton.style.backgroundColor = "black";
});

// evento MOUSEOUT --> realiza accion cuando puntero sale del objeto 
boton.addEventListener('mouseout',function(){
	boton.style.backgroundColor = "white";
});

// evento FOCUS --> estas dentro del foco
var input = document.querySelector("#campoNombre");
input.addEventListener("focus",function(){
	console.log("[foucs]--> Estas dentro del input.");
});

// evento BLUR --> estas fuera del foco
input.addEventListener('blur',function(){
	console.log("[blur]--> Estas fuera del input");
});

// evento KEYDOWN --> Pulsando la tecla
input.addEventListener('keydown',function(event){
	console.log("[keydown]--> Pulsando la techa",String.fromCharCode(event.keyCode));
});

// evento KEYPRESS --> Tecla presionada
input.addEventListener('keypress',function(event){
	console.log("[keypress]--> Tecla presionada",String.fromCharCode(event.keyCode));
});

// evento KEYUP --> Tecla soltada
input.addEventListener('keyup',function(event){
	console.log("[keyup]--> Tecla soltada",String.fromCharCode(event.keyCode));
});

