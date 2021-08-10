import React, { useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { deleteMachine, updateMachine } from '../services/api';
import { useMachine } from '../state/machines';

const MyMachineDetails = () => {
  const { id } = useParams();
  const { machine, loading } = useMachine(id);
  const [editing, setEditing] = useState(false);
  const [serial, setSerial] = useState('');

  const history = useHistory();

  if(loading) return <h1>Loading...</h1>
  if(!machine) return <Redirect to="/machines" />

  const handleDeleteButtonClick = async () => {
    await deleteMachine(id);
    history.push('/machines');
  }

  const handleUpdateButtonClick = async () => {
    setEditing(true);
  }

  const handleInputChange = ({ target }) => {
    setSerial(target.value);
    console.log(serial);
  }

  const handleSubmit = async (e) => {

    await updateMachine(id, serial);
    setEditing(false);
  }

  return (

      
    <main className={main}>
      <section className={section}>
        <h2 className={h2}>{machine.name}</h2>

      { machine.image ? 
        <img className={img} src={machine.image} alt={machine.name} /> 
        : <div className={noImg}>No Image</div> }

      <div className={details}>
        <h3>Manufacturer: {machine.manufacturer}</h3>
        <p>Date of Manufacture: {machine.date}</p>
        <p>Type: {machine.type}</p>
        <p>Serial Number: {machine.serial}</p>
      </div>
      <button className={button} onClick={handleUpdateButtonClick}>Update Serial Number</button>
      <button className={button} onClick={handleDeleteButtonClick}>Remove Machine</button>
      { editing 
        ? <form className={form} onSubmit={handleSubmit}>
            <input className={input} onChange={handleInputChange} />
            <button className={button}>Submit</button> 
          </form>
        : <></> }
      </section>
    </main>
  )
}

const main = `
  flex 
  flex-col 
  col-span-12 
  p-4
  text-gray-800 

  sm:p-6
  lg:col-span-9
`;

const section = `
  p-6 
  bg-white 
  rounded-xl 
  shadow-lg

  sm:p-8
  md:p-12
  2xl:py-12
  2xl:px-24
`;

const h2 = `
  font-light
  col-span-4
  text-4xl
  mb-2
`;

const img = `
  w-36
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

const button = `
  text-white
  bg-green-500
  rounded-full
  py-2
  px-6
  mr-4
  mt-4

  hover:bg-green-600
`;

const input = `
  border-2
  w-1/2
  mr-4
`;

const form = `
  mt-4
`;

export default MyMachineDetails;
