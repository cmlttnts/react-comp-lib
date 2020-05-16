import React from "react";
import parseNavItems from "../../_parseNavItems";
import "./DropDownMenu.scss";

const DropDownMenu = (props) => {
  return (
    <div className={"DropDownMenu " + props.uName}>{parseNavItems(props.items, props.uName)}</div>
  );
};
export default DropDownMenu;
