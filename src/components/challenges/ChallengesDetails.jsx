// challenges pop up window details page
import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const ChallengesDetails = () => {
  const challenge = useLoaderData();
  return (
    <>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md mt-10">
        <img
          src={challenge.imageUrl}
          alt={challenge.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-2xl font-bold">{challenge.title}</h2>
        <p className="text-gray-600">{challenge.category}</p>
        <p className="text-gray-600 mb-4">{challenge.metric}</p>
        <p className="text-gray-600">{challenge.description}</p>
      </div>
      <div className="max-w-3xl mx-auto p-6">
        <Link
          to="/challenges"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          &larr; Back to Challenges
        </Link>
      </div>
    </>
  );
};
export default ChallengesDetails;
