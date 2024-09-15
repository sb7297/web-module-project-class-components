import React from 'react';
import Todo from './Todo.js'

class TodoList extends React.Component {
  render() {
    const { todos, toggleTodoById } = this.props;

    return (<div className="flex flex-col space-y-4 py-2 text-gray-800 text-lg">
      {todos.map(todo => <Todo key={todo.id} todo={todo} toggleTodo={() => toggleTodoById(todo.id)} />)}
    </div>);
  }
}

export default TodoList;