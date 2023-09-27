import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faUserGear } from "@fortawesome/free-solid-svg-icons";
import style from "./Head.module.css";

function Head() {
  return (
    <header className={style.encabezado}>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faFire} className={style.logo} />
        <a href="/" className={style.text}>
          METAS APP
        </a>
      </div>
      <nav>
        <a href="/perfil">
          <FontAwesomeIcon icon={faUserGear} className={style.logoUser} />
        </a>
      </nav>
    </header>
  );
}

export default Head;
