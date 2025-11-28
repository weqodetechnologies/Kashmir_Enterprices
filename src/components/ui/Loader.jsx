import React from "react";
import gif from "../../assets/City Building Construction.gif";

function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <img src={gif} alt="Loading..." className="w-30 h-30" />
      <p className="text-white mt-4 tracking-widest">Loading</p>
    </div>
  );
}

export default Loader;
