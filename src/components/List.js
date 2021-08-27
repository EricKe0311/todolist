import React, { Component } from "react";

export default class List extends Component {
  render() {
    console.log(this.props.todos);

    return (
      <ol>
        {this.props.todos.map((todo, index) => {
          return (
            <li key={todo.id} onClick={() => this.props.removeTodo(todo.id)}>
              {todo.text}
            </li>
          );
        })}
      </ol>
    );
  }
}
