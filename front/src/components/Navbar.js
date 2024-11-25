import React from 'react';
import { NavLink } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';

function Navbar() {
  const role = 1; // Assume `1` is for admin, and `2` is for partner (or non-admin)

  return (
    <header className="flex justify-between items-center bg-white p-4 shadow">
      <h1 className="text-2xl font-bold">Smart Delivery Dashboard</h1>
      <NavLink
        to={'/partner/profile'}
        className="flex justify-between items-center text-2xl font-bold"
      >
        <VscAccount /> Rupesh Jadhav
      </NavLink>
      <nav className="space-x-4">
        {role === 1 ? (
          // Admin Routes
          <>
            <NavLink to="/admin" className="text-blue-500 hover:underline">
              Dashboard
            </NavLink>
            <NavLink to="/admin/partner" className="text-gray-700 hover:underline">
              Partners
            </NavLink>
            <NavLink to="/admin/order" className="text-gray-700 hover:underline">
              Orders
            </NavLink>
            <NavLink to="/admin/assignment" className="text-gray-700 hover:underline">
              Assignments
            </NavLink>
            <NavLink to="/admin/login" className="text-gray-700 hover:underline">
              LogIn
            </NavLink>
          </>
        ) : (
          // Partner Routes
          <>
            <NavLink to="/partner" className="text-blue-500 hover:underline">
              Dashboard
            </NavLink>
            <NavLink to="/partner/order" className="text-gray-700 hover:underline">
              My Orders
            </NavLink>
           
            
            
          </>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
