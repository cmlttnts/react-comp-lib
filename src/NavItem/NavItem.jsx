import React, { Component } from "react";
import NavLink from "../NavLink/NavLink";
import DropDownButton from "../DropDownButton/DropDownButton";
import RelDiv from "../RelDiv/RelDiv";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

// Navigation items, it can be either a link or dropdopw button+menu
class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = { type: props.type, isOn: false };
    this.uName = props.puName + (props.json.uName ? "-" + props.json.uName : "-item");
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
          <DropDownButton puName={this.uName} text={this.props.json.text} />
          <RelDiv puName={this.uName}>
            <DropDownMenu puName={this.uName} items={this.props.json.items} />
          </RelDiv>
        </div>
      );
    }
  }
}

export default NavItem;
