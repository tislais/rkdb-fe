import React, { useEffect, useState } from 'react';
import { addMachine } from '../services/api.js';
import { useSearch } from '../state/machines.js';
import Search from './Search';
import SearchItem from './SearchItem';

const MachinesList = () => {
  const [loading, setLoading] = useState(true);
  const [machine, setMachine] = useState({});
  const { 
    searchMachines, 
    searchLoading, 
    onFormSubmit, 
    handleInputChange, 
    term 
  } = useSearch();
  const [displayData, setDisplayData] = useState([]);

  const handleAddButtonClick = async () => {
    await addMachine(machine);
  }

  useEffect(() => {
    if(searchMachines.length > 0) setDisplayData(searchMachines);
    setLoading(false);
  }, [searchMachines]);

  if(loading) return <h1>Loading...</h1>;
  if(searchLoading) return <h1>Searching...</h1>;


  const MachineElements = displayData.map((item, i) => {
    return <SearchItem machine={item} i={i} onAddButtonClick={handleAddButtonClick} setMachine={setMachine} /> 
  });
  

  return (
    <>
      <Search 
        searchMachines={searchMachines}
        searchLoading={searchLoading}
        onFormSubmit={onFormSubmit}
        onInputChange={handleInputChange}
        term={term} />
      <ul className={ul}>{MachineElements}</ul>
    </>
  );
}

const ul = `
  flex
  flex-col
  gap-4
`;

export default MachinesList;
