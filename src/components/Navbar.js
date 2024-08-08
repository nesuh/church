import React, { useState } from "react";
import { Link } from 'react-router-dom';
import about_ico from './Assets/icons8-about-100.png';
import contact_ico from './Assets/icons8-contact-100.png';
import home_ico from './Assets/icons8-home-100.png';
import find_ico from './Assets/icons8-find-64 (1).png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="relative p-4 border-2  bg-customGreen">
      <button onClick={() => setShowMenu(!showMenu)} className="p-4">
        <div className="bg-yellow-600 mt-1 w-10 h-1"></div>
        <div className="bg-yellow-600 mt-1 w-10 h-1"></div>
        <div className="bg-yellow-600 mt-1 w-10 h-1"></div>
      </button>

      {showMenu && (
       <div className="absolute top-16 left-0 mt-1 bg-customGreen p-10 rounded shadow-md w-60 h-96 border-2 border-red-400">
       <ul>
         <li className="mb-2">
           <Link to="/" className="flex items-center my-6 text-white font-serif size-10" onClick={() => setShowMenu(false)}>
             <img src={home_ico} alt="home" className="w-8 mr-2" />
             Home
           </Link>
         </li>
         <li className="mb-2">
           <Link to="/contact" className="flex items-center my-6 text-white font-serif size-10" onClick={() => setShowMenu(false)}>
             <img src={contact_ico} alt="contact" className="w-8 mr-2" />
             Contact
           </Link>
         </li>
         <li className="mb-2">
           <Link to="/about" className="flex items-center my-6 q text-white font-serif size-10" onClick={() => setShowMenu(false)}>
             <img src={about_ico} alt="about" className="w-8 mr-2" />
             About
           </Link>
         </li>
       </ul>
     </div>
     
      )}
  <div className="flex items-center justify-center  f-4 w-1/2 mx-auto my-4">
      <h1 className="text-4xl font-bold font-serif text-yellow-500 mr-2">Ethiopian Church Finder</h1>
      <img src={find_ico} alt="find" className="w-10 h-10" />
    </div>
    </nav>
  );
};

export default Navbar;
