import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Cookies from 'js-cookie';
import axios from 'axios';
import Toast from '../components/Toast';
import { NavLink } from 'react-router-dom';
const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  const navigate = useNavigate();

  const triggerError = (message) => {
    setToastMessage(message);
    setToastVisible(true); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/login', formData);
      Cookies.set('token', response.data.token, {
        expires: 10,
        path: '/',
        secure: true,
        sameSite: 'strict',
      });

      setFormData({ email: '', password: '' });

      if (response.data.success) {
        navigate(response.data.user.role === 1 ? '/admin' : '/partner');
      } else {
        triggerError('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      triggerError('Invalid credentials or server error. Please try again.');
    }
  };

  return (
    // <Layout >
<>
<header className="flex justify-between items-center bg-white p-4 shadow">
      <h1 className="text-2xl font-bold">Smart Delivery Dashboard</h1>
      
      <nav className="space-x-4">
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
       
      </nav>
    </header>
      <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
        <form
          className="bg-white p-6 rounded shadow w-full max-w-sm"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold mb-4">Login</h1>
           <Toast visible={toastVisible} onClose={() => setToastVisible(false)} type = 'login'>
        {toastMessage}
      </Toast>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              aria-label="Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              aria-label="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Login
          </button>
        </form>
      </div>
      </>
    // </Layout>
  );
};

export default Login;
