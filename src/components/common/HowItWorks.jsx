import React from "react";

const steps = [
  {
    id: 1,
    title: "Find a Challenge",
    description:
      "Browse and select a sustainability challenge that resonates with you.",
  },
  {
    id: 2,
    title: "Join & Track",
    description: "Sign up for the challenge and log your progress throughout.",
  },
  {
    id: 3,
    title: "Share Achievements",
    description:
      "Update your status and celebrate the collective community impact.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          🚀 How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100 text-green-700 text-2xl font-bold">
                {step.id}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
