import React from "react";

import "./Header.scss";

const Header = (props) => {
  return (
    <div>
      <img src={props.imgSrc} alt={props.imgAtText} />
      <h1>{props.title}</h1>
    </div>
  );
};
export default Header;
