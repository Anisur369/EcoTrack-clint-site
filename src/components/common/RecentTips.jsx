import React from "react";
import { FaThumbsUp, FaUser, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const tips = [
  {
    id: 1,
    title: "Use reusable bags instead of plastic",
    authorName: "Rafiul Islam",
    upvotes: 42,
    createdAt: "2 days ago",
  },
  {
    id: 2,
    title: "Turn off lights when not in use",
    authorName: "Mitu Akter",
    upvotes: 31,
    createdAt: "1 day ago",
  },
  {
    id: 3,
    title: "Collect rainwater for gardening",
    authorName: "Tanvir Hasan",
    upvotes: 18,
    createdAt: "3 hours ago",
  },
  {
    id: 4,
    title: "Use public transport weekly",
    authorName: "Farzana Rahman",
    upvotes: 27,
    createdAt: "5 days ago",
  },
  {
    id: 5,
    title: "Compost kitchen waste",
    authorName: "Jahidul Kabir",
    upvotes: 35,
    createdAt: "6 hours ago",
  },
  {
    id: 6,
    title: "Collect rainwater for gardening",
    authorName: "Ahmed Kabir",
    upvotes: 35,
    createdAt: "6 hours ago",
  },
];

const RecentTips = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          💡 Recent Community Tips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {tip.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <FaUser className="text-blue-500" />
                <span className="font-medium">{tip.authorName}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <FaThumbsUp className="text-green-500" />
                <span>{tip.upvotes} upvotes</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <FaClock className="text-yellow-500" />
                <span>{tip.createdAt}</span>
              </div>

              <div className="mt-4">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  #EcoTip
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        to="/tips"
        className="mt-8 mx-auto flex w-fit bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full items-center gap-2"
      >
        <span>View All Tips</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </section>
  );
};

export default RecentTips;
