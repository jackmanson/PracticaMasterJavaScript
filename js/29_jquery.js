$(document).ready(function(){

	//buscar una clase que no se conosce ubicacion
	var busqueda1 = $("#parrafoResultado .respuesta");
	console.log(busqueda1);

	var busqueda2 = $("#parrafoResultado").find('.respuesta');
	console.log(busqueda2);

	let busquedaAtras = $("#parrafoResultado .respuesta").parent().parent().find('[title="Google"]');
	console.log(busquedaAtras); // respuesta en un array - 1 busqueda


	// Otros tipos de seleccionar por separado a varios elementos
	$('a,li,p').addClass("miMargen");


	// selector de atributo
	$('[title="Google"]').css("background","green");
	$('[title="Yahoo"]').css("background","grey");
	$('[href="https://www.netflix.com"]').css("background","yellow");
	var git = $('[alt="Github"]').css("background","blue");

	git.addClass("miGit");

	$(git).click(function(){
		if (git.hasClass("miGit")){
			$(this).css("color","white");
			console.log("Color letra a blanco");
		}
	});


	// selector de etiqueta
	$("div").click(function(){
		if ($(this).hasClass("rojo")){
			$(this)
				.css("background","red")
				.css("color","white");
			$(this).removeClass("rojo");
		}else{
			$(this)
				.css("background","purple")
				.css("color","white");
			$(this).addClass("rojo");
			//$(this).hide(); --> oculta elementos del DOM
		}
	});




	/*
	var cajas = $("div");
	console.log(cajas); // muestra array de div
	console.log(cajas.hasClass("rojo")); // si encuentra la clase es true
	
	cajas.click(function(){
		if ($(this).hasClass("rojo")){
			
			$(this)
				.css("background","green")
				.css("color","black");
		}else{
			console.log("No es una caja roja");
		}
	});

	$("p").click(function(){
		let operadorThis = $(this);
		if (operadorThis.hasClass("parrafo")) {
			operadorThis
				.css("background","red")
				.css("color","white");
		}else{
			operadorThis
				.css("background","grey");
			console.log("Parrafo no encontrado");
		}
	});
	*/



	/*
	var secciones = document.getElementsByTagName("section");
	console.log(secciones);
	
	for(let indice in secciones){
		var parrafo = document.createElement("p");
		var texto = document.createTextNode("Hola mundo JS "+indice);
		parrafo.appendChild(texto);
		secciones[indice].appendChild(parrafo); // no reconoce como funcion al array
	}

	var miSecciones = $("section");
	console.log(miSecciones);
	console.log(miSecciones.eq(0));
	miSecciones.css("background","green").css("margin","100px");
	*/





	/*
	var classRojo = $(".rojo");

	console.log(classRojo); // devuelve un array

	classRojo.eq(0).css("background","grey");

	console.log(classRojo.eq(0));
	console.log(classRojo[1]);

	classRojo.eq(0).addClass("zebra");

	classRojo.eq(0).css("margin","20px");

	document.querySelector("#miSeccion1").innerHTML = "miSeccion1";

	$("#miSeccion1").click(function(){
		console.log("Evento click funcionando");
		$(this).css("margin","20px").css("background","yellow")
		.css("border","2px dashed black");

	})
	*/



	/*
	// selector de ID
	var caja1 = $("#micaja1");
	console.log(caja1);

	caja1
		.css("background","green")
		.css("margin","20px")
		.css("color","white");


	var caja2 = $("#micaja2");

	caja2
		.css("background","yellow");
	*/
	

	/*
	console.log("Jquerry funcionando");
	
	var titulo = $("h1");

	console.log(titulo);

	titulo.eq(0).innerHTML = "Cambio usando Jquery";

	titulo.css("background","green");

	var caja = document.getElementById("micaja1");
	console.log(caja);
	*/



});