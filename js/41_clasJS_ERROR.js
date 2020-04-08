'use strict'

try {

  var year = 2020;
  alert(yea);

} catch (e) {
    alert("Ha ocurrido un error.");
} finally {
  console.log("Fin de proceso de error.");
}


try {

  var caja = querySelector(".caja");
  caja.innerHTML = "Mi caja";

} catch (e) {
    alert("Ha ocurrido en mi caja.");
} finally {
  console.log("Fin de proceso de error.");
}
