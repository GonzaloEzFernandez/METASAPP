import { useContext } from "react";
import GoalElement from "./GoalElement";
import Context from "../../services/Context";
import { Link } from "react-router-dom";

import { Outlet } from "react-router-dom";

function List() {
  const [state] = useContext(Context);

  return (
    <>
      {state.order.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-full ml-2 ">
          <div className="flex flex-col items-center justify-center w-full md:w-auto gap-7 p-4 card">
            <h1 className="">
              No tienes metas actualmente. ¡Empieza una meta que puedas mantener
              en el tiempo! 😁
            </h1>
            <Link
              to="/METASAPP/crear"
              className="flex items-center gap-2 button button--gray"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              Empezar con una meta
            </Link>
          </div>
        </div>
      ) : (
        state.order.map((id) => (
          <GoalElement key={id} {...state.objects[id]}></GoalElement>
        ))
      )}
      <Outlet />
    </>
  );
}

export default List;
