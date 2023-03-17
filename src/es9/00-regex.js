const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2023-03-17");
console.table(matchers);
