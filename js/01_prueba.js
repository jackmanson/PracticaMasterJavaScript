"use strict"

// Constatntes
// Es como una variable pero su contenido no puede cambiar.

var web = "https://junglafari.com"; // Variable comun
const ip = "192.168.0.12"; // Declaracion de una constante
var ip2 =20;

let prueba = "hola mundo"; // variable de tipo local o de ambito

alert(prueba+", mi ip es "+ip);
console.log(web,ip,ip2);

var entrada = prompt("Cual es su nombre?");
console.log(entrada);

var confirmacion = confirm("Estudiaste Ingenieria de sistemas?");
if(confirmacion){
	console.log("Si etudie.")
}else{
	const pi = 3.1416;
	console.log("No lo hice."+"y el valor de pi es : "+pi);
}

// Convertir numero declarado como texto a tipo numero
let textoFalso = "20";
console.log(Number(textoFalso));