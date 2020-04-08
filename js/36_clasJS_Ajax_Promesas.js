'use strict'

// CREAR PROMESAS
window.addEventListener('load',function(){

  // Objeto seleccionado para contener los datos
  var caja = document.querySelector(".caja");
  console.log(caja);


  // Llamamiento del API jsonplaceholder
  function listaUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users/');
  }

  //Funcion leer listado de listaUsuarios
  function leerUsuarios(dato_user){
    dato_user.map((user,key)=>{
        let nomUser = document.createElement("h3");
        let datos = document.createElement("p");
        let articulo = document.createElement("article");
        nomUser.innerHTML = user.username;
        datos.innerHTML = "ID: "+user.id
            +"<br/>NAME: "+user.name
            +"<br/>USERNAME: "+user.username
            +"<br/>EMAIL: "+user.email
            +"<br/>TELEFONO: "+user.phone
            +"<br/>WEB: "+user.website;
        articulo.appendChild(nomUser);
        articulo.appendChild(datos);
        caja.appendChild(articulo);
    });
  }


  // PROMESAS EN CURSO
  listaUsuarios()
    .then(response => response.json())
    .then(json => {
        console.log(json);
        leerUsuarios(json);

        return promesaProgramas(); //agregamos el retorno de la nueva promesa

    }).then(data => {// Agregando la promesa a otra
        console.log(data);
        return data;
    })
      .then(data => {// Extrayendo un lenguaje
          var dataJava = JSON.parse(data);// --> convirtiendo json-string a JSON puro
          console.log(dataJava);
          console.log(dataJava['java']);
          console.log(dataJava['java'].nombre);

      })


  // Creando una Promesa desde cero
  function promesaProgramas(){
      var listaPrograma = { // Objetos JSON guardados dentro de otro JSON
          java:{
            nombre: "Java",
            paradigma: "Orientada a objetos",
            año: "1995",
            desarrollador: "James Gosling"
          },
          python:{
            nombre: "Python",
            paradigma: "Orientada a objetos",
            año: "1991",
            desarrollador: "Guido van Rossum"
          },
          ruby:{
            nombre: "Ruby",
            paradigma: "Orientada a objetos",
            año: "1995",
            desarrollador: "Yukihiro Matz Matsumoto"
          }
      };


    // Retornando la PROMESA
    return new Promise((resolve,reject)=>{ // RESOLVE --> muestra el resultado REJECT --> muestra error

      var programas_string = JSON.stringify(listaPrograma);// convierte el JSON a json-string

      if (typeof programas_string != 'string') return reject('error');

      return resolve(programas_string);

    });
  }





});
