"use strict";
function sumar(a, b) {
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
myFuction = 10;
console.log(myFuction);
myFuction = sumar;
console.log(myFuction(5, 5));
myFuction = saludar;
console.log(myFuction("Luis"));
myFuction = salvarMundo;
myFuction();
myFuction2 = sumar;
console.log(myFuction2(10, 20));
