import "./DropDownMenu.scss";
import React, { Component } from "react";
import NavItem from "../NavItem/NavItem";
class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uName = props.puName + "-menu";
  }
  render() {
    return (
      <div className={"DropDownMenu " + this.uName}>
        {this.props.items.map((item, index) => {
          return <NavItem json={item} puName={this.uName} key={index} />;
        })}
      </div>
    );
  }
}

export default DropDownMenu;
