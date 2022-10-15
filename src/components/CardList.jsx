import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const StyledCardList = styled.ul`
  list-style: none;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  justify-content: space-between;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardList = ({ data }) => {
  const cardList = data.map((item) => <Card key={item.name} title={item.name} phone={item.phone} email={item.email} />);
  return <StyledCardList>{cardList}</StyledCardList>;
};

export default CardList;
