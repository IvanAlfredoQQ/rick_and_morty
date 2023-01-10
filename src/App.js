import React from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const [characters, setCharacters] = React.useState([]);

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
  function onClose(id){
    setCharacters((data)=>{
      return data.filter((e)=>e.id !== id)
    })
  }

  return (
    <div className={styles.App}>
      <div className={styles.container} style={{ padding: "25px" }}>
        <div>
          <NavBar onSearch={onSearch} />
        </div>
        <hr />
        <div>
          <Cards characters={characters} onClose={onClose}/>
        </div>
      </div>
    </div>
  );
}

export default App;
