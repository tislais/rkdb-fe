import React from 'react';
import { useParams } from 'react-router-dom';
import { deleteMachine } from '../services/api';
import { useMachine } from '../state/machines';

const MyMachineDetails = () => {
  const { id } = useParams();
  const { machine, loading } = useMachine(id);

  if(loading) return <h1>Loading...</h1>

  const handleDeleteButtonClick = async () => {
    await deleteMachine(id);
  }

  return (
    <div className={wrap}>

      { machine.image ? 
        <img className={img} src={machine.image} alt={machine.name} /> 
        : <div className={noImg}>No Image</div> }

      <div className={details}>
        <h2 className={h2}>{machine.name}</h2>
        <h3>Manufacturer: {machine.manufacturer}</h3>
        <p>Date of Manufacture: {machine.date}</p>
        <p>Type: {machine.type}</p>
      </div>
      <button>Update Serial Number</button>
      <button onClick={handleDeleteButtonClick}>Remove Machine</button>

    </div>
  )
}

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

export default MyMachineDetails;
