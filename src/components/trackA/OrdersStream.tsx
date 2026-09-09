import React, { useState } from 'react';

export const OrdersStream: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample production data for demonstration
  const orders = [
    { id: 'ORD-8821', customer: 'Nexus Corp', amount: '৳ 45,200', method: 'bKash Merchant', status: 'Matched', gateway: 'Automated API' },
    { id: 'ORD-8822', customer: 'Apex Logistics', amount: '৳ 18,500', method: 'Nagad Direct', status: 'Pending Audit', gateway: 'Webhook Sync' },
    { id: 'ORD-8823', customer: 'Dhaka Retail Ltd', amount: '৳ 1,12,000', method: 'Bank Wire (EFT)', status: 'Matched', gateway: 'Automated API' },
    { id: 'ORD-8824', customer: 'Pathao Courier Hub', amount: '৳ 8,400', method: 'COD Settlement', status: 'Flagged Gap', gateway: 'Manual Recon Needed' },
  ];

  return (
    <div className="space-y-6">
      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#0A0A0A] p-4 rounded-xl border border-neutral-800">
          <p className="text-xs text-neutral-400">Total Stream Vol.</p>
          <p className="text-xl font-bold text-white mt-1">৳ 1,84,100</p>
        </div>
        <div className="bg-[#0A0A0A] p-4 rounded-xl border border-neutral-800">
          <p className="text-xs text-neutral-400">Matched Transactions</p>
          <p className="text-xl font-bold text-emerald-400 mt-1">2 / 4 Orders</p>
        </div>
        <div className="bg-[#0A0A0A] p-4 rounded-xl border border-neutral-800">
          <p className="text-xs text-neutral-400">Reconciliation Gap</p>
          <p className="text-xl font-bold text-amber-400 mt-1">৳ 8,400</p>
        </div>
        <div className="bg-[#0A0A0A] p-4 rounded-xl border border-neutral-800">
          <p className="text-xs text-neutral-400">API Sync Health</p>
          <p className="text-xl font-bold text-emerald-400 mt-1">99.8% Optimal</p>
        </div>
      </div>

      {/* Main Table Area */}
      <div className="bg-[#0A0A0A] border border-neutral-800 rounded-xl p-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white">Inbound Order Stream</h3>
            <p className="text-xs text-neutral-400">Real-time payment gateway inbound ingestion logs</p>
          </div>
          <input
            type="text"
            placeholder="Search Order ID or Client..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-[#FACC15] w-full sm:w-64"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-neutral-300">
            <thead className="bg-neutral-900 text-neutral-400 text-xs uppercase border-b border-neutral-800">
              <tr>
                <th className="p-3">Order Ref</th>
                <th className="p-3">Client</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Payment Vector</th>
                <th className="p-3">Ingestion Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              {orders
                .filter(o => o.id.toLowerCase().includes(searchTerm.toLowerCase()) || o.customer.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((order) => (
                  <tr key={order.id} className="hover:bg-neutral-900/50">
                    <td className="p-3 font-mono text-xs text-[#FACC15]">{order.id}</td>
                    <td className="p-3 font-medium text-white">{order.customer}</td>
                    <td className="p-3 font-mono">{order.amount}</td>
                    <td className="p-3 text-neutral-400">{order.method}</td>
                    <td className="p-3">
                      <span className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                        order.status === 'Matched' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                          : order.status === 'Pending Audit'
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersStream;