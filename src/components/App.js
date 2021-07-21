import React from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

const App = () => (
    <div>
      <h2>Simple Redux Todo App</h2>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>  
)

export default App;
