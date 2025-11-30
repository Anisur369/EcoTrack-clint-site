import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const MyActivities = () => {
  const user = useLoaderData();
  const [activities, setActivities] = useState([]);
 

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await fetch(
        `http://localhost:3000/challenges/${user.challengeId.split("'")[1]}`
      );
      const data = await response.json();
      setActivities(data);
    };
    fetchActivities();
  }, [user]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        Welcome, {activities.title} 🌿
      </h1>

      {/* Status Card */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Status: <span className="text-green-600">{user.status}</span>
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Next Level: {activities.target}
            </p>
          </div>
          <img
            src={activities.imageUrl}
            alt="Challenge Image"
            className="w-26 h-16 rounded-xl mr-4"
          />
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${user.progress}` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {user.progress} / 100 Impact Points
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Actions", value: `${user.progress}` },
          { label: "Actions This days", value: `${activities.duration}` },
          { label: "Avg Points/Action", value: 2 },
          { label: "Action Types", value: `${activities.participants}` },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
          >
            <p className="text-2xl font-bold text-green-700">{stat.value}</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Actions by Category */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Actions by Category
        </h3>
        <ul className="space-y-2">
          <li className="flex justify-between text-sm text-gray-700">
            <span>Recycling</span>
            <span>40 pts</span>
          </li>
          <li className="flex justify-between text-sm text-gray-700">
            <span>Energy Saving</span>
            <span>30 pts</span>
          </li>
          <li className="flex justify-between text-sm text-gray-700">
            <span>Transportation</span>
            <span>18 pts</span>
          </li>
        </ul>
      </div>

      {/* Weekly Progress */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Weekly Progress
        </h3>
        <div className="grid grid-cols-7 gap-2 text-center">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-xs text-gray-500">{day}</span>
              <div className="w-6 h-6 bg-green-400 rounded-full mt-1"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyActivities;
