import { useState, useEffect } from 'react';
import axios from 'axios';
import { Pokemon } from '../types';

export function usePokemon() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredList, setFilteredList] = useState<Pokemon[]>([]);
  const [selectedType, setSelectedType] = useState<string>('');

  useEffect(() => {
    fetchPokemon(selectedType);
  }, [selectedType]);

  const fetchPokemon = async (type: string = '') => {
    const url = type
      ? `https://pokeapi.co/api/v2/type/${type}`
      : 'https://pokeapi.co/api/v2/pokemon?limit=1000';
    const response = await axios.get(url);
    const data = type ? response.data.pokemon.map((p: { pokemon: Pokemon }) => p.pokemon) : response.data.results;
    setPokemonList(data);
    setFilteredList(data);
  };

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
  };

  const handleSearch = (searchTerm: string) => {
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredList(filtered);
  };

  return { pokemonList, filteredList, handleTypeChange, handleSearch };
}
