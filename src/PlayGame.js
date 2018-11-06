import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
import PlayerWins from "./PlayerWins";
import PlayerLoses from "./PlayerLoses";
import { Button } from "reactstrap";
import Hints from "./Hints";
import FadeIn from "react-fade-in";
import posed from "react-pose";

const Input = posed.input({
  focusable: true,
  init: {
    color: "#aaa",
    outlineWidth: "0px",
    outlineOffset: "0px",
    scale: 1
  },
  focus: {
    color: "#000",
    outlineWidth: "12px",
    outlineOffset: "15px",
    outlineColor: "#fff",
    scale: 1.2
  }
});

class PlayGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {},
      showHints: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  giveHint(input) {
    let difference = input - this.props.randNum;
    let message = {};
    message.close =
      "Ohhh you're guess is " +
      (difference < 0 ? " less" : "greater") +
      " than mine.";
    difference = Math.abs(difference);
    if (difference > 30) {
      message.hint = "HAH! not even close!";
    } else if (difference > 20) {
      message.hint = "You're still far off though, you noob!";
    } else if (difference > 10) {
      message.hint = "Hmm you might actually be close...";
    } else if (difference > 5) {
      message.hint = "Okay, you're cutting it pretty thin now...";
    } else {
      message.hint = "HOW CAN YOU BE THIS CLOSE AND NOT GET IT!";
    }
    this.setState({ message: message });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.numOfTries > 0) {
      let input = "";
      if (this.props.clickedHint !== 0) {
        input = this.props.clickedHint;
      } else {
        input = this.textInput.value;
      }

      if (input == this.props.randNum) {
        this.props.playerWins();
      } else {
        this.props.resetHint();
        this.giveHint(input);
        // this.setState({ numOfTries: this.state.numOfTries - 1 });
        this.props.decrementTries(this.props.numOfTries);
        this.setState({ showHints: false });
      }
    }
  }

  hints() {
    this.setState({ showHints: !this.state.showHints });
  }

  checkStatus() {
    if (this.props.playerWon) {
      return <PlayerWins />;
    } else if (this.props.numOfTries == 0) {
      return <PlayerLoses />;
    } else {
      return (
        <FadeIn>
          <div className="App">
            <h1>Riddle Me This</h1>
            <h6 className="h6 ">or more like guess a number.....</h6>
            <h4>
              {this.state.message.close} {this.state.message.hint}
            </h4>
            <form onSubmit={this.handleSubmit}>
              <label>
                Guess:
                <Input
                  className="form-control"
                  type="number"
                  placeholder="1-100"
                  name="guess"
                  ref={input => (this.textInput = input)}
                  value={
                    this.props.clickedHint !== 0
                      ? this.props.clickedHint
                      : undefined
                  }
                />
                <button
                  className="btn btn-outline-success w-100 "
                  type="submit"
                  value="submit"
                >
                  Check your luck
                </button>
              </label>
            </form>

            <h1>You have only {this.props.numOfTries} guesses left</h1>
            <button className="btn hint" onClick={() => this.hints()}>
              Hints
            </button>
            {this.state.showHints && <Hints />}
          </div>
        </FadeIn>
      );
    }
  }

  render() {
    return <div className="App">{this.checkStatus()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    randNum: state.rootNum.randNum,
    playerWon: state.rootNum.playerWon,
    clickedHint: state.rootNum.clickedHint,
    numOfTries: state.rootNum.numOfTries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    playerWins: () => dispatch(actionCreators.playerWins()),
    resetHint: () => dispatch(actionCreators.resetHint()),
    decrementTries: tries => dispatch(actionCreators.decrementTries(tries))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayGame);
