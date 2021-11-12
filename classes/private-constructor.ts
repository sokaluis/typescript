class RealApocalipsis {
  static instance: RealApocalipsis;
  private constructor(public name: string) {}

  static llamarApocalipsis() {
    if (!RealApocalipsis.instance) {
      RealApocalipsis.instance = new RealApocalipsis(
        "Soy Apocalipsis... el único"
      );
    }
    return RealApocalipsis.instance;
  }

  changeName(newName: string): void {
    this.name = newName;
  }
}

let real = RealApocalipsis.instance;

let apocalips1 = real.changeName("Logan");

console.log(real);
