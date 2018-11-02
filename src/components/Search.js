import React from 'react';
import './Search.css';
import './Form.css';

const Search = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="search">
      <input value={value} onChange={onChange} onCreate={onCreate} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        Add
      </div>
    </div>
  );
};

export default Search;