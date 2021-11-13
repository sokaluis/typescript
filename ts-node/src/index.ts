import { PokemonClass } from "./decorators/PokemonClass";

const charmander = new PokemonClass("Charmander");

// (PokemonClass.prototype as any).customName = "Pikachu";

// console.log(`charmander`, charmander.savePokemonToDB(50));

// charmander.publicAPI = "luis"; // READONLY

charmander.savePokemonToDB(50);
