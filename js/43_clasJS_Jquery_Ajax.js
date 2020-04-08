'use strict'

$('document').ready(function(){

  console.log("Hola desde Jquery.");
  // Metodo load

  // Metodo get

  // Metodo post

  // Metodo ajax
  $.ajax({ // --> no esta funcionando revisar
    type: 'POST',
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    data: usuario,
    beforeSend: function(){
      console.log("Enviando usuario...");
    },
    success: function(response){
      console.log(response);
    },
    error: function(){
      console.log("Tenemos un error.");
    },
    timeout: 2000
  });


});
