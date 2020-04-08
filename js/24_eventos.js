"use strict"

var boton = document.querySelector("#boton");
boton.style.background = "red";


function cambiarColor(){
	console.log("Me has dado click");
	var bg = boton.style.backgroundColor;
	console.log(bg);
	console.log(typeof bg);
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

/* --> De esta forma no permitia la funcion
var color = document.getElementById("boton").style.background;

function cambiarColor(){
	if (color == "red") {
		document.getElementById("boton").style.background = "yellow";
	}else if(color == "yellow"){
		document.getElementById("boton").style.background = "green";
	}
	console.log("un click");
	console.log(document.getElementById("boton").style.background);
}
*/