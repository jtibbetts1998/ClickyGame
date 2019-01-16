import React, { Component } from 'react';
import '.App.css';
import background from './components/images/Background1.jpg';
import card from './components/card';
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
  render() {
  console.log("rendering");

    return (
    <React.Fragment>

    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>


      </React.Fragment>
    );
  }
}

export default App;
