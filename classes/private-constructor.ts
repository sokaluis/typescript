class RealApocalipsis {
  static instance: RealApocalipsis;
  private constructor(public name: string) { }

  static llamarApocalipsis() {
    if (!RealApocalipsis.instance) {
      RealApocalipsis.instance = new RealApocalipsis("Soy Apocalipsis... el único");
    }
    return RealApocalipsis.instance;
  }
}

let real = RealApocalipsis.instance;

console.log(real);