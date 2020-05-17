import React, { Component } from "react";

import "./AbsDiv.scss";
//Div Class to make a absolute positioned container for dropdown menus

class AbsDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uName = props.puName + "-absdiv";
  }
  render() {
    return <div className={"AbsDiv " + this.uName}>{this.props.children}</div>;
  }
}

export default AbsDiv;
