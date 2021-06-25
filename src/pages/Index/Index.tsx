import React, { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from '../../components/Header/Header';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import { MainContainer } from './style';
import api from '../../services/api';
import Loading from '../../components/Loading/Loading';

interface IData {
  next: string;
  previous: string;
  results: Array<IResult>;
}

interface IResult {
  name: string;
  url: string;
}

const urls: string[] = [];
const pagination = (totalItems: number, limit: number): void => {
  const totalPages: number = Math.ceil(totalItems / limit);
  let offset = 0;

  for (let i = 1; i <= totalPages; i += 1) {
    urls.push(`pokemon?limit=${limit}&offset=${offset}`);
    offset += limit;
  }
};

pagination(1118, 84);

export default function Index(): JSX.Element {
  const [pokemons, setPokemons] = useState<IResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState('');

  const getData = async (url: string) => {
    try {
      setIsLoading(false);
      const response = await api.get<IData>(url);
      const { data } = response;
      const arrayPokemons: IResult[] = data.results;
      setPokemons(arrayPokemons);
      setIsLoading(true);
    } catch (e) {
      toast.error(e.message);
    }
  };

  const getDataSearched = async () => {
    try {
      setIsLoading(false);
      const response = await api.get<IData>(
        `/pokemon/${value.toLowerCase().trim()}`
      );

      if (response.data) {
        const arrayPokemons: IResult[] = [];
        const pokemon: IResult = {
          name: value,
          url: `/pokemon/${value}`,
        };
        arrayPokemons.push(pokemon);
        setPokemons(arrayPokemons);
      }

      setIsLoading(true);
    } catch (e) {
      toast.error(e.message);
      setIsLoading(true);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getDataSearched();
  };

  const pagesBtn = () =>
    urls.map((url, index) => (
      <button onClick={() => getData(url)} type="button">
        {index + 1}
      </button>
    ));

  const form: JSX.Element = (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="search a pokemon"
      />
      <button type="submit">search</button>
    </form>
  );

  useEffect(() => {
    getData('pokemon?limit=84&offset=0');
  }, []);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header msg="Pokedex made in React" form={form} hasForm />
      <MainContainer>
        <ul className="pokemon_container">
          {pokemons.map((pokemon) => (
            <Link to={`/pokemon/${pokemon.name}`}>
              <PokemonCard url={pokemon.url} />
            </Link>
          ))}
        </ul>
        <div className="load_more_container">{pagesBtn()}</div>
      </MainContainer>
    </>
  );
}
