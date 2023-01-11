import { ADD_FAVORITES, DELETE_FAVORITES } from "./action_type";

const initialState = {
  myFavorites: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case DELETE_FAVORITES:
      const filtered = state.myFavorites.filter((id) => {
        return id !== payload;
      });
      return {
        ...state,
        myFavorites: filtered,
      };
    default:
      return state;
  }
}

/*Dirígete al archivo en el que se encuentra tu reducer. Allí deberás:

Crear un initialState con una propiedad llamada "myFavorites". Esta propiedad será un array vacío.

Luego deberás crear tu reducer. Recuerda que este recibe dos parámetros, y dentro de él hay un switch.

NOTA: ten en cuenta el modo en el que lo exportas, y cómo lo importas dentro de tu store.

Dentro del switch de tu reducer, crea un nuevo caso en el que podrás agregar el personaje que recibes por payload a tu estado "myFavorites".

Crea un nuevo caso en el elimines el personaje que recibes por payload de tu estado inicial. Deberás filtrar el personaje a partir de su ID.

No te olvides de tu caso default. */
