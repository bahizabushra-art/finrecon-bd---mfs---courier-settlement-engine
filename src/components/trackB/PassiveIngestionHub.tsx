import React, { useState } from 'react';

export const PassiveIngestionHub: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSimulateUpload = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 1500);
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="flex justify-between items-center bg-[#0A0A0A] p-4 rounded-xl border border-neutral-800">
        <div>
          <h2 className="text-xl font-bold text-white">Track B: Passive Ingestion Hub</h2>
          <p className="text-xs text-neutral-400">Automated multi-channel file ingestion and background stream processing</p>
        </div>
        <button 
          onClick={handleSimulateUpload}
          className="px-4 py-2 bg-[#FACC15] text-[#050505] font-semibold text-sm rounded-lg hover:bg-yellow-400 transition"
        >
          {isProcessing ? 'Processing File...' : 'Upload Ingestion Data'}
        </button>
      </div>

      {/* Main Data Feed Area */}
      <div className="p-6 bg-[#0A0A0A] border border-neutral-800 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-md font-semibold text-neutral-200">Ingestion Streams (Live Feed)</h3>
          <span className="px-2.5 py-1 text-xs bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
            ● Stream Active
          </span>
        </div>

        {/* Data Stream Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-neutral-300">
            <thead className="bg-neutral-900 text-neutral-400 text-xs uppercase border-b border-neutral-800">
              <tr>
                <th className="p-3">Stream ID</th>
                <th className="p-3">Channel Source</th>
                <th className="p-3">Records Ingested</th>
                <th className="p-3">Latency</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800">
              <tr className="hover:bg-neutral-900/50">
                <td className="p-3 font-mono text-xs text-neutral-400">STRM-9021</td>
                <td className="p-3 font-medium text-white">Courier API Hook</td>
                <td className="p-3">1,240 pkts</td>
                <td className="p-3 text-neutral-400">12ms</td>
                <td className="p-3 text-emerald-400">SUCCESS</td>
              </tr>
              <tr className="hover:bg-neutral-900/50">
                <td className="p-3 font-mono text-xs text-neutral-400">STRM-9022</td>
                <td className="p-3 font-medium text-white">SME Batch CSV</td>
                <td className="p-3">850 pkts</td>
                <td className="p-3 text-neutral-400">45ms</td>
                <td className="p-3 text-emerald-400">SUCCESS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PassiveIngestionHub;