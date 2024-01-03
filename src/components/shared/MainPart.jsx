
import { faBookOpen, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import style from"./MainPart.module.css";
import Vinculo from "./Vinculo";

function MainPart({ children }) {
  return (
    <div className={style.mainPart}>
      <nav className={style.aside}>
        <Vinculo 
         icon={faBookOpen}
         to="lista"
         text="Lista de Metas "
        />
        
        <Vinculo 
        icon={faSquarePlus}
        to={"crear"}
        text="Crear Meta"
        />
      </nav>
      <main className="scrollbar-container sm:w-full lg:w-4/5 h-full">
        {children}
      </main>
    </div>
  );
}

export default MainPart;
