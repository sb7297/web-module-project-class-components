import React from 'react';

class Todo extends React.Component {
  render() {
    const { todo, toggleTodo } = this.props;

    const styles = {
      textDecoration: todo.completed ? 'line-through' : 'none',
      cursor: 'pointer',
    }

    return (
      <div className="todo-item" style={styles} onClick={toggleTodo}>
        {todo.task} 
      </div>
    );
  }
}

export default Todo;