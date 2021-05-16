"use strict";
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medium"] = 5] = "medium";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
;
var audio = Volumen.min;
console.log(audio);
