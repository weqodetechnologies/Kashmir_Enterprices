// import React from "react";

// function Loader() {
//   return (
//     <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
//       <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 via-red-600 to-red-900 animate-pulse"></div>
//       <p className="text-white mt-4 tracking-widest">Loading</p>
//     </div>
//   );
// }

// export default Loader;

// import React from "react";

// function Loader() {
//   return (
//     <div
//       className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center z-50"
//       role="status"
//       aria-label="Loading"
//     >
//       <div className="relative w-20 h-20">
//         <div className="absolute inset-0 w-20 h-20 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin"></div>
//         <div
//           className="absolute inset-2 w-16 h-16 border-4 border-white/20 border-t-white/50 rounded-full animate-spin"
//           style={{ animationDuration: "1s" }}
//         ></div>
//       </div>

//       <p className="text-white/90 mt-6 text-lg font-medium tracking-wide animate-pulse">
//         Loading...
//       </p>
//     </div>
//   );
// }

// export default Loader;

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
