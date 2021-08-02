import React from 'react';

class TodoForm extends React.Component {
  render() {
    const { handleFormSubmit, handleInputChange, handleClearCompleted, input } = this.props;
   
    let btnClasses = "border border-green-800 rounded-sm p-2 bg-green-500 text-pink-50 w-1/2 shadow";

    return (<form
        className="flex flex-col space-y-4 mt-4"
        onSubmit={handleFormSubmit}>
      <input
        className="border rounded-sm p-2 shadow"
        type="text"
        name="input"
        value={input}
        onChange={handleInputChange} />
      <div className="flex space-x-2">
        <button className={btnClasses} type="submit">Add Todo</button>
        <button className={btnClasses} type="button" onClick={handleClearCompleted}>Clear Completed</button>
      </div>
    </form>)
  }
}

export default TodoForm;