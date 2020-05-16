import React from "react";

import "./DropDownButton.scss";

const DropDownButton = (props) => {
  return (
    <button className={"DropDownButton " + props.uName}>
      {props.text}
      <img src="/images/white-arrow.svg" alt="Dropdown menu arrow" width="12" height="12" />
    </button>
  );
};
export default DropDownButton;
