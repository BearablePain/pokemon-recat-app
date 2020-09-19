import styled from 'styled-components';

export const Td = styled.td`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #5f6062;
  font-size: 17px;
  padding: 20px 20px 20px 20px;
  border-bottom: 1px solid #e0e0e0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-left: 20%;
`;

export const Table = styled.table`
  ${'' /* border-collapse: separate; */}
  background: #fff;
  border-radius: 5px;
  margin: 10% auto;
  box-shadow: (0px 0px 5px rgba(0, 0, 0, 0.3));
`;

export const Button = styled.button``;
