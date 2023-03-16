const user = {
  nombre: "Germa",
  age: 30,
  cBorn: "CO",
};

console.log(Object.entries(user)); //*[ 'nombre', 'Germa' ], [ 'age', 30 ], [ 'cBorn', 'CO' ] ]

const user2 = Object.entries(user);

console.log(user2[1]); //*[ 'age', 30 ]

console.log(Object.values(user)); //*[ 'Germa', 30, 'CO' ]
