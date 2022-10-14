import styled from "styled-components";

import Card from "./Card";

const StyledCardList = styled.ul`
  list-style: none;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 370px);
  grid-gap: 1rem;
  justify-content: space-between;
`;

const CardList = ({ data }) => {
  const cardList = data.map((item) => (
    <Card
      key={item.name}
      title={item.name}
      phone={item.phone}
      email={item.email}
    />
  ));
  return <StyledCardList>{cardList}</StyledCardList>;
};

export default CardList;
