import React, { Component } from "react";
import "./NavLink.scss";

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uName = props.puName + "-link";
  }
  render() {
    return (
      <a className={"NavLink " + this.uName} href={this.props.link}>
        {this.props.text}
      </a>
    );
  }
}

export default NavLink;
