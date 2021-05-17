type Heroe = {
	name: string,
	age: number,
	powers: string[],
	getName: () => string,
}

let flash: Heroe = {
	name: "Barry Allen",
	age: 25,
	powers: ["Run", "Time travel"],
	getName() {
		return this.name;
	},
};

let superman: Heroe = {
	name: "Clark Kent",
	age: 500,
	powers: ["Fly"],
	getName() {
		return this.name;
	},
};

// Mutliple type definitios
let villano: string | number | Heroe = "Darkside";

// Verify data types
let cosa: any = function () {
	return null;
}
console.log(typeof cosa);

let cosa2: any = "Hola";
if (typeof cosa2 === 'string') {
	console.log("Cosa es un string");
} else {
	console.log("Este código no contiene un string");
}
