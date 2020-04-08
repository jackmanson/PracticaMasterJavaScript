"use strict"

var numero = 566;
var text1 = "Bienvenidos al curso de javascripts en el curso master curso";
var text2 = "es un buen curso";

var busqueda = text1.indexOf("curso"); // Muestra la ubicacion la palabra, muetra primera conicidencia devolciendo un entero que es la ubicacion
console.log(busqueda);

busqueda = text1.lastIndexOf("curso"); // muestra la ultima coincidencia
console.log(busqueda);

busqueda = text1.search("curso"); // Busca igual que indexOf
console.log(busqueda);

busqueda = text1.match(/curso/g); //Buscar todas las coincidencias y lo guarda en un array
console.log(busqueda);

busqueda = text1.substr(15,5); // Extrae un fraccion de cadena
console.log(busqueda);

busqueda = text1.charAt(16); // Extra un solo caracter de una cadena
console.log(busqueda);

busqueda = text1.startsWith("Bienvenidos"); //Si encuentra al inicio devuelve true
console.log(busqueda);

busqueda = text1.endsWith("curso"); // Si encuentra al final es true
console.log(busqueda);

busqueda = text1.includes("curso"); // Si encuentra la palabra es true
console.log(busqueda);

