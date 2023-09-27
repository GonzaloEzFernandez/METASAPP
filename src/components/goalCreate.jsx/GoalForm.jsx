import style from "./GoalCreate.module.css";

function GoalForm() {
  const periodo = {};

  return (
    <div>
      <form className="rounded-xl nm-flat-white p-8 mt-3 mx-5">
        <label className={style.label} htmlFor="descripción">
          Describe tu Meta
        </label>
        <input
          className={style.input}
          type="text"
          id="descripción"
          placeholder="Ej: Hacer ejercicio..."
        />

        <div className="flex gap-12">
          <div className="w-1/2">
            <label className={style.label} htmlFor="frecuencia">
              Con que frecuencia deseas cumplier tu meta?{" "}
              <span className="text-gray-500">ej: 1 vez a la semana</span>
            </label>
            <input className={style.input} type="number" id="frecuencia" />
          </div>

          <div className="w-1/2">
            <label className={style.label} htmlFor="periodo">
              Describe tu Meta
            </label>
            <select className={style.input}>
              <option value="diario">Día</option>
              <option value="semanal">Semana</option>
              <option value="mensual">Mes</option>
              <option value="cuatrimestral">Cuatro meses</option>
              <option value="semestral">Seis Meses</option>
            </select>
          </div>
        </div>

        <label className={style.label} htmlFor="meta">
          Cuantas veces deseas completar esta meta?
        </label>
        <input className={style.input} type="number" id="meta" />

        <label className={style.label} htmlFor="culminación">
          Tienes uan fecha limite?
        </label>
        <input className={style.input} type="date" id="culminación" />

        <label className={style.label} htmlFor="meta">
          Cuantas veces haz completado esta meta?
        </label>
        <input className={style.input} type="nunber" id="meta" />

        <label className={style.label} htmlFor="icon">
          Elige un icono para la meta
        </label>
        <input className={style.input} type="text" id="icon" />
      </form>
      <div className={style.botones}>
        <button className="button button--black">Crear</button>
        <button className="button">Cancelar</button>
      </div>
    </div>
  );
}

export default GoalForm;

