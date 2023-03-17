const user = { name: "Germa", age: 30, country: "CR" };
// let ;

const completeUser = { bornCountry: "CO", ...user };
console.log(user); //*{ name: 'Germa', age: 30, country: 'CR' }
console.log(completeUser); //*{ bornCountry: 'CO', name: 'Germa', age: 30, country: 'CR' }

//* a pasrtir de es9 podemos utilizar el spread operator para gusradr bloques dentro de un objeto en una variable, se separan valores dentro de un objeto

const { bornCountry, country, ...values } = completeUser;
console.log(bornCountry); //* CO
console.log(country); //*CR
console.log(values); //* { name: 'Germa', age: 30 }
