//*DEFINIR PARAMETROS POR DEFECTO A NUESTRAS VARIABLES

//*Esta es la forma como se hacia antes de es6
function newUser(name, age, country) {
  var name = name || "germa";
  var age = age || 30;
  var country = country || "CO";
  console.log(name, age, country);
}
newUser();
newUser("meli", 29, "CR");

//* EN ES6 SE HACE MAS SENCILLO

function newUser(name = "germa", age = 30, country = "CO") {
  console.log(name, age, country);
}
newUser();
newUser("meli", 29, "CR");

//*LOS PARAMETROS POR DEFECTO SIEMPRE DEBEN ESTAR EN LAS POSICIONES FINALES

function newUser(name, age, country = "CR") {
  console.log(name, age, country);
}
newUser(); // undefined undefined CR
