import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl"> Hello <br />  <span className="text-3xl">Ayush  👋 </span> </h1>
      <button className="border-2 bg-red-500 text-lg text-white px-5 py-1 rounded-sm">Logout</button>
      
      </div>
  );
};

export default Header;
  