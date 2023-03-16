const string = "Hello";
console.log(string.length); //*5

//*padStart rellena el string hasta tener la cantidad de elementos pasados como argumento y luego decimos con que queremos rellenarlos
console.log(string.padStart(10, "5")); //*555Hello

console.log(string.length); //*5
//*no modifica la variable original ni el valor ni el lenght.

//*PERO SI PODEMOS GUARDARLO EN UNA VARIABLE NUEVA.
const newString = string.padStart(10, "5");
console.log(newString); //*555Hello
console.log(newString.length); //*10

//*CON padEnd PASA LO MISMO PERO AL FINAL DEL STRING.

const string2 = "Holi";
console.log(string2.length); //*4

//*padStart rellena el string hasta tener la cantidad de elementos pasados como argumento y luego decimos con que queremos rellenarlos
console.log(string2.padEnd(20, "5")); //*Holi5555555555555555

console.log(string2.length); //*4
//*no modifica la variable original ni el valor ni el lenght.

//*PERO SI PODEMOS GUARDARLO EN UNA VARIABLE NUEVA.
const newString2 = string2.padEnd(20, "5");
console.log(newString2); //*Holi5555555555555555
console.log(newString2.length); //*20
