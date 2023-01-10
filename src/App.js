import styles from "./App.module.css";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar.jsx";
import characters from "./data.js";

function onSearch(id){
  alert(id)
}
function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container} style={{ padding: "25px"}}>
        <div>
          <NavBar onSearch={onSearch} />
        </div>
          <hr/>
        <div>
          <Cards characters={characters} />
        </div>
      </div>
    </div>
  );
}

export default App;
