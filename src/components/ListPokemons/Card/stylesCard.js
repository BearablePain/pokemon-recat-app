import styled from 'styled-components';

export const CardDiv = styled.div`
  justify-content: center;
  text-align: center;
  align-self: center;
  justify-self: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  transition: 0.3s;
  width: 70%;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }
`;

export const CardName = styled.p`
  letter-spacing: 2px;
  font-size: 23px;
  font-weight: 550;
  color: #333;
  padding: 2px 16px;
`;
