import React from 'react'

const Navbar = () => {
  return (
   
    
    <div className=" w-full">
      <header className="bg-[#bd1e59] p-6 w-full">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-white h-6 w-6"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
          </svg>
          <h1 className="text-white text-2xl font-bold ml-2">
          Dating<em className="font-light">App</em>
          </h1>
        </div>
      </header>
     
     
    </div>
  )
}


export default Navbar;
