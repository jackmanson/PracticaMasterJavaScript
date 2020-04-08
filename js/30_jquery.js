$(document).ready(function(){

	// Eventos mouse over  y mouse out
	var cajaZebra = $(".zebra");

	cajaZebra.mouseover(function(){
		$(this).css("background","grey").css("color","black");
	});

	cajaZebra.mouseout(function(){
		$(this).css("background","red").css("color","white");
	});

	// Eventos mouse hover
	var cajaDiv2 = $("#micaja2");

	function cambiaOverColor(){
		$(this).css("background","purple").css("color","white");
	}

	function cambiaOutColor(){
		$(this).css("background","black").css("color","white");
	}

	cajaDiv2.hover(cambiaOverColor,cambiaOutColor);
	

});