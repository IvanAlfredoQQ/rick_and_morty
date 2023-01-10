import Card from "./Card";
import styles from "./Cards.module.css"

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.cards}>
      {characters.map((e) => {
        return (
          <Card
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={()=>props.onClose(e.id)}
          />
        );
      })}
    </div>
  );
}

/* Este Componente nos va a servir para renderizar varios componentes Card.

Básicamente, va a recibir un arreglo de personajes (con todos sus datos), y va a utilizar un componente Card (reutilizando el mismo que ya hicimos en el punto anterior) por cada uno de ellos, pasándole las props correspondientes.

Tip: Usar el método map y devolver un componente Card por cada elemento del arreglo. Acá un ejemplo de la documentación de React. */
