import React, { Component } from "react";

import "./CopyRight.scss";
class CopyRight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uName = props.puName + "-cr";
    this.year = new Date().getFullYear();
  }
  render() {
    return <div className={"CopyRight " + this.uName}>{this.year + " by Cemalettin Taş"}</div>;
  }
}

export default CopyRight;
