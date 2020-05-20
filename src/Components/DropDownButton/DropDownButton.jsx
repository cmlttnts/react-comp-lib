import React, { Component } from "react";
import "./DropDownButton.scss";

class DropDownButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uName = props.puName + "-button";
  }

  render() {
    return (
      <button className={"DropDownButton " + this.uName}>
        {this.props.text}
        <div className={"ArrowRelDiv " + this.uName}>
          <img
            className={}
            src="/images/white-arrow.svg"
            alt="Dropdown menu arrow"
            width="12"
            height="12"
          />
        </div>
      </button>
    );
  }
}

export default DropDownButton;
