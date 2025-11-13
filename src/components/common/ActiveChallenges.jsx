import React from "react";
import { Link } from "react-router-dom";

const challenges = [
  {
    id: 1,
    title: "Reduce Plastic Use",
    category: "Environment",
    metric: "120 participants",
    image: "https://picsum.photos/400/250?1",
  },
  {
    id: 2,
    title: "Walk to Work",
    category: "Health",
    metric: "85 km walked",
    image: "https://picsum.photos/400/250?2",
  },
  {
    id: 3,
    title: "Plant Trees",
    category: "Community",
    metric: "42 trees planted",
    image: "https://picsum.photos/400/250?3",
  },
  {
    id: 4,
    title: "Save Water",
    category: "Sustainability",
    metric: "3,200 L saved",
    image: "https://picsum.photos/400/250?4",
  },
];

const ActiveChallenges = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          🔥 Active Challenges
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={challenge.image}
                alt={challenge.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {challenge.title}
                </h3>
                <p className="text-sm text-green-600 font-medium">
                  {challenge.category}
                </p>
                <p className="text-sm text-gray-600 mt-2">{challenge.metric}</p>
                <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                  View Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/challenges"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full flex items-center gap-2"
          >
            View All Challenges
            <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActiveChallenges;
