import React, { useState } from 'react';
import Layout from '../components/Layout';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'active',
    areas: '',
    shiftStart: '',
    shiftEnd: '',
    password:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Replace with API call to save partner data
  };

  return (
    <Layout>
    <div className="p-6  bg-gray-100 min-h-screen flex justify-center items-center">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-4xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Register Partner</h1>
        
        <div className="grid grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex items-center">
            <label className="w-1/3 text-gray-600 font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter partner name"
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center">
            <label className="w-1/3 text-gray-600 font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter partner email"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex items-center">
            <label className="w-1/3 text-gray-600 font-medium">Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter partner phone"
              required
            />
          </div>

          {/* Status */}
          <div className="flex items-center">
            <label className="w-1/3 text-gray-600 font-medium">Status:</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>


          {/* Shift Start */}
          <div className="flex items-center">
            <label className="w-1/3 text-gray-600 font-medium">Shift Start:</label>
            <input
              type="time"
              name="shiftStart"
              value={formData.shiftStart}
              onChange={handleChange}
              className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Shift End */}
          <div className="flex items-center">
            <label className="w-1/3 text-gray-600 font-medium">Shift End:</label>
            <input
              type="time"
              name="shiftEnd"
              value={formData.shiftEnd}
              onChange={handleChange}
              className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {/* Areas */}
          <div className="flex items-center">
            <label className=" w-1/3 text-gray-600 font-medium">Areas:</label>
            <input
              type="text"
              name="areas"
              value={formData.areas}
              onChange={handleChange}
              className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Comma-separated areas"
            />
          </div>
        <div className="flex items-center">
            <label className="w-1/3 text-gray-600 font-medium">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a secure password"
              required
            />
          </div>
          
        </div>
        
          
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 font-semibold shadow-md"
          >
            Register
          </button>
        </div>
      </form>
    </div>
    </Layout>
  );
};

export default Registration;
