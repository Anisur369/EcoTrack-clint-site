import { Link } from "react-router-dom";

const ChallengeCard = ({ challenge }) => {
  if (!challenge) {
    return (
      <div className="flex justify-center items-center h-48">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  return (
    <div className="bg-white p-4 rounded-md shadow-md flex flex-col gap-4">
      <img
        src={challenge.imageUrl}
        alt={challenge.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold">{challenge.title}</h2>
      <p className="text-gray-600">
        <b>Category:</b> {challenge.category}
      </p>
      <p className="text-gray-600">
        <b>Metric:</b> {challenge.impactMetric}
      </p>
      <div className="flex justify-between">
        <Link
          to={`/challenges/${challenge._id}`}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          View Challenge
        </Link>
        <Link
          to={`/challenges/join/${challenge._id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Join
        </Link>
      </div>
    </div>
  );
};

export default ChallengeCard;
