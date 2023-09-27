
import { faBookOpen, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import style from"./MainPart.module.css";
import Vinculo from "./Vinculo";

function MainPart({ children }) {
  return (
    <div className={style.mainPart}>
      <nav className={style.aside}>
        <Vinculo 
         icon={faBookOpen}
         href="/lista"
         text="Lista de Metas "
        />
        
        <Vinculo 
        icon={faSquarePlus}
        href={"/crear"}
        text="Crear Meta"
        />
      </nav>
      <main className={style.main}>{children}</main>
    </div>
  );
}

export default MainPart;
