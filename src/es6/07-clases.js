//* DECLARANDO LA CLASE
class User {}
//*HACIENDO UNA INSTANCIA DE UNA CLASE
// const newUser = new User()

class user {
  //* metodos
  greeting() {
    return `Holi`;
  }
}
//*Estancias distintas de una misma clase
//*tanto germa como meli se crean a partir de la clase user
const germa = new user();
console.log(germa.greeting());
const meli = new user();
console.log(meli.greeting);

//*constructor

class user {
  //* constructor
  constructor() {
    console.log(`Nuevo Usuario`);
  }
  greeting() {
    return `Holi`;
  }
}

const yo = new user();

//* this hace referencia al elemento padre que lo contiene

class user {
  //* constructor
  constructor(name) {
    this.name = name;
  }
  //*Metodos
  speak() {
    return `Holi`;
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const germain = new user("germa");
console.log(germain.greeting());

//* getters setters (obtener y guardar elementos dentro de la estructura)

class user {
  //*contructor
  constructor(name, age) {
    this.nombre = name;
    this.edad = age;
  }
  //*metodos
  speak() {
    return `Holi`;
  }
  greeting() {
    return `${this.speak()} ${this.nombre}`;
  }
  get uAge() {
    return this.edad;
  }
  set uAge(n) {
    this.edad = n;
  }
}

const i = new user("Germa", 30);
console.log(i.uAge);
console.log((i.uAge = 13));
