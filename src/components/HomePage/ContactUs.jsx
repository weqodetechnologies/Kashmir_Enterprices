// import React from "react";
// import img1 from "../../assets/homePage/Construction.png";

// export default function ContactUs() {
//   return (
//     <section className="w-full px-4 sm:px-6 md:px-10 lg:px-28 py-6 sm:py-8 md:py-8 lg:py-8 space-y-6">
//       {/* HEADING */}
//       <h1 className="text-left text-[42px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-black text-[#545353] tracking-[3px] sm:tracking-[6px] leading-tight">
//         GET IN TOUCH
//       </h1>

//       {/* SUBTEXT */}
//       <p className="max-w-6xl text-[#3E3E3E] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
//         Got a project in mind? Reach out to us, we’re here to help you build it
//         right. Let’s bring your vision to life.
//       </p>

//       {/* MAIN GRID */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 mt-10 items-center">
//         {/* LEFT IMAGE */}
//         <div className="relative flex justify-center lg:justify-start w-full">
//           <img
//             src={img1}
//             alt="project"
//             className="
//               rounded-3xl w-full
//               h-[350px] sm:h-[350px] md:h-[450px] lg:h-[540px]
//               object-cover sm:object-fill  shadow-2xl
//             "
//           />
//         </div>

//         {/* RIGHT FORM */}
//         <div
//           className="
//             bg-white border border-gray-200 shadow-2xl
//             px-4 sm:px-6 md:px-8 py-6 sm:py-8
//             rounded-3xl w-full
//             mx-auto
//           "
//         >
//           {/* NAME FIELDS */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="text-[13px] sm:text-[14px] font-semibold text-black">
//                 First Name:
//               </label>
//               <input
//                 type="text"
//                 className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
//               />
//             </div>

//             <div>
//               <label className="text-[13px] sm:text-[14px] font-semibold text-black">
//                 Last Name:
//               </label>
//               <input
//                 type="text"
//                 className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
//               />
//             </div>
//           </div>

//           {/* EMAIL */}
//           <div className="mt-4">
//             <label className="text-[13px] sm:text-[14px] font-semibold text-black">
//               Email:
//             </label>
//             <input
//               type="email"
//               className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* PHONE */}
//           <div className="mt-4">
//             <label className="text-[13px] sm:text-[14px] font-semibold text-black">
//               Phone No:
//             </label>
//             <input
//               type="text"
//               className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
//             />
//           </div>

//           {/* MESSAGE */}
//           <div className="mt-4">
//             <label className="text-[13px] sm:text-[14px] font-semibold text-black">
//               Message:
//             </label>
//             <textarea
//               rows="4"
//               className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-black resize-none"
//             ></textarea>
//           </div>

//           {/* SUBMIT BUTTON */}
//           <button className="mt-6 w-full bg-black text-white text-[14px] sm:text-[15px] font-semibold py-3 rounded-xl hover:bg-gray-800 transition cursor-pointer">
//             Submit
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import img1 from "../../assets/homePage/Construction.png";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // SEND MAIL TO YOU (ADMIN)
    emailjs.sendForm(
      "service_f10taox",
      "template_uvfw606",
      form.current,
      "m-h4-c3W3yeJdpBBl"
    );

    // SEND CONFIRMATION MAIL TO USER
    emailjs.sendForm(
      "service_f10taox",
      "template_6yn383s",
      form.current,
      "m-h4-c3W3yeJdpBBl"
    );

    e.target.reset();
    alert("Message Sent Successfully!");
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-28 py-6 space-y-6">
      <h1 className="text-left text-[42px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-black text-[#545353] tracking-[3px] sm:tracking-[6px] leading-tight">
        GET IN TOUCH
      </h1>

      <p className="max-w-6xl text-[#3E3E3E] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
        Got a project in mind? Reach out to us.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 mt-10 items-center">
        <img
          src={img1}
          alt="project"
          className="rounded-3xl w-full h-[520px] object-fill shadow-2xl"
        />

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white border border-gray-200 shadow-2xl px-6 py-8 rounded-3xl w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="first_name"
                required
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label>Last Name:</label>
              <input
                type="text"
                name="last_name"
                required
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>

          <div className="mt-4">
            <label>Email:</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mt-4">
            <label>Phone No:</label>
            <input
              type="text"
              name="phone"
              required
              className="w-full p-2 border rounded-lg"
            />
          </div>

          <div className="mt-4">
            <label>Message:</label>
            <textarea
              rows="4"
              name="message"
              required
              className="w-full p-2 border rounded-lg"
            ></textarea>
          </div>

          <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
