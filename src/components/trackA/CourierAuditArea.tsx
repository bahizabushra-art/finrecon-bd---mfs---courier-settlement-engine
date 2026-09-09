import React from 'react';

export const CourierAuditArea: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#0A0A0A] p-5 rounded-xl border border-neutral-800 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-white">Courier Audit & Reconciliation Area</h2>
          <p className="text-xs text-neutral-400">Automatic matching engine across Pathao, Steadfast & Paperfly</p>
        </div>
        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs rounded-full font-mono">
          Engine: Active
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-[#0A0A0A] border border-neutral-800 rounded-xl">
          <p className="text-xs text-neutral-400">Total Audit Volume</p>
          <p className="text-2xl font-bold text-white mt-1">৳ 5,42,000</p>
        </div>
        <div className="p-4 bg-[#0A0A0A] border border-neutral-800 rounded-xl">
          <p className="text-xs text-neutral-400">Discrepancy Detected</p>
          <p className="text-2xl font-bold text-amber-400 mt-1">৳ 12,450</p>
        </div>
        <div className="p-4 bg-[#0A0A0A] border border-neutral-800 rounded-xl">
          <p className="text-xs text-neutral-400">Auto-Resolved Rate</p>
          <p className="text-2xl font-bold text-emerald-400 mt-1">97.8%</p>
        </div>
      </div>
    </div>
  );
};

export default CourierAuditArea;