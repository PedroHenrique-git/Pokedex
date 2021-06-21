import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { CardPokemon } from './style';

interface IPokemonCard {
  url: string;
}

interface IPokemonData {
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export default function PokemonCard({ url }: IPokemonCard): JSX.Element {
  const [pokemonData, setPokemonData] = useState<IPokemonData>({
    name: '',
    sprites: {
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
  });
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      setIsLoading(false);
      const response = await api.get<IPokemonData>(url);
      const { data } = response;
      setPokemonData(data);
      setIsLoading(true);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(pokemonData);

  return (
    <CardPokemon>
      <h1>{pokemonData.name}</h1>
      <img
        src={pokemonData.sprites.other['official-artwork'].front_default}
        alt={pokemonData.name}
      />
    </CardPokemon>
  );
}
