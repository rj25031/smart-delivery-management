import React,{useEffect,useState} from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
const PartnerDashboard = () => {
  const [order, setOrder] = useState([]);
  const [partner, setPartner] = useState([]);

  useEffect(() => {
    axios
      .get("https://smart-delivery-management.onrender.com/api/orders/getOrder")
      .then((response) => {
        setOrder(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://smart-delivery-management.onrender.com/api/partners/get")
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
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-700">Total Completed Orders</h2>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-gray-700">Active Orders</h2>
          <p className="text-2xl font-bold">{order.length}</p>
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
            <span>Order {order[order.length - 1]?.orderNumber}</span>
            <span>Status: {order[order.length - 1]?.status}</span>
          </li>
          <li className="flex justify-between p-2 border-b">
            <span>Order {order[order.length - 2]?.orderNumber}</span>
            <span>Status: {order[order.length - 2]?.status}</span>
          </li>
        </ul>
      </div>
    </div>
    </Layout>
  );
};

export default PartnerDashboard;
