"use strict"

// TANSFORMACION PARA TEXTOS

var numero = 566;
var text1 = "Bienvenidos al curso de javascripts";
var text2 = "es un buen curso";

var datos = numero.toString(); // convierte numeros a string
console.log(datos);
console.log(typeof datos);
 var minus = text1.toLowerCase(); // funcion hace minusculas
 var mayus = text2.toUpperCase(); // funcion hace mayusculas
console.log(minus);
console.log(typeof minus);
console.log(mayus);
console.log(typeof mayus);

var array = [23,4,56,666,756553]; // cadena de texto
console.log(text1.length); // Cuenta elementos de una cadena
console.log(array.length); // Cuenta elementos en un array

console.log(text1+" "+text2); // concatena
console.log(text1.concat(" "+text2+" en Udemy.")); // funcion que concatena
