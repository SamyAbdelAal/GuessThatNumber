import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
import PlayerWins from "./PlayerWins";
import PlayerLoses from "./PlayerLoses";
import { Button } from "reactstrap";
import Hints from "./Hints";

class PlayGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfTries: 5,
      message: "",
      showHints: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  giveHint(input) {
    let difference = input - this.props.randNum;
    let message = "";
    difference = Math.abs(difference);
    if (difference > 30) {
      message = "HAH! not even close!";
    } else if (difference > 20) {
      message = "You're still far off, you noob!";
    } else if (difference > 10) {
      message = "Hmm you might actually be close...";
    } else if (difference > 5) {
      message = "Okay, you're cutting it pretty thin now...";
    } else {
      message = "HOW CAN YOU BE THIS CLOSE AND NOT GET IT!";
    }
    this.setState({ message: message });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.numOfTries > 0) {
      let input = "";
      if (this.props.clickedHint) {
        input = this.props.clickedHint;
      } else {
        input = this.textInput.value;
      }

      if (input == this.props.randNum) {
        this.props.playerWins();
      } else {
        this.giveHint(input);
        this.setState({ numOfTries: this.state.numOfTries - 1 });
      }
    }
  }

  hints() {
    this.setState({ showHints: !this.state.showHints });
  }

  checkStatus() {
    if (this.props.playerWon) {
      return <PlayerWins />;
    } else if (this.state.numOfTries == 0) {
      return <PlayerLoses />;
    } else {
      return (
        <div className="App">
          <h1>{this.props.randNum}</h1>
          <h2>{this.state.message}</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Guess:
              <input
                className="form-control"
                type="text"
                name="guess"
                ref={input => (this.textInput = input)}
                value={
                  this.props.clickedHint !== 0 ? this.props.clickedHint : null
                }
              />
              <Button
                className="btn btn-outline-secondary w-100"
                type="submit"
                value="submit"
              >
                Submit
              </Button>
            </label>
          </form>

          <h1>You have only {this.state.numOfTries} guesses left</h1>
          <Button onClick={() => this.hints()}> Hints</Button>
          {this.state.showHints && <Hints />}
        </div>
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
    clickedHint: state.rootNum.clickedHint
  };
};

const mapDispatchToProps = dispatch => {
  return {
    playerWins: () => dispatch(actionCreators.playerWins())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayGame);
