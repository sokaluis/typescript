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
