import React from 'react';

const Todo = ({ text, onToggle, completed, onDelete }) => (    
        <li style = {{textDecoration: completed ? 'line-through' : 'none'}}>
            <span onClick = {onToggle}>{text}</span>
            <button onClick = {onDelete} style = {{marginLeft: '5px'}}>X</button>
        </li>    
)

export default Todo;