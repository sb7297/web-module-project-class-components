import React from 'react';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    let stored_todos_json = localStorage.getItem('todos');
    let stored_todos;
    try {
      stored_todos = JSON.parse(stored_todos_json);
    } catch {
      stored_todos = null;
    }
    this.state = {
      todos: stored_todos ? stored_todos : [
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
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }
  
  toggleTodoById = (id) => {
    const newState = {
      todos: this.state.todos.map(todo => {
        return todo.id === id 
        ? {...todo, completed: !todo.completed}
        : todo
      })
    };

    this.setState(newState);
    localStorage.setItem('todos', JSON.stringify(newState.todos)); 
  }
  
  handleInputChange = (ev) => {
    this.setState({ ...this.state, input: ev.target.value });
  }
  
  handleFormSubmit = (ev) => {
    ev.preventDefault();
    const text = this.state.input;
    
    if (text === '') return;
    
    const newState = {
      todos: [ ...this.state.todos, {task: text, id: Date.now(), completed: false} ],
      input: ''
    };

    this.setState(newState);
    localStorage.setItem('todos', JSON.stringify(newState.todos)); 
  }
  
  handleClearCompleted = () => {
    const newState = {
      todos: this.state.todos.filter(todo => !todo.completed)
    };

    this.setState(newState);
    localStorage.setItem('todos', JSON.stringify(newState.todos)); 
  }

  render() {
    return (<div className="max-w-lg mx-auto mt-4">
      <TodoList todos={this.state.todos} toggleTodoById={this.toggleTodoById} />
      <TodoForm
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        handleClearCompleted={this.handleClearCompleted}
        input={this.state.input}
      />
    </div>);
  }
}

export default App;
