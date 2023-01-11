import styles from "./Favorites.module.css";
import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

export default function Favorites(props) {
const myFavorites = useSelector((s)=>s.myFavorites)
const characters = props.characters.filter((e)=>{
    return myFavorites.includes(e.id)
})
  return (
    <>
      <div className={styles.cards}>
        {characters.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              species={e.species}
              gender={e.gender}
              image={e.image}
              onClose={() => props.onClose(e.id)}
            />
          );
        })}
      </div>
    </>
  );
}
