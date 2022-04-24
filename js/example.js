let myJSON = { "name": "Chris", "age": "38" };
let myString = JSON.stringify(myJSON);

console.log(myJSON);
console.log(myString);
myString = JSON.parse(myString);
console.log(myString);