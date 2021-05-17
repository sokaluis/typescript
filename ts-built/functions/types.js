"use strict";
function plus(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm " + nombre;
}
function salvarMundo() {
    console.log('El mundo esta salvado.');
}
var myFuction;
var myFuction2;
var myFuction3;
myFuction = 10;
console.log(myFuction);
myFuction = plus;
console.log(myFuction(5, 5));
myFuction = saludar;
console.log(myFuction("Luis"));
myFuction = salvarMundo;
myFuction();
myFuction2 = plus;
console.log(myFuction2(10, 20));
myFuction3 = salvarMundo;
myFuction3();
//# sourceMappingURL=types.js.map