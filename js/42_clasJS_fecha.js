'use strict'

window.addEventListener('load',function(){

  var fecha = new Date();

  var year = fecha.getYear();
  var fullYear = fecha.getFullYear();
  var mes = fecha.getMonth();
  var dia = fecha.getDate();
  var hora = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();

  var textoHora = `
    Año: ${year}
    Full Año: ${fullYear}
    Mes: ${mes}
    Dia: ${dia}
    Hora: ${hora}
    Minutos: ${minutos}
    Segundos: ${segundos}
  `;

  var caja = document.querySelector(".caja");
  caja.innerHTML = textoHora;

  alert(textoHora);
  console.log(textoHora);

  console.log(fecha);


});
