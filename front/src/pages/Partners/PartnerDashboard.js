import React from 'react';
import Layout from '../../components/Layout';

const PartnerDashboard = () => {
  return (
    <Layout>
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-700">Total Completed Orders</h2>
          <p className="text-2xl font-bold">125</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-700">Active Orders</h2>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-700">Rating</h2>
          <p className="text-2xl font-bold">4.8</p>
        </div>
      </div>

      <div className="bg-white mt-6 p-4 rounded shadow">
        <h2 className="text-lg font-bold">Recent Orders</h2>
        <ul>
          <li className="flex justify-between p-2 border-b">
            <span>Order #1234</span>
            <span>Status: Delivered</span>
          </li>
          <li className="flex justify-between p-2 border-b">
            <span>Order #5678</span>
            <span>Status: Picked</span>
          </li>
        </ul>
      </div>
    </div>
    </Layout>
  );
};

export default PartnerDashboard;
