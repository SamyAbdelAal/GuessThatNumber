import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
import PlayGame from "./PlayGame";

class App extends Component {
  componentDidMount() {
    this.props.getRandNum();
  }

  render() {
    return (
      <div>
        <PlayGame />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRandNum: () => dispatch(actionCreators.getRandNum())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
