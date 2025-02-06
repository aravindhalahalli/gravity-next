// types.ts
export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonType {
    name: string;
    url: string;
}


export interface PokemonDetails {
    name: string;
    sprites: {
      front_default: string;
    };
    abilities: {
      ability: {
        name: string;
      };
    }[];
    types: {
      type: {
        name: string;
      };
    }[];
    stats: {
      base_stat: number;
      stat: {
        name: string;
      };
    }[];
    moves: {
      move: {
        name: string;
      };
    }[];
  }
  