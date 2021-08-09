import React from 'react';
// import { useSearch } from '../state/machines';
// import SearchList from './SearchList';

const Search = ({ onFormSubmit, onInputChange, term }) => {

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input 
          placeholder="Search OPDB..."
          type="text"
          name="term"
          value={term}
          onChange={onInputChange} />
        <button>Go</button>
      </form>
    </>
  )
};

export default Search;

