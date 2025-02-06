import { useEffect, useState } from "react";
import { PokemonType } from "../types";
import axios from "axios";

function usePokemonTypes() {
    const [types, setTypes] = useState<PokemonType[]>([]);

    useEffect(() => {
        axios.get<{ results: PokemonType[] }>('https://pokeapi.co/api/v2/type')
            .then((response) => {
                setTypes(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching Pokémon types:', error);
            });
    }, []);

    return types;
}

export default usePokemonTypes