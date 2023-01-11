import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorites } from "../redux/actions";

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state)=>state.myFavorites)

  function handleFavorite(id) {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorites(id));
    } else {
      setIsFav(true);
      dispatch(addFavorites(id));
    }
  }

  useEffect(() => {
    myFavorites.forEach((id) => {
       if (id === props.id) {
          setIsFav(true);
       }
    });
    // eslint-disable-next-line
 }, [myFavorites]);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.title}>
          <Link className={styles.link} to={`/detail/${props.id}`}>
            <h2 className={styles.h2}>{props.name}</h2>
          </Link>
          </div>
          <div className={styles.buttonbox}>
          {isFav ? (
            <button className={styles.buttonfav} onClick={()=>handleFavorite(props.id)}>❤️</button>
          ) : (
            <button className={styles.buttonfav} onClick={()=>handleFavorite(props.id)}>🤍</button>
          )}
          <button className={styles.button} onClick={props.onClose}>
            X
          </button>
        </div>
        <div>
          <img className={styles.image} src={props.image} alt="Character IMG" />
        </div>
        <div className={styles.tags}>
          <span className={styles.span}>{props.species}</span>
          <span className={styles.span}>{props.gender}</span>
        </div>
      </div>
    </>
  );
}
