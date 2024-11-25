import React, { useState } from 'react';
import Layout from '../../components/Layout';

const PartnerProfile = () => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    areas: 'Area 1, Area 2',
    shiftStart: '08:00',
    shiftEnd: '16:00',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Updated:', formData);
    // Replace with API call to update profile
  };

  return (
    <Layout>
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="bg-white p-4 shadow">
        <h1 className="text-2xl font-bold">My Profile</h1>
      </header>

      <div className="bg-white mt-6 p-6 rounded shadow max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              disabled
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Areas</label>
            <input
              type="text"
              name="areas"
              value={formData.areas}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Shift Start</label>
            <input
              type="time"
              name="shiftStart"
              value={formData.shiftStart}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Shift End</label>
            <input
              type="time"
              name="shiftEnd"
              value={formData.shiftEnd}
              onChange={handleChange}
              className="w-full p-3 border rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 w-full"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default PartnerProfile;
