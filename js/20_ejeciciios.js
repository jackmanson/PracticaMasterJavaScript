"use strict"
var cont = 0;
var coleccion = [];
while(cont<6){
	coleccion.push(parseInt(prompt("ingresar numeros:")));
	console.log(coleccion[cont]);
	cont++;
}
console.log("********************************************");

var coleccion2 = new Array(6); // definimos las posiciones de antemano

for(var i=0;i<coleccion2.length;i++){
	coleccion2[i] = parseInt(prompt("Introduce numeros: ",0));
}
console.log(coleccion2);

// ordenando array
coleccion.sort();
console.log(coleccion);

coleccion2.sort();
console.log(coleccion2);

console.log("==================================");
// funcion para mostrar array
function mostrarArray(un_Array,textoModificable=""){
	document.write("<h2> Contenido del Array "+textoModificable+"</h1>");
	document.write("<ul>");
		un_Array.forEach((elemento,indece)=>{
			document.write("<li>"+elemento+"</li>");
		});
	document.write("</ul>");
}

// funcion CALLBACK para mostrar array
var mostrar =(un_Array,textoModificable="")=>{ // asu vez es funcion anonima
	document.write("<h2> Contenido del Array "+textoModificable+"</h1>");
	document.write("<ul>");
		un_Array.forEach((elemento,indece,arrayT)=>{
			document.write("<li>Indice: "+indece+"-->"+elemento+"</li>");
		});
	document.write("</ul>");
}
mostrar(coleccion,"con FUNCIONES callaback");
document.write(mostrar(coleccion2,"CALLBACK"));// revisar aqui da undefined

// ordenando con funciones
coleccion.sort(function(a,b){return a-b});
mostrar(coleccion,"Bien Ordenado con funcion SORT()");

coleccion.sort(function(a,b){return b-a});
mostrar(coleccion,"Bien Ordenado con funcion SORT()");

// revertir array
coleccion.reverse();
mostrar(coleccion2,"Arrary revertido");

// contar elementos del array
console.log(coleccion.lengeh);

// Buscar elemento que usuario elija segun posicion
var arrayEjemplo = [20,6536,1,68,90];
var busquecarNum=parseInt(prompt("Buscar posicion de numero: "));
var encontrado=arrayEjemplo.findIndex(numEncontrar=>numEncontrar==busquecarNum); 
// Encontrado --> 1  / No encontrado --> -1
console.log("Tipo de dato: "+encontrado);

if(encontrado && encontrado != -1){
	document.write("<hr/><h1>ENCONTRADO</h1>");
	document.write("<h2>Posicion solicitada: "+encontrado+"</h2>");
	document.write("<h2>Corresponde al numero: "+arrayEjemplo[encontrado]+"</h2><hr/>");
}else{
	document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>");
}
