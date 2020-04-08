"use strict"

//BOM --> Browser Object Model

console.log(window.innerWidth); //--> Muestra el ancho del contenido de la ventana
console.log(window.innerHeight); //--> Muestra el alto del contenido de ventana

function dimensionesVentanas(){
	console.log(window.innerWidth);
	console.log(window.innerHeight);	
}

function getBom(){
	console.log(window.innerHeight);
	console.log(window.innerWidth);
}

var anchoVentana = window.innerWidth; // ancho de ventana
var altoVentana = window.innerHeight; // alto de ventana
console.log("Ancho --> "+anchoVentana);
console.log("Alto --> "+altoVentana);

// 2003 -- 2011 -- 2256 

function redirect(url){
	window.location.href = url; // redirecciona a direcciones diferentes
}

console.log(window.location.href); // muestra direccion actual url
console.log(window.location.hostname); //returna el dominio del web host
console.log(window.location.pathname);// returna el path y filename de la pagina actual
console.log(window.location.protocol);//retorna protocolo http o https
console.log(window.location.port);

function urlAsignada(){
	window.location.assign("http://www.impresstotal.com"); // asigna url
}
document.write("<input type='button' value='abrir ventana' onclick='urlAsignada()'");

function abrirVentanaNueva(url){// abre nueva ventana
	window.open(url,"","width=400","height=300");
}

function myFunction() {//llama una ventana emergente en blanco
  var myWindow = window.open("", "", "width=200,height=100");
}

function myFunction2() {// llama una ventana con contenido anidado
  var myWindow = window.open("", "MsgWindow", "width=200,height=100");
  myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
}

function myFunction3() {// cambia el contenido en la misma ventana
  var myWindow = window.open("", "_self");
  myWindow.document.write("<p>I replaced the current window.</p>");
}

function myFunction4() {// abre multiples ventanas
  window.open("http://www.google.com/");
  window.open("https://www.w3schools.com/");
}

var myWindow;

function openWin() {// abre ventana
  myWindow = window.open("", "myWindow", "width=200,height=100");
  myWindow.document.write("<p>This is 'myWindow'</p>");
}

function closeWin() {// cierra ventana
  myWindow.close();
}

function myFunction4() {
  var myWindow = window.open("", "myWindow", "width=200,height=100");
  myWindow.document.write("<p>This is 'myWindow'</p>");
  myWindow.opener.document.write("<p>This is the source window!</p>");
}