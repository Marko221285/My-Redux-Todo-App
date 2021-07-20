import { combineReducers } from 'redux';

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text                    
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => 
                (todo.id === action.id)
                ? {...todo, completed: !todo.completed}
                : todo)
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id)
        default:
            return state
    }
}

export default combineReducers({todos: todosReducer});