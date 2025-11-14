import { Link } from "react-router-dom";

const ChallengeCard = ({ challenge }) => {
  if (!challenge) {
    return <p>Loading...</p>;
  }
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <img
        src={challenge.imageUrl}
        alt={challenge.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-2xl font-bold">{challenge.title}</h2>
      <p className="text-gray-600">{challenge.category}</p>
      <p className="text-gray-600 mb-4">{challenge.metric}</p>
      <Link
        to={`/challenges/${challenge._id}`}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mt-10"
      >
        View Challenge
      </Link>
    </div>
  );
};

export default ChallengeCard;
