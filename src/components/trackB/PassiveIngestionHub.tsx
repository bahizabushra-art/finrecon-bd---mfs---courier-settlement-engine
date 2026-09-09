import React from 'react';

export const PassiveIngestionHub: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">Passive Ingestion Hub</h2>
      <p className="text-gray-600">Processing ingestion streams...</p>
    </div>
  );
};

export default PassiveIngestionHub;