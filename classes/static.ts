class StaticXmen {
  static xmenName: string = "Wolverine";
  constructor() { }

  static createXmen() {
    console.log("Se ha creado un Xmen con Static Method")
    return new StaticXmen();
  }
}

let wolverine = StaticXmen.xmenName;
let wolverine2 = StaticXmen.createXmen();

console.log(wolverine);
console.log(wolverine2);