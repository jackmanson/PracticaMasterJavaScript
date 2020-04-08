"use strict"

//Concionales

var edad1 = 30;
var edad2 = 12;

// si la condicion se cumple

if (edad1!=edad2) {
	if (edad1>edad2) {
		//ejecuta
		let res = "Edad 1 es mayor que edad 2";
		console.log(res);
		alert(res);
	}

	if (edad2>edad1) {
		let res = "Edad 2 es mayor que edad 1";
		console.log(res);
		alert(res);
	}else{
		console.log("Este es la respuesta del segundo condicional: "
			+"Edad 1 es mayor.");
	}

	console.log(typeof edad1);
	console.log(typeof edad2);
}else if (edad1==edad2){
	console.log("Edad 1 es igual a Edad 2.");
}else{
	console.log("No cumple los requisitos.");
}

