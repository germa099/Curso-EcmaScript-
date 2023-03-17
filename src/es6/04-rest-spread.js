//*DESTRUCTURACION

//*ARRAYS: PODEMOS GUARDAR CADA ELEMENTO DEL ARRAY EN UNA VARIABLE PARA SER UTILIZADA O MOSTRADA

//* ANTES
let fruits = ["apple", "banana"];

let ap = fruits[0];
let ba = fruits[1];
console.log(ap, ba);

//* DESDE ES6

let fruits2 = ["apple", "banana"];

let [b, a] = fruits2;
console.log(a, b);

//*OBJETOS

//*ANTES

var usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" };

var nombre = usuario.nombre;
var edad = usuario.edad;
var plataforma = usuario["plataforma"];

console.log(nombre);
console.log(edad);
console.log(plataforma);

//*DESPUES ES6

var usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" };
//* los nombres de las variables nuevas deben ser iguales a los de las propiedades dentro del objeto
let { nombre, plataforma, edad } = usuario;

console.log(nombre);
console.log(edad);
console.log(plataforma);

let object = { prop1: "valor1", prop2: "valor2" };

let { prop1: prop12, prop2: prop22 } = object;

console.log(prop12); // valor1
console.log(prop22); // valor2

//*la propiedad del objeto sigue existiendo, es decir que prop12 es una variable nueva
console.log(object.prop1);

//* SPREAD OPERATOR

//*sirve para añadir la informacion de un objeto a un objeto nuevo, en lugar de pasar parametro por parametro utilizamos el spread (...) y el nombre del objeto del que queremos la información

const user = { name: "Germa", age: 30 };
let country = "CO";

const completeUser = { bornCountry: "CO", ...user, country };
console.log(user);
console.log(completeUser);

//*REST

//* PODEMOS CREAR UNA FUNCION CON EL REST ...VALUES CUANDO NO SABEMOS CUANTOS ARGUMENTOS NOS VAN A PASAR CUANDO SE EJECUTA LA FUNCION, ESTOS ARGUMENTOS SE GUARDAN COMO UN ARRAY Y DE ESA MANERA SON TRATADOS LOS PARAMETROS CUANDO SE CREA LA FUNCION.

function sum(num, ...value) {
  console.log(num);
  console.log(value);
  console.log(value[1]);
  let result = num + value[1];
  return console.log(result);
}

sum(1, 1, 2, 3);

const array = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const [cero, dos, tres, cuatro, cinco, ...resto] = array;
console.log(cero);
console.log(dos);
console.log(tres);
console.log(cuatro);
console.log(cinco);
console.log(resto);

let kissEmoji = [..."👩‍❤️‍💋‍👩"];
console.log(kissEmoji);

let familyEmoji = [..."👨‍👩‍👦‍👦"];
console.log(familyEmoji);

let cat1 = {
  name: "michi",
  food: "lo que sea",
};

let cat2 = {
  age: 46,
  color: "negro asabache",
};

function solution(
  json1 = { name: "Mr. Michi", food: "Pescado" },
  json2 = { age: 12, color: "Blanco" }
) {
  let output = { ...json1, ...json2 };
  console.log(output);
}
solution(cat1, cat2);
