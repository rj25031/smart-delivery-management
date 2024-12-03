import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssignmentForm = () => {
  const [orders, setOrders] = useState([]);
  const [partners, setPartners] = useState([]);
  const [formData, setFormData] = useState({
    orderId: '',
    partnerId: '',
    status: '',
    reason: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchOrdersAndPartners = async () => {
      try {
        const ordersResponse = await axios.get('https://smart-delivery-management.onrender.com/api/orders');
        const partnersResponse = await axios.get('https://smart-delivery-management.onrender.com/api/partners');
        setOrders(ordersResponse.data);
        setPartners(partnersResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchOrdersAndPartners();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://smart-delivery-management.onrender.com/api/assignments', formData);
      setMessage(response.data.message);
      setFormData({
        orderId: '',
        partnerId: '',
        status: '',
        reason: '',
      });
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error assigning order.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Assign Order</h2>
      {message && (
        <div className="mb-4 p-3 bg-blue-100 text-blue-800 rounded">{message}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Select Order
          </label>
          <select
            name="orderId"
            value={formData.orderId}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">-- Select Order --</option>
            {orders.map((order) => (
              <option key={order._id} value={order._id}>
                {order.orderNumber} - {order.customer.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Select Partner
          </label>
          <select
            name="partnerId"
            value={formData.partnerId}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">-- Select Partner --</option>
            {partners.map((partner) => (
              <option key={partner._id} value={partner._id}>
                {partner.name} - {partner.email}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">-- Select Status --</option>
            <option value="success">Success</option>
            <option value="failure">Failure</option>
          </select>
        </div>

        {formData.status === 'failure' && (
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Reason for Failure
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Reason for failure"
              required
            ></textarea>
          </div>
        )}

        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition duration-200"
        >
          Assign Order
        </button>
      </form>
    </div>
  );
};

export default AssignmentForm;
