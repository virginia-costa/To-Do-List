import React from "react";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import "./Header.css";

function Header(props) {
  const onClick = () => {
    props.setChangeMode(!props.changeMode);
  };
  return (
    <header className={props.changeMode ? "headerDark" : "headerLight"}>
      <h1 className="title">TO DO</h1>
      <button className="button" onClick={onClick}>
        <img src={props.changeMode ? sun : moon} alt="Logo" />
      </button>
    </header>
  );
}

export default Header;
