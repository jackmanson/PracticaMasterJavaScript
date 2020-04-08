"use strict"

// array, arreglos, matrices
var nombare = "Jack";
var matrix = ["dota","fornite","jumforce","soulend","left4dead"];

var lenguajes = new Array("PHP","Js","Go","java","Ruby","Pascal");
/* // PRACTIC PARA LEER ARRAYS
var elemento = parseInt(prompt("Que elemto del array quieres",0));
alert("El elemento: "+lenguajes[elemento]);

if (elemento>=lenguajes.length) {
	alert("Introduce el numero correcto menor que "+lenguajes.length);
}else{
	alert("El usuario seleccionado es: "+lenguajes[elemento]);
}
*/

//COMO LEER UN ARRAY CON UN BLUCLE
document.write("<h1>LOS LENGUAJES DE PROGRAMACION DEL 2019</h1>");
/*
for (var i = matrix.length - 1; i >= 0; i--) {
	document.write(matrix[i]);
}
*/
document.write("<ul>");
	for(var j=0;j<lenguajes.length;j++){
		document.write("<li>"+lenguajes[j]+"</li>");
	}
document.write("</ul>");

// METODO CON FOREACH con callback
document.write("<ul>");
	document.write("<B>UTILIZANDO FUNCION DE FLECHA</B>");
	lenguajes.forEach(
		(elemento,indice,ArrayTotal)=>{
			document.write("<li>"+indice+" : "+elemento+"</li>");
		}
	);
document.write("</ul>");

document.write("<ul>");
	document.write("<B>UTILIZANDO FUNCION DE FLECHA</B>");
	lenguajes.forEach(
		(A,B,C)=>{
			document.write("<li>"+B+" : "+A+"</li>");
		}
	);
document.write("</ul>");
