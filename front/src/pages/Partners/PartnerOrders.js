import React from 'react';
import Layout from '../../components/Layout';

const PartnerOrders = () => {
  return (
    <Layout>
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white mt-6 p-4 rounded shadow">
        <h2 className="text-lg font-bold">Active Orders</h2>
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
            {/* Replace with dynamic data */}
            <tr>
              <td className="px-4 py-2">#12345</td>
              <td className="px-4 py-2">Alice</td>
              <td className="px-4 py-2">Area 1</td>
              <td className="px-4 py-2 text-yellow-600">Picked</td>
              <td className="px-4 py-2">
                <button className="text-blue-500 hover:underline">Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  );
};

export default PartnerOrders;
