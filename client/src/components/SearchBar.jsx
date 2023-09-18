import { useState } from "react";
import styled from "styled-components"

const ButtonSearchBar = styled.button`
background-color: black;
color: white;
font-size: 20px;
border-radius: 5px;
`;

const InputSearchBar = styled.input`
background-color: black;
color: white;
font-size: 20px;
border-radius: 5px;
`


export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    const { value } = event.target;
    setId(value);
  };
  return (
    <div>
      <InputSearchBar type="search" onChange={(e) => handleChange(e)} />
      <ButtonSearchBar onClick={() => onSearch(id)}>Agregar</ButtonSearchBar>
    </div>
  );
}