import React, { Component } from 'react';
import '.App.css';
import background from './components/images/Background1.jpg';
import card from './components/card/card.js';
import wrapper from './components/wrapper';
import characters from '.characters.json';
import logo from './logo.svg';
import './App.css';

var aCStyle = {
  fontSize: "12px",
  fontStyle: "italic",
  margin: "10px 10px 10px 10px",
  bottom: "4"
}

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(" + background + ")",
  color: "white",
  textShadow: "2px 2px #ff0000"
};

var fontStyle = {
  fontSize: "12px",
  fontStyle: "italic"
}

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 0.2
    }}
  />
);


class App extends Component {
  constructor() {
    super();

    this.state = {
      wins: 0,
      loss: 0,
      amountClicked: 0
    }

    this.addTotal = this.addTotal.bind(this);
  }

  addTotal(e) {
    var { amountClicked } = this.state.amountClicked;
    this.setState({ amountClicked: amountClicked + e })
    console.log(amountClicked)
  }


  render() {
    console.log("rendering");

    return (
      <React.Fragment>
        <wrapper>
          <section style={sectionStyle}>
            <center><h1>React Click</h1></center>
            <center><h6>I am the Danger</h6></center>
            <div className="container">
              <ColoredLine color="blue"></ColoredLine>
            </div>
            <center style={fontStyle}><h6>Wins: {this.state.wins}</h6><h6>Loss: {this.state.loss}</h6></center>
            <h6 style={aCStyle}>Amount Clicked: {this.state.amountClicked} out of 12</h6>
            <div className="container">
              <ul>
                <card characters={characters} />
              </ul>
            </div>

          </section>
        </wrapper>
      </React.Fragment>
    );
  }
}

export default App;
