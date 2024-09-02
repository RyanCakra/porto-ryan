import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ className }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className={`flex justify-center ${className}`}>
      <ul className="flex items-center gap-5 w-max p-8">
        {['/', '/about', '/projects'].map((path) => (
          <li key={path} className="relative group">
            <Link to={path} className={`${pathname === path ? 'text-pink-700 font-bold text-lg ' : 'text-base text-slate-300 hover:text-slate-600 transition duration-150'} relative`}>
              {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
            </Link>
            {pathname !== path && <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-pink-700 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
