import React from 'react';
import { useMachines } from '../state/machines.js';
import Search from './Search';

const MachinesList = () => {
  const { machines, loading } = useMachines();
  if(loading) return <h1>Loading...</h1>;
  console.log(machines);

  const MachineElements = machines.map((group, i) => (
    <li key={i}>{group.name}</li>
  ))

  return (
    <>
      <Search />
      <ul>{MachineElements}</ul>
    </>
  );
}

export default MachinesList;