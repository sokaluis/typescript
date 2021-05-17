class MasterAvenger {
  constructor(public name: string, private realName: string,) {
    console.log("Avenger Constructor llamado");
  }
  protected getNameAvenger(): string {
    console.log("Get name Avenger (protected)");
    return this.name;
  }
}

class Xmen extends MasterAvenger {
  constructor(a: string, b: string) {
    console.log("Xmen Constructor llamado");
    super(a, b);
  }
  public getXmenName(): string {
    console.log("Get name xmen (public)");
    return super.getNameAvenger();
  }
}

let ciclope: Xmen = new Xmen("Ciclope", "Scott");
console.log(ciclope.getXmenName());