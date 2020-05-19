import React, { Component } from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
import CopyRight from "../CopyRight/CopyRight";
import "./Footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uName = props.puName + "-footer";
  }
  render() {
    return (
      <div>
        <SocialLinks puName={this.uName} />
        <CopyRight puName={this.uName} />
      </div>
    );
  }
}

export default Footer;
