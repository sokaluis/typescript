// Funciones Básicas
function sumar(a: number, b: number): number {
  return a + b;
}

let contar = function (heroes: string[]): number {
  return heroes.length;
}
let superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
function llamarBatman(llamar: boolean = false): void {
  if (llamar) {
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes(nombre: string, ...personas: any[]): string {
  return `${nombre} ${personas.join(", ")}`;
}

// Tipo funcion
interface Nothing {
  numero: number,
  texto: string,
  booleano: boolean,
  arreglo: string[],
}

function noHaceNada(numero: number, texto: string, booleano: boolean, arreglo: string[]): Nothing {
  return {
    numero,
    texto,
    booleano,
    arreglo,
  }
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (numero: number, texto: string, booleano: boolean, arreglo: string[]) => Nothing;
