"use strict";
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
function llamarBatman(llamar) {
    if (llamar === void 0) { llamar = false; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
}
llamarBatman();
function unirheroes(nombre) {
    var personas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        personas[_i - 1] = arguments[_i];
    }
    return nombre + " " + personas.join(", ");
}
function noHaceNada(numero, texto, booleano, arreglo) {
    return {
        numero: numero,
        texto: texto,
        booleano: booleano,
        arreglo: arreglo,
    };
}
var noHaceNadaTampoco;
//# sourceMappingURL=excercise.js.map