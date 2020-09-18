import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Link, useHistory, useParams } from 'react-router-dom';
import { getPokemons, startFetchAbility } from '../../redux/action';
import { ButtonPrimary } from '../Button/ButtonBack';
import getId from '../ListPokemons/generatorId';
import { Table, Td, Container, Button } from './MoreDetalisPokemonStyle';

const MoreDetalisPokemon = () => {
  const pokemonParams = useParams().name;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const pokemon = useSelector((state) =>
    state.pokemons.find((el) => pokemonParams === el.name)
  );

  return (
    <>
      {pokemon && (
        <>
        <Container>
          <img
            src={pokemon.img.front_shiny}
            alt="Avatar"
            style={{ width: '32%' }}
          />
          <div>
          <Table>
            <tbody>
              <tr>
                <Td>Name</Td>
                <Td>{pokemon.name}</Td>
              </tr>
              <tr>
                <Td>Type</Td>
                <Td>
                  {pokemon.types.length > 0
                    ? pokemon.types.join(', ')
                    : pokemon.types}
                </Td>
              </tr>
              <tr>
                <Td>Height</Td>
                <Td>{pokemon.height}</Td>
              </tr>
              <tr>
                <Td>Weight</Td>
                <Td>{pokemon.weight}</Td>
              </tr>
              <tr>
                <Td>Abilities</Td>
                <Td>
                  {pokemon.abilities.map((el, i) => (
                    <Link
                      to={`${pokemonParams}/${el.ability.name}`}
                      key={getId()}
                    >
                      {i === pokemon.abilities.length - 1
                        ? el.ability.name
                        : `${el.ability.name}, `}
                    </Link>
                  ))}
                </Td>
              </tr>
            </tbody>

          </Table>
          <ButtonPrimary onClick={history.goBack} style = {{alignSelf: 'center'}}>Go Back</ButtonPrimary>
</div>
        </Container>

</>
      )}
    </>
  );
};

export default MoreDetalisPokemon;
