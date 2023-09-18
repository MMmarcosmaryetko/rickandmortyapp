import Card from "./Card";
import styled from "styled-components"

const CardsContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 2fr);
align-items: center; 
`

export default function Cards({ characters, onClose }) {
  return (
    <CardsContainer>
      {characters.map(function (character) {
        return (
          <Card key={character.id} character={character} onClose={onClose} />
        );
      })}
    </CardsContainer>
  );
};