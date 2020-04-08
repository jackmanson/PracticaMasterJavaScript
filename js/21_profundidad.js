"use strict"
// INTRODUCCION CON EL DOM --> Document Object Model

var caja = document.getElementById("micaja");
console.log(caja);

caja = document.getElementById("micaja").innerHTML;
console.log(caja);

// CAMBIA EL CONTENIDO TEXTUAL DE ELEMENTOS DE HTML
document.getElementById("micaja").innerHTML = "Nuevo contenido.";
var cajaContenido = document.getElementById("micaja").innerHTML
console.log(cajaContenido);
alert(cajaContenido);
alert(document.getElementById("micaja").innerHTML);

// CAMBIA ATRIBUTOS CSS EN HTML
document.getElementById("micaja").style.background = "red";
document.getElementById("micaja").style.padding = "20px";
document.getElementById("micaja").style.color = "white";

document.write("===========================================");

// TRABAJANDO CON FUNCIONES 
function cambiaColor(colorFondo,colorFuente){
	document.getElementById("micaja2").style.background = colorFondo;
	document.getElementById("micaja2").style.color = colorFuente;
}

cambiaColor("black","white");
 

// MODIFICAR y agrega atributo CLASE DE UN ESTILO CSS
document.getElementById("micaja2").className = "hola2 model cambio";

// UTILIZANDO QUERYSELECTOR 
document.querySelector("#micaja3").innerHTML = "TEXTO CAMBIADO POR JS CAJA 3";
document.querySelector("#micaja3").style.backgroundColor = "yellow";
document.querySelector("#micaja3").style.padding = "20px";
document.querySelector("#micaja3").style.color = "green";
document.querySelector("#micaja3").className = "clase1 clase2";

var caja3 = document.querySelector("#micaja3").innerHTML;
console.log(caja3);
console.log(typeof caja3);
