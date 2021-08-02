import React from 'react';

class TodoForm extends React.Component {
  render() {
    const { handleFormSubmit, handleInputChange, input } = this.props;
    
    return (<form onSubmit={handleFormSubmit}>
      <input type="text" name="input" value={input} onChange={handleInputChange} />
      <button>Add Todo</button>
      <button>Clear Completed</button>
    </form>)
  }
}

export default TodoForm;