import React, { useState, useEffect } from "react";
import "../App.css";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [seconds, setSeconds] = useState(30); 

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(timer);
        window.location.reload();
        setSeconds(30);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className="flex justify-between items-center p-6">
      <h1 className="HODLINFO text-cyan-500 text-4xl font-bold ">HODLINFO</h1>

      <div className="hidden sm:flex gap-4">
        <button
          id="dropdownHoverButton"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
          className="text-white bg-gray-600 hover:bg-gary-800 font-medium rounded-xl text-sm px-3 py-1 flex gap-1 items-center"
          type="button"
        >
          <p>INR</p>
        </button>
        <button
          id="dropdownHoverButton"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
          className="text-white bg-gray-600 hover:bg-gary-800 font-medium rounded-lg text-sm px-5 py-2.5 flex gap-1 items-center"
          type="button"
        >
          <p>BTC</p>
        </button>
        <button
          id="dropdownHoverButton"
          className="text-white bg-gray-600 hover:bg-gary-800 font-medium rounded-lg text-sm px-5 py-2.5 flex gap-1 items-center"
          type="button"
        >
          Buy BTC
        </button>
      </div>

      <div className="flex gap-5">
        <p className="hidden sm:block rounded-full px-3 border-2 border-cyan-500 text-cyan-500 text-center my-auto py-1">
          {seconds}
        </p>
        <button className="flex justify-center items-center rounded-xl gap-3 text-gray-50 bg-cyan-500 py-2 px-5">
          <p className="my-auto text-sm font-medium">Connect Telegram</p>
        </button>

        <label className="hidden sm:inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" checked />
          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-cyan-500  after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-500"></div>
        </label>
      </div>
    </div>
  );
}

export default Header;
