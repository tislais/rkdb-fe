import { useEffect, useState } from 'react';
import { fetchMachines, fetchSearchMachine } from '../services/api';

export const useMachines = () => {
  const [loading, setLoading] = useState(true);
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    fetchMachines().then(setMachines)
    .finally(() => setLoading(false));
  }, []);

  return { machines, loading };
};

export const useSearch = () => {

  const [searchMachines, setSearchMachines] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [term, setTerm] = useState('');

  const onInputChange = ({ target }) => {
    setTerm(target.value);
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setSearchLoading(true);

    await fetchSearchMachine(term).then(setSearchMachines)
    .finally(() => setSearchLoading(false));

    setTerm('');
  }

  return { 
    searchMachines, 
    searchLoading, 
    onFormSubmit, 
    onInputChange, 
    term, 
    setTerm
  };

}

export const useSearchResultMachine = () => {
  const onAddButtonClick = () => {
    console.log('hi')
  }

  return onAddButtonClick;

}
