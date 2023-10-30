import { useContext } from "react";
import GoalElement from "./GoalElement";
import { GoalContext } from "../../services/Memoria";
import { Outlet } from "react-router-dom";


function List() {
  const [state, dispatch] = useContext(GoalContext);
    return ( 
        <>
           {state.order.map(id => <GoalElement key={id} {...state.objects[id]} ></GoalElement>)}
           <Outlet />
        </>
     );
}

export default List ;