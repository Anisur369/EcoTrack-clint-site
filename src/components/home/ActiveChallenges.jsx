import React from "react";
import { Link } from "react-router-dom";


const ActiveChallenges = () => {
  const [challenges, setChallenges] = React.useState([]);

  // Fetch challenges from server (mocked here) http://localhost:3000/challenges
  React.useEffect(() => {
    const fetchChallenges = async () => {
      const response = await fetch("http://localhost:3000/challenges");
      const data = await response.json();
      const sortedData = data.sort(
        (a, b) => new Date(b.startDate) - new Date(a.startDate)
      );
      const recentFour = sortedData.slice(0, 4);
      setChallenges(recentFour);
    };
    fetchChallenges();
  }, []);

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          🔥 Active Challenges
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {challenges.map((challenge) => (
            <div
              key={challenge._id}
              className="w-full lg:w-[280px] bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <div className="relative">
                <img
                  src={challenge.imageUrl}
                  alt={challenge.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded z-50">
                  Recent Challenge
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {challenge.title}
                </h3>
                <p className="text-sm text-green-600 font-medium">
                  {challenge.category}
                </p>
                <p className="text-sm text-gray-600 mt-2">{challenge.metric}</p>
                <Link
                  to={`/challenges/${challenge._id}`}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md bottm-0 mt-4 inline-block"
                >
                  View Challenge
                </Link>
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
