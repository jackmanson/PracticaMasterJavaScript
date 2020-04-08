"use strict"

var peliculas = ["dragon","ball","El","regreso","broli","SamuraiX"];
var categorias = ["anime","terror","Porno"];

// ARRAY MULTIPLE - UN ARRAY CONTIENE A 2 ARRAYS A SU VEZ SIN LIMITES
var cine = [categorias,peliculas];

console.log(cine);
console.log(cine[0][2]); // valor: El
console.log(cine[1][0]); // valor: anime

peliculas.push("Stranger"); // agregar un elemento al ultimo del array
categorias.push("sho");

// CON ESTE WHILE AGREGAMOS MAS ELEMENTOS
elemento ="";
while(elemento!="fin"){
	var elemento = prompt("Ingresa tu pelicula favorita: ");
	peliculas.push(elemento);
}
peliculas[0] = undefined; // obliga a indefinir esa posicion
peliculas.pop();//elimina el ultimo elemento del array
peliculas.pop();//elimina el ultimo elemento del array
console.log(peliculas);

// elimnar elementos de un array

var indice = peliculas.indexOf("ball"); // indexOf si no encuentra el elemento devuelve -1 / si lo encuentra da la posicion numero entero
// indexOf aplicado en un array devuelve la ubicacion
if (indice>-1) {
	peliculas.splice(indice,1); // indice = ubicacion / 1 = indica cuantas ubicaciones borrara
}// ejemplo de borrado --> array.splice(posicion,cuantoBorrar,"texto1","masTexto"); // texto1-> reemplaza lo borrado // masTexto-> reemplaza la siguiente posicion


var peliculas_string = peliculas.join();//convierte un array a cadena de texto
console.log(peliculas_string);

var cadena = "texto1, texto2, texto3"; //mejor manera para convertir array
var cadena2 = "texto1 texto2 texto3";

// SPLIT separa la cadena en palabras y lo guarda en un array 
console.log(cadena.split()); // es un elemento de array
console.log(cadena.split(", ")); // 3 elementos de arrar
console.log(cadena2.split()); // un elemento de array
console.log(cadena2.split(" ")); // 3 elementos de array
