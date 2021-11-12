class AvengerExtend {
  constructor(public name: string, public realName: string) {
    console.log("AvengerExtend call");
  }

  protected getFullName() {
    console.log(`${this.name} es ${this.realName}`);
  }
}

class XmenExtend extends AvengerExtend {
  constructor(public isMutand: boolean, name: string, realName: string) {
    super(name, realName);
    console.log("XmenExtend extends AvengerExtend call");
  }

  public getXmenName() {
    super.getFullName();
  }
}

const xmen: XmenExtend = new XmenExtend(false, "Logan", "Wolverine");

xmen.getXmenName();
