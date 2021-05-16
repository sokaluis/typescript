"use strict";
function errores(mensaje) {
    throw new Error(mensaje);
}
errores("Error critico... linea 5 alcanzada");
