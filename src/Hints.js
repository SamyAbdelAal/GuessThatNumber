import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/index";
import { ListGroup, ListGroupItem } from "reactstrap";
import FadeIn from "react-fade-in";
import posed, { PoseGroup } from "react-pose";
import shuffle from "./shuffle";

const Item = posed.li({});

class Hints extends Component {
  constructor(props) {
    super(props);
    this.state = { items: this.rand() };

    this.rand = this.rand.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        items: shuffle(this.state.items)
      });
    }, 1800);
  }
  rand() {
    let array = [];
    for (let i = 0; i < this.props.numOfTries * 2 - 1; i++) {
      const j = Math.floor(Math.random() * 100) + 1;
      array.push(j);
    }
    array.push(this.props.randNum);

    // for (let i = array.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [array[i], array[j]] = [array[j], array[i]];
    // }
    return array;
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App ">
        <FadeIn>
          <div className="container ">
            {/*
            <ListGroup style={{ display: "block" }}>
              {this.rand().map(i => (
                <ListGroupItem
                  className="btn btn-outline-success"
                  onClick={() => this.props.clickedHint(i)}
                  style={{ display: "inline-block " }}
                >
                  {i}
                </ListGroupItem>
              ))}
            </ListGroup>
            */}
            <ul>
              <PoseGroup>
                {items.map(id => (
                  <Item
                    className="btn btn-outline-success"
                    key={id + 1}
                    onClick={() => this.props.clickedHint(id)}
                  >
                    {id}
                  </Item>
                ))}
              </PoseGroup>
            </ul>
          </div>
        </FadeIn>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    randNum: state.rootNum.randNum,
    numOfTries: state.rootNum.numOfTries
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
