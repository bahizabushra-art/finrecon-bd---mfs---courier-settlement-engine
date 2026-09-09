import React from 'react';

export const OrdersStream: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">Orders Stream</h2>
      <p className="text-gray-600">Loading orders data...</p>
    </div>
  );
};

export default OrdersStream;