import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
import PlayerWins from "./PlayerWins";
import PlayerLoses from "./PlayerLoses";

class PlayGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfTries: 5,
      message: ""
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
      let input = this.textInput.value;
      if (input == this.props.randNum) {
        this.props.playerWins();
      } else {
        this.giveHint(input);
        this.setState({ numOfTries: this.state.numOfTries - 1 });
      }
    }
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
                type="text"
                name="guess"
                ref={input => (this.textInput = input)}
              />
            </label>
            <input type="submit" value="submit" />
          </form>

          <h1>You have only {this.state.numOfTries} guesses left</h1>
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
    playerWon: state.rootNum.playerWon
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
