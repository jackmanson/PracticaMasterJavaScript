'use strict'

window.addEventListener('load',function(){

  // capturando formulario
  var formulario = document.querySelector(".formPeliclas");

  // capturando evento del formulario
  formulario.addEventListener("submit",function(){
    var titulo = document.querySelector("#entrada").value;

    if (titulo.length >= 1) {
      localStorage.setItem(titulo,titulo);
    }

  });

  // capturando objeto UL
  var ul = document.querySelector("#lista");
  for(var indice in localStorage){ // --> localStorage es toda la lista guardada de esta pagina

    if (typeof localStorage[indice] == 'string') {
      var li = document.createElement("li"); // creando elemento li
      li.append(localStorage[indice]); // agrendo al li un titulo del Storage
      ul.append(li); // agregando el li al ul
    }

  }


  // capturando formulario para borrar elementos del lista
  var formulario = document.querySelector(".borrarFormPeliclas");

  // capturando evento del formulario
  formulario.addEventListener("submit",function(){
    var titulo = document.querySelector("#borrarEntrada").value;

    if (titulo.length >= 1) {
      localStorage.removeItem(titulo);
    }

  });

  // Limpiar toda la listado
  var limpiar = document.querySelector(".limpiar");
  limpiar.style.background = "#ffb3b3";
  limpiar.addEventListener("click",function(){
    localStorage.clear();
  });


});
