import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../pages/Index/Index';
import PokemonPage from '../pages/pokemonPage/PokemonPage';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/pokemon/:name" component={PokemonPage} />
      <Route exact path="*" component={Index} />
    </Switch>
  );
}
