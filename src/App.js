import React, {useState, useEffect} from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards.jsx";
import Form from "./components/Form";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About";
import Detail from "./components/Detail";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites";



function App() {
const [characters, setCharacters] = useState([]);

const [access, setAccess] = useState(false);

const username = 'iv@gmail.com';
const password = '!1Aa';
const navigate = useNavigate();



function login(userData) {
  if (userData.password === password && userData.username === username) {
    setAccess(true);
    navigate("/home");
    alert("Bienvenidos a mi app de Rick & Morty");
  } else {
    alert("Username o Password incorrectos");
  }
}

function logout() {
  setAccess(false);
  navigate("/");
}

useEffect(() => {
  !access && navigate("/");
  // eslint-disable-next-line
}, [access]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let exist = characters.find((e) => e.id === data.id);
          if (exist) {
            alert("El personaje ya existe");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }
  const location = useLocation();

  function onClose(id) {
    setCharacters((data) => {
      return data.filter((e) => e.id !== id);
    });
  }

  return (
    <div className={styles.App}>
      <div className={styles.container} style={{ padding: "25px" }}>
        <div>
          {location.pathname === "/" ? null : <NavBar logout={logout} onSearch={onSearch} />}
        </div>
        <hr />
        <Routes>
          <Route path="/" element={<Form login={login}/>}></Route>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} ></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/favorites" element={<Favorites characters={characters} onClose={onClose}/>}></Route>
          <Route path="/detail/:detailId" element={<Detail />}></Route>          
        </Routes>
      </div>
    </div>
  );
}

export default App;
