"use strict"

var cadena = "Los caballeros del zodiaco en Netflix";
console.log(cadena.replace("Netflix","Youtube")); // reemplaza texto

var reempla = cadena.replace("Netflix","Youtube"); // reemplaza texto
console.log(reempla);

reempla = cadena.slice(10); // Corta desde la ubicacion dada
console.log(reempla);

reempla = cadena.slice(10,13); // Corta desde la ubicacion dada
console.log(reempla);

reempla = cadena.split(" "); // separa la cadena en palabras y lo guarda en un array 
console.log(reempla);

reempla = cadena.trim(); // elimna espacios al inicio y final
console.log(reempla);