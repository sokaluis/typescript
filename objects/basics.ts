
let flash: {
	name: string,
	age: number,
	powers: string[],
	getName: () => string,
} = {
	name: "Barry Allen",
	age: 25,
	powers: ["Run", "Time travel"],
	getName() {
		return this.name;
	},
};

flash = {
	name: "Superman",
	age: 500,
	powers: ["Fly"],
	getName() {
		return this.name;
	},
}
