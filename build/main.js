"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hola Mundo!!');
var XmenModel = (function () {
    function XmenModel(name, realName) {
        this.name = name;
        this.realName = realName;
    }
    return XmenModel;
}());
var XmenCo = (function (_super) {
    __extends(XmenCo, _super);
    function XmenCo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return XmenCo;
}(XmenModel));
var wolverine3 = new XmenCo("Wolverine", "Logan");
console.log(wolverine3);
var HeroreAvenger = (function () {
    function HeroreAvenger(name, team, realName) {
        this.name = "Sin nombre";
        this.name = name;
        this.team = team;
        this.realName = realName;
    }
    HeroreAvenger.prototype.bio = function () {
        var mensaje = this.name + " " + this.realName + " " + this.team;
        console.log(mensaje);
        console.log(this.canFight);
        console.log(this.wins);
    };
    HeroreAvenger.prototype.changePublicTeam = function (newTeam) {
        return this.changeTeam(newTeam);
    };
    HeroreAvenger.prototype.changeTeam = function (newTeam) {
        if (newTeam === this.team) {
            return false;
        }
        else {
            return true;
        }
    };
    return HeroreAvenger;
}());
var antman = new HeroreAvenger("Antman", "Cap", "Scott Lang");
antman.name = "Nick Fury";
antman.bio();
antman.changePublicTeam("Cap");
console.log(antman);
var MasterAvenger = (function () {
    function MasterAvenger(name, realName) {
        this.name = name;
        this.realName = realName;
        console.log("Avenger Constructor llamado");
    }
    MasterAvenger.prototype.getNameAvenger = function () {
        console.log("Get name Avenger (protected)");
        return this.name;
    };
    return MasterAvenger;
}());
var Xmen = (function (_super) {
    __extends(Xmen, _super);
    function Xmen(a, b) {
        var _this = this;
        console.log("Xmen Constructor llamado");
        _this = _super.call(this, a, b) || this;
        return _this;
    }
    Xmen.prototype.getXmenName = function () {
        console.log("Get name xmen (public)");
        return _super.prototype.getNameAvenger.call(this);
    };
    return Xmen;
}(MasterAvenger));
var ciclope = new Xmen("Ciclope", "Scott");
console.log(ciclope.getXmenName());
var AvengerExtend = (function () {
    function AvengerExtend(name, realName) {
        this.name = name;
        this.realName = realName;
        console.log("AvengerExtend call");
    }
    AvengerExtend.prototype.getFullName = function () {
        console.log(this.name + " es " + this.realName);
    };
    return AvengerExtend;
}());
var XmenExtend = (function (_super) {
    __extends(XmenExtend, _super);
    function XmenExtend(isMutand, name, realName) {
        var _this = _super.call(this, name, realName) || this;
        _this.isMutand = isMutand;
        console.log("XmenExtend extends AvengerExtend call");
        return _this;
    }
    XmenExtend.prototype.getXmenName = function () {
        _super.prototype.getFullName.call(this);
    };
    return XmenExtend;
}(AvengerExtend));
var xmen = new XmenExtend(false, "Logan", "Wolverine");
xmen.getXmenName();
var GetAvenger = (function () {
    function GetAvenger(name) {
        this._name = name;
    }
    Object.defineProperty(GetAvenger.prototype, "name", {
        get: function () {
            if (this._name) {
                return this._name;
            }
            else {
                return "No tiene nombre el Avenger";
            }
        },
        set: function (name) {
            if (name.length <= 3) {
                throw new Error("Esto esta mal");
            }
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return GetAvenger;
}());
var ciclopes = new GetAvenger("Wolverine");
console.log(ciclopes.name);
ciclopes.name = "Lee";
console.log(ciclopes.name);
var RealApocalipsis = (function () {
    function RealApocalipsis(name) {
        this.name = name;
    }
    RealApocalipsis.llamarApocalipsis = function () {
        if (!RealApocalipsis.instance) {
            RealApocalipsis.instance = new RealApocalipsis("Soy Apocalipsis... el único");
        }
        return RealApocalipsis.instance;
    };
    RealApocalipsis.prototype.changeName = function (newName) {
        this.name = newName;
    };
    return RealApocalipsis;
}());
var real = RealApocalipsis.instance;
var apocalips1 = real.changeName("Logan");
console.log(real);
var StaticXmen = (function () {
    function StaticXmen() {
    }
    StaticXmen.createXmen = function () {
        console.log("Se ha creado un Xmen con Static Method");
        return new StaticXmen();
    };
    StaticXmen.xmenName = "Wolverine";
    return StaticXmen;
}());
var wolverine = StaticXmen.xmenName;
var wolverine2 = StaticXmen.createXmen();
console.log(wolverine);
console.log(wolverine2);
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
var AvengerModel = (function () {
    function AvengerModel(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    return AvengerModel;
}());
var AvengerVolador = (function (_super) {
    __extends(AvengerVolador, _super);
    function AvengerVolador(nombre, poder) {
        var _this = _super.call(this, nombre, poder) || this;
        _this.volar = true;
        return _this;
    }
    return AvengerVolador;
}(AvengerModel));
var hulk = new AvengerModel('Hulk', "Fuerza");
var falcon = new AvengerVolador('Falcon', "Vuela");
console.log(hulk);
console.log(falcon);
var avengers1 = {
    ironman: "Robert Downey Jr",
    nick: "Samuel Jackson",
    vision: "Paul Bettany",
};
var warmachine = avengers1.ironman, nick = avengers1.nick, vision = avengers1.vision;
var avengers2 = ["Robert Downey Jr", "Samuel Jackson", "Paul Bettany"];
var avenger1 = avengers2[0];
var avenger2 = avengers2[1];
var avenger3 = avengers2[2];
console.log(avenger1);
console.log(avenger2);
console.log(avenger3);
var HEROE = "Spiderman";
var spiderman = "Peter Parker";
var venom = "Eddie Brock";
var versiones = ["Spider-Man 2099", "Spider-Girl", "Ultimate Spider-Man"];
var spiderman2099 = versiones[0], spidergirl = versiones[1], ultimate = versiones[2];
var villanos12 = {
    venom: "Eddie Brock",
    carnage: "Cletus Kasady",
    sandman: "William Baker"
};
var spidermanBlack = villanos12.venom, carnage = villanos12.carnage, sandman = villanos12.sandman;
for (var i in versiones) {
    console.log(versiones[i]);
}
for (var _i = 0, versiones_1 = versiones; _i < versiones_1.length; _i++) {
    var version = versiones_1[_i];
    console.log(version);
}
var iroman = {
    name: "Tony",
    weapon: "Armorsuit"
};
var thor = {
    name: "Chris",
    weapon: "Martillo"
};
var capitan = {
    name: "Capitan America",
    weapon: "Shield"
};
var avengersArray = [iroman, thor, capitan];
for (var i in avengersArray) {
    var avenger = avengersArray[i];
    console.log(avenger.name + " " + avenger.weapon);
}
for (var _i = 0, avengersArray_1 = avengersArray; _i < avengersArray_1.length; _i++) {
    var avenger = avengersArray_1[_i];
    console.log(avenger.name, avenger.weapon);
}
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