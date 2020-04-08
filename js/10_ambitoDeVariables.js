"use strict"

// VARIABLES DENTRO Y FUERA DE FUNCIONES

function holaMundo(texto){
	var variableInterna = "Esta variable no puede usarse fuera de la funcion";
	console.log(texto);
	console.log(numero.toString());
}

var numero = 20; // numero es una variable global y puede usar dentro de funciones
var texto = "Hola a todos desde variable global.";
holaMundo(texto);
console.log(typeof numero);
console.log(variableInterna); //--> muestra error por que usa una variable de una funcion

