import GoalElement from "./GoalElement";

const listMock = [{
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
    icon: "🏋",
    frecuencia: "4",
    periodo: "Semana",
    detalles: "Entrenar",
    completado: "43",
    meta: "365",
    plazo: "2024-01-01",
  }]

function List() {
    return ( 
        <>
           {listMock.map(goal => <GoalElement {...goal} ></GoalElement>)}
        </>
     );
}

export default List ;