/* eslint-disable @next/next/no-img-element */
import { fetchPokemonDetails, formatPokemonData } from "@/app/utils/util";
import Link from "next/link";

export default async function PokemonDetailsPage({ params }: { params: { name: string } }) {
  const { name } = params;
  const pokemon = await fetchPokemonDetails(name);
  const formattedPokemon = formatPokemonData(pokemon);

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <Link href="/" className="text-[#60E2C9] font-bold hover:underline">
          &lt; Back
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-rows-2 h-[500px]">
          <div className="flex justify-center items-center bg-[#60e2c9]">
            <img
              src={formattedPokemon.imageUrl}
              alt={formattedPokemon.name}
              className="h-48 w-48 object-contain"
            />

          </div>

          <div className="p-4 bg-[#FDC666]">
            <p><b>Name:</b> {formattedPokemon.name}</p>
            <p><b>Type:</b> {formattedPokemon.types}</p>
            <p><b>Stats:</b> {formattedPokemon.stats}</p>
            <p><b>Abilities:</b> {formattedPokemon.abilities}</p>
            <p><b>Some Moves:</b> {formattedPokemon.moves}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


