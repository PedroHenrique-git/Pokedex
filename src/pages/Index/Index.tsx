import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { MainContainer } from './style';
import api from '../../services/api';

interface IData {
  next: string;
  previous: string;
  results: Array<IResult>;
}

interface IResult {
  name: string;
  url: string;
}

interface IInfo {
  next: string;
  previous: string;
}

export default function Index(): JSX.Element {
  const [pokemons, setPokemons] = useState<IResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState<IInfo>({
    next: '',
    previous: '',
  });

  const getData = async (url: string) => {
    try {
      setIsLoading(false);
      const response = await api.get<IData>(url);
      const { data } = response;
      const arrayPokemons: IResult[] = data.results;
      setPokemons((oldArray) => [...oldArray, ...arrayPokemons]);
      setPages(data);
      setIsLoading(true);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData('pokemon?limit=40&offset=60');
  }, []);

  return (
    <>
      <Header msg="Pokedex made in React" />
      <MainContainer>
        <ul className="pokemon_container">
          {pokemons.map((pokemon) => (
            <PokemonCard url={pokemon.url} />
          ))}
        </ul>
        <button onClick={() => getData(pages.next)} type="button">
          Load more
        </button>
      </MainContainer>
    </>
  );
}
