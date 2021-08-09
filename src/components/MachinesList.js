import React, { useEffect, useState } from 'react';
import { useMachines, useSearch } from '../state/machines.js';
import Search from './Search';
import SearchItem from './SearchItem';

const MachinesList = () => {
  const [loading, setLoading] = useState(true);
  const { 
    searchMachines, 
    searchLoading, 
    onFormSubmit, 
    onInputChange, 
    term 
  } = useSearch();
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    if(searchMachines.length > 0) setDisplayData(searchMachines);
    setLoading(false);
  }, [searchMachines]);

  if(loading) return <h1>Loading...</h1>;
  if(searchLoading) return <h1>Searching...</h1>;


  const MachineElements = displayData.map((machine, i) => (
     <SearchItem machine={machine} />
  ));
  

  return (
    <>
      <Search 
        searchMachines={searchMachines}
        searchLoading={searchLoading}
        onFormSubmit={onFormSubmit}
        onInputChange={onInputChange}
        term={term} />
      <ul>{MachineElements}</ul>
    </>
  );
}

export default MachinesList;
