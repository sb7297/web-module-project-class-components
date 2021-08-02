import React from 'react';
import TodoList from './components/TodoList.js'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Vacuum the kitchen",
          id: Date.now() - 10,
          completed: true
        },
        {
          task: "Balance binary tree",
          id: Date.now() - 20,
          completed: false
        }
      ]
    };
  }

  render() {
    return (
      <TodoList todos={this.state.todos} />
    );
  }
}

export default App;
