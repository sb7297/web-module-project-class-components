import React from 'react';
import Todo from './Todo.js'

class TodoList extends React.Component {
  render() {
    const { todos } = this.props;

    return (
      todos.map(todo => <Todo todo={todo} />)
    );
  }
}

export default TodoList;