'use strict'

window.addEventListener('load',function(){

  fetch('https://jsonplace1')
    .then(json => json.json())
    .then(json => {
        var caja = document.querySelector(".caja");

        console.log(json);

        let nomUser = document.createElement("h3");
        let datos = document.createElement("p");
        let articulo = document.createElement("article");
        nomUser.innerHTML = json.username;
        datos.innerHTML = "ID: "+json.id
            +"<br/>NAME: "+json.name
            +"<br/>USERNAME: "+json.username
            +"<br/>EMAIL: "+json.email
            +"<br/>TELEFONO: "+json.phone
            +"<br/>WEB: "+json.website;
        articulo.appendChild(nomUser);
        articulo.appendChild(datos);
        caja.appendChild(articulo);

    })
    .catch(error => { // --> aqui un callback para controlar errores en las promesas
        console.log(error,"Error en mi web.");
        alert("Error en mi web.");
    });

});
