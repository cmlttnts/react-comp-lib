import React, { Component } from "react";
import { connect } from "react-redux";
import { addButton, pressButton } from "../../Redux/Actions/buttonActions";
import "./BurgerButton.scss";

class BurgerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.uName = props.puName + "-bbutton";
    this.toggleButton = this.toggleButton.bind(this);
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
    return (
      <button className={"BurgerButton " + this.uName} onClick={this.toggleButton}>
        <img src="/images/hamburger-white-32x32.svg" alt="Menu" width="24" height="24" />
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

export default connect(mapStateToProps, mapDispatchToProps)(BurgerButton);
