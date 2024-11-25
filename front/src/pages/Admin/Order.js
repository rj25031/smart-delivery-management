import React from 'react';
import Layout from '../../components/Layout';

const Order = () => {
  return (
    <Layout>
    <div className="p-6 bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center bg-white p-4 shadow">
        <h1 className="text-2xl font-bold">Orders</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Order
        </button>
      </header>

      <div className="bg-white mt-6 p-4 rounded shadow">
        <h2 className="text-lg font-bold">Filters</h2>
        <div className="flex space-x-4 mt-4">
          <select className="p-2 border rounded">
            <option>Status</option>
            <option>Pending</option>
            <option>Assigned</option>
            <option>Delivered</option>
          </select>
          <select className="p-2 border rounded">
            <option>Area</option>
            <option>Area 1</option>
            <option>Area 2</option>
          </select>
          <input
            type="date"
            className="p-2 border rounded"
          />
        </div>
      </div>

      <div className="bg-white mt-6 p-4 rounded shadow">
        <h2 className="text-lg font-bold">Order List</h2>
        <table className="min-w-full table-auto mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Order Number</th>
              <th className="px-4 py-2 text-left text-gray-600">Customer</th>
              <th className="px-4 py-2 text-left text-gray-600">Area</th>
              <th className="px-4 py-2 text-left text-gray-600">Status</th>
              <th className="px-4 py-2 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">#12345</td>
              <td className="px-4 py-2">Alice</td>
              <td className="px-4 py-2">Area 1</td>
              <td className="px-4 py-2 text-yellow-600">Pending</td>
              <td className="px-4 py-2">
                <button className="text-blue-500 hover:underline">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  );
};

export default Order;
