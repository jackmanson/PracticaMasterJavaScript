'use strict'

window.addEventListener('load',function(){

  console.log("Aqui javascript");

  // Conprobando disponbilidad Localstorage
  if (typeof(Storage) !== 'undefined') {
    console.log("Localstorage disponible.");
  }else{
    console.log("Inconpatible con Localstorage.");
  }

  // Guardar dato en Localstorage
  localStorage.setItem("tituloLlave","Valor de prueba de local storage.");

  // Recuperar Elemento
  console.log(localStorage.getItem("tituloLlave"));

  // Introducir valor localStorage en Page
  var caja = document.querySelector(".caja");
  caja.innerHTML = localStorage.getItem("tituloLlave");

  // Guardar Objeto JSON
  var usuario = {
      nombre: "Jackmanson",
      email: "jackmanson@manson.com",
      web: "www.jackmanson.com"
  };
  // Convertimos un JSON a un JSON-String
  localStorage.setItem("datosUsuario",JSON.stringify(usuario));

  // Aqui al recuperar un jsonString es solo una cadena de texto y no funciona como un JSON habitual
  console.log(localStorage.getItem("datosUsuario"));

  // Cuando se recupera un jsonString del storage tienes que convertirlo a JSON
  var variableUsuario = JSON.parse(localStorage.getItem("datosUsuario")); // --> convertido a JSON
  var parrafo = document.createElement("p");
  parrafo.innerHTML = variableUsuario.nombre+" - "+variableUsuario.email+" - "+variableUsuario.web; //--> usando JSON
  caja.append(parrafo);

  // Borrar llaves y valor del localStorage
  localStorage.removeItem("nombreLlave");

  // Vacias todo el localStorage
  //localStorage.clear(); // descomentar esta linea para borrar todo el storage

  // CON ESTA INFO YA SE PUEDE HACER UN CRUD


});
