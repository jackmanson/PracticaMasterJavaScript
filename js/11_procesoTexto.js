"use strict"


alert("Buenos dias a todos");

var res = confirm("¿Quieres ver lo aprendido?");// recibe true o false

// toString() --> convierte numeros a texto
// toUpperCase() --> convierte el texto en mayusculas
// toLowerCase() --> convierte el texto en minusculas
// length --> cuenta la cantidad de elementos dentro cadenas,arrays,etc.

if (res) {//if solo recibe true
	var dato1 = prompt("¿Cuál es su nombre?");
	var dato2 = prompt("¿Cuál es su edad?"); // recibe texto y numeros
	var dato3 = prompt("¿Cuál es tu profesión?");

	var textoProceso = function(var1,var2,var3,fun1,fun2){ // funcion anonima
		console.log("Bueno dias "+var1+".");
		console.log("Por tu edad de "+var2);
		console.log(" en esta industria y expreriencia en el campo de "+var3);
		fun1(dato3);
		fun2(dato2);
	}

	textoProceso(
		dato1,
		dato2,
		dato3,
		function(a){
			console.log("Con este dato usted esta admitido: "+a);
		},
		function(b){
			console.log("Usted a nacido en el año: "+(2019-b));
		}
	);

}else{
	console.log("Gracias por su visita");
	var encuesta = confirm("Estimado visitante estaria dispuesto a hacer una pequeña encuesta con nostros. Gracias.");
	if (encuesta) {
		confirm("¿Le gustan la tecnologia?");
		confirm("¿Te gustan las computadoras?");
		confirm("¿Confias en las compras por internet?");
	}else{
		alert("Hasta pronto.");
	}
}




