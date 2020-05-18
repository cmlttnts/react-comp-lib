import React, { Component } from "react";
import "./Nav.scss";
import NavItem from "../NavItem/NavItem";
import BurgerButton from "../BurgerButton/BurgerButton";
import RelDiv from "../RelDiv/RelDiv";
import AbsDiv from "../AbsDiv/AbsDiv";

//Navigation Class, Container for NavItems
class Nav extends Component {
  //Constructor function, init the unique class name for css reasons
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.classExt = "dropped ";
    this.uName = props.puName + (props.json.uName ? "-" + props.json.uName : "-nav");

    //Make a unique key to store button + dropable divs id
    //which then will help, which button should trigger which drop menu
    this.uKey = props.json.uKey;
  }
  toggleView = () => {
    this.classExt = this.state.expanded ? "dropped" : "expanded";

    this.useState({
      expanded: !this.state.expanded,
    });
  };
  render() {
    return (
      <div className={"Nav " + this.uName}>
        <BurgerButton puName={this.uName} uKey={this.uKey} />
        <RelDiv puName={this.uName} uKey={this.uKey}>
          <AbsDiv puName={this.uName} uKey={this.uKey}>
            {this.props.json.items.map((item, index) => {
              return <NavItem json={item} puName={this.uName} key={index} />;
            })}
          </AbsDiv>
        </RelDiv>
      </div>
    );
  }
}

export default Nav;
