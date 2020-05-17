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
    console.log(props.puName);
  }
  toggleView = () => {
    this.classExt = this.state.expanded ? "dropped" : "expanded";

    this.useState({
      expanded: !this.state.expanded,
    });
  };
  render() {
    console.log(this.uName);

    return (
      <div className={"Nav " + this.uName}>
        <BurgerButton puName={this.uName} />
        <RelDiv puName={this.uName}>
          <AbsDiv puName={this.uName}>
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

// //COMPONENT
// const Navigation = (props) => {
//   return (
//     <div className={"Navigation " + props.nav.uName}>
//       <BurgerButton uName={props.nav.uName + "-burgerButton"} />
//       <div className={"reldiv " + props.nav.uName + "-reldiv"}>
//         <div className={"absdiv " + props.nav.uName + "-absdiv"}>
//           {parseNavItems(props.nav.items, props.nav.uName)}
//         </div>
//       </div>
//     </div>
//   );
// };
