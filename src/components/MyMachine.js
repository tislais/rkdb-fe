import React from 'react';
import { Link } from 'react-router-dom';

const MyMachine = ({ machine, i }) => {
  return (
    <Link to={`/machines/${machine.id}`}>
      <li key={i} className={li}>
        <div className={wrap}>

          { machine.image 
            ? <img className={img} src={machine.image} alt={machine.name} /> 
            : <div className={noImg}>No Image</div> }

          <div className={details}>
            <h2 className={h2}>{machine.name}</h2>
            <h3>Manufacturer: {machine.manufacturer.name}</h3>
            <p>Date of Manufacture: {machine.manufacture_date}</p>
            <p>Type: {machine.type}</p>
          </div>
          
        </div>
      </li>
    </Link>
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

const noImg = `
  bg-gray-200 
  h-24 
  w-36 
  flex 
  justify-center 
  items-center 
  text-gray-400
`;

export default MyMachine;
