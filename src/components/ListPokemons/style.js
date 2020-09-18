import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3vw;
`;

export const Logo = styled.img `

    margin-top: 100px;
    position: relative;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 25%;
`