import React from 'react';
import { GlobalStyles } from './styles/styles';
import ListPokemons from './components/ListPokemons/ListPokemons';
import { Route, Switch } from 'react-router-dom';
import MoreDetalisPokemon from './components/MoreDetalisPokemon/MoreDetalisPokemon.js';
import BackGroundVideo from './components/BackGroundVideo/BackGroundVideo';
import MoreDetalisAbility from './components/MoreDetalisPokemon/MoreDetalisAbility/MoreDetalisAbility';

function App() {
  return (
    <div>
      <BackGroundVideo />
      <GlobalStyles />
      <Switch>
        <Route path="/pokemon/:name/:ability">
          <MoreDetalisAbility />
        </Route>
        <Route path="/pokemon/:name">
          <MoreDetalisPokemon />
        </Route>
        <Route path="/">
          <ListPokemons />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
