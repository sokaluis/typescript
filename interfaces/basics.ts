(() => {
  interface Hero {
    name: string;
    age: number;
    powers: number[];
    getName: () => string;
  }

  const Avenger45: Hero = {
    age: 54,
    getName() {
      console.log("");
      return this.name;
    },
    name: "Logam",
    powers: [1, 23, 4, 5],
  };

  console.log(Avenger45);
})();
