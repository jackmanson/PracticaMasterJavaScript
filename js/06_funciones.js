"use strict"

// parametros REST y SPREAD

//--> PARAMETRO REST
function listadoFrutas(fruta1,fruta2,...otras){
	console.log("MOSTRANDO REST");
	console.log("Fruta 1: ",fruta1);
	console.log("Fruta 2: ",fruta2);
	console.log("Fruta 3: ",otras);
}

listadoFrutas("manzana","pera","sandia","melon","coco");

//--> PARAMETRO SPREAD
function listadoCosas(cosa1,cosa2,otros){
	console.log("********************************");
	console.log("MOSTRANDO SPREAD");
	console.log("Cosa 1 : ",cosa1);
	console.log("Cosa 2 : ",cosa2);
	console.log("Cosa 3 : ",otros);
}

var arrayCosas =["cuaderno","borrador"];
listadoCosas(...arrayCosas,"mesa","silla","escritorio");

//--> PARAMETRO REST Y SPREAD
function listadoRestSpread(lenguaje1,lenguaje2,lenguaje3,...lenguaje4){
	console.log("*********************************");
	console.log("MOSTRANDO REST Y SPREAD");
	console.log("Lenguaje1 : ",lenguaje1);
	console.log("Lenguaje2 : ",lenguaje2);
	console.log("Lenguaje3 : ",lenguaje3);
	console.log("Lenguaje4 : ",lenguaje4);
}

var arrayLenguaje = ["java","phyton"];
listadoRestSpread(...arrayLenguaje,"ruby","C#","PHP","Perl","scala");
