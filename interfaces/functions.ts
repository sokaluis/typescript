(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addTwoNumbersFunc: addTwoNumbers;

  addTwoNumbersFunc = (a: number, b: number) => {
    return a + b;
  };
})();
