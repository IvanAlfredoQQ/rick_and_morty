import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
  return (
    <div>
      <input className={styles.input}type="search" />
      <button className={styles.button} onClick={() => props.onSearch("Id not found")}>Agregar</button>
    </div>
  );
}
