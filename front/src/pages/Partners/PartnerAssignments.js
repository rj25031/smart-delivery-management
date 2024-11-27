import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
const PartnerAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    axios.get('/api/assignments')
      .then(response => {
        setAssignments(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">My Assignments</h1>

      <div className="bg-white mt-6 p-6 rounded shadow">
        <h2 className="text-lg font-bold">Assigned Orders</h2>
        <table className="min-w-full table-auto mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Order Number</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment._id}>
                <td className="px-4 py-2">{assignment.orderId}</td>
                <td className="px-4 py-2">{assignment.status}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:underline">
                    Update Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  );
};

export default PartnerAssignments;
