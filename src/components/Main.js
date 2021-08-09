import React from 'react';
import MachinesList from './MachinesList';

const Main = () => {

  return (
    <main className={main}>
      <section className={section}>
        <h2 className={h2}>rkdb 
          <span className={span}> Arcadabase</span>
        </h2>
        <MachinesList />
      </section>
    </main>
  )
};

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


export default Main;
