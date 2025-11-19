import React from "react";
function DeleteChallenge({ challengeId }) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this challenge?"
    );
    if (!confirmDelete) return; // User cancelled the deletion
    try {
      const response = await fetch(
        `http://localhost:3000/challenges/${challengeId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Challenge deleted successfully.");
      } else {
        console.error("Failed to delete challenge.");
      }
    } catch (error) {
      console.error("Error deleting challenge:", error);
    }
    window.location.href = "/challenges";
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer"
    >
      Delete Challenge
    </button>
  );
}
export default DeleteChallenge;
