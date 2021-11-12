class MasterAvenger {
  constructor(public name: string, private realName: string) {
    // You are able to declare public, private or protected variables in the parameter
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
    super(a, b); // Always have to create a super method in the constructor of extended Class
  }
  public getXmenName(): string {
    console.log("Get name xmen (public)");
    return super.getNameAvenger();
  }
}

let ciclope: Xmen = new Xmen("Ciclope", "Scott");
console.log(ciclope.getXmenName());
