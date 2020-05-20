import React, { Component } from "react";
import "./BurgerButton.scss";

class BurgerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uName = props.puName + "-bbutton";
  }

  render() {
    return (
      <button className={"BurgerButton " + this.uName}>
        <img src="/images/hamburger-white-32x32.svg" alt="Menu" width="24" height="24" />
      </button>
    );
  }
}

export default BurgerButton;
