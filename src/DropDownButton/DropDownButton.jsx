import React, { Component } from "react";
import { connect } from "react-redux";
import { addButton, pressButton } from "../Redux/Actions/buttonActions";
import "./DropDownButton.scss";

class DropDownButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uName = props.puName + "-button";
    this.toggleButton = this.toggleButton.bind(this);
    this.activeArrowClass = "";
  }

  componentDidMount() {
    this.props.addButton(this.props.uKey);
  }

  toggleButton(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.pressButton(this.props.uKey);
  }

  render() {
    if (this.props.globState[this.props.uKey]) this.activeArrowClass = "ActiveDropDownArrow";
    else this.activeArrowClass = "";
    return (
      <button className={"DropDownButton " + this.uName} onClick={this.toggleButton}>
        {this.props.text}
        <div className={"ArrowRelDiv " + this.uName}>
          <img
            className={this.activeArrowClass}
            src="/images/white-arrow.svg"
            alt="Dropdown menu arrow"
            width="12"
            height="12"
          />
        </div>
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  globState: state,
});

const mapDispatchToProps = {
  pressButton,
  addButton,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDownButton);
