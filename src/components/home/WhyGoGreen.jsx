import React from "react";
import { FaLeaf, FaRecycle, FaHeart } from "react-icons/fa";

const benefits = [
  {
    id: 1,
    title: "Save Energy",
    description:
      "Reduce your carbon footprint and contribute to a healthier planet.",
    icon: <FaLeaf className="text-green-600 text-4xl" />,
    bg: "bg-green-50",
  },
  {
    id: 2,
    title: "Reduce Waste",
    description: "Make mindful choices that minimize environmental impact.",
    icon: <FaRecycle className="text-blue-600 text-4xl" />,
    bg: "bg-blue-50",
  },
  {
    id: 3,
    title: "Improve Health",
    description: "Create a cleaner environment for you and future generations.",
    icon: <FaHeart className="text-red-500 text-4xl" />,
    bg: "bg-red-50",
  },
];

const WhyGoGreen = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          🌱 Why Go Green?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl shadow-md p-6 ${item.bg} hover:shadow-lg transition duration-300`}
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGoGreen;
