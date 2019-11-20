import React, { Component } from "react";
import Todo from './Todo';
import "./App.css";

class App extends Component {
  constructor(){
    super();

    this.state = {
      newTask: "",
      tasks: []
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event){
    this.setState({
      newTask: event.target.value
    });
  }

  handleClick(){
    this.setState({
      tasks: [...this.state.tasks, this.state.newTask],
      newTask: ""
    });
  }

  render() {
    let tasks = this.state.tasks.map((task, index) => {
      return <Todo key={index} task={task} />
    })

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.newTask} onChange={(event) => this.handleChange(event)}/>
        <button onClick={this.handleClick}>Add</button>
        {tasks}
      </div>
    );
  }
}

export default App;
