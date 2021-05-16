function nombreCompleto ( nombre: string, apellido: string ): string {
    return `${nombre} ${apellido}`;
}

let nombre: string = nombreCompleto("Clark", "Kent");

console.log(nombre);