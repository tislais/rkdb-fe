import React from 'react';
import { NavLink } from 'react-router-dom';

const Side = () => {
  return (
    <nav className={nav}>
      <ul className={ul}>
        <NavLink exact to="/" activeClassName={active} className={navlink}><li className={li}>Search</li></NavLink>
        <NavLink exact to="/machines" activeClassName={active} className={navlink}><li className={li}>My Machines</li></NavLink>
      </ul>
    </nav>
  )
};

const nav = `
  col-span-12 
  lg:col-span-3
  2xl:col-span-3
`;

const ul = `
  flex 
  gap-4
  shadow-md
  bg-gray-800
  justify-evenly 
  p-2

  lg:gap-1
  lg:my-6
  lg:ml-6
  lg:flex-col 
  lg:p-4  
  lg:rounded-md

  2xl:bg-gray-900
`;

const li = `
  px-4 
  tracking-wider 
  text-gray-200 
  cursor-pointer
  w-full
  text-center
  gap-1
  
  hover:text-white
  hover:border-opacity-30 

  text-sm
  hover:bg-white
  hover:bg-opacity-10
  rounded-full
  px-6
  py-2

  lg:text-left
  lg:text-gray-100
  lg:text-lg

  xl:hover:border-gray-500

  2xl:text-green-300
  2xl:font-light
`;

const active = `
  bg-white 
  bg-opacity-10 
  2xl:text-white
  rounded-full
`;

const navlink = `w-full`;

export default Side;
