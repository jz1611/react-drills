import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      userInput: "",
      list: ['skis', 'snowboard', 'helmet', 'pants', 'jacket', 'boots'],
      filtered: []
    }
  }

  updateUserInputAndFiltered(value){
    this.setState({
      userInput: value,
    })
  }

  render() {
    return (
      <div>
        <input onChange={(event) => this.updateUserInputAndFiltered(event.target.value)} />
        <ul>{this.state.list.filter(val => val.includes(this.state.userInput)).map((val, index) => <li key={index}>{val}</li>)}</ul>
      </div>
    )
  }
}

export default App;
