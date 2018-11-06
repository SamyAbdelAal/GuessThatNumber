import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
import { ListGroup, ListGroupItem } from "reactstrap";
import FadeIn from "react-fade-in";

class Hints extends Component {
  shuffle() {
    let array = [];
    for (let i = 0; i < 9; i++) {
      const j = Math.floor(Math.random() * 100) + 1;
      array.push(j);
    }
    array.push(this.props.randNum);

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render() {
    return (
      <div className="App ">
        <FadeIn>
          <div className="container ">
            <ListGroup style={{ display: "block" }}>
              {this.shuffle().map(i => (
                <ListGroupItem
                  onClick={() => this.props.clickedHint(i)}
                  style={{ display: "inline-block " }}
                >
                  {i}
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        </FadeIn>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    randNum: state.rootNum.randNum
  };
};
const mapDispatchToProps = dispatch => {
  return {
    clickedHint: hint => dispatch(actionCreators.clickedHint(hint))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hints);
