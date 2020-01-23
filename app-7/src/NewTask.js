import React, { Component } from 'react';

export default class NewTask extends Component {
    constructor() {
      super();

      this.state = {
        input: ""
      };

      this.add=this.add.bind(this);
    }

    handleChange(value) {
      this.setState({
        input: value
      });
    }

    add() {
      this.props.add(this.state.input);
      this.setState({
        input: ""
      });
    }

    render() {
      return (
        <div>
          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.handleChange(e.target.value)} />
          <button onClick={this.add}>Add</button>
        </div>
      );
    }
}