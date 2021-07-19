import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const mapStateToProps = state => ({    
    todos: state.todos   
})

const TodoList = ({ todos }) => (   
        <ul>
            {todos.map(todo =>
                <Todo 
                    key = {todo.id}
                    {...todo}
                />
            )}
        </ul>   
)

export default connect(mapStateToProps)(TodoList);