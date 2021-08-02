import React from 'react';

class Todo extends React.Component {
  render() {
    const { todo } = this.props;

    const styles = {
      textDecoration: todo.completed ? 'line-through' : 'none',
      cursor: 'pointer',
    }

    return (
      <div key={todo.id} className="todo-item" style={styles}>
        {todo.task} 
      </div>
    );
  }
}

export default Todo;