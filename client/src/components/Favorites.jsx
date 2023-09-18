import React, {useState} from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { useDispatch} from 'react-redux';
import { orderCards, filterCards } from '../redux/actions';
import styled from "styled-components"

const Div = styled.div`
display: grid;
grid-template-columns: repeat(4, 2fr);
align-items: center; 
`

const Select = styled.select`
background-color: black;
color: white;
font-size: 25px;
border-radius: 5px;
`
const PerFav = styled.h1`
font-size: 60px;
`

const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch()

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  }

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
    if (e.target.value === "Male") {
      dispatch(filterCards(e.target.value));
    }
  }
    return (
      <div>
        <div><PerFav>Mis personajes favoritos</PerFav></div>
        <Select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </Select>

        <Select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </Select>
        <Div>
        {Array.isArray(myFavorites) && myFavorites.map((character) => (
          <Card key={character.id} character={character} />
        ))}
        </Div>
      </div>
    );
  };

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites, 
  };
};

export default connect(mapStateToProps)(Favorites);



// **************************************************************************
      //  {/* <Div> 
        // {Array.isArray(myFavorites) && myFavorites.map((character) => (
        //   <Card key={character.id} character={character} />
        // ))}
        // </Div>  */} 