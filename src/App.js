import React, {Component} from "react";
import Title from './components/Title';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
      </div>
    );
  }
}

export default App;
