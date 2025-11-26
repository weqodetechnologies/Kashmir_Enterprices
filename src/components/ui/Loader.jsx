import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 via-red-600 to-red-900 animate-pulse"></div>
      <p className="text-white mt-4 tracking-widest">Loading...</p>
    </div>
  );
}

export default Loader;
