import React, { Component } from "react";

import "./SocialLinks.scss";

class SocialLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uName = props.puName + "-socials";
  }
  render() {
    return (
      <div className={"SocialLinks " + this.uName}>
        <ul>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default SocialLinks;
