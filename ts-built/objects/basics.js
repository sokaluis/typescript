"use strict";
var flash = {
    name: "Barry Allen",
    age: 25,
    powers: ["Run", "Time travel"],
    getName: function () {
        return this.name;
    },
};
var superman = {
    name: "Clark Kent",
    age: 500,
    powers: ["Fly"],
    getName: function () {
        return this.name;
    },
};
// Mutliple type definitios
var villano = "Darkside";
// Verify data types
var cosa = function () {
    return null;
};
console.log(typeof cosa);
var cosa2 = "Hola";
if (typeof cosa2 === 'string') {
    console.log("Cosa es un string");
}
else {
    console.log("Este código no contiene un string");
}
//# sourceMappingURL=basics.js.map