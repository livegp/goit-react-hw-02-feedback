import styled from 'styled-components';

export const Table = styled.table`
  text-align: center;
  overflow: hidden;

  td {
    padding: 10px;
  }

  td:not(:last-child) {
    text-align: left;
    border-right: 1px solid #f7f7f7;
  }

  tr:nth-child(odd) {
    background-color: #3b5998;
    color: #f7f7f7;
  }
`;
