"use strict"

var edad = 18;
var imprimir = "";

switch(edad){
	case 18:
		imprimir = "Tienes la mayoria de edad.";
		console.log(imprimir);
	break;
	case 25:
		imprimir = "Ya eres mayoria de edad.";
		console.log(imprimir);
	break;
	case 40:
		imprimir = "ya eres cuarenton.";
		console.log(imprimir);
	break;
	default:
		imprimir = "No tienes un dato importante.";
		console.log(imprimir);
	break;
}



