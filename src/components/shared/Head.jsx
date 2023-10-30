import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import style from "./Head.module.css";

function Head() {
  return (
    <header className={style.encabezado }>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faFire} className={style.logo} />
        <Link to="/" className={style.text}>
          METAS APP
        </Link>
      </div>
      <nav>
        <Link to="/perfil">
          <FontAwesomeIcon icon={faUserGear} className={style.logoUser} />
        </Link>
      </nav>
    </header>
  );
}

export default Head;
