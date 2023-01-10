import React from 'react'
import SearchBar from "./SearchBar.jsx";
import styles from "./NavBar.module.css"

export default function NavBar(props) {
  return (
    <div className={styles.nav}>
        <div>
            <button className={styles.button}>Home</button>
        </div>
        <div>
            <button className={styles.button}>Filter</button>
        </div>
        <div>
            <SearchBar onSearch={props.onSearch}></SearchBar>
        </div>
    </div>
  )
}
