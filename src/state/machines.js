import { useEffect, useState } from 'react';
import { fetchMachines } from '../services/api';

export const useMachines = () => {
  const [loading, setLoading] = useState(true);
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    fetchMachines().then(setMachines)
    .finally(() => setLoading(false));
  }, []);

  return { machines, loading };
};

