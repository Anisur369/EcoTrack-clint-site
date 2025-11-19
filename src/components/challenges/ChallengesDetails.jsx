// challenges pop up window details page
import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import DeleteChallenge from "../common/DeleteChallenge.jsx";

const ChallengesDetails = () => {
  const challenge = useLoaderData();
  return (
    <>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md mt-10 relative">
        <div>
          <button
            disabled
            className="absolute top-9 right-9 bg-orange-400 text-white font-semibold px-3 py-1 rounded-md cursor-pointer"
          >
            Update
          </button>
        </div>
        <img
          src={challenge.imageUrl}
          alt={challenge.title}
          className="w-full h-88 object-cover rounded-md"
        />
        <h2 className="text-2xl font-semibold mt-4 text-gray-600">
          <b>Title:</b> {challenge.title}
        </h2>
        <p className="text-gray-600">
          <b>Category:</b> {challenge.category}
        </p>
        <p className="text-gray-600">
          <b>Description:</b> {challenge.description}
        </p>
        <p className="text-gray-600">
          <b>Created By:</b> {challenge.createdBy}
        </p>
        <p className="text-gray-600">
          <b>Duration:</b> {challenge.duration}
        </p>
        <p className="text-gray-600">
          <b>Start Date:</b> {challenge.startDate}
        </p>
        <p className="text-gray-600">
          <b>End Date:</b> {challenge.endDate}
        </p>
        <p className="text-gray-600">
          <b>Impact Metric:</b> {challenge.impactMetric}
        </p>
        <p className="text-gray-600">
          <b>Target:</b> {challenge.target}
        </p>
        <div className="flex justify-between items-center mt-4">
          <Link
            to={`/challenges/join/${challenge.id}`}
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Join Challenge
          </Link>
          <DeleteChallenge challengeId={challenge._id} />
        </div>
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
