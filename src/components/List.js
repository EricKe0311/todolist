import React, { Component } from "react";
import styled from "styled-components";

// const ListStyle = styled.li`
//   color: ${(props) => {
//     return props.color || "green";
//   }};
// `;

const ListStyle = styled.li`
  color: ${(props) => {
    const now = new Date();
    const hours = now.getHours();
    const color = hours >= 6 && hours <= 18 ? "black" : "red";
    return color;
  }};
`;

export default class List extends Component {
  render() {
    console.log(this.props.todos);

    return (
      <ol>
        {this.props.todos.map((todo, index) => {
          return (
            <ListStyle
              key={todo.id}
              onClick={() => this.props.removeTodo(todo.id)}
            >
              {todo.text}
            </ListStyle>
          );
        })}
      </ol>
    );
  }
}
