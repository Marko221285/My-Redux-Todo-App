import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (   
        <ul>
            {todos.map(todo => 
                <Todo 
                    key = {todo.id}
                    {...todo}
                    onToggle = {() => toggleTodo(todo.id)}
                    onDelete = {() => deleteTodo(todo.id)}
                />
            )}
        </ul>   
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      completed: PropTypes.bool,
      text: PropTypes.string
    })),
    toggleTodo: PropTypes.func,
    deleteTodo: PropTypes.func
}

export default TodoList;