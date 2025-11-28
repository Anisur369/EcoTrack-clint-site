// {
//   "_id": {
//     "$oid": "6915829475bcc74f585e7257"
//   },
//   "title": "Walk to Work Week",
//   "category": "Health & Mobility",
//   "description": "Walk to work every day for a week",
//   "duration": 7,
//   "target": "Reduce carbon emissions",
//   "participants": 0,
//   "impactMetric": "km walked",
//   "createdBy": "admin@ecotrack.com",
//   "startDate": "2024-08-01",
//   "endDate": "2024-08-07",
//   "imageUrl": "https://picsum.photos/400/250?1"
// }
// Add Challenge Form Component http://localhost:3000/challenges/add
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddChallengeForm = () => {
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState({
    title: "Walk to Work Week",
    category: "Health & Mobility",
    description: "Walk to work every day for a week",
    duration: 7,
    target: "Reduce carbon emissions",
    participants: 0,
    impactMetric: "km walked",
    createdBy: "admin@ecotrack.com",
    startDate: "2024-08-01",
    endDate: "2024-08-07",
    imageUrl: "https://picsum.photos/400/250?1",
  });

  const handleChange = (e) => {
    setChallenge({ ...challenge, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/challenges", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(challenge),
      });

      if (response.ok) {
        toast.success("Challenge added successfully!");
        navigate("/challenges");
      } else {
        toast.error("Failed to add challenge.");
      }
    } catch (error) {
      console.error("Error adding challenge:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6">Add New Challenge</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={challenge.imageUrl}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={challenge.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={challenge.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={challenge.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700">Duration (in days)</label>
          <input
            type="number"
            name="duration"
            value={challenge.duration}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Target</label>
          <input
            type="text"
            name="target"
            value={challenge.target}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Impact Metric</label>
          <input
            type="text"
            name="impactMetric"
            value={challenge.impactMetric}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={challenge.startDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">End Date</label>
          <input
            type="date"
            name="endDate"
            value={challenge.endDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Create Challenge
        </button>
      </form>
    </div>
  );
};

export default AddChallengeForm;
