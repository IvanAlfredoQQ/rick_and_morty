import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.title}>
          <h2 className={styles.h2}>{props.name}</h2>
          <button className={styles.button} onClick={props.onClose}>X</button>
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
