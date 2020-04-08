"use strict"

// FUNCION DENTRO DE UNA FUNCION ATRAVEZ DE LOS PARAMETROS 

console.log("**************************************");

function operacion(var1,var2,var3,var4){
	var suma = var1+var2;

	var3(suma);
	var4(suma);
}

// Las funciones de flecha son una manera de definir una funcion colocando una flecha
// en caso de un parametro no lleva parentesis y si lleva de dos a mas parametros si
// Se puede decir que una funcion de callback es una funcion de flecha pero simplificada

operacion( 
	20,
	50,
	dato =>{
		console.log("La suma es : "+dato);
	},
	dato =>{
		console.log("La suma x 2 es : "+(dato*2));
	}
);
