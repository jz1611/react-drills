import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      text: ""
    }

    this.updateText = this.updateText.bind(this);
  }

  updateText(val){
    this.setState({
      text: val
    });
  }

  render() {
    return (
      <div>
        <input onChange={ (event) => this.updateText(event.target.value) } />
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;
