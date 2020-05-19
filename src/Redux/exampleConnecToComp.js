import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import clickAction from "Actions"; //not a real import

class DummyComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this);
  }
  onClick() {}
  render() {
    return <div> </div>;
  }
}

//props are DummyComp's props
const mapStateToProps = (state, props) => ({
  products: state.products,
  x: state.x,
  //etc
  //use it in Component when state changes, it sends new props
});

const mapDispatchToProps = (dispatch, props) =>
  bindActionCreators(
    {
      onClick: clickAction,
    },
    dispatch
  );
//mergeProps not so useful at this stage
export default connect(mapStateToProps, mapDispatchToProps)(DummyComp);
