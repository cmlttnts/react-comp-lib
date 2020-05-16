import React from "react";
import NavLink from "./NavLink/NavLink";
import DropDownButton from "./DropDownButton/DropDownButton";

import "./NavItem.scss";
import DropDownMenu from "./DropDownMenu/DropDownMenu";

//COMPONENT
const NavItem = (props) => {
  console.log(props.uName);

  if (props.type === "link") {
    return (
      <div className={"NavItem " + props.uName}>
        <NavLink
          link={props.link}
          text={props.text}
          uName={props.uName ? props.uName + "-link" : "-link"}
        />
      </div>
    );
  } else {
    return (
      <div className={"NavItem " + props.uName}>
        <DropDownButton
          text={props.text}
          uName={props.uName ? props.uName + "-button" : "-button"}
        />
        <div className={"reldiv " + props.uName + "-reldiv"}>
          <DropDownMenu uName={props.uName ? props.uName + "-menu" : "-menu"} items={props.items} />
        </div>
      </div>
    );
  }
};
export default NavItem;
