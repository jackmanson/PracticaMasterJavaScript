"use strict"

// FUNCIONES ANONIMAS
// Es una funcion que no tiene nombre

var pelicula = function(nombre){ 
	return "La pelicula es:" + nombre;
} // para llamar en consola, la variable pelicula tomaria el nombre la funcion.
// ejemplo de llamamiento de funcion anonima--> pelicula("Raul");

// Qué es un callback
// Para llamar a la funcion del ejempo: pelicula("volver");

function sumame(num1,num2){
	var sumar = num1+num2;

	return sumar;
}


console.log("La suma es : ",sumame(20,60));

////////////////////////////////////////
// FUNCION DENTRO UNA FUNCION ATRAVEZ DE LOS PARAMETROS 

console.log("**************************************");

function operacion(var1,var2,var3,var4){
	var suma = var1+var2;

	var3(suma);
	var4(suma);
}

operacion(
	20,
	50,
	function(dato){ // Funcion de callback
		console.log("La suma es : "+dato);
	},
	function(dato){ // Funcion de callback
		console.log("La suma x 2 es : "+(dato*2));
	}
);
