import React from 'react';

class TodoForm extends React.Component {
  render() {
    const { handleFormSubmit, handleInputChange, handleClearCompleted, input } = this.props;
    
    return (<form onSubmit={handleFormSubmit}>
      <input type="text" name="input" value={input} onChange={handleInputChange} />
      <button type="submit">Add Todo</button>
      <button type="button" onClick={handleClearCompleted}>Clear Completed</button>
    </form>)
  }
}

export default TodoForm;