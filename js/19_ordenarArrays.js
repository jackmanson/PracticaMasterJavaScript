"use strict"

var peliculas = ["dragon","ball","El","regreso","broli","SamuraiX"];
var categorias = ["anime","terror","Porno"];

//ORDENAR ARRAY
peliculas.sort();
console.log(peliculas);

categorias.reverse();
console.log(categorias);

// RECORIDOS CON FOR IN

for(let indice in peliculas){
	console.log(peliculas[indice]);
}
console.log("**************************************************");

var peliculas2 = ["dragon","ball","El","regreso","broli","SamuraiX"];

// BUSQUEDAS EN UN ARRAY CON FUNCION ANONIMA
var busqueda = peliculas2.find(
	function(dato){
		return dato == "El";
	}
);

console.log("Busqueda con funcion Anonima: ",busqueda);

// BUSQUEDA DE UN ARRAY CON CALLBACK
var busqueda2 = peliculas2.find(dato => dato == "El");
console.log("Busqueda de elemento con Funcion de flecha: ",busqueda2);

// BUSCA EL INDEX DE UN ARRAY
var busqueda2 = peliculas2.findIndex(dato => dato == "El");
console.log("Busqueda del indice con funcion de flecha",busqueda2);

// BUSQUEDA DE NUMEROS EN ARRAY --> TRUE O FALSE
var precios = [10,20,30,40,50,60,70,80,90,100];

var busqueda3 = precios.some(precio => precio > 50);
var busqueda4 = precios.some(precio => precio < 20);
var busqueda5 = precios.some(precio => precio == 100);
var busqueda6 = precios.some(precio => precio > 200);
console.log(busqueda3,busqueda4,busqueda5,busqueda6);