(() => {
  interface Xmean {
    name: string;
    realName: string;
    mutanPower: (id: number) => string;
  }

  interface Human {
    age: number;
  }

  class MutantX implements Xmean, Human {
    public age: number = 10;
    public name: string = "Xmen";
    public realName: string = "Real Xmen";

    mutanPower(id: number) {
      return `${this.age} ${id} ${this.realName}`;
    }
  }

  const mutan = new MutantX();

  mutan.age = 54;
  mutan.mutanPower(123);
})();
