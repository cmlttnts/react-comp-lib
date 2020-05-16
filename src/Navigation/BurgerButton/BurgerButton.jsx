import React from "react";
import "./BurgerButton.scss";
const BurgerButton = (props) => {
  return (
    <button className={"BurgerButton " + props.uName}>
      <img src="/images/hamburger-white-32x32.svg" alt="Menu" />
    </button>
  );
};
export default BurgerButton;
