import React, { useState } from 'react';
import { useSearch } from '../state/machines';

const Search = () => {

  const [term, setTerm] = useState();
  const [loading, setLoading] = useState();

  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <form onSubmit={????}>
        <input 
          placeholder="Search OPDB..."
          type="text"
          name="term"
          value={term}
          onChange={({ target }) => setTerm(target.value)} />
        <button>Go</button>
      </form>
      <p>
        {term}
      </p>
    </>
  )
};

export default Search;

