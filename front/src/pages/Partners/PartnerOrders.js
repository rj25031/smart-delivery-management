import React,{useEffect,useState} from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import { checkAuthToken } from '../../helper/validToken';

const PartnerOrders = () => {
  const [order, setOrder] = useState([]);
  const [token, setToken] = useState([]);

  useEffect(() => {
    const decodedToken = checkAuthToken();
    setToken(decodedToken);
    axios
      .get("/api/orders/getOrder")
      .then((response) => {
        setOrder(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white mt-6 p-4 rounded shadow">
        <h2 className="text-lg font-bold">Active Orders</h2>
        <table className="min-w-full table-auto mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-600">Order Number</th>
              <th className="px-4 py-2 text-left text-gray-600">Customer</th>
              <th className="px-4 py-2 text-left text-gray-600">Area</th>
              <th className="px-4 py-2 text-left text-gray-600">Status</th>
              <th className="px-4 py-2 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {order.map((od,k)=>{
              if(od.aassignedTo === token?.name){
                return (
                  <tr key={k}>
              <td className="px-4 py-2">{od.orderNumber}</td>
              <td className="px-4 py-2">{od?.customer.name}</td>
              <td className="px-4 py-2">{od?.area}</td>
              <td className="px-4 py-2 text-yellow-600">{od.status}</td>
              <td className="px-4 py-2">
                <button className="text-blue-500 hover:underline">Update</button>
              </td>
            </tr>
                )
              }
              
            })}
            
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
  );
};

export default PartnerOrders;
