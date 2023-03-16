const nombres = [
  "pedro",
  "ana",
  "juan",
  "roberto",
  "miguel",
  "sebastian",
  "adriana",
];

const mascotas = ["michi", "perro", "loro", "gato", "leon", "culebra", "raton"];

function* generarID(array) {
  let id = 1;
  while (id <= array.length) {
    for (let element of array) {
      yield `El id de ${element} es: ${id}`;
      id++;
    }
  }
}

const nombresid = generarID(nombres);
const mascotasid = generarID(mascotas);

console.log(nombresid.next().value); //* `El id de pedro es: 1`
console.log(nombresid.next().value); //* `El id de ana es: 2`
console.log(nombresid.next().value); //* `El id de juan es: 3`
console.log(nombresid.next().value);
console.log(nombresid.next().value);
console.log(nombresid.next().value);
console.log(nombresid.next().value);
console.log(nombresid.next());
