import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = () => {
  return (
    <div>
      <h2>Simple Redux Todo App</h2>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
