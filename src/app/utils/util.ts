import axios from 'axios';
import { PokemonDetails } from '@/app/types';

export async function fetchPokemonDetails(name: string): Promise<PokemonDetails> {
  const response = await axios.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data;
}

function capitalizeFirstLetter(string:string) {
  return string[0].toUpperCase() + string.slice(1);
}


export function formatPokemonData(pokemon: PokemonDetails) {
  return {
    name: capitalizeFirstLetter(pokemon.name),
    imageUrl: pokemon.sprites.front_default,
    types: pokemon.types.map((type) => type.type.name).join(", "),
    stats: pokemon.stats.map((stat) => stat.stat.name).join(", "),
    abilities: pokemon.abilities.map((ability) => ability.ability.name).join(", "),
    moves: pokemon.moves.slice(0, 6).map((move) => move.move.name).join(", "),
  };
}
