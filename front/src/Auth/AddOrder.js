import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from 'axios';
import Toast from '../components/Toast';

const AddOrder = () => {
  const [formData, setFormData] = useState({
    orderNumber: "",
    customer: { name: "", phone: "", address: "" },
    area: "",
    items: [{ name: "", quantity: 1, price: 0 }],
  });
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [types, setTypes] = useState("");
  const triggerError = (message) => {
    setToastMessage(message);
    setToastVisible(true); 
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split(".");

    if (nameParts.length === 2) {
      setFormData({
        ...formData,
        [nameParts[0]]: {
          ...formData[nameParts[0]],
          [nameParts[1]]: value,
        },
      });
    } else if (nameParts.length === 3) {
      const updatedItems = [...formData.items];
      updatedItems[nameParts[1]][nameParts[2]] = value;
      setFormData({ ...formData, items: updatedItems });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { name: "", quantity: 1, price: 0 }],
    });
  };

  const removeItem = (index) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: updatedItems });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://smart-delivery-management.onrender.com/api/orders/create", formData);
      
    setTypes(true);
    triggerError("order successfully created");
    setFormData({
      orderNumber: "",
      customer: { name: "", phone: "", address: "" },
      area: "",
      items: [{ name: "", quantity: 1, price: 0 }],
    })
    } catch (error) {
    setTypes(false);

      triggerError("Error creating order");
    }
  };

  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
        <form
          className="bg-white p-8 rounded shadow-md w-full max-w-4xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Add Order
          </h1>
          <Toast visible={toastVisible} onClose={() => setToastVisible(false)} type = {types ? 'sucorder': 'errorder'}>
        {toastMessage}
      </Toast>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center">
              <label className="w-1/3 text-gray-600 font-medium">
                Order Number:
              </label>
              <input
                type="text"
                name="orderNumber"
                value={formData.orderNumber}
                onChange={handleChange}
                className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Order number"
                required
              />
            </div>

            <div className="flex items-center">
              <label className="w-1/3 text-gray-600 font-medium">
                Customer Name:
              </label>
              <input
                type="text"
                name="customer.name"
                value={formData.customer.name}
                onChange={handleChange}
                className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter customer name"
                required
              />
            </div>

            <div className="flex items-center">
              <label className="w-1/3 text-gray-600 font-medium">
                Customer Phone:
              </label>
              <input
                type="text"
                name="customer.phone"
                value={formData.customer.phone}
                onChange={handleChange}
                className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter customer phone"
              />
            </div>

            <div className="flex items-center">
              <label className="w-1/3 text-gray-600 font-medium">
                Customer Address:
              </label>
              <input
                type="text"
                name="customer.address"
                value={formData.customer.address}
                onChange={handleChange}
                className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter customer address"
              />
            </div>

            <div className="flex items-center">
              <label className="w-1/3 text-gray-600 font-medium">Area:</label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter delivery area"
              />
            </div>
            <div className="col-span-2">
              <h2 className="text-xl font-semibold mb-4">Items</h2>
              {formData.items.map((item, index) => (
                <div key={index} className="flex items-center mb-4">
                  <input
                    type="text"
                    name={`items.${index}.name`}
                    value={item.name}
                    onChange={handleChange}
                    className="flex-grow p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Item name"
                    required
                  />

                  <div className="flex items-center ml-4">
                    <label className="w-1/3 text-gray-600 font-medium">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      name={`items.${index}.quantity`}
                      value={item.quantity}
                      onChange={handleChange}
                      className="w-20 p-3 border rounded ml-4"
                      placeholder="Quantity"
                      min="1"
                      required
                    />
                  </div>

                  <div className="flex items-center ml-4">
                    <label className="w-1/3 text-gray-600 font-medium">
                      Price:
                    </label>
                    <input
                      type="number"
                      name={`items.${index}.price`}
                      value={item.price}
                      onChange={handleChange}
                      className="w-20 p-3 border rounded ml-2"
                      placeholder="Price"
                      min="0"
                      required
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="self-center text-red-500 ml-2"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addItem}
                className="text-blue-500 mb-6"
              >
                Add Item
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-blue-500 text-white py-3 rounded-md"
          >
            Submit Order
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddOrder;
