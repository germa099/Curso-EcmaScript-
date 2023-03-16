const nuevoSet = new Set();
//* new Set() CREA UN OBJETO QUE LE PODEMOS PASAR VALORES POR MEDIO DE .ADD

nuevoSet.add(1).add(2).add(3).add(4).add(5);

console.log(nuevoSet);

nuevoSet.add(6);

//* PASAR DE UN ARRAY CON VALORES REPETIDO A UN OBJETO SET SIN ESOS VALORES, SET NO ACEPTA VALORES REPETIDOS

const arreglo = [1, 1, 2, 2, 3, 4, 4, 5];

const sinrepe = new Set(arreglo);

console.log(sinrepe);

//*PASAR ESOS VALORES EN EL OBJETO A UN ARRAY

const sinrepeArray = [...sinrepe];

console.log(sinrepeArray);

sinrepe.add(6).add(7);

console.log(sinrepe);

console.log(sinrepeArray);

sinrepeArray.push(6);

console.log(sinrepeArray);
