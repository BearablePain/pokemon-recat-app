import {
  GET_POKEMONS,
  GET_ABILITY_INFO,
  GET_SEARCH_POKEMONS,
} from './actionTypes';

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_ABILITY_INFO:
      return {
        ...state,
        ability: action.payload,
      };
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case GET_SEARCH_POKEMONS:
      return {
        ...state,
        searchPokemons: action.payload,
      };
    default:
      return state;
  }
};
