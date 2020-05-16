import React from "react";
import "./NavLink.scss";

const NavLink = (props) => {
  return (
    <a className={"NavLink " + props.uName} href={props.link}>
      {props.text}
    </a>
  );
};
export default NavLink;
