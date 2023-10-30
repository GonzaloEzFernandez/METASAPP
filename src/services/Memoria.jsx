import { createContext, useReducer } from "react";

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

const initialState = {
  order: [], // Contiene las IDs de las metas en un orden específico.
  objects: {}, // Contiene las IDs como propiedades y los valores de cada meta correspondiente
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TRANSFORM": {
      const goals = action.goals;
      const newState = {
        order: goals.map((goal) => goal.id), // lista con cada una de las IDs
        objects: goals.reduce(
          (object, goal) => ({ ...object, [goal.id]: goal }),
          {}
        ), // Toma un objeto vacio, copia el objeto y creamos una nueva propiedad(con la id) y los valores de la meta
      };
      return newState;
    }

    case "CREATE": {
      const id = Math.random();
      const newState = {
        order: [...state.order, id],
        objects: {
          ...state.objects,
          [id]: action.goal,
        },
      };
      return newState;
    }

    case "ACTUALIZAR": {
      const id = action.goal.id;
      state.objects[id] = {
        ...state.objects[id],
        ...action.goal,
      };
      const newState = { ...state };
      return newState;
    }

    case "BORRAR": {
      const id = action.id;
      const newOrder = state.order.filter((item) => item !== id);
      delete state.objects[id];
      const newState = {
        order: newOrder,
        objects: state.objects,
      };
      return newState;
    }
  }
};

const goals = reducer(initialState, { type: "TRANSFORM", goals: listMock });

export const GoalContext = createContext(null);

function Memoria({ children }) {
  const [state, dispatch] = useReducer(reducer, goals);

  return (
    <div>
      <GoalContext.Provider value={[state, dispatch]}>
        {children}
      </GoalContext.Provider>
    </div>
  );
}
export default Memoria;
