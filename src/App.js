import React, { Component } from "react";
import navs from "./navs";
import Nav from "./Components/Nav/Nav";
import { connect } from "react-redux";
import { pressCancel } from "./Redux/Actions/buttonActions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
    window.addEventListener("click", this.handleClick);
  }
  handleClick(e) {
    this.props.pressCancel();
    e.stopPropagation();
  }
  render() {
    return (
      <div className="App app0">
        <h1>React Library</h1>
        <Nav json={navs[0]} puName="app0" extraClass="StickyTop" />
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
        <p>HELLOOOOOOOOOOOOOO</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  globState: state,
});

const mapDispatchToProps = {
  pressCancel,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
