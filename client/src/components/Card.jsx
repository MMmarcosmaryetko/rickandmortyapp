import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';
import styled from "styled-components";

const CardContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background: transparent;
padding: 0.2rem;
border-radius: 10px;
border: 2px solid;
backdrop-filter: blur(5px);
margin: 1rem;
`;

const Name = styled.h1`
font-weight: bold;
color: black;
// margin: 0px;
margin: 1rem;
`
const Information =styled.p`
font-weight: bold;
font-size: 18px;
color: b;
margin: 0px;
`

function Card({ character, onClose, addFav, removeFav, myFavorites }) {
  const { id, name, status, gender, species, origin, image } = character;
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (Array.isArray(myFavorites)) {
      myFavorites.forEach((fav) => {
        if (fav.id === character.id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavorites, character.id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(character);
    }
  };
  const soloHome = window.location.pathname === '/home';
  return (
    <CardContainer>
    <Name>{name}</Name>
    {/* <button onClick={() => onClose(id)}>X</button> */}
    {soloHome && <button onClick={() => onClose(id)}>X</button>}
    {image && (
      <img src={image} alt={name} style={{ borderRadius: '50%'}}/>
    )}

    {isFav? ( 
      <button onClick={handleFavorite}>❤️</button>
    ) : (
      <button onClick={handleFavorite}>🤍</button>
    )}

    <Information>
    {status && <p>STATUS | {status}</p>}
    {gender && <p>GENDER | {gender}</p>}
    {species && <p>SPECIE | {species}</p>}
    {origin && origin.name && (<p>ORIGIN | {character.origin.name}</p>)}
    </Information>
  </CardContainer>
  )

}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, { addFav, removeFav })(Card);


  // useEffect(() => {
  //   if (Array.isArray(myFavorites)) {
  //     myFavorites.forEach((fav) => {
  //       if (fav.id === character.id) {
  //         setIsFav(true);
  //       }
  //     });
  //   }
  // }, [myFavorites, character.id]);
