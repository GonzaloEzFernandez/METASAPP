import Context from "./Context";
import Reducer from "./Reducer";
import { useReducer } from "react";

const listMock = [
  {
    id: "1",
    icon: "🏃",
    frecuencia: "1",
    periodo: "Día",
    detalles: "Correr por 1 hora",
    completado: "56",
    meta: "128",
    plazo: "2024-01-01",
  },
  {
    id: "2",
    icon: "📚",
    frecuencia: "1",
    periodo: "Día",
    detalles: "Estudiar 2/4 horas",
    completado: "120",
    meta: "365",
    plazo: "2024-01-01",
  },
  {
    id: "3",
    icon: "🚴‍♀️",
    frecuencia: "4",
    periodo: "Semana",
    detalles: "Entrenar",
    completado: "43",
    meta: "128",
    plazo: "2024-01-01",
  },
  {
    id: "4",
    icon: "🌍",
    frecuencia: "1",
    periodo: "Semestre",
    detalles: "Viajar",
    completado: "4",
    meta: "12",
    plazo: "2024-01-01",
  },
];

const memoria = localStorage.getItem("metas");
const initialState = memoria
  ? JSON.parse(memoria)
  : {
      order: [], // Contiene las IDs de las metas en un orden específico.
      objects: {}, // Contiene las IDs como propiedades y los valores de cada meta correspondiente
    };

 Reducer(initialState, {
  type: "TRANSFORM_STATE",
  payload: listMock,
}); 

function Memoria({ children }) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
export default Memoria;
