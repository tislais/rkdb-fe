import React from 'react';

const Search = ({ onFormSubmit, onInputChange, term }) => {

  return (
    <>
      <form onSubmit={onFormSubmit} className={form}>
        <input 
          className={input}
          placeholder="Search OPDB..."
          type="text"
          name="term"
          value={term}
          onChange={onInputChange} />
        <button className={button}>Go</button>
      </form>
    </>
  )
};

const input = `
  border-2 border-gray-300
  py-1
  px-4
  w-full
`;

const form = `
  flex
  justify-evenly
  mb-10
  gap-4
`;

const button = `
  w-24
  bg-blue-500
  text-white
  rounded-full
  active-blue-600
`;

export default Search;

