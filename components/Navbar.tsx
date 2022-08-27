
import React from 'react';
import { MoonIcon } from './Icons';

const Navbar = () => {
  function handleClick() {
    const html = document.documentElement;
    html.classList.toggle('dark')
    document.body.classList.toggle('dark')
  }
  return (
    <nav className="bg-white dark:bg-[#2b3945] dark:text-white h-14 flex items-center shadow-lg">
      <div className="container flex items-center justify-between mx-auto max-w-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <h2 className="font-[800] text-lg">Where in the world?</h2>
        <div
          onClick={handleClick}
          className="flex select-none items-center justify-between w-28 cursor-pointer font-[600]">
          <MoonIcon />
          Dark Mode
        </div>
      </div>
    </nav>
  );
}

export default Navbar