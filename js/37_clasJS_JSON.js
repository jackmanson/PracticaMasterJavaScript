'use strict'

window.addEventListener('load',function(){

  console.log("Aquí objetos JSON.");

  var pelicula =  {
    titulo : "Batman",
    año : "2017",
    pais : "EEUU"
  };

  console.log(pelicula);
  console.log(pelicula.titulo);

  var peliculas = [ // Array de objetos JSON
    {titulo : "Batman",year : "2017",pais : "EEUU"},
    {titulo : "Avenger",year : "2019",pais : "EEUU"}
  ];

  console.log(peliculas[0].year);

  var caja = document.querySelector(".caja");
  caja.innerHTML = "Mi Caja de Peliculas";

  for (var index in peliculas) {
    console.log(index + " - " + peliculas);
    var parrafo = document.createElement("p");
    parrafo.innerHTML = "<br/><h4>"+peliculas[index].titulo+"</h4><p>Año: "+peliculas[index].year+"</p><p>País: "+peliculas[index].pais+"</p><br/>";
    caja.append(parrafo);
    console.log(peliculas[index].titulo+" - "+peliculas[index].year+" - "+peliculas[index].pais);
  }

});
