import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Vinculo.module.css";
import { Link } from "react-router-dom";

function Vinculo({ icon, text, to }) {
  return (
    <div className={style.asideItem1}>
      <FontAwesomeIcon icon={icon} className={style.asideIcon} />
      <Link to={to} className={style.asideText}>
        {text}
      </Link>
    </div>
  );
}

export default Vinculo;
