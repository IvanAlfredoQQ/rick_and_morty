import React from 'react';
import SearchBar from "./SearchBar.jsx";
import styles from "./NavBar.module.css";
import {Link} from "react-router-dom"

export default function NavBar(props) {
  return (
    <div className={styles.nav}>
        <div>
          <Link to="/home">
            <button className={styles.button}>Home</button>
            </Link>
        </div>
        <div>
            <button className={styles.button}>Filter</button>
        </div>
        <div>
          <Link to="/about">
            <button className={styles.button}>About</button>
            </Link>
        </div>
        <div>
          <Link to="/favorites">
            <button className={styles.button}>Favorites</button>
            </Link>
        </div>
        <div>
            <SearchBar onSearch={props.onSearch}></SearchBar>
        </div>
        <div>
        <Link to="/">
        <button className={styles.button} onClick={props.logout}>Log Out</button>
        </Link>
        </div>
    </div>
  )
}
