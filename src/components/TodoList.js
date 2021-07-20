import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions';
import Todo from './Todo';

const mapStateToProps = state => ({    
    todos: state.todos   
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id))
})

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

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);