import React from 'react';
import { useMyMachines } from '../state/machines';
import MyMachine from './MyMachine';

const MyMachines = () => {

  const { myMachines, loading } = useMyMachines();
  if (loading) return <h1>Loading...</h1>;

  console.log('myMachines.js ', myMachines);
  
  const myMachineElements = myMachines.map((machine, i) => (
    <MyMachine machine={machine} index={i} />
  ))

  return (
    <main className={main}>
      <section className={section}>
        <h2 className={h2}>my 
          <span className={span}> Machines</span>
          <ul>{myMachineElements}</ul>
        </h2>
      </section>
    </main>
  )
}

const main = `
  flex 
  flex-col 
  col-span-12 
  p-4
  text-gray-800 

  sm:p-6
  lg:col-span-9
`;

const section = `
  p-6 
  bg-white 
  rounded-xl 
  shadow-lg

  sm:p-8
  md:p-12
  2xl:py-12
  2xl:px-24
`;

const h2 = `
  text-4xl 
  font-extralight 
  text-center
  sm:text-left
  xl:my-10
`;

const span = `
  text-blue-400 
  font-semibold
`;

export default MyMachines;
