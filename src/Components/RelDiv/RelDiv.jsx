import React, { Component } from "react";
import { connect } from "react-redux";

import "./RelDiv.scss";

//Div Class to make a relative positioned container for dropdown menus
class RelDiv extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uName = props.puName + "-reldiv";
    this.divActiveClass = "";
  }
  render() {
    this.divActiveClass = this.props.globState[this.props.uKey] ? " ActiveRelDiv" : "";
    return (
      <div className={"RelDiv " + this.uName + this.divActiveClass}>{this.props.children}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  globState: state,
});

export default connect(mapStateToProps)(RelDiv);
