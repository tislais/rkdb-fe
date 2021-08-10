import React from 'react';

const SearchItem = ({ machine, i, onAddButtonClick, setMachine }) => {
  setMachine(machine);

  return (
    <li key={i} className={li}>
      <div className={wrap}>
        { machine.images.length > 0 ? 
          <img className={img} src={machine.images[0].urls.large} alt={machine.name} /> 
          : <div className="bg-gray-200 h-24 w-36 flex justify-center items-center text-gray-400">No Image</div> }
        <div className={details}>
          <h2 className={h2}>{machine.name}</h2>
          <h3>Manufacturer: {machine.manufacturer.name}</h3>
          <p>Date of Manufacture: {machine.manufacture_date}</p>
          <p>Type: {machine.type}</p>
        </div>
      </div>
      <button className={button} onClick={onAddButtonClick}>Add</button>
    </li>
  )
}

const li = `
  flex
  justify-between
  text-sm
  p-4
  bg-gray-100
  rounded-md
`;

const h2 = `
  col-span-4
  text-md
  font-bold
  mb-2
`;

const img = `
  w-36
`;

const wrap = `
  flex
  flex-row
  gap-4
`;

const details = `
  flex
  flex-col
`;

const button = `
  border-2
  px-4
  py-1
  h-12
`;

export default SearchItem;
