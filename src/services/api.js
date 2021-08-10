import request from 'superagent';

// export const fetchMachines = async () => {
//   const res = await fetch(`https://opdb.org/api/export/groups?api_token=${process.env.REACT_APP_OPDB_KEY}`);
//   const results = await res.json();
//   return results;
// }


export const fetchSearchMachine = async (term) => {
  const res = await fetch(`https://opdb.org/api/search?api_token=${process.env.REACT_APP_OPDB_KEY}&q=${term}`);
  return res.json();
};

export const fetchRkdbMachines = async () => {
  const res = await fetch('http://localhost:7890/api/v1/machines');
  return res.json();
}

export const addMachine = async (machine) => {

  console.log(machine)

  let imageUrl = null;
  if (machine.images.length > 0) {
    imageUrl = machine.images[0].urls.large;
  }

  const mungedMachine = {
    name: machine.name,
    manufacturer: machine.manufacturer.name,
    date: machine.manufacture_date,
    type: machine.type,
    image: imageUrl
  }

  console.log(mungedMachine);

  const res = await request
    .post('http://localhost:7890/api/v1/machines')
    .send(mungedMachine);


  return res.body;
}

export const fetchRkdbMachine = async (id) => {
  const res = await fetch(`http://localhost:7890/api/v1/machines/${id}`);
  return res.json();
}