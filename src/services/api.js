export const fetchMachines = async () => {
  const res = await fetch(`https://opdb.org/api/export/groups?api_token=${process.env.REACT_APP_OPDB_KEY}`);
  const results = await res.json();
  return results;
}


export const fetchSearchMachine = async (term) => {
  const res = await fetch(`https://opdb.org/api/search?api_token=${process.env.REACT_APP_OPDB_KEY}&q=${term}`);

  return res.json();
};

export const fetchRkdbMachines = async () => {
  const res = await fetch('/api/v1/machines');

  return res.json();
}