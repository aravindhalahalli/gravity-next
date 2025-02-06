'use client'
import SearchForm from './components/SearchForm';
import PokemonList from './components/PokemonList';
import { usePokemon } from './hooks/usePokemon';

export default function Home() {
  const { filteredList, handleTypeChange, handleSearch } = usePokemon();

  return (
    <div className="max-w-screen-md mx-auto p-4 mt-8">
      <h1 className="text-3xl font-bold mb-8">Pokemon Search</h1>
      <SearchForm onSearch={handleSearch} onTypeChange={handleTypeChange} />
      <PokemonList pokemonList={filteredList} />
    </div>
  );
}
