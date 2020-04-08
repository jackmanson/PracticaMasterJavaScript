"use strict"

window.addEventListener('load',function(){//espera hasta cargar toda la page

	// timmer --> acction despues de un tiempo
	var tiempo = setInterval(function(){
		console.log("Set interval ejecutado");
		var encabezado = document.querySelector("h1").style.fontSize;
		console.log(encabezado);
		if (encabezado=="50px") {
			document.querySelector("h1").style.fontSize = "100px";
		}else{
			document.querySelector("h1").style.fontSize = "50px;"
		}
	},3000);//cada 1000 es 1 segundo



});


