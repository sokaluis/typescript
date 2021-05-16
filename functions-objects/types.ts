function sumar(a: number, b: number): number {
    return a + b;
}

function saludar(nombre: string): string {
    return `I'm ${nombre}`;
}

function salvarMundo(): void {
    console.log('El mundo esta salvado.');
}

let myFuction;
let myFuction2: (a: number, b: number) => number;

myFuction = 10;
console.log(myFuction);

myFuction = sumar;
console.log(myFuction(5, 5));

myFuction = saludar;
console.log(myFuction("Luis"));

myFuction = salvarMundo;
myFuction();

myFuction2 = sumar;
console.log(myFuction2(10, 20));