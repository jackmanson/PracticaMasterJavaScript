'use strict'

// FETCH (ajax) y peticiones a servidores --> peticiones asincronas / APIS REST
console.log("JavaScript funcionando.");


// 1RA - CONEXION CON API REST jsonplaceholder con FETCH
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(dato => console.log(dato.title));


// 2DA - CONEXION CON API REST con JavaScript Nativo
var apiConexion = new XMLHttpRequest();
apiConexion.open("GET", "https://reqres.in/api/products/3", true);
apiConexion.onload = function(){
    alert(apiConexion.responseText);
};
apiConexion.send();




// FETCH (ajax) y peticiones a servidores --> peticiones asincronas / APIS REST
var div_usuarios = document.querySelector(".usuarios");

fetch("https://reqres.in/api/users/2")
  .then(data =>  data.json())
  .then(users => {
    usuarios = users.data;
    console.log("usuarios");

    usuarios.map((user,i)=>{
      let nombre = document.createElement("h2");
      nombre.innerHTML = i+".- "+user.first_name+" "+user.last_name;
      div_usuarios.appendChild(nombre);
    });

  });
