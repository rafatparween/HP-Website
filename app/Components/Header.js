// "use client";
// import { useState } from "react";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-black py-2 px-4">
//       {/* Container */}
//       <div className="flex justify-between items-center max-w-[1510px] ">
//         {/* Left - Logo or Title */}
//         <a href="#" className="text-white font-bold text-[20px] md:hidden">
//           HP Support
//         </a>

//         {/* Hamburger Icon (Mobile) */}
//         <button
//           className="text-white md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>

//         {/* Menu Items */}
//         <div
//           className={`flex-col md:flex-row md:flex md:space-x-8 items-center text-center absolute md:static bg-[#0182c8] md:bg-transparent left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
//             isOpen ? "top-14 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"
//           }`}
//         >
//           <a href="#" className="text-white font-semibold text-[18px] hover:underline py-2 md:py-0">
//             Support Home
//           </a>

//           <div className="relative flex justify-center items-center space-x-1 group cursor-pointer py-2 md:py-0">
//             <a href="#" className="text-white font-semibold text-[18px]">
//               Products
//             </a>
//             <svg
//               className="w-4 h-4 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>

//           <a href="#" className="text-white font-semibold text-[18px] hover:underline py-2 md:py-0">
//             Software and Drivers
//           </a>

//           <div className="relative flex justify-center items-center space-x-1 group cursor-pointer py-2 md:py-0">
//             <a href="#" className="text-white font-semibold text-[18px]">
//               Diagnostics
//             </a>
//             <svg
//               className="w-4 h-4 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>

//           <a href="#" className="text-white font-semibold text-[18px] hover:underline py-2 md:py-0">
//             Contact Us
//           </a>

//           <div className="relative flex justify-center items-center space-x-1 group cursor-pointer py-2 md:py-0">
//             <a href="#" className="text-white font-semibold text-[18px]">
//               Business Support
//             </a>
//             <svg
//               className="w-4 h-4 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>

//           <div className="relative flex justify-center items-center space-x-1 group cursor-pointer py-2 md:py-0">
//             <a href="#" className="text-white font-semibold text-[18px]">
//               My HP Account
//             </a>
//             <svg
//               className="w-4 h-4 text-white"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }



"use client";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black py-2 px-4">
      {/* Container with 1360px width and side spacing */}
      <div className="flex justify-between items-center max-w-[1360px] mx-auto px-6">
        {/* Left - Logo or Title */}
        <a href="#" className="text-white font-bold text-[20px] md:hidden">
          HP Support
        </a>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Menu Items - Increased space between text */}
        <div
          className={`flex-col md:flex-row md:flex md:space-x-12 items-center text-center absolute md:static bg-[#0182c8] md:bg-transparent left-0 w-full md:w-auto transition-all duration-300 ease-in-out ${
            isOpen ? "top-14 opacity-100" : "top-[-400px] opacity-0 md:opacity-100"
          }`}
        >
          <a href="#" className="text-white font-semibold text-[18px] hover:underline py-2 md:py-0">
            Support Home
          </a>

          <div className="relative flex justify-center items-center space-x-2 group cursor-pointer py-2 md:py-0">
            <a href="#" className="text-white font-semibold text-[18px]">
              Products
            </a>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <a href="#" className="text-white font-semibold text-[18px] hover:underline py-2 md:py-0">
            Software and Drivers
          </a>

          <div className="relative flex justify-center items-center space-x-2 group cursor-pointer py-2 md:py-0">
            <a href="#" className="text-white font-semibold text-[18px]">
              Diagnostics
            </a>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <a href="#" className="text-white font-semibold text-[18px] hover:underline py-2 md:py-0">
            Contact Us
          </a>

          <div className="relative flex justify-center items-center space-x-2 group cursor-pointer py-2 md:py-0">
            <a href="#" className="text-white font-semibold text-[18px]">
              Business Support
            </a>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="relative flex justify-center items-center space-x-2 group cursor-pointer py-2 md:py-0">
            <a href="#" className="text-white font-semibold text-[18px]">
              My HP Account
            </a>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}