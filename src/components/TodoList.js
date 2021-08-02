import React from 'react';
import Todo from './Todo.js'

class TodoList extends React.Component {
  render() {
    const { todos, toggleTodoById } = this.props;

    return (
      todos.map(todo => <Todo key={todo.id} todo={todo} toggleTodo={() => toggleTodoById(todo.id)} />)
    );
  }
}

export default TodoList;