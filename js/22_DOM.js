'use strict'


// SELECCIONAR ELEMENTOS POR SU ETIQUETAS

var todosLosDivs = document.getElementsByTagName("div");//crea un array de objetos
console.log(todosLosDivs);

var conten = todosLosDivs[2].textContent;
console.log(conten);

var con = todosLosDivs[2]; 
con.innerHTML = "Cambiando texto para este div";
console.log(con.innerHTML);
todosLosDivs[0].style.background = "red";

console.log(typeof todosLosDivs[0].textContent);

for(let elemento in todosLosDivs){
	if (typeof todosLosDivs[elemento].textContent == 'string') {
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[elemento].textContent);
		parrafo.appendChild(texto);
		document.querySelector("#miSeccion1").appendChild(parrafo);
	}
}

for(let valor in todosLosDivs){
	if (todosLosDivs[valor].textContent != undefined) {
		var parra = document.createElement("h5");
		var text = document.createTextNode(todosLosDivs[valor].textContent);
		parra.appendChild(text);
		document.getElementById("miSeccion2").appendChild(parra);
	}
}
 
// SELECCIONAR ELEMENTOS POR SU CLASE
var divRojos = document.getElementsByClassName("rojo");
console.log(divRojos);

divRojos[0].style.background = "green";
divRojos[1].style.background = "green";

for(var div in divRojos){
	if (divRojos[div].className == "rojo") {
		divRojos[div].style.background = "red";
		divRojos[div].innerHTML = "Cambiando contenido del DIV ROJO ";
	//debugger;
	}
}

// QUERY SELECTOR
var listaPes = document.querySelectorAll("p");
console.log(listaPes);

for(var element in listaPes){
	if (typeof listaPes[element].textContent=="string" && element>5){
		listaPes[element].innerHTML = "Parrafo reconocidgo en el For"+element;
		listaPes[element].style.background = "yellow";
	}
}





/*
window.addEventListener('load',function(){

	var cajas = document.getElementsByTagName("div");

	//console.log(cajas);

	cajas[0].className = "dead master";

	var cajasClass = document.getElementsByClassName("rojo");
	
	for(var indice in cajasClass){
		console.log(cajasClass[indice]);
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(cajasClass[indice].textContent);
		parrafo.appendChild(texto);
		cajas[0].appendChild(parrafo);
		parrafo.style.background = "green";
	}

});
*/


/*
window.addEventListener('load',function(){

	var myTitulos = document.getElementsByTagName("h1");

	console.log(myTitulos[0]);


	for(var indice in myTitulos){
		console.log(myTitulos[indice].textContent);
	}


});
*/


/*
window.addEventListener('load',function(){

	var h1_titulo = document.getElementsByTagName("h1");
	var myBotones = document.getElementsByTagName("button");
	console.log(myBotones[0].textContent);


	myBotones[0].addEventListener("click",myFunction);
	
	function myFunction(){
		alert("siiiiiiiiii");
	}




});
*/


