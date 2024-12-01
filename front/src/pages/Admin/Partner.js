import React, { useState } from "react";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Partner = () => {
  const [partner, setPartner] = useState([]);
  useEffect(() => {
    axios
      .get("/api/partners/get")
      .then((response) => {
        setPartner(response.data);
        console.log(partner);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <header className="flex justify-between items-center bg-white p-4 shadow">
          <h1 className="text-2xl font-bold">Partners</h1>
          <NavLink
            to="/admin/partner-register"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Partner
          </NavLink>
        </header>

        <div className="bg-white mt-6 p-4 rounded shadow">
          <h2 className="text-lg font-bold">Partner List</h2>
          <table className="min-w-full table-auto mt-4">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-gray-600">Index</th>
                <th className="px-4 py-2 text-left text-gray-600">Name</th>
                <th className="px-4 py-2 text-left text-gray-600">Email</th>
                <th className="px-4 py-2 text-left text-gray-600">Phone</th>
                <th className="px-4 py-2 text-left text-gray-600">Status</th>
                <th className="px-4 py-2 text-left text-gray-600">Area</th>
                <th className="px-4 py-2 text-left text-gray-600">Shift</th>
                <th className="px-4 py-2 text-left text-gray-600">Load</th>
                <th className="px-4 py-2 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {partner.map((partner, key) => {
                return (
                  <tr key={key}>
                    <td className="px-4 py-2">{key + 1}</td>
                    <td className="px-4 py-2">{partner.name}</td>
                    <td className="px-4 py-2">{partner.email}</td>
                    <td className="px-4 py-2">{partner.phone}</td>
                    <td className="px-4 py-2">
                      {partner.status ? "Active" : "Not Active"}
                    </td>
                    <td className="px-4 py-2 ">{partner.areas.join(",")}</td>
                    <td className="px-4 py-2 ">
                      {partner.shiftStart} - {partner.shiftEnd}
                    </td>
                    <td className="px-4 py-2 ">{partner.currentLoad}</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-500 hover:underline">
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Partner;
