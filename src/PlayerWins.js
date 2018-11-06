import React, { Component } from "react";
import "./App.css";

class PlayerWins extends Component {
  render() {
    return (
      <div className="App">
        <h1>congratulations</h1>
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

export default PlayerWins;
