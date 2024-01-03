import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import style from "./Head.module.css";
import { useState } from "react";
import MobileMenu from "./mobileMenu";

function Head() {
  const [dropDownMenu, setDropDownMuenu] = useState(false);

  const handleDropDownMenu = () => {
    setDropDownMuenu(!dropDownMenu);
  };
  return (
    <header className={style.encabezado}>
      <nav className="flex items-center">
        <FontAwesomeIcon icon={faFire} className={style.logo} />
        <Link to="/METASAPP/lista" className={style.text}>
          METAS APP
        </Link>
      </nav>
      <nav>
        <Link onClick={handleDropDownMenu} to="perfil">
          <FontAwesomeIcon icon={faUserGear} className={style.logoUser} />
        </Link>
        <MobileMenu />
      </nav>
    </header>
  );
}

export default Head;
