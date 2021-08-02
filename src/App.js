import React from 'react';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

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
      ],
      input: ""
    };
  }
  
  toggleTodoById = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        return todo.id === id 
        ? {...todo, completed: !todo.completed}
        : todo
      })
    }
    );
  }
  
  handleInputChange = (ev) => {
    this.setState({ ...this.state, input: ev.target.value });
  }
  
  handleFormSubmit = (ev) => {
    ev.preventDefault();
    const text = this.state.input;
    
    if (text === '') return;
    
    this.setState({
      ...this.state,
      todos: [ ...this.state.todos, {task: text, id: Date.now(), completed: false} ],
      input: ''
    });
  }

  render() {
    return (<>
      <TodoList todos={this.state.todos} toggleTodoById={this.toggleTodoById} />
      <TodoForm
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        input={this.state.input}
      />
    </>);
  }
}

export default App;
