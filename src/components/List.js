import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

// const ListStyle = styled.li`
//   color: ${(props) => {
//     return props.color || "green";
//   }};
// `;

const slideInFromRight = keyframes`
  from {
    margin-left: 100%;
  }
  to {
    margin-left: 0%;
  }
`;

const ListStyle = styled.li`
  color: ${() => {
    const now = new Date();
    const hours = now.getHours();
    const color = hours >= 6 && hours <= 18 ? "black" : "red";
    return color;
  }};

  ::marker {
    color: green;
  }

  animation: ${slideInFromRight} 0.1s linear 1s;
`;

export default class List extends Component {
  render() {
    let { todos, removeTodo } = this.props;
    console.log(todos);
    console.log(this.props.todos);

    return (
      <ol>
        {todos.map((todo, index) => {
          return (
            <ListStyle key={todo.id} onClick={() => removeTodo(todo.id)}>
              {todo.text}
            </ListStyle>
          );
        })}
      </ol>
    );
  }
}
