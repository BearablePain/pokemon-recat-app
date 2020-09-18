import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getPokemons, startFetchAbility } from '../../../redux/action';
import { ButtonPrimary } from '../../Button/ButtonBack';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  padding: 40px;
`;

const Text = styled.p`
  line-height: 1.5;
`;

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
        if (el.ability.name === abilityParams ) {
          dispatch(startFetchAbility(el.ability.url));
        }
      });
    }
  }, [pokemon]);

  let ability = useSelector((state) => state.ability);
console.log(ability)
  return (
    <>
      <Container>
        {ability.effect_entries && (
          <Text>{ability.effect_entries[1].effect}</Text>
        )}
        <ButtonPrimary onClick={history.goBack}>go Back</ButtonPrimary>
      </Container>
    </>
  );
};

export default MoreDetalisAbility;
