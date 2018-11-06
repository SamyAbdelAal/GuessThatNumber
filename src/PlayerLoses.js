import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";

class PlayerLoses extends Component {
  render() {
    return (
      <div className="App">
        <h1>You just lost!</h1>
        <button
          id="reset"
          className="btn btn-lg btn-default"
          onClick={() => document.location.reload()}
        >
          Resart
        </button>
      </div>
    );
  }
}

export default PlayerLoses;
