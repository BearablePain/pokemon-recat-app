import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getPokemons, startFetchAbility } from '../../../redux/action';

const MoreDetalisAbility = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const pokemonParams = useParams().name;
  const abilityParams = useParams().ability;

  const pokemon = useSelector((state) =>
    state.pokemons.find((el) => pokemonParams === el.name)
  );
  useEffect(() => {
    console.log('сработала загрузка покемонов');
    if (Object.keys(ability).length === 0) {
      dispatch(getPokemons());
    }
  }, []);

  useEffect(() => {
    if (pokemon) {
      console.log('сработала загрузка способности');
      pokemon.abilities.forEach((el) => {
        if (el.ability.name === abilityParams) {
          dispatch(startFetchAbility(el.ability.url));
        }
      });
    }
  }, [pokemon]);

  let ability = useSelector((state) => state.ability);

  return (
    <>
      {ability.effect_entries && <p>{ability.effect_entries[1].effect}</p>}
      <button onClick={history.goBack}>go Back</button>
    </>
  );
};

export default MoreDetalisAbility;
