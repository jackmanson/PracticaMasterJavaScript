'use strict'

$('document').ready(function(){

  console.log("Hola desde POO.");

  // creando Objetos con JSON con metodos y variables internas
  var persona = { // Creando una clase y metodos
    nombre: "Jack",
    apellido: "Manson",
    edad: "25",
    sexo: "masculino",
    estatura: "1.8",
    peso: "80",
    cambiarPeso: function(peso){
      //persona.peso = "peso";
      this.peso = peso;
    },
    cambiarEdad: function(edad){
      this.edad = edad;
    }
  };

persona.cambiarPeso("85");

console.log(persona.peso);

document.querySelector("#caja1").innerHTML = "Este es mi peso "+persona.peso+" kg.";

});
