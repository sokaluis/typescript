class HeroreAvenger {
  public name: string = "Sin nombre"; // You can assign default values // public: you are able to have all access to this propety
  protected team: string | undefined; // Protected: you only are able to access in the same Class or subclasses
  private realName: string | undefined; // Private: you only have access in this Class
  private canFight: boolean | undefined;
  private wins: number | undefined;

  constructor(name: string, team: string, realName: string) {
    this.name = name; // Here you are able to reassign values to the properties of the Class
    this.team = team;
    this.realName = realName;
  }

  public bio(): void {
    let mensaje = `${this.name} ${this.realName} ${this.team}`
    console.log(mensaje);
  }

  public changePublicTeam(newTeam: string): boolean {
    return this.changeTeam(newTeam);
  }

  private changeTeam(newTeam: string): boolean {
    if (newTeam === this.team) {
      return false;
    } else {
      return true;
    }
  }

}

let antman = new HeroreAvenger("Antman", "Cap", "Scott Lang");

antman.name = "Nick Fury";  // Only are able to access to this property because it's public 
antman.bio();
antman.changePublicTeam('Cap');

console.log(antman);