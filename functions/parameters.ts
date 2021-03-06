function nombreObligatorio(nombre: string, apellido: string, capitalize: boolean = false): string {
    if (capitalize) {
        return `${toCapitalize(nombre)} ${toCapitalize(apellido)}`
    } else {
        return `${nombre} ${apellido}`;
    }
}

function nombreOpcional(nombre: string, apellido?: string): string {
    if (apellido) {
        return ` Hola ${nombre} ${apellido}`;
    } else {
        return ` Hola ${nombre}`;
    }
}

function toCapitalize(word: string): string {
    return `${word.charAt(0).toLocaleUpperCase()} ${word.substr(1).toLocaleLowerCase()}`;
}

function nombreRest(nombre: string, ...rest: string[]): string {
    return `${nombre} ${rest.join(' ')}`;
}

let nombreCompleto: string = nombreObligatorio("Clark", "Kent", true);
let nombre: string = nombreOpcional("Clark", "Kent");
let apiNames: string = nombreRest("Clark", "Kent", "Otros", "Casas");

console.log(nombreCompleto);
console.log(nombre);