"use strict"

// Prueba de let y var


var numero = 40;
console.log(numero); // valor 40

if (true) {
	var numero = 50;
	console.log(numero); // valor 50
}

console.log(numero); // valor 50

// Prueba let
var texto = "Curso JS";
console.log(texto);

if (true) {
	let texto = "Curso laravel5";
	console.log(texto); // curso laravel5
	let numero = 10;
	console.log(numero); // valor 10
}

console.log(texto); // valor: Curso JS
console.log(numero); // valor: 50
console.log(typeof texto); // permite ver el tipo de dato
console.log(typeof numero);



