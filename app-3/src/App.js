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
    let filtered = this.state.list.filter(val => val.includes(this.state.userInput));
    let toDisplay = filtered.map((val, index) => <li key={index}>{val}</li>);

    return (
      <div>
        <input onChange={(event) => this.updateUserInputAndFiltered(event.target.value)} />
        <ul>{toDisplay}</ul>
      </div>
    )
  }
}

export default App;
