import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MainContainer } from './style';
import Header from '../../components/Header/Header';
import api from '../../services/api';
import Loading from '../../components/Loading/Loading';
import ReturnColor from '../../utils/returnColor';

interface IParams {
  name: string;
}

interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{
    slot: number;
    type: {
      name: string;
    };
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
  forms: Array<{
    name: string;
  }>;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export default function PokemonPage(): JSX.Element {
  const { name } = useParams<IParams>();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<IPokemon>({
    id: 0,
    forms: [
      {
        name: '',
      },
    ],
    height: 0,
    name: '',
    sprites: {
      other: {
        'official-artwork': {
          front_default: '',
        },
      },
    },
    stats: [
      {
        base_stat: 0,
        stat: {
          name: '',
        },
      },
    ],
    types: [
      {
        slot: 0,
        type: {
          name: '',
        },
      },
    ],
    weight: 0,
  });

  const getDataPokemon = async () => {
    try {
      setIsLoading(false);
      const response = await api.get<IPokemon>(`pokemon/${name}`);
      const { data } = response;
      setPokemon(data);
      setIsLoading(true);
    } catch (e) {
      toast.error(e.message);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    getDataPokemon();
  }, []);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header msg="Pokedex made in React" form={undefined} hasForm={false} />
      <MainContainer
        MainColor={ReturnColor(pokemon.types[0].type.name)}
        qtdForms={pokemon.forms.length}
      >
        <div className="basic_informations">
          <h1 className="pokemon_title_mobile">{pokemon.name}</h1>
          <div className="information">
            <h2>id</h2>
            <p>#{pokemon.id}</p>
          </div>
          <div className="information">
            <h2>name</h2>
            <p>{pokemon.name}</p>
          </div>
          <div className="information">
            <h2>height</h2>
            <p>{pokemon.height}</p>
          </div>
          <div className="information">
            <h2>weight</h2>
            <p>{pokemon.weight}</p>
          </div>
          <div className="information">
            <h2>types</h2>
            <ul className="pokemon_types">
              {pokemon.types.map((type) => (
                <li>{type.type.name}</li>
              ))}
            </ul>
          </div>
          <div className="information">
            <h2>forms</h2>
            <ul className="pokemon_forms">
              {pokemon.forms.map((form) => (
                <li>{form.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="main_informations">
          <h1>{pokemon.name}</h1>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
          />
        </div>
        <div className="pokemon_stats">
          {pokemon.stats.map((stat) => (
            <div className="stat">
              <h2>{stat.stat.name}</h2>
              <p>{stat.base_stat}</p>
            </div>
          ))}
        </div>
      </MainContainer>
    </>
  );
}
