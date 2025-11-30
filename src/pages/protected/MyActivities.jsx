// src/pages/MyActivities.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Trophy,
  Target,
  Trees,
  Droplet,
  Trash2,
  Calendar,
  TrendingUp,
} from "lucide-react";

export default function MyActivities() {
  const [userChallenges, setUserChallenges] = useState([]);
  const [challengesData, setChallengesData] = useState([]);
  const [loading, setLoading] = useState(true);
  // http://localhost:3000/userChallenges fetch user challenges from server
  useEffect(() => {
    const fetchUserChallenges = async () => {
      const response = await fetch("http://localhost:3000/userChallenges");
      const data = await response.json();
      setUserChallenges(data);
      setLoading(false);
    };
    fetchUserChallenges();
    const fetchChallenges = async () => {
      const response = await fetch("http://localhost:3000/challenges");
      const data = await response.json();
      setChallengesData(data);
      setLoading(false);
    };
    fetchChallenges();
  }, []);

  function getDaysBetween(start, end) {
    const diffTime = new Date(end) - new Date(start);
    return diffTime / (1000 * 60 * 60 * 24) + 1 + " days";
  }

  return (
    <>
      {/* Main Dashboard */}
      <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-3">
              My Activities
            </h1>
            <p className="text-lg text-gray-600">
              Track your green journey and see your impact on the planet
            </p>
          </div>

          {/* User Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition">
              <Trees className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900">48</p>
              <p className="text-gray-600">Trees Planted</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition">
              <Droplet className="h-12 w-12 text-cyan-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900">8,420 liters</p>
              <p className="text-gray-600">Liters Saved</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition">
              <Trash2 className="h-12 w-12 text-amber-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900">268</p>
              <p className="text-gray-600">Plastic Avoided</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition">
              <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900">127</p>
              <p className="text-gray-600">Global Rank</p>
            </div>
          </div>

          {/* Streak & Total Impact */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-8 mb-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  You're on a 24-Day Streak!
                </h2>
                <p className="text-md opacity-90">
                  Keep going! Every day counts for the planet.
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">
                  3.8 tons CO₂ saved
                </div>
                <p className="text-2xl opacity-90">Total CO₂ Saved</p>
              </div>
            </div>
          </div>

          {/* Active Challenges */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            My Challenges
          </h2>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userChallenges.map((i) => (
                <div
                  key={i}
                  className="bg-gray-200 rounded-2xl h-64 animate-pulse"
                ></div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {userChallenges.map((userData) => {
                return (
                  <Link
                    key={userData._id}
                    to={`/my-activities/${userData._id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="h-48 bg-gradient-to-br from-emerald-400 to-teal-500 relative overflow-hidden">
                        {challengesData.map((challenge,index) => {
                          if (
                            userData.challengeId ==
                            `ObjectId('${challenge._id}')`
                          ) {
                            return (
                              <img
                                className="w-full h-full object-cover"
                                alt="image is not available"
                                src={challenge.imageUrl}
                                key={index}
                              />
                            );
                          }
                        })}
                        <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition"></div>
                        <div className="absolute bottom-4 left-4">
                          <span className="px-4 py-2 bg-white bg-opacity-90 rounded-full text-sm font-semibold text-emerald-800">
                            {challengesData.map((challenge) => {
                              if (
                                userData.challengeId ==
                                `ObjectId('${challenge._id}')`
                              ) {
                                return challenge.category;
                              }
                            })}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {challengesData.map((challenge) => {
                            if (
                              userData.challengeId ==
                              `ObjectId('${challenge._id}')`
                            ) {
                              return challenge.title;
                            }
                          })}
                        </h3>

                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-bold">
                              {userData.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                              className={`h-full rounded-full transition-all duration-1000 ${
                                userData.status === "Finished"
                                  ? "bg-emerald-500"
                                  : "bg-gradient-to-r from-emerald-500 to-teal-500"
                              }`}
                              style={{ width: `${userData.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-500" />
                            <span
                              className={
                                userData.daysLeft === 0
                                  ? "text-emerald-600 font-bold"
                                  : "text-gray-600"
                              }
                            >
                              {challengesData.map((challenge) => {
                                if (
                                  userData.challengeId ===
                                  `ObjectId('${challenge._id}')`
                                ) {
                                  return getDaysBetween(
                                    challenge.startDate,
                                    challenge.endDate
                                  );
                                }
                              })}
                            </span>
                          </div>
                          <div className="text-emerald-600 font-semibold">
                            {challengesData.map((challenge) => {
                              if (
                                userData.challengeId ===
                                `ObjectId('${challenge._id}')`
                              ) {
                                return challenge.impactMetric;
                              }
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Link
              to="/challenges"
              className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <Trophy className="h-8 w-8" />
              Join More Challenges
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
