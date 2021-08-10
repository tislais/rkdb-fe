import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchRkdbMachine, fetchRkdbMachines, fetchSearchMachine } from '../services/api';

// export const useMachines = () => {
//   const [loading, setLoading] = useState(true);
//   const [machines, setMachines] = useState([]);

//   useEffect(() => {
//     fetchMachines().then(setMachines)
//     .finally(() => setLoading(false));
//   }, []);

//   return { machines, loading };
// };

export const useSearch = () => {

  const [searchMachines, setSearchMachines] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [term, setTerm] = useState('');


  const handleInputChange = ({ target }) => {
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
    handleInputChange, 
    term, 
    setTerm
  };

}

export const useMyMachines = () => {
  const [loading, setLoading] = useState(true);
  const [myMachines, setMyMachines] = useState([]);

  useEffect(() => {
    fetchRkdbMachines().then(setMyMachines)
    .finally(setLoading(false));
  }, []);

  return { myMachines, loading }; 
}

export const useMachine = (id) => {
  const [machine, setMyMachine] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRkdbMachine(id)
    .then(setMyMachine)
    .finally(() => setLoading(false));
  }, [id])

  return { machine, loading };
}