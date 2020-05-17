import React, { Component } from "react";

import "./RelDiv.scss";

//Div Class to make a relative positioned container for dropdown menus
class RelDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uName = props.puName + "-reldiv";
  }
  render() {
    return <div className={"RelDiv " + this.uName}>{this.props.children}</div>;
  }
}

export default RelDiv;
