import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
import PlayGame from "./PlayGame";

class App extends Component {
  state = { isVisible: true };
  componentDidMount() {
    this.props.getRandNum();
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <div className="game rounded">
            <PlayGame />
          </div>
        </div>
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
