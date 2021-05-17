class AvengerModel {
  nombre: string;
  poder: string;
  constructor(nombre: string, poder: string) {
    this.nombre = nombre;
    this.poder = poder;
  }
}

class AvengerVolador extends AvengerModel {
  volar: boolean;
  constructor(nombre: string, poder: string) {
    super(nombre, poder);
    this.volar = true;
  }
}

let hulk = new AvengerModel('Hulk', "Fuerza");
let falcon = new AvengerVolador('Falcon', "Vuela");

console.log(hulk);
console.log(falcon);