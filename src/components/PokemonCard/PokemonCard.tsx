import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { CardPokemon } from './style';
import Loading from '../../images/loading.gif';

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
      toast.error(e.message);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CardPokemon>
      <h1>{pokemonData.name}</h1>
      <img
        src={
          isLoading
            ? pokemonData.sprites.other['official-artwork'].front_default
            : Loading
        }
        alt={pokemonData.name}
      />
    </CardPokemon>
  );
}
