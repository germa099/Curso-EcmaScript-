var lastNAme = "Ramirez";
lastNAme = "Marulanda";
console.log(lastNAme);

let fruit = "apple";
fruit = "Kiwi";
console.log(fruit);

const animal = "dog";
animal = "cat";
console.log();

const fruits = () => {
  if (true) {
    var fruit1 = "fresa"; //* functionn scope
    let fruit2 = "Kiwi"; //*block scope
    const fruit3 = "Mango"; //* blocj scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};

fruits();
