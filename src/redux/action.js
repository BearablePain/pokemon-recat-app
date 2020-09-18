import {
  GET_POKEMONS,
  START_FETCH_ABILITY,
  GET_ABILITY_INFO,
  GET_SEARCH_POKEMONS,
} from './actionTypes';

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

export const getPokemons = () => {
  return async (dispatch) => {
    const responce = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const result = await responce.json();
    const polemonsArr = result.results;
    const pokemons = [];

    for (let key in polemonsArr) {
      if (Object.prototype.hasOwnProperty.call(polemonsArr, key)) {
        const tempPokemon = await getMoreDetalis(polemonsArr[key].url);
        pokemons.push(tempPokemon);
      }
    }

    return dispatch({
      type: GET_POKEMONS,
      payload: pokemons,
    });
  };
};

export const getInputPokemons = (pokemons, input) => {
  console.log(pokemons, input);
  const payload = pokemons.filter((el) =>
    el.name.toLowerCase().startsWith(input.toLowerCase())
  );
  console.log(payload);
  return { type: GET_SEARCH_POKEMONS, payload };
};

export const startFetchAbility = (url) => {
  return { type: START_FETCH_ABILITY, url };
};

export const getInfoTypesAbility = (payload) => {
  return { type: GET_ABILITY_INFO, payload };
};
