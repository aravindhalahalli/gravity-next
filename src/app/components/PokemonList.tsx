/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { Pokemon } from '../types';

interface PokemonListProps {
  pokemonList: Pokemon[];
}

export default function PokemonList({ pokemonList }: PokemonListProps) {
  if (pokemonList.length === 0) return <div>oops!! We are unable find the data</div>
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemonList.map((pokemon) => {
        const pokemonId = pokemon.url.split('/').slice(-2, -1)[0];
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

        return (
          <div key={pokemon.name}>
            <div className="border rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <div className='bg-white rounded-lg'>
                <img
                  src={imageUrl}
                  alt={pokemon.name}
                  className="w-44 h-44 mx-auto"
                />
              </div>
              <div className='w-24 h-24 p-4'>
                <h2 className="text-xl font-bold capitalize text-center mt-2 text-[#004368]">
                  {pokemon.name}
                </h2>
                <p className='underline text-[#004368] font-normal text-sm py-4'>
                  <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>Details</Link>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}