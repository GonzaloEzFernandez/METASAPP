import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Head.module.css";
import {
  faUserGear,
  faBookOpen,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function MobileMenu() {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDownMenu = () => {
    setDropDown(!dropDown);
  };

  return (
    <>
      <button
        className="hover:text-white hover:bg-black px-5 py-[9px] lg:hidden"
        onClick={handleDropDownMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        className={`${
          dropDown
            ? "bg-gray-500/50 h-screen w-screen fixed z-20 top-0 right-0 backdrop-blur-sm "
            : "hidden"
        }`}
      ></div>
      <div
        className={`${
          dropDown
            ? "flex flex-col text-xl font-semibold gap-4 h-screen w-80 bg-gray-100 fixed right-0 top-0 -transale-x-100 z-20 transition-transform duration-300 ease-in-out"
            : "hidden"
        }`}
      >
        <button onClick={handleDropDownMenu} className="cd">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div>
          <Link
            onClick={handleDropDownMenu}
            to="/lista"
            className={style.logoHamburguer}
          >
            <FontAwesomeIcon icon={faBookOpen} className="scale-125" />
            Lista de metas
          </Link>
          <Link
            to="/crear"
            onClick={handleDropDownMenu}
            className={style.logoHamburguer}
          >
            <FontAwesomeIcon icon={faSquarePlus} className="scale-125" />
            Crear Meta
          </Link>
          <Link
            onClick={handleDropDownMenu}
            to="/Perfil"
            className={style.logoHamburguer}
          >
            <FontAwesomeIcon icon={faUserGear} className="scale-125" />
            Perfil
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
