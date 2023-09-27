import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Vinculo.module.css";

function Vinculo({ icon, text, link }) {
  return (
    <div className={style.asideItem1}>
      <FontAwesomeIcon icon={icon} className={style.asideIcon} />
      <a href={link} className={style.asideText}>
      {text}
      </a>
    </div>
  );
}

export default Vinculo;
