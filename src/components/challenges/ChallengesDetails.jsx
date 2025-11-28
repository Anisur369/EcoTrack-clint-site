// challenges pop up window details page
import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import DeleteChallenge from "../common/DeleteChallenge.jsx";
import { toast } from "react-hot-toast";

const ChallengesDetails = () => {
  const challenge = useLoaderData();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [challengeModal, setChallengeModal] = React.useState(challenge);
  const [showModal, setShowModal] = React.useState(false);
  const editFunction = () => {
    setIsModalOpen(true);
    setShowModal(true);
  };

  const updateFunction = () => {
    setIsModalOpen(false);
    setShowModal(false);
    // http://localhost:3000/challenges/{challenge._id} update your challenge server
    fetch(`http://localhost:3000/challenges/${challenge._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(challengeModal),
    });
    // alert success toast()
    toast.success("Challenge updated successfully!");
  };
  return (
    <>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md mt-10 relative">
        <div>
          {showModal ? (
            <button
              onClick={updateFunction}
              className="absolute top-5 right-5 bg-orange-400 text-white font-semibold px-3 py-1 rounded-md cursor-pointer"
            >
              Update
            </button>
          ) : (
            <button
              onClick={() => editFunction()}
              className="absolute top-9 right-9 bg-green-400 text-white font-semibold px-3 py-1 rounded-md cursor-pointer"
            >
              Edit
            </button>
          )}
        </div>
        {isModalOpen ? (
          <div className="flex justify-start">
            <span className="font-semibold">Image URL: </span>
            <input
              className={`text-gray-600 w-[75%] mb-20 outline-0 rounded-sm ${
                isModalOpen ? "border" : ""
              }`}
              type="text"
              value={challengeModal.imageUrl}
              onChange={(e) =>
                setChallengeModal({
                  ...challengeModal,
                  imageUrl: e.target.value,
                })
              }
            />
          </div>
        ) : (
          <img
            src={challengeModal.imageUrl}
            alt={challengeModal.title}
            className="w-full h-88 object-cover rounded-md"
          />
        )}

        <div className="flex justify-start mt-6">
          <span className="font-semibold mr-1">Title: </span>
          <input
            className={`text-gray-600 outline-0 rounded-sm ${
              isModalOpen ? "border" : ""
            }`}
            type="text"
            value={challengeModal.title}
            onChange={(e) =>
              setChallengeModal({ ...challengeModal, title: e.target.value })
            }
            readOnly={isModalOpen ? false : true}
          />
        </div>

        <div className="flex justify-start">
          <span className="font-semibold mr-1">Category: </span>
          <input
            className={`text-gray-600 outline-0 rounded-sm ${
              isModalOpen ? "border" : ""
            }`}
            type="text"
            value={challengeModal.category}
            onChange={(e) =>
              setChallengeModal({ ...challengeModal, category: e.target.value })
            }
            readOnly={isModalOpen ? false : true}
          />
        </div>
        <div className="flex justify-start">
          <span className="font-semibold mr-1">Description: </span>
          <input
            className={`text-gray-600 outline-0 rounded-sm ${
              isModalOpen ? "border" : ""
            }`}
            type="text"
            value={challengeModal.description}
            onChange={(e) =>
              setChallengeModal({
                ...challengeModal,
                description: e.target.value,
              })
            }
            readOnly={isModalOpen ? false : true}
          />
        </div>
        <div className="flex justify-start">
          <span className="font-semibold mr-1">Created By: </span>
          <input
            className={`text-gray-600 outline-0 rounded-sm ${
              isModalOpen ? "border" : ""
            }`}
            type="text"
            value={challengeModal.createdBy}
            onChange={(e) =>
              setChallengeModal({
                ...challengeModal,
                createdBy: e.target.value,
              })
            }
            readOnly={isModalOpen ? false : true}
          />
        </div>
        <div className="flex justify-start">
          <span className="font-semibold mr-1">Duration: </span>
          <input
            className={`text-gray-600 outline-0 rounded-sm ${
              isModalOpen ? "border" : ""
            }`}
            type="text"
            value={challengeModal.duration}
            onChange={(e) =>
              setChallengeModal({ ...challengeModal, duration: e.target.value })
            }
            readOnly={isModalOpen ? false : true}
          />
        </div>
        <div className="flex justify-start">
          <span className="font-semibold mr-1">Start Date: </span>
          <input
            className={`text-gray-600 outline-0 rounded-sm ${
              isModalOpen ? "border" : ""
            }`}
            type="text"
            value={challengeModal.startDate}
            onChange={(e) =>
              setChallengeModal({
                ...challengeModal,
                startDate: e.target.value,
              })
            }
            readOnly={isModalOpen ? false : true}
          />
        </div>
        <div className="flex justify-start">
          <span className="font-semibold mr-1">End Date: </span>
          <input
            className={`text-gray-600 outline-0 rounded-sm ${
              isModalOpen ? "border" : ""
            }`}
            type="text"
            value={challengeModal.endDate}
            onChange={(e) =>
              setChallengeModal({ ...challengeModal, endDate: e.target.value })
            }
            readOnly={isModalOpen ? false : true}
          />
        </div>
        <div className="flex justify-start">
          <span className="font-semibold mr-1">Impact Metric: </span>
          <input
            className={`text-gray-600 outline-0 rounded-sm ${
              isModalOpen ? "border" : ""
            }`}
            type="text"
            value={challengeModal.impactMetric}
            onChange={(e) =>
              setChallengeModal({
                ...challengeModal,
                impactMetric: e.target.value,
              })
            }
            readOnly={isModalOpen ? false : true}
          />
        </div>
        <div className="flex justify-start">
          <span className="font-semibold mr-1">Target: </span>
          <input
            className={`text-gray-600 outline-0 rounded-sm ${
              isModalOpen ? "border" : ""
            }`}
            type="text"
            value={challengeModal.target}
            onChange={(e) =>
              setChallengeModal({ ...challengeModal, target: e.target.value })
            }
            readOnly={isModalOpen ? false : true}
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <Link
            to={`/challenges/join/${challenge._id}`}
            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Join Challenge
          </Link>
          <DeleteChallenge challengeId={challenge._id} />
        </div>
      </div>
      <div className="max-w-3xl mx-auto p-6">
        <Link
          to="/challenges"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          &larr; Back to Challenges
        </Link>
      </div>
    </>
  );
};
export default ChallengesDetails;
