import Link from "next/link";
import { CustomButton, Logo } from "../index"; // Assuming Logo component

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-16 bg-white dark:bg-gray-800">
      <Link href="/">
        <Logo width={150} />
      </Link>
      <div className="flex items-center space-x-8">
        <Link
          href="#"
          className="text-gray-700 dark:text-light-gray hover:text-blue-500 font-medium"
        >
          Solutions
        </Link>
        <Link
          href="#"
          className="text-gray-700 dark:text-light-gray hover:text-blue-500 font-medium"
        >
          Value Ads
        </Link>
        <Link
          href="#"
          className="text-gray-700 dark:text-light-gray hover:text-blue-500 font-medium"
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="text-gray-700 dark:text-light-gray hover:text-blue-500 font-medium"
        >
          Resources
        </Link>
        <Link
          href="#"
          className="text-gray-700 dark:text-light-gray hover:text-blue-500 font-medium"
        >
          Get Started
        </Link>
        <CustomButton bgColor="bg-transparent" className="hover:bg-light-gray">
          Login
        </CustomButton>
        {/* <button className="rounded-full bg-blue-500 py-2 px-4 text-white font-medium hover:bg-blue-600 focus:outline-none">
          Login
        </button> */}
      </div>
    </header>
  );
};

//////////////////////// ================== OTHER

// import React, { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const dropdownItems = [
//     { title: 'Item 1', href: '#' },
//     { title: 'Item 2', href: '#' },
//     { title: 'Item 3', href: '#' },
//   ];

//   return (
//     <nav className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
//       <Link href="/">
//         <a className="text-xl font-bold">Logo</a>
//       </Link>
//       <div className="hidden md:flex items-center">
//         {dropdownItems.map((item) => (
//           <Link key={item.title} href={item.href}>
//             <a className="px-4 hover:text-gray-200">{item.title}</a>
//           </Link>
//         ))}
//       </div>
//       <button
//         className="md:hidden focus:outline-none"
//         onClick={toggleDropdown}
//       >
//         {isOpen ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         )}
//       </button>
//       <div className={`md:hidden absolute top-full left-0 w-full bg-gray-800 mt-2 py-4 ${isOpen ? 'block' : 'hidden'}`}>
//         {dropdownItems.map((item) => (
//           <Link key={item.title} href={item.href}>
//             <a className="block px-4 py-2 text-white hover:bg-gray-700">{item.title}</a>
//           </Link>
//         ))}
//       </div>
//       <div className="hidden md:flex items-center ml-4">
//         <Link href="#">
//           <a className="px-4 hover:text-gray-200">Button 1</a>
//         </Link>
//         <Link href="#">
//           <a className="px-4 hover:text-gray-200">Button 2</a>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
