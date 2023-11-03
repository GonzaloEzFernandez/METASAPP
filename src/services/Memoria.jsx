import Context from "./Context";
import Reducer from "./Reducer";
import { useReducer } from "react";



const memoria = localStorage.getItem("metas");
const initialState = memoria
  ? JSON.parse(memoria)
  : {
      order: [], // Contiene las IDs de las metas en un orden específico.
      objects: {}, // Contiene las IDs como propiedades y los valores de cada meta correspondiente
    };


function Memoria({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
export default Memoria;
