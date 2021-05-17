function plus(a: number, b: number): number {
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
let myFuction3: () => void;

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