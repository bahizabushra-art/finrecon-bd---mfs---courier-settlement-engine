import React from 'react';

export const DualFileReconcile: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#0A0A0A] p-5 rounded-xl border border-neutral-800">
        <h2 className="text-xl font-bold text-white">Dual-File Reconcile Engine</h2>
        <p className="text-xs text-neutral-400">Compare Merchant Statement against Bank Gateway CSV logs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-[#0A0A0A] border border-dashed border-neutral-700 rounded-xl text-center">
          <p className="text-sm font-medium text-neutral-300">File A: Merchant Statement (.CSV)</p>
          <p className="text-xs text-emerald-400 mt-2">✓ Statement_Sep_2026.csv Loaded</p>
        </div>
        <div className="p-6 bg-[#0A0A0A] border border-dashed border-neutral-700 rounded-xl text-center">
          <p className="text-sm font-medium text-neutral-300">File B: Bank Gateway Log (.XLSX)</p>
          <p className="text-xs text-emerald-400 mt-2">✓ Gateway_Log_Sep_2026.xlsx Loaded</p>
        </div>
      </div>
    </div>
  );
};

export default DualFileReconcile;