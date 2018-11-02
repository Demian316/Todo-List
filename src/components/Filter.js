import React, { Component } from 'react';
import './Filter.css';
import './Form.css';
import FilterLink from './FilterLink.js';

class Filter extends Component {

  render() {
    const { onVisible } = this.props;

    return (
      <div className="filter">
      <p>
          Show: 
          {' '}
          <FilterLink filter='SHOW_ALL' onVisible={onVisible} >
          ALL
          </FilterLink>
          {' '}

          <FilterLink filter='SHOW_ACTIVE' onVisible={onVisible}>
          Active
          </FilterLink>

          {' '}
          <FilterLink filter='SHOW_COMPLETED' onVisible={onVisible}>
          Completed
          </FilterLink>
      </p>
    </div>
    );
  }

/*
const Filter = ({onVisible}) => {
  return (
    <div className="filter">
      <p>
          Show: 
          {' '}
          <FilterLink filter='SHOW_ALL' onVisible={onVisible} >
          ALL
          </FilterLink>
          {' '}
          <FilterLink filter='SHOW_ACTIVE' onVisible={onVisible}>
          Active
          </FilterLink>
          {' '}
          <FilterLink filter='SHOW_COMPLETED' onVisible={onVisible}>
          Completed
          </FilterLink>
      </p>
    </div>
  );
};*/
}
export default Filter;