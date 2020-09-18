import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3vw;
`;

export const Logo = styled.img`
  margin-top: 100px;
  position: relative;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 25%;
`;
export const Input = styled.input`
  font-family: SourceSansPro-Bold;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  position: relative;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 25%;
  font-size: 1em;
  font-weight: 800;
  color: #333;
  line-height: 1.5;
  display: block;
  width: 30%;
  height: 62px;
  background: transparent;
  letter-spacing: 2px;
`;
