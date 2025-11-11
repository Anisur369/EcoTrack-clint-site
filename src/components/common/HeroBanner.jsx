import React from "react";

const HeroBanner = ({ featuredChallenges }) => {
  return (
    <div className="w-full bg-green-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Featured Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={challenge.image}
                alt={challenge.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{challenge.title}</h3>
                <p className="text-sm text-gray-600">{challenge.description}</p>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  View Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
