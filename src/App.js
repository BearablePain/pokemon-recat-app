import React from 'react';
import { GlobalStyles } from './styles/styles';
import ListPokemons from './components/ListPokemons/ListPokemons';
import { Route, Switch } from 'react-router-dom';
import MoreDetalisPokemon from './components/MoreDetalisPokemon/MoreDetalisPokemon.js';
import BackGroundVideo from './components/BackGroundVideo/BackGroundVideo';
import MoreDetalisAbility from './components/MoreDetalisPokemon/MoreDetalisAbility/MoreDetalisAbility';
import Logo from './public/logo.png'
import styled from 'styled-components';





function App() {
  return (
    <div>
    <BackGroundVideo/>
    <GlobalStyles/>
      <Switch>
      <Route path="/pokemon/:name/:ability">
          <MoreDetalisAbility/>
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

// 1. На главном экране приложения должен отображаться список 20
// покемонов в виде картотеки.
// Изображения для карточек можно брать из
// https://placeholder.com/, либо использовать
// заглушку.
// 2. Необходимо сделать фильтрацию по имени в списке покемонов.
// 3. При клике на карточку должен осуществляться переход на
// детальную информацию о покемоне:
// Название, характеристики и изображение покемона
// Тип покемона
// Список способностей в виде неупорядоченного списка ссылок.
// При переходе на ссылки
// показывается детальная информация о способности + ссылка
//  назад для возврата на
// предыдущую страницу.
// 4. На странице покемона должна быть возможность перейти обратно
// на главную страницу.
