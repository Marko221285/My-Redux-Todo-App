import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ text, completed, onToggle, onDelete }) => (    
        <li>
            <span style = {{textDecoration: completed ? 'line-through' : 'none'}} 
                  onClick = {onToggle}>{text}</span>
            <button onClick = {onDelete} style = {{marginLeft: '5px'}}>X</button>
        </li>    
)

Todo.propTypes = {
    text: PropTypes.string,
    completed: PropTypes.bool,
    onToggle: PropTypes.func,
    onDelete: PropTypes.func
}

export default Todo;