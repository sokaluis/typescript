class GetAvenger {
  private _name: string | undefined;
  constructor(name?: string) {
    this._name = name;
  }

  get name(): string {
    if (this._name) {
      return this._name;
    } else {
      return "No tiene nombre el Avenger"
    }
  }

  set name(name: string) {
    if (name.length <= 3) {
      throw new Error("Esto esta mal");
    }
    this._name = name;
  }
}

let ciclopes: GetAvenger = new GetAvenger("Wolverine");
console.log(ciclopes.name);

ciclopes.name = "Lee";
console.log(ciclopes.name);