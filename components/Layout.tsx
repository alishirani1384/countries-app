import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}:any) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        {children}
      </main>
    </>
  );
}

export default Layout