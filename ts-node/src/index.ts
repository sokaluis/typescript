import { getPokemons } from "./../generics/getPokemons";

getPokemons(4)
  .then((resp) => console.log(resp))
  .catch((err) => console.error(err));

console.log(`getPokemons()`, getPokemons(4));
