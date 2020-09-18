import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInputPokemons, getPokemons } from '../../redux/action';
import getId from './generatorId';
import Card from './Card/Card';
import { Container, Logo, Input } from './ListPokemonStyle';
import LogoImage from '../../public/logo.png';


const ListPokemons = () => {
  const [pokemonsState, setPokemonsState] = useState([]);

  const pokemons = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();
  const searchPokemos = useSelector((state) => state.searchPokemons);



  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  useEffect(() => {
    setPokemonsState(state =>
      searchPokemos.length > 0 ? (state = searchPokemos) : (state = pokemons)
    );
  }, [pokemons, searchPokemos]);

  return (
    <>
      <Logo src={LogoImage} alt="Avatar" />
      <div>
        <Input
          type="text"
          placeholder="Search..."
          name="searchPokemons"
          onChange={(e) => dispatch(getInputPokemons(pokemons, e.target.value))}
        />
      </div>

      <Container>
        {pokemonsState.map((el) => (
          <Card name={el.name} srcImg={el.img.front_default} key={getId()} />
        ))}
      </Container>
    </>
  );
};
export default ListPokemons;
