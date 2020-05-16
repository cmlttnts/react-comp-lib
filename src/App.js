import React from "react";
import navs from "./navs";
import Navigation from "./Navigation/Navigation";
function App(props) {
  console.log(typeof navs[0]);
  return (
    <div className="App">
      <h1>React Library</h1>
      <Navigation nav={navs[0]} />
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

export default App;
