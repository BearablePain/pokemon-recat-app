import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { getPokemons } from '../../redux/action';
import ButtonPrimary from '../Button/ButtonBack';
import getId from '../ListPokemons/generatorId';
import {
  Table, Td, Container, TdName,
} from './MoreDetalisPokemonStyle';

const MoreDetalisPokemon = () => {
  const pokemonParams = useParams().name;
  const dispatch = useDispatch();
  const history = useHistory();

  // выявить нужного покемона для отображения
  const pokemon = useSelector((state) => state.pokemons.find((el) => pokemonParams === el.name));

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

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
                    <TdName>Name</TdName>
                    <Td>{pokemon.name}</Td>
                  </tr>
                  <tr>
                    <TdName>Type</TdName>
                    <Td>
                      {pokemon.types.length > 0
                        ? pokemon.types.join(', ')
                        : pokemon.types}
                    </Td>
                  </tr>
                  <tr>
                    <TdName>Height</TdName>
                    <Td>{pokemon.height}</Td>
                  </tr>
                  <tr>
                    <TdName>Weight</TdName>
                    <Td>{pokemon.weight}</Td>
                  </tr>
                  <tr>
                    <TdName>Abilities</TdName>
                    <Td>
                      {pokemon.abilities.map((el, i) => (
                        <Link
                          style={{ textDecoration: 'none' }}
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
              <ButtonPrimary
                onClick={history.goBack}
                style={{ alignSelf: 'center' }}
              >
                Go Back
              </ButtonPrimary>
            </div>
          </Container>
        </>
      )}
    </>
  );
};

export default MoreDetalisPokemon;
