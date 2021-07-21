import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, onClick, children }) => (
    <button disabled = {active} 
            onClick = {onClick}
            style = {{marginLeft: '4px'}}
    >
        {children}
    </button>
)

Link.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node
}

export default Link;