import React from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
  const [id,setId] = React.useState("")
  function handleInput(event){
    setId(event.target.value)
  }

  return (
    <div>
      <input className={styles.input} name="search" type="text" placeholder="Type character ID" onChange={(e)=>handleInput(e)} value={id}/>
      <button className={styles.button} onClick={() => props.onSearch(id)}>Agregar</button>
    </div>
  );
}
