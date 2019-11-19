import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: ['snowboard', 'skis', 'boots', 'jacket', 'pants', 'helmet']
    }
  }
  render() {
    return (
      <ul>
        {this.state.list.map((value, index) => <li key={index}><h1>{value}</h1></li>)}
      </ul>
    );
  }
}

export default App;
