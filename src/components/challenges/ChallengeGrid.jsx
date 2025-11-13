import ChallengeCard from "./ChallengeCard";
const ChallengeGrid = ({ challenges }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {challenges.map((challenge) => {
        return (
          <ChallengeCard
            key={challenge._id || Math.random()}
            challenge={challenge}
          />
        );
      })}
    </div>
  );
};

export default ChallengeGrid;
