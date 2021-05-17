/*
====== VAR
*/
var nombre1 = "Maria";
if (true) {
  var nombre1 = "Bruce"
}
if (false) {
  var nombre2 = "Bruce"
}
// nombre3 = "Luis";
// if (true) {
//   nombre3 = "Bruce"
// }
console.log(nombre1) // output will be Bruce
// console.log(nombre2) // output will be undefined
// console.log(nombre3) // output will be Bruce

/*
====== Let
*/
let nombre4 = "Maria";
// let nombre4 = "Rosa"; // Not able to redeclare a let variable
let nombre5 = "Maria";
if (true) {
  let nombre4 = "Bruce"
  nombre5 = "Bruce"
}
console.log(nombre4); // Output will be Maria due to scope 
console.log(nombre5); // Output will be Bruce due to reassign

/*
====== Const
*/

const OPCIONES: string = "Activo";
if (true) {
  const OPCIONES: string = "Desactivo" // You can redeclare due to scope
}
console.log(OPCIONES);

for (const I of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
  console.log(I); // You are able to reassign due to scope inside iteration
}

const AUDIO = {
  status: true,
  audio: 10,
  last: "main",
}

// AUDIO = {} // can't reassign due to CONST

AUDIO.status = false;
AUDIO.audio = 1;

console.log(AUDIO); // You are able to reassign values in the obj