'use strict'

// FETCH Y PROMESAS

// FETCH (ajax) y peticiones a servidores --> peticiones asincronas / APIS REST
window.addEventListener('load',function(){

  var div_usuarios = document.querySelector(".usuarios");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>  response.json())
    .then(json => {
      //usuarios = json;
      console.log(json[0]);
      console.log("Listo.");
      json.map((item, i) => {
          var nombre = document.createElement("h3");
          nombre.innerHTML = i+".- "+item.name+" - "+item.email+" - "+item.username;
          div_usuarios.appendChild(nombre);
      });

      console.log("Listo el listado desde Fetch Ajax - Periciones asincronas.");
    });


});


/*
window.addEventListener('load',function(){

  console.log("JavaScript - funcionando.");

  var caja = document.querySelector(".usuarios");
  caja.style.background = "grey";
  caja.style.padding = "30px";
  caja.innerHTML = "mi caja";
  console.log(textContent(caja));

});
*/
