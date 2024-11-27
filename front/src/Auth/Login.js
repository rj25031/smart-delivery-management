import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Cookies from 'js-cookie';
import axios from 'axios';
import { checkAuthToken } from '../helper/validToken';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/login',formData)
      Cookies.set('token', response.data.token, { expires: 29/(24 * 60 * 60), path: '/', secure: true, sameSite: 'strict' });
      e.target[0].value="";
      e.target[1].value="";
      
      if(response.data.success && response.data.user.role === 1){
        console.log(1);
        
        navigate('/admin');
      }
      if(response.data.success && response.data.user.role === 0){
        console.log(1);
        navigate('/partner');
      }
    } catch (error) {
      console.log(error);
      
    }
   
  };


  return (
    <Layout>
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <form
        className="bg-white p-6 rounded shadow w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
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
    </Layout>
  );
};

export default Login;
