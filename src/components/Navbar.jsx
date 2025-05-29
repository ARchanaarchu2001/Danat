import React from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white  min-h-16 md:min-h-20 lg:min-h-24 ">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-2 space-y-4 ">
        
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-24 h-auto" />
          </Link>
        </div>

        {/* Menu Items */}
        <ul className="flex  items-center gap-4 font-serif text-xl">
          <li>
            <Link to="/" className="text-red-700 hover:text-black transition">Home</Link>
          </li>
          <li>
            <Link to = "/about" className="hover:text-red-700 transition">About Us</Link>
          </li>
          <li>
            <Link to = "/contact" className="hover:text-red-700 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
