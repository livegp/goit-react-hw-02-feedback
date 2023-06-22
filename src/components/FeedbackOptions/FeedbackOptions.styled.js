import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  background-color: #3b5998;
`;

export const Button = styled.button`
  background-color: transparent;
  color: #f7f7f7;
  border: none;
  outline: none;
  width: 100%;
  padding: 10px;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
    background-color: #8b9dc3;
  }

  &:not(:last-child) {
    border-right: 1px solid #f7f7f7;
  }
`;
