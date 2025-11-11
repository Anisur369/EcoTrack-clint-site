import React from "react";

const LiveStatistics = ({ stats }) => {
  return (
    <div className="w-full bg-gray-100 py-6">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Community Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-lg font-semibold">{stats.co2Saved} kg</p>
            <p className="text-sm text-gray-600">CO₂ Saved</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <p className="text-lg font-semibold">{stats.plasticReduced} kg</p>
            <p className="text-sm text-gray-600">Plastic Reduced</p>
          </div>
          {/* আরও মেট্রিক চাইলে এখানে যোগ করতে পারো */}
        </div>
      </div>
    </div>
  );
};

export default LiveStatistics;
