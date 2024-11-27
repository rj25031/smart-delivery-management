import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import { NavLink } from 'react-router-dom';

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    axios.get('/api/assignments/metrics')
      .then(response => {
        setMetrics(response.data);
      })
      .catch(err => { 
        console.log(err);
      });

    axios.get('/api/assignments/getAssign')
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
      <header className="flex justify-between items-center bg-white p-4 shadow">
        <h1 className="text-2xl font-bold">Assignment Management</h1>
        <NavLink to={'/admin/assignment/add'} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Assignment
        </NavLink>
      </header>

      <div className="bg-white mt-6 p-6 rounded shadow">
        <h2 className="text-lg font-bold">Assignment Metrics</h2>
        {metrics && (
          <div>
            <p>Total Assignments: {metrics.totalAssigned}</p>
            <p>Success Rate: {metrics.successRate}%</p>
            <p>Average Time: {metrics.averageTime} mins</p>
            <h3>Failure Reasons:</h3>
            <ul>
              {/* {metrics.failureReasons.map((reason, index) => (
                <li key={index}>
                  {reason.reason}: {reason.count} times
                </li>
              ))} */}
            </ul>
          </div>
        )}
      </div>

      <div className="bg-white mt-6 p-6 rounded shadow">
        <h2 className="text-lg font-bold">Active Assignments</h2>
        <table className="min-w-full table-auto mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Order Number</th>
              <th className="px-4 py-2 text-left">Partner</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {assignments.map((assignment) => (
              <tr key={assignment._id}>
                <td className="px-4 py-2">{assignment.orderId}</td>
                <td className="px-4 py-2">{assignment.partnerId}</td>
                <td className="px-4 py-2">{assignment.status}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:underline">
                    Update
                  </button>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  );
};

export default Assignments;
