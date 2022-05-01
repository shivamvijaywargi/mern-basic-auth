import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-blue-500 text-white py-2">
      <span className="text-2xl font-bold">
        <Link to="/">MernAuth</Link>
      </span>
      <ul className="flex space-x-6 text-lg">
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navbar;
