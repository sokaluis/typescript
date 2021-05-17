// ES5
function sumar1(a: number, b: number): number {
  return a + b;
}
// ES6 
let sumar2 = (a: number, b: number): number => a + b; // Implicit return with 1 code line inside
// ======================================================
// ES5
function giveOrder(order: string): string {
  return `Hulk ${order}`;
}
console.log(giveOrder("Smaaash!!!!"));
// ES6
let giveOrder2 = (order: string): string => `Hulk ${order}`;
console.log(giveOrder2("Smaaash!!!!"));
// ======================================================
let captain_america = {
  name: "Hulk",
  order: function () {
    // setTimeout( function() { // ES5 Function lose the this reference inside method
    //   console.log(`${this.name} smaaaash!!!` );
    // }, 1000);
    setTimeout((): void => console.log(`${this.name} smaaaash!!!`), 1000); // Arrow function doesn't lose the this references inside methods
  }
}

captain_america.order();