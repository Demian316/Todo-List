import React, { Component } from 'react';

const FilterLink = ({filter, onVisible, children}) => {

    
    return (
    <a href = '#'
        onClick={e => {
            e.preventDefault();
            //store.dispatch({type: 'SET_VISIBILITY_FILTER'})
            onVisible(filter);
        }}
    >
    {children}
    </a>
    );
}

export default FilterLink;