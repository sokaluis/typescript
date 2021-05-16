"use strict";
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
var nombreCompleto = nombreObligatorio("Clark", "Kent", true);
var nombre = nombreOpcional("Clark", "Kent");
console.log(nombreCompleto);
console.log(nombre);
