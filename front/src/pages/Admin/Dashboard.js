import React from "react";
import Layout from "../../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-gray-700">Total Orders</h2>
            <p className="text-2xl font-bold">1,245</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-gray-700">Active Orders</h2>
            <p className="text-2xl font-bold">127</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-gray-700">Partner Availability</h2>
            <p className="text-2xl font-bold">45 Active</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-gray-700">Avg Completion Time</h2>
            <p className="text-2xl font-bold">12 min</p>
          </div>
        </div>

        <div className="bg-white mt-6 p-4 rounded shadow">
          <h2 className="text-lg font-bold">Active Orders Map</h2>
          <div className="h-64 bg-gray-200 flex justify-center items-center">
            <p>Map goes here</p>
          </div>
        </div>

        <div className="bg-white mt-6 p-4 rounded shadow">
          <h2 className="text-lg font-bold">Recent Assignments</h2>
          <ul>
            <li className="flex justify-between p-2 border-b">
              <span>Order #1234</span>
              <span>Assigned to Partner #567</span>
            </li>
            <li className="flex justify-between p-2 border-b">
              <span>Order #5678</span>
              <span>Assigned to Partner #890</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
