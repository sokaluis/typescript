"use strict";
console.log('Hola Mundo!!');
var vengador = 123;
var existe;
var derrotas;
vengador = "Dr. Strange";
console.log(vengador.charAt(0));
vengador = 150.55;
console.log(vengador.toFixed(2));
vengador = true;
console.log(vengador);
console.log(existe);
console.log(derrotas);
var arreglo = [1, 2, 3, 4, 5, 6, 7, 8];
var vil = ["Omega Rojo", "Dormamu", "Duende Verde"];
console.log(arreglo[0].toFixed(2));
console.log(vil[0].charAt(0));
var cualquierValor = "Cualquier Cosa";
var largoDelString = cualquierValor.length;
console.log(largoDelString);
var esSuperman = true;
var esBatman;
var esAquaman = false;
if (esSuperman) {
    console.log('Estamos salvados');
}
else {
    console.log('Opps... Nop');
}
function convertirClark() {
    return true;
}
esSuperman = convertirClark();
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medium"] = 5] = "medium";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
;
var audio = Volumen.min;
console.log(audio);
function errores(mensaje) {
    throw new Error(mensaje);
}
errores("Error critico... linea 5 alcanzada");
var avengers = 5;
var villanos;
var otros = 2;
otros = 123;
otros = 122.32;
var batman = 'Batman';
var linternaVerde = 'Linterna Verde';
var volcanNegro = 'Volcán Negro';
console.log(batman);
console.log(linternaVerde);
console.log(volcanNegro);
var concatenar = "Los héroes son:" + batman + ', ' + linternaVerde + volcanNegro;
var concat = "Los h\u00E9roes son: " + batman + ", " + linternaVerde + ", " + volcanNegro;
console.log(concatenar);
console.log(concat);
var heroes = ["Dr Strange", 100, true];
heroes.push(true);
console.log(heroes);
function llamar_batman() {
    console.log("Mostrar Batiseñal");
}
var mensaje = llamar_batman();
var heroe = "Flash";
function hereo_name() {
    return heroe;
}
var signal_batman = function () {
    return "Batman's Signal actived,";
};
console.log(hereo_name());
console.log(signal_batman());
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
function nombreObligatorio(nombre, apellido, capitalize) {
    if (capitalize === void 0) { capitalize = false; }
    if (capitalize) {
        return toCapitalize(nombre) + " " + toCapitalize(apellido);
    }
    else {
        return nombre + " " + apellido;
    }
}
function nombreOpcional(nombre, apellido) {
    if (apellido) {
        return " Hola " + nombre + " " + apellido;
    }
    else {
        return " Hola " + nombre;
    }
}
function toCapitalize(word) {
    return word.charAt(0).toLocaleUpperCase() + " " + word.substr(1).toLocaleLowerCase();
}
function nombreRest(nombre) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return nombre + " " + rest.join(' ');
}
var nombreCompleto = nombreObligatorio("Clark", "Kent", true);
var nombre = nombreOpcional("Clark", "Kent");
var apiNames = nombreRest("Clark", "Kent", "Otros", "Casas");
console.log(nombreCompleto);
console.log(nombre);
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
var villano = "Darkside";
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
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos1 = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
function sumar1(a, b) {
    return a + b;
}
var sumar2 = function (a, b) { return a + b; };
function giveOrder(order) {
    return "Hulk " + order;
}
console.log(giveOrder("Smaaash!!!!"));
var giveOrder2 = function (order) { return "Hulk " + order; };
console.log(giveOrder2("Smaaash!!!!"));
var captain_america = {
    name: "Hulk",
    order: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.name + " smaaaash!!!"); }, 1000);
    }
};
captain_america.order();
var name1 = "Bruce";
var name2 = "Ricardo";
function getNames() {
    return name1 + " " + name2;
}
var menssage = "\n1. Linea normal\n2. Robin es: " + name2 + "\n3. Hola " + name1 + "\n4. Los nombres son: " + getNames() + "\n5. " + (name1.length + name2.length) + "\n";
var nombre1 = "Maria";
if (true) {
    var nombre1 = "Bruce";
}
if (false) {
    var nombre2 = "Bruce";
}
console.log(nombre1);
var nombre4 = "Maria";
var nombre5 = "Maria";
if (true) {
    var nombre4_1 = "Bruce";
    nombre5 = "Bruce";
}
console.log(nombre4);
console.log(nombre5);
var OPCIONES = "Activo";
if (true) {
    var OPCIONES_1 = "Desactivo";
}
console.log(OPCIONES);
for (var _i = 0, _a = [1, 2, 3, 4, 5, 6, 7, 8, 9]; _i < _a.length; _i++) {
    var I = _a[_i];
    console.log(I);
}
var AUDIO = {
    status: true,
    audio: 10,
    last: "main",
};
AUDIO.status = false;
AUDIO.audio = 1;
console.log(AUDIO);
//# sourceMappingURL=main.js.map