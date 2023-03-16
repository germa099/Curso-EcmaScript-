let hello = "Hello";
let world = `world`;
//*concatenación regular
let epicPhrase = hello + " " + world + "!";

//*template literals: podemos concatenar todo el texto y variables con ${}, identifica espacios.
let epicPhrase2 = `${hello} ${world}!`;

console.log(epicPhrase);
console.log(epicPhrase2);

//*Multi line strings

//* con back slash y n se hace un salto de linea (Alt 92) = \

let lorem = "esto es un string \n" + "esto es un string en otra linea";

//* con el template literal el enter reemplaza al \n
let lorem2 = `esto es un string 
esto es un string en otra linea`;
console.log(lorem);
console.log(lorem2);
