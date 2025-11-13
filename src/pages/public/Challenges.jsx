import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useContext as use } from "react";
import ChallengeGrid from "../../components/challenges/ChallengeGrid.jsx";

const Challenges = () => {
  const { user } = use(AuthContext);
  const [challenges, setChallenges] = React.useState([
    {
      id: 1,
      title: "Reduce Plastic Use",
      category: "Environment",
      metric: "120 participants",
      image: "https://picsum.photos/400/250?1",
    },
    {
      id: 2,
      title: "Save Water Challenge",
      category: "Sustainability",
      metric: "3,200 L saved",
      image: "https://picsum.photos/400/250?2",
    },
  ]);
  // const location = useLocation();

  // if (!user) {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  if (challenges.length === 0) {
    return <p>No challenges available at the moment.</p>;
  }

  // fetch challenges from server (mocked here) //http://localhost:3000/challenges
  React.useEffect(() => {
    // Simulate fetching data from an API
    const fetchChallenges = async () => {
      const response = await fetch("http://localhost:3000/challenges");
      const data = await response.json();
      setChallenges(data);
    };
    fetchChallenges();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Challenges</h1>
      <ChallengeGrid challenges={challenges} />
    </div>
  );
};

export default Challenges;
