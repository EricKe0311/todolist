import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      text: "放學",
    };
    // this.createTodo = this.createTodo.bind(this); bnd
  }

  createTodo() {
    if (!this.state.text) {
      return;
    }
    this.props.createTodo(this.state.text);
    this.setState({
      text: "",
    });
  }

  handleChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleKeyDown(event) {
    event.keyCode === 13 && this.createTodo();
    // if (event.keyCode === 13) {
    //   this.createTodo();
    // }
  }

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.handleChange(e)}
          onKeyDown={(e) => this.handleKeyDown(e)}
          value={this.state.text}
        />
        <button onClick={() => this.createTodo()}>新增</button>
      </div>
    );
  }
}
