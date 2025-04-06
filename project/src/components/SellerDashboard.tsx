import React from 'react';

export const SellerDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold text-gray-900">Seller Dashboard</h1>
      <div className="mt-6">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">Your Products</h2>
            <p className="mt-1 text-sm text-gray-500">
              Manage your product listings here
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <p className="p-4 text-gray-500 italic">No products listed yet</p>
          </div>
        </div>
      </div>
    </div>
  );
};