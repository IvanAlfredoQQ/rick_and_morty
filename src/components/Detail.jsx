import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
 
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          console.log("------>", char);
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
  
  return (
    <div className={styles.box}>
      <div className={styles.txt}>
        <h1>Name: {character?.name}</h1>
        <h3>Status: {character?.status}</h3>
        <p>Species: {character?.species}</p>
        <p>Gender: {character?.gender}</p>
        <p>Origin: {character?.origin?.name}</p>
        <Link to="/home"><button className={styles.button}>Back to Home</button></Link>
        <button className={styles.buttonfav}>Add to favorites</button>
      </div>
      <img className={styles.imgD} src={character.image} alt={character.name} />
    </div>
  );
}

/*


NOTA: Este código es el que buscará al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información.

 */
