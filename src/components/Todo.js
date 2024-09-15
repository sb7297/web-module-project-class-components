import React from 'react';

class Todo extends React.Component {
  render() {
    const { todo, toggleTodo } = this.props;

    let classes = "mx-auto p-2 border rounded-md w-3/4 shadow-lg cursor-pointer";

    if (todo.completed) {
      classes += " line-through border-indigo-600 bg-indigo-300";
    } else {
      classes += " border-red-800 bg-red-500 text-pink-50";
    }

    return (
      <div className={classes} onClick={toggleTodo}>
        {todo.task} 
      </div>
    );
  }
}

export default Todo;