"use strict"

// Plantilla de texto NOS PERMITE INTERPOLAR MEJOR HTML Y VAIRABLES
var nombre = prompt("Cual es tu nombre?");
var apellido = prompt("Cual es tu apellido?");

// Formato Nª 1
var texto = "Mi nombre es "+nombre+" y  mis apellido "+apellido;
console.log(texto);

// Formato Nª 2
var texto1 = "<h1>Hola y Saludos</h1><h3>Aqui les preseto</h3>";
document.write(texto1);

// Formato Nª 3 - Mejorado
var texto2 = `
	<h1>Primer Articulo de JavaScript</h1>
	<p>MI nombre es ${nombre} y estoy facinando por toda
	la gente que a venido a vernos hasta aqui, gracias.</p>
	<h4>Creditos: ${apellido},${nombre}</h4>
`;
document.write(texto2.replace("gente","publico"));

// Formato Nª 4
var texto3 = "Mi nombre es "+nombre+" y  mis apellido "+apellido;
document.write(texto3);