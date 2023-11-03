import { useEffect, useState } from "react";
import Context from "../../services/Context";
import style from "./GoalForm.module.css";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

function GoalForm() {
  const [state, dispatch] = useContext(Context);
  const navegation = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    icon: "",
    frecuencia: "",
    periodo: "",
    detalles: "",
    completado: "",
    meta: "",
    plazo: "",
  });

  const momet = ["Día", "Semana", "Mes", "Cuatrimestres", "Semestre"];
  const iconos = [
    "🚴‍♀️",
    "🏃",
    "💻",
    "🎮",
    "🎭",
    "🎨",
    "🌍",
    "🥦",
    "🚵",
    "💪",
    "📚",
    "📝",
    "⚽",
  ];

  const { icon, frecuencia, periodo, detalles, completado, meta, plazo } = form;

  const handleChange = (prop, value) => {
    setForm((state) => ({ ...state, [prop]: value }));
  };

  /* Crear nuevo elemento */
  const handleCreate = () => {
    dispatch({
      type: "CREATE",
      payload: form,
    });
    navegation("/lista");
  };

  const handleCancel = () => {
    navegation("/lista");
  };

  const handleUpdate = () => {
    dispatch({
      type: "UPDATE",
      payload: form,
    });
    navegation("/lista");
  };

  const handleDelete = () => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
    navegation("/lista");
  };

  const memoriGoal = state.objects[id];
  useEffect(() => {
    if (!id) return;
    if (!memoriGoal) {
      navegation("/lista");
    }
    setForm(memoriGoal);
  }, [id, navegation, memoriGoal]);

  return (
    <div className="rounded-xl nm-flat-gray-50  pt-3 mx-4 my-6 overflow-hidden">
      <form className="px-6">
        <label className={style.label} htmlFor="detalle">
          Describe tu Meta
        </label>
        <input
          className={style.input}
          type="text"
          id="detalle"
          placeholder="Ej: Hacer ejercicio..."
          value={detalles}
          onChange={(e) => handleChange("detalles", e.target.value)}
        />

        <label className={style.label} htmlFor="frecuencia">
          Con que frecuencia deseas cumplier tu meta?
          <span className="text-gray-400"> Ej: 1 vez / Semana </span>
        </label>
        <div className="flex gap-8">
          <div className="w-1/2">
            <input
              className={style.input}
              type="number"
              value={frecuencia}
              onChange={(e) => handleChange("frecuencia", e.target.value)}
            />
          </div>

          <div className="w-1/2">
            <select
              className={style.input}
              value={periodo}
              onChange={(e) => handleChange("periodo", e.target.value)}
            >
              {momet.map((option) => (
                <option key={option}> {option} </option>
              ))}
            </select>
          </div>
        </div>

        <label className={style.label} htmlFor="meta">
          Cuantas veces deseas hacer esta meta?
        </label>
        <input
          className={style.input}
          type="number"
          id="meta"
          value={meta}
          onChange={(e) => handleChange("meta", e.target.value)}
        />

        <label className={style.label} htmlFor="culminación">
          Tienes uan fecha limite?
        </label>
        <input
          className={style.input}
          type="date"
          id="culminación"
          value={plazo}
          onChange={(e) => handleChange("plazo", e.target.value)}
        />

        <label className={style.label} htmlFor="completado">
          Cuantas veces haz hecho esta meta?
        </label>
        <input
          className={style.input}
          type="number"
          id="completado"
          value={completado}
          onChange={(e) => handleChange("completado", e.target.value)}
        />

        <label className={style.label} htmlFor="icon">
          Elige un icono para la meta
        </label>
        <select
          className={style.input}
          name="icon"
          id="icon"
          value={icon}
          onChange={(e) => handleChange("icon", e.target.value)}
        >
          {iconos.map((icon) => (
            <option value={icon} key={icon}>
              {" "}
              {icon}{" "}
            </option>
          ))}
        </select>
      </form>
      <div className={style.botones}>
        {!id && (
          <button className="button button--black" onClick={handleCreate}>
            Crear
          </button>
        )}
        {id && (
          <button onClick={handleUpdate} className="button button--black">
            Actualizar
          </button>
        )}
        {id && (
          <button onClick={handleDelete} className="button button--red">
            Borrar
          </button>
        )}
        <button onClick={handleCancel} className="button button--gray">
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default GoalForm;
