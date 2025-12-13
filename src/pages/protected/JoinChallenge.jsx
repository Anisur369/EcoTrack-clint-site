// src/pages/JoinChallenge.jsx
import { useState } from "react";
import { Link, useParams, useLoaderData, Navigate } from "react-router-dom";
import {
  Calendar,
  Users,
  Target,
  Clock,
  CheckCircle,
} from "lucide-react";
// import { toast } from "react-hot-toast"
import { ToastContainer, toast } from "react-toastify";

export default function JoinChallenge() {
  const { id } = useParams();
  const [isJoining, setIsJoining] = useState(false);
  const challenge = useLoaderData();
  console.log("Loaded challenge:", challenge);
  const [joined, setJoined] = useState({    
userId:"user02@example.com",
challengeId:`ObjectId('${challenge._id}')`,
status:"Ongoing",
progress:0,
joinDate:"ISODate('2025-11-10T09:30:00Z')"
  });


  const handleJoin = async () => {
    setIsJoining(true);
    // TODO: Call your API POST /api/challenges/join/:id
    setTimeout(() => {
      setIsJoining(false);
      // alert("Successfully joined the challenge! 🌱");
      const response = fetch("http://localhost:3000/userChallenges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(joined),
      });

      // toast.success("Successfully joined the challenge! 🌱");
      // navigate("/my-activities");
      toast.success("Successfully joined the challenge!");
      // Navigate("/my-activities");

      // Redirect to my-activities or show success state
    }, 1500);
  };

  return (
    <>
    <ToastContainer />
      {/* Main Content */}
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Join a Challenge
            </h1>
            <p className="text-gray-600">
              Take a step towards a greener planet
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Challenge Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Challenge Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600">
                  <div className="relative">
                    {/* <Leaf className="h-24 w-24 text-white" /> */}
                    <img
                      src={challenge.imageUrl}
                      alt={challenge.title}
                      className="w-full h-88"
                    />
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold">
                      {challenge.category}
                    </span>
                    <span className="text-gray-500">#{id}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {challenge.title}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {challenge.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                    <div className="text-center">
                      <Calendar className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-bold text-gray-900">
                        {challenge.duration}
                      </p>
                    </div>
                    <div className="text-center">
                      <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Participants</p>
                      <p className="font-bold text-gray-900">
                        {challenge.participants}
                      </p>
                    </div>
                    <div className="text-center">
                      <Target className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Target</p>
                      <p className="font-bold text-gray-900">
                        {challenge.target}
                      </p>
                    </div>
                    <div className="text-center">
                      <Clock className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Starts</p>
                      <p className="font-bold text-gray-900">
                        {challenge.startDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Join Button - Big & Prominent */}
              <div className="text-center py-8">
                <button
                  onClick={handleJoin}
                  disabled={isJoining}
                  className={`inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                    isJoining ? "opacity-80 cursor-not-allowed" : ""
                  }`}
                >
                  {isJoining ? (
                    <>Joining...</>
                  ) : (
                    <>
                      <CheckCircle className="h-8 w-8" />
                      Join This Challenge Now
                    </>
                  )}
                </button>
                <p className="text-gray-600 mt-4">
                  You'll be able to track your progress in My Activities
                </p>
              </div>
            </div>

            {/* Right Column - Progress & Details */}
            <div className="space-y-6">
              {/* Community Progress */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Community Progress
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Overall Progress</span>
                      <span className="font-bold">
                        {challenge.participants}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-end pr-4 text-white font-bold transition-all duration-1000"
                        style={{ width: `${challenge.currentProgress}%` }}
                      >
                        {challenge.currentProgress}
                      </div>
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <p className="text-3xl font-bold text-emerald-600">
                      34,218
                    </p>
                    <p className="text-gray-600">plastic avoided so far</p>
                  </div>
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="bg-gradient-to-b from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                <h3 className="font-bold text-lg mb-4 text-gray-800">
                  What You'll Get
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <span className="text-gray-700">
                      Daily progress tracking
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <span className="text-gray-700">
                      Weekly tips & motivation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <span className="text-gray-700">
                      Certificate on completion
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <span className="text-gray-700">Leaderboard ranking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
