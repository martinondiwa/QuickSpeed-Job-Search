import React, { useState } from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

const Banner = () => {
    const [query, setQuery] = useState ("");
    const handleInputChange = (event) => {
        setQuery(event.target.value)
       
    }
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-4 px-8 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Find your <span className="text-blue">Perfect Job</span> Match today
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Discover your next career opportunity with ease – search, apply, and
        land your dream job today!
      </p>

      <form action="">
        <div>
          <div className="flex md:rounded-s-md rounded shadow-sm ring-2 ring-inset focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
           <input type="text" name="title" id="title" placeholder="What position are you looking for?"  className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholdercolor: text-gray-400 focus:right-0 sm:leading-6
           " onChange={handleInputChange}
           value={query}/>
           <IoSearchCircleSharp className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Banner;
