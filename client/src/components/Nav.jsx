import { Link } from "react-router-dom"
import SearchBar from "./SearchBar";
// import About from "./About";
import styled from "styled-components"

const DivButton = styled.div`
background-color: black;
color: white;
font-size: 20px;
margin:  1rem;
border-radius: 25%;
display: inline-block;
margin-right: 100px;
width: fit-content;
height: fit-content;
padding: 0.5rem;
`
export default function Nav({ onSearch, logout }) {
  return (
    <div>
      <SearchBar onSearch={onSearch}/>
      <Link to="/about">
        <DivButton>About</DivButton>
      </Link>
      <Link to="/home">
        <DivButton>Home</DivButton>
      </Link>
      <Link to="/favorites">
        <DivButton>Favorites</DivButton>
      </Link>
      <DivButton onClick={logout}>Log out</DivButton>
    </div>
  );
}
