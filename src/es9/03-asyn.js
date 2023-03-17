async function* anotherGenerator() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
  yield Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
other.next().then((response) => console.log(response.value));
console.log("Helloooo");

async function arrayOfNames(array) {
  for await (let values of array) {
    console.log(values + "!");
  }
}

const names = arrayOfNames(["germa", "meli", "ana", "javier"]);
console.log(names);
console.log("Helooo");
