import { useContext } from "react";
import GoalElement from "./GoalElement";
import Context from "../../services/Context";

import { Outlet } from "react-router-dom";

function List() {
  const [state] = useContext(Context);

  return (
    <>
      {state.order.map( id => (<GoalElement key={id} {...state.objects[id]}></GoalElement>))}
      <Outlet />
    </>
  );
}

export default List;
