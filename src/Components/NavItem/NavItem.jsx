import React, { Component } from "react";
import NavLink from "../NavLink/NavLink";
import DropDownButton from "../DropDownButton/DropDownButton";
import RelDiv from "../RelDiv/RelDiv";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import "./NavItem.scss";

// Navigation items, it can be either a link or dropdopw button+menu
class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = { type: props.type, isOn: false };
    this.uName = props.puName + (props.json.uName ? "-" + props.json.uName : "-item");

    //Same unique key process
    //TODO: change this key system, with some luck it may be same
    this.uKey = Math.random().toString();
  }
  render() {
    //if it is a link type, just use NavLink component
    if (this.props.json.type === "link")
      return (
        <div className={"NavItem " + this.uName}>
          <NavLink puName={this.uName} link={this.props.json.link} text={this.props.json.text} />
        </div>
      );
    else {
      //if it is a drop item, then we need extra containers to position menu after triggering
      return (
        <div className={"NavItem " + this.uName}>
          <DropDownButton puName={this.uName} text={this.props.json.text} uKey={this.uKey} />
          <RelDiv puName={this.uName} uKey={this.uKey}>
            <DropDownMenu puName={this.uName} items={this.props.json.items} uKey={this.uKey} />
          </RelDiv>
        </div>
      );
    }
  }
}

export default NavItem;
