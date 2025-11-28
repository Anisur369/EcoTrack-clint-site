import { useContext, use } from "react";
import { AuthContext } from "../../context/AuthContext";

import React from "react";

function Profile() {
  const { user } = use(AuthContext);
  console.log(user);
  const [userData, setUserData] = React.useState(user);

  if (!user) {
    return <div>Loading...</div>;
  }

  React.useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  console.log(userData);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-sm w-full p-6">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-blue-500"
            src={userData.photoURL}
            alt="Profile"
          />
        </div>

        <div className="text-center mt-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {userData.displayName}
          </h1>
          <p className="text-gray-600 mt-2">
            Web Developer | AI & ML Enthusiast | Educator
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-6 space-y-2 text-sm text-gray-700">
          <p>
            Email: <span className="font-medium">anis@example.com</span>
          </p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-left space-x-4 mt-6">
          <a
            href="https://github.com/"
            className="text-gray-600 hover:text-black transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.7 1.8-1.1.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.7.8 1.2 1.9 1.2 3.2 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A10.9 10.9 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/"
            className="text-gray-600 hover:text-blue-700 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1 4.98 2.1 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.9c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-4V8z" />
            </svg>
          </a>
        </div>
        <button className="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Profile;
