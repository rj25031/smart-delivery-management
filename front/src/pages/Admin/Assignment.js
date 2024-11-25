import React from 'react';
import Layout from '../../components/Layout';

const Assignment = () => {
  return (
    <Layout>
    <div className="p-6 bg-gray-100 min-h-screen">
    
      <header className="flex justify-between items-center bg-white p-4 shadow">
        <h1 className="text-2xl font-bold">Assignments</h1>
      </header>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-700">Total Assignments</h2>
          <p className="text-2xl font-bold">1,245</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-700">Success Rate</h2> 
          <p className="text-2xl font-bold">95%</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-700">Average Time</h2>
          <p className="text-2xl font-bold">8 min</p>
        </div>
      </div>

      
      <div className="bg-white mt-6 p-4 rounded shadow">
        <h2 className="text-lg font-bold">Active Assignments</h2>
        <table className="min-w-full table-auto mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Order ID</th>
              <th className="px-4 py-2 text-left text-gray-600">Partner ID</th>
              <th className="px-4 py-2 text-left text-gray-600">Timestamp</th>
              <th className="px-4 py-2 text-left text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
           
            <tr>
              <td className="px-4 py-2">#12345</td>
              <td className="px-4 py-2">56789</td>
              <td className="px-4 py-2">12:30 PM</td>
              <td className="px-4 py-2 text-green-600">Success</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  );
};

export default Assignment;
