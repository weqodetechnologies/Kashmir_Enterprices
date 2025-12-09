// import React from "react";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { IoEllipseOutline } from "react-icons/io5";

// export default function Fountain() {
//   const [drops, setDrops] = useState([]);

//   const handleClick = () => {
//     const newDrops = Array.from({ length: 140 }).map((_, i) => ({
//       id: i + Date.now(),
//       x: Math.random() * window.innerWidth,
//       delay: Math.random() * 0.8,
//       rotation: Math.random() * 360,
//       size: 12 + Math.random() * 18,
//     }));

//     setDrops(newDrops);
//   };

//   return (
//     <div className="min-h-screen w-full relative flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">
//       {/* Fountain Area */}
//       <div className="absolute bottom-20 w-full h-[200px] flex items-end justify-center">
//         {drops.map((drop) => (
//           <motion.span
//             key={drop.id}
//             initial={{
//               opacity: 0,
//               y: 0,
//               x: 0,
//               scale: 0.2,
//               rotate: 0,
//             }}
//             animate={{
//               opacity: 1,
//               y: -window.innerHeight + Math.random() * 300,
//               x: drop.x - window.innerWidth / 2,
//               rotate: drop.rotation,
//               scale: 1,
//             }}
//             transition={{
//               delay: drop.delay,
//               duration: 2.6,
//               type: "spring",
//               stiffness: 50,
//             }}
//             className="absolute text-orange-800 font-bold select-none"
//             style={{ fontSize: `${drop.size}px` }}
//           >
//             <IoEllipseOutline />
//           </motion.span>
//         ))}
//       </div>

//       {drops.length > 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.15 }}
//           transition={{ delay: 1.8 }}
//           className="absolute inset-0 flex flex-wrap items-center justify-center gap-4 p-4 pointer-events-none"
//         >
//           {Array.from({ length: 220 }).map((_, i) => (
//             <span
//               key={i}
//               className="text-white text-xs sm:text-sm md:text-base font-bold opacity-70"
//             >
//               Vidushi
//             </span>
//           ))}
//         </motion.div>
//       )}

//       {/* Button */}
//       <motion.button
//         whileTap={{ scale: 0.92 }}
//         whileHover={{ scale: 1.08 }}
//         onClick={handleClick}
//         className="z-50 px-10 py-4 rounded-full bg-white text-black font-bold shadow-2xl"
//       >
//         Click
//       </motion.button>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { IoEllipseOutline } from "react-icons/io5";

export default function Fountain() {
  const [drops, setDrops] = useState([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // ✅ Track mouse softly
  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // ✅ Create Fountain
  const handleClick = () => {
    const newDrops = Array.from({ length: 120 }).map((_, i) => ({
      id: Date.now() + i,
      baseX: Math.random() * window.innerWidth - window.innerWidth / 2,
      baseY: Math.random() * window.innerHeight - window.innerHeight / 2,
      floatX: Math.random() * 80 - 40,
      floatY: Math.random() * 80 - 40,
      size: 12 + Math.random() * 18,
      rotation: Math.random() * 360,
      delay: Math.random(),
    }));

    setDrops(newDrops);
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black overflow-hidden">
      {/* ✅ SMOOTH FLOATING LAYER */}
      {drops.map((drop, i) => (
        <motion.span
          key={drop.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x:
              drop.baseX +
              Math.sin(i + Date.now() * 0.0002) * drop.floatX +
              (mouse.x - window.innerWidth / 2) * 0.05,

            y:
              drop.baseY +
              Math.cos(i + Date.now() * 0.0002) * drop.floatY +
              (mouse.y - window.innerHeight / 2) * 0.05,

            rotate: drop.rotation,
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            delay: drop.delay,
          }}
          className="absolute text-orange-700 select-none"
          style={{ fontSize: `${drop.size}px` }}
        >
          <IoEllipseOutline />
        </motion.span>
      ))}

      {/* ✅ Background Word Layer */}
      {drops.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ delay: 1.5 }}
          className="absolute inset-0 flex flex-wrap items-center justify-center gap-3 p-4 pointer-events-none"
        >
          {Array.from({ length: 200 }).map((_, i) => (
            <span
              key={i}
              className="text-white text-xs sm:text-sm md:text-base font-bold opacity-60"
            >
              Vidushi
            </span>
          ))}
        </motion.div>
      )}

   
      <motion.button
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.08 }}
        onClick={handleClick}
        className="z-50 px-10 py-4 rounded-full bg-white text-black font-bold shadow-2xl"
      >
        Click
      </motion.button>
    </div>
  );
}
