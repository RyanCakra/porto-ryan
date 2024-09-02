import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ className, ulName, liName }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className={`flex justify-center ${className}`}>
      <ul className={`flex items-center gap-5 w-max p-8`}>
        <li>
          <Link to="/" className={`${pathname === '/' ? 'text-pink-700 font-bold text-lg' : `text-base text-slate-300 hover:text-slate-700`} transition duration-100`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={`${pathname === '/about' ? 'text-pink-700 font-bold text-lg' : `text-base text-slate-300 hover:text-slate-700`} transition duration-100`}>
            About
          </Link>
        </li>
        <li>
          <Link to="/works" className={`${pathname === '/works' ? 'text-pink-700 font-bold text-lg' : `text-base text-slate-300 hover:text-slate-700`} transition duration-100`}>
            Works
          </Link>
        </li>
        <li>
          <Link to="/projects" className={`${pathname === '/projects' ? 'text-pink-700 font-bold text-lg' : `text-base text-slate-300 hover:text-slate-700`} transition duration-100`}>
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
