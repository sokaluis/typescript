type AvengerType = {
  name: string,
  weapon: string,
}

let iroman: AvengerType = {
  name: "Tony",
  weapon: "Armorsuit"
}
let thor: AvengerType = {
  name: "Chris",
  weapon: "Martillo"
}
let capitan: AvengerType = {
  name: "Capitan America",
  weapon: "Shield"
}

let avengersArray: AvengerType[] = [iroman, thor, capitan];

// Using For In
for (let i in avengersArray) {
  let avenger: AvengerType = avengersArray[i];
  console.log(`${avenger.name} ${avenger.weapon}`)
}
// Using For Of
for (let avenger of avengersArray) {
  console.log(avenger.name, avenger.weapon);
}

