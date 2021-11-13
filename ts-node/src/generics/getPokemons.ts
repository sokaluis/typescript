import axios from "axios";
import { PokemonResponse } from "../interfaces/pokemon";

export const getPokemons = async (id: number): Promise<number> => {
  const resp = await axios.get<PokemonResponse>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  console.log("resp", resp.data.sprites.other);

  return 1;
};
