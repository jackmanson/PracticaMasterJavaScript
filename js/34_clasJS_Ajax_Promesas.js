'use strict'

// FETCH Y PROMESAS
// Peticiones a servidores --> peticiones asincronas / APIS REST
window.addEventListener('load',function(){

  var div_usuarios = document.querySelector(".usuarios");
  div_usuarios.style.padding = "30px";
  var div_POST_3 = document.querySelector(".usuarios");

  getUsuario()
    .then(response => response.json())
    .then(json => {
        lista(json);
        console.log(json);

        return getTitle();
  })
    .then(json => json.json())
    .then(post => {
        mostrarPost_3(post);
    });

  function getUsuario(){
    return fetch('https://jsonplaceholder.typicode.com/posts');
  }

  function getTitle(){
    return fetch('https://jsonplaceholder.typicode.com/posts/3');
  }

  function lista(datos){
    datos.map((dato,key)=>{
      let nombre = document.createElement("h4");
      nombre.innerHTML = key + " - " + dato.title + "<br/>" + dato.body;
      div_usuarios.appendChild(nombre);
    });
  }

  function mostrarPost_3(dato){
      let nombre = document.createElement("h4");
      nombre.innerHTML = "<br/>"+dato.title + "Jackmanson";
      div_POST_3.appendChild(nombre);
      console.log("Listo mostrarPost_3");
  }

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
