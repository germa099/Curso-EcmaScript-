const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(console.log(`wepa`));
    } else {
      reject(console.log(`GONORREA!!!`));
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finnaly"));
