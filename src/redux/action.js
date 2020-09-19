import {
  GET_POKEMONS,
  START_FETCH_ABILITY,
  GET_ABILITY_INFO,
  GET_SEARCH_POKEMONS,
} from './actionTypes';

/*
 функция для возврата более подробной информации 
вызывается в функции getPokemons на итерации массива с покемонами
*/

const getMoreDetalis = async (url) => {
  const responce = await fetch(`${url}`);
  const result = await responce.json();
  const pokemon = {
    name: result.name,
    height: result.height,
    weight: result.weight,
    img: result.sprites,
    types: result.types.map((el) => el.type.name),
    abilities: result.abilities,
  };
  return pokemon;
};

//  экшен для загрузки покемонов в стор из pokeapi

export const getPokemons = () => {
  return async (dispatch) => {
    const responce = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const result = await responce.json();
    const pokemonsArr = result.results;
    const pokemons = [];
    for (const key of pokemonsArr) {
      const tempPokemon = await getMoreDetalis(key.url);
      pokemons.push(tempPokemon);
    }

    return dispatch({
      type: GET_POKEMONS,
      payload: pokemons,
    });
  };
};

// экшен для формирования нового списка покемонов при вводе значения в инпут

export const getInputPokemons = (pokemons, input) => {
  const payload = pokemons.filter((el) => el.name.toLowerCase().startsWith(input.toLowerCase()));
  return { type: GET_SEARCH_POKEMONS, payload };
};

//  экшен для запуска саги

export const startFetchAbility = (url) => ({ type: START_FETCH_ABILITY, url });

// экшен для загрузки  инофрмации о способности

export const getInfoTypesAbility = (payload) => ({ type: GET_ABILITY_INFO, payload });
