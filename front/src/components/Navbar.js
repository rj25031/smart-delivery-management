import React, { useEffect,useState } from 'react';
import { NavLink ,useNavigate } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import { checkAuthToken } from '../helper/validToken';
function Navbar() {
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const decodedToken = checkAuthToken();
    if (!decodedToken) {
      navigate('/'); 
    } else {
      setToken(decodedToken); 
    }
    console.log(decodedToken);
    
  }, [navigate]); 

  if (!token) {
    return null; 
  }
  return (

    <header className="flex justify-between items-center bg-white p-4 shadow">
      <h1 className="text-2xl font-bold">Smart Delivery Dashboard</h1>
      <NavLink
        to={token?.role === 1 ? '/admin' :'/partner/profile'}
        className="flex justify-between items-center text-2xl font-bold"
      >
        <VscAccount /> {token?.name}
      </NavLink>
      <nav className="space-x-4">
        {token?.role === 1 ? (
         
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
            
          </>
        ) : (
       
          <>
            <NavLink to="/partner" className="text-blue-500 hover:underline">
              Dashboard
            </NavLink>
            {/* <NavLink to="/partner/assignment" className="text-blue-500 hover:underline">
            Assignment
            </NavLink> */}
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
