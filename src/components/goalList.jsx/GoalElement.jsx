import { Link } from "react-router-dom";
import style from "./GoalElement.module.css";


function GoalElement({ id, icon, frecuencia, periodo, detalles, completado, meta}) {
  return (
    <Link to={`/lista/${id}`} className={style.goalElement + " card"}>
      <div className="flex  items-center">
        <div className={style.icon}>{icon}</div>

        <p className={style.frecuencia}>
          {frecuencia}
          <sub className="text-sm text-gray-500 font-semibold ml-1">/ {periodo}</sub>
        </p>

        <p className={style.detalles}>{detalles}</p>
      </div>
      <div className="flex gap-28 px-10">
        <div className="flex flex-col items-center justify-center">
          <span className="text-sm font-semibold mb-2">
            {completado} / <span className="text-gray-500">{meta}</span>
          </span>
          <div className="w-36 h-1 rounded-xl nm-flat-gray-100 bg-gray-300">
            <div
              className=" bg-gradient-to-l  bg-purple-600 via-purple-500 from-pink-500  h-1 w-3/5 rounded-full"
              style={{width: `${Math.round((completado / meta ) * 100)}%`}}
            ></div>
          </div>
        </div>

        <button className="button button--gray">Completado</button>
      </div>
    </Link>
  );
}

export default GoalElement;
