import React from "react";
import BurgerButton from "./BurgerButton/BurgerButton";
import parseNavItems from "./_parseNavItems";
import "./Navigation.scss";

//COMPONENT
const Navigation = (props) => {
  return (
    <div className={"Navigation " + props.nav.uName}>
      <BurgerButton uName={props.nav.uName + "-burgerButton"} />
      <div className={"reldiv " + props.nav.uName + "-reldiv"}>
        <div className={"absdiv " + props.nav.uName + "-absdiv"}>
          {parseNavItems(props.nav.items, props.nav.uName)}
        </div>
      </div>
    </div>
  );
};
export default Navigation;
