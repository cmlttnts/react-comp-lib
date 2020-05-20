import React, { Component } from "react";
import navs from "./navs";
import Nav from "./Components/Nav/Nav";
import { connect } from "react-redux";
import { pressCancel } from "./Redux/Actions/buttonActions";
import Footer from "./Components/Footer/Footer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  r() {
    return (
      <div className="App app0">
        <h1>React Library</h1>
        <Nav json={navs[0]} puName="app0" extraClass="StickyTop" />
        <Footer puName="app0" />
      </div>
    );
  }
}

export default App;
