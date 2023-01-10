import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <button className={styles.button} onClick={props.onClose}> X </button>
      <div className={styles.txt}>
        <h2 className={styles.h2}>{props.name}</h2>
        <p className={styles.p}>{props.species}</p>
        <p className={styles.p}>{props.gender}</p>
        <img className={styles.image} src={props.image} alt="Character IMG" />
      </div>
    </div>
  );
}
