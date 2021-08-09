import React from 'react';
import { useSearchResultMachine } from '../state/machines';

const SearchItem = ({ machine, i }) => {

  const { handleAddMachine } = useSearchResultMachine();

  return (
    <li key={i}>
      { machine.images.length > 0 ? 
        <img className={li} src={machine.images[0].urls.large} alt={machine.name} /> 
        : <></> }
      <h2>{machine.name}</h2>
      <p>{machine.manufacturer.name}</p>
      <p>{machine.manufacture_date}</p>
      <p>{machine.type}</p>
      <button className={button} onClick={handleAddMachine}>Add</button>
    </li>
  )
}

const li = `
  w-24
`;

const button = `
  border-2
  px-4
  py-1
`;

export default SearchItem;
