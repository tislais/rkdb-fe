import React, { useState } from 'react';
import { useSearch } from '../state/machines';

const Search = () => {

  const [term, setTerm] = useState();
  const [loading, setLoading] = useState();

  const { onFormSubmit } = useSearch(term);

  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input 
          placeholder="Search OPDB..."
          type="text"
          name="term"
          value={term}
          onChange={({ target }) => setTerm(target.value)} />
        <button>Go</button>
      </form>
      
    </>
  )
};

export default Search;

