import React from 'react';

export default function DocumentSection({ workspace }) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Documents</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          New Folder
        </button>
      </div>
      <div className="bg-gray-800 rounded-lg p-4">
        {/* Document list would go here */}
        <p className="text-gray-400 text-center">Your documents will appear here</p>
      </div>
      {/* File upload section has been completely removed */}
    </div>
  );
}