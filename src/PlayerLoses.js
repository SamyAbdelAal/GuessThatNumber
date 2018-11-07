import React, { Component } from "react";
import "./App.css";
import FadeIn from "react-fade-in";
class PlayerLoses extends Component {
  render() {
    return (
      <FadeIn>
        <div className="App">
          <img
            src="        https://vignette.wikia.nocookie.net/the-adventures-of-the-gladiators-of-cybertron/images/e/e5/The_Riddler.png/revision/latest?cb=20150411163609
"
          />

          <h1>You just lost! better luck next time.</h1>
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

export default PlayerLoses;
