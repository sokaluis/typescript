function errores(mensaje: string): never {
    throw new Error(mensaje);
}

errores("Error critico... linea 5 alcanzada");