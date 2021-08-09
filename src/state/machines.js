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

export const useSearch = (term) => {

  const [machines, setSearchMachines] = useState([]);
  const [loading, setLoading] = useState(true);

  const onFormSubmit = (e) => {
    e.preventDefault();

    fetchSearchMachine(term).then(setSearchMachines)
    .finally(() => setLoading(false));
  }

  console.log(machines);
  return { machines, loading, onFormSubmit };

}