import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import Cards from "./components/Cards.jsx";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./components/About";
import Deatil from "./components/Deatil";
import Error from "./components/Error";
import Form from "./components/Form";
import Favorites from "./components/Favorites";


function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const EMAIL = 'm@m.com';
  // const PASSWORD = 'marcos1';


  async function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    try{
      const response = await axios(URL + `?email=${email}&password=${password}`);
      const data = response.data;
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    }
    catch(error){
      console.log(error)
    }
  }
// EXPRESS EXPRESS EXPRESS

  // function login(userData) {
  //   const { email, password } = userData;
  //   const URL = 'http://localhost:3001/rickandmorty/login/';
  //   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //     const { access } = data;
  //     setAccess(data);
  //     access && navigate('/home');
  //   });
  // }

  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);


  const [characters, setCharacters] = useState([]);
  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== id);
    setCharacters(filtered);
  };

  async function onSearch(characterID) {
    try{
      const response = await axios(`https://rickandmortyapi.com/api/character/${characterID}`);
      const data = response.data;
      if (data.id) {
        setCharacters([...characters, data]);
      } else {
        window.alert(`No se puedo encontrar el personaje con ese ID: ${characterID}`);
      }
    }
    catch(error){
      window.alert(error.response.data.error);
    }
  }

  // function onSearch(characterID) {
  //   axios(`https://rickandmortyapi.com/api/character/${characterID}`)
  //     .then(({ data }) => {
  //       if (data.id) {
  //         setCharacters([...characters, data]);
  //       } else {
  //         window.alert(`No se puedo encontrar el personaje con ese ID: ${characterID}`);
  //       }
  //     })
  //     .catch((error) => {
  //       window.alert(error.response.data.error);
  //     });
  //   // window.alert(characterID)
  // }
  
  const location = useLocation();
  const locationPathname = location.pathname;

  return (
    <div className="App">
      {locationPathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}
      <Routes>
      <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
      <Route path="/about" element= {<About />}/>
      <Route path="/detail/:id" element= {<Deatil />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
      <Route path="/" element={<Form login={login}/>}/>
      <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;





// EXPRESS EXPRESS EXPRESS EXPRESS EXPRESS EXPRESS
// import React from "react";
// import "./App.css";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// // import Cards from "./components/Cards.jsx";
// import Cards from "./components/Cards";
// import Nav from "./components/Nav";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import About from "./components/About";
// import Deatil from "./components/Deatil";
// import Error from "./components/Error";
// import Form from "./components/Form";
// import Favorites from "./components/Favorites";
// import './App.css'

// function App() {
//   const navigate = useNavigate();
//   const [access, setAccess] = useState(false);
// //   const EMAIL = 'm@m.com';
// //   const PASSWORD = 'marcos1';

//   function login(userData) {
//     const { email, password } = userData;
//     const URL = 'http://localhost:3001/rickandmorty/login/';
//     axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
//        const { access } = data;
//        setAccess(data);
//        access && navigate('/home');
//     });
//   }

//   function logout() {
//     setAccess(false);
//     navigate("/");
//   }

  // useEffect(() => {
  //   !access && navigate('/');
  // }, [access, navigate]);


//   const [characters, setCharacters] = useState([]);
//   const onClose = (id) => {
//     const filtered = characters.filter((char) => char.id !== id);
//     setCharacters(filtered);
//   };


// function onSearch(id) {
//   axios(`http://localhost:3001/rickandmorty/character/${id}`)
//   .then(({data}) => {
//     const char = characters?.find(e => e.id === Number(data.id))
//     if (char) {
//       alert("Pa q repetir si ya esta") 
//     } 
//     else if(data.id !== undefined) {
//       setCharacters (characters => [...characters, data]);
//     }
//     else {
//       alert('Character not found');
//     }
//   })
// }
  
//   const location = useLocation();
//   const locationPathname = location.pathname;

//   return (
//     <div className="App">
//       {locationPathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}
//       <Routes>
//       <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
//       <Route path="/about" element= {<About />}/>
//       <Route path="/detail/:id" element= {<Deatil />} />
//       <Route path="/favorites" element={<Favorites />} />
//       <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
//       <Route path="/" element={<Form login={login}/>}/>
//       <Route path="*" element={<Error/>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// ******************************************************



//   function onSearch(id) {
//     // console.log(id);
//     // axios(`http://localhost:3001/rickandmorty/character/${id}`)
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//       .then(({ data }) => {
//         if (data.id) {
//           setCharacters([...characters, data]);
//         } else {
//           window.alert(`No se puedo encontrar el personaje con ese ID: ${id}`);
//         }
//       })
//       .catch((error) => {
//         window.alert(error.response.data.error);
//       });
//     // window.alert(id)
//   }
