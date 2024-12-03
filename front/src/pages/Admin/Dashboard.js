import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
const Dashboard = () => {
  const [order, setOrder] = useState([]);
  const [partner, setPartner] = useState([]);

  function getData() {
    axios
      .get("https://smart-delivery-management.onrender.com/api/orders/getOrder")
      .then((response) => {
        setOrder(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://smart-delivery-management.onrender.com/api/partners/get")
      .then((response) => {
        setPartner(response.data);
        console.log(partner);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-gray-700">Total Orders</h2>
            <p className="text-2xl font-bold">{order.length}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-gray-700">Active Orders</h2>
            <p className="text-2xl font-bold">{order.length}</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-gray-700">Partner Availability</h2>
            <p className="text-2xl font-bold">{partner.length} Active</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-gray-700">Avg Completion Time</h2>
            <p className="text-2xl font-bold">49 min</p>
          </div>
        </div>

        <div className="bg-white mt-6 p-8 rounded shadow">
          <h2 className="text-lg font-bold mb-6">Active Orders Map</h2>
          <div className="h-64 bg-gray-200 flex justify-center items-center">
            <iframe
              title="sjcem map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60102.892024753135!2d72.72784282289759!3d19.694276912354233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71cdea3ddc177%3A0xdb2b913629961d24!2sPalghar%2C%20Maharashtra%20401404!5e0!3m2!1sen!2sin!4v1732894679352!5m2!1sen!2sin"
              width="100%"
              height="300"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
        </div>

        <div className="bg-white mt-6 p-4 rounded shadow">
          <h2 className="text-lg font-bold">Recent Assignments</h2>
          <ul>
            <li className="flex justify-between p-2 border-b">
              <span>order no. {order[order.length - 1]?.orderNumber}</span>
              <span>
                Assigned to Partner {partner[partner.length - 1]?.name}
              </span>
            </li>
            <li className="flex justify-between p-2 border-b">
              <span>order no. {order[order.length - 2]?.orderNumber}</span>
              <span>
                Assigned to Partner {partner[partner.length - 2]?.name}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
