import React, { useState } from 'react';

const Search = () => {

  const [search, setSearch] = useState();

  return (
    <>
      <form>
        <input 
          placeholder="Search OPDB..."
          type="text"
          name="term"
          value={search}
          onChange={({ target }) => setSearch(target.value)} />
      </form>
      <p>
        {search}
      </p>
    </>
  )
};

export default Search;

