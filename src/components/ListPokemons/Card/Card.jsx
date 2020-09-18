import React from 'react';
import { Link } from 'react-router-dom';
import getId from '../generatorId';
import { CardName } from './stylesCard';
import { CardDiv } from './stylesCard';

const Card = (props) => {
const {name, srcImg} = props
  return (
    <>
      <CardDiv>
      <Link  to={`/pokemon/${name}`}>
        <img src={srcImg} alt="Avatar" style={{ width: '60%' }} />
        </Link>
        <div>
          <CardName>
            {`${name[0].toUpperCase()}${name.slice(1)}`}
          </CardName>
          </div>
      </CardDiv>
    </>
  );
};

export default Card;
