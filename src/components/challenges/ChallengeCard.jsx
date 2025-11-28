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
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex flex-col gap-2 h-[350px]">
        <img
          src={challenge.imageUrl}
          alt={challenge.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h2 className="text-xl font-bold">{challenge.title}</h2>
        <p className="text-gray-600">{challenge.category}</p>
        <div className="flex gap-[10%]">
          <p className="text-gray-600">
            <b>
              {challenge.duration} <span>days</span>
            </b>
          </p>
          <p className="text-gray-600">
            <b>
              {challenge.participants} <span>participants</span>
            </b>
          </p>
        </div>
        <p className="text-gray-600">{challenge.description}</p>
      </div>
      <div className="flex justify-between mt-2">
        <Link
          to={`/challenges/${challenge._id}`}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md shadow-2xs"
        >
          View
        </Link>
        <Link
          to={`/challenges/join/${challenge._id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md shadow-2xs"
        >
          Join
        </Link>
      </div>
    </div>
  );
};

export default ChallengeCard;
