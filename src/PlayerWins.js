import React, { Component } from "react";
import "./App.css";
import FadeIn from "react-fade-in";
class PlayerWins extends Component {
  render() {
    return (
      <FadeIn>
        {" "}
        <div className="App">
          <h1>
            How could you have won?! You were just lucky, don't let it get to
            your head...
          </h1>
          <button
            id="reset"
            className="btn btn-lg btn-default"
            onClick={() => document.location.reload()}
          >
            Resart
          </button>
        </div>
      </FadeIn>
    );
  }
}

export default PlayerWins;
