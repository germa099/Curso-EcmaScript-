const a = "a";

// const anotherFunction = () => {
//   return new Promise((resolve, reject) => {
//     if (a === "a") {
//       resolve(console.log(`muuy bien `););
// } else {

//     }
//   });
// };

const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(console.log(`wepa`));
    } else {
      reject(console.log(`GONORREA!!!`));
    }
  });
};

anotherFunction();
// .then((i) => console.log(i))
// .catch((i) => console.log(i));
