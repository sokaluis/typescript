/*
Object Destructurin
*/

type Avenger = {
  ironman: string,
  nick: string,
  vision: string,
}

let avengers1: Avenger = {
  ironman: "Robert Downey Jr",
  nick: "Samuel Jackson",
  vision: "Paul Bettany",
}

let {
  ironman: warmachine, // I'm able to rename variables in destructuring
  nick,
  vision,
  // thor = "Chris" // In JS it's a valid code bc you are adding a variable with default value, but in TS not.
} = avengers1;

/*
Array Destructurin
*/
let avengers2 = ["Robert Downey Jr", "Samuel Jackson", "Paul Bettany"];

let [avenger1] = avengers2;
let [, avenger2] = avengers2;
let [, , avenger3] = avengers2;

console.log(avenger1)
console.log(avenger2)
console.log(avenger3)