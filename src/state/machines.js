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

  const [loading, setLoading] = useState(true);
  const [machines, setSearchMachines] = useState([]);

  useEffect(() => {
    fetchSearchMachine(term).then(setSearchMachines)
    .finally(() => setLoading(false));
  }, []);

  return { machines, loading };

}