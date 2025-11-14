import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function UserDropdown({ user }) {
  const [open, setOpen] = useState(false);
  const { signOutUser } = useContext(AuthContext);

  return (
    <div className="relative inline-block text-left">
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2 py-1 rounded-md bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        <img
          src={user.photoURL}
          alt="User avatar"
          className="w-8 h-8 rounded-full border border-slate-600"
        />
        <span className="text-slate-100 font-medium">{user.displayName}</span>
        <svg
          className={`w-4 h-4 text-slate-300 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-md shadow-lg z-50">
          <Link
            to="/profile"
            className="block px-4 py-2 text-slate-100 hover:bg-slate-800"
            onClick={() => setOpen(false)}
          >
            👤 Profile
          </Link>
          <Link
            to="/activities"
            className="block px-4 py-2 text-slate-100 hover:bg-slate-800"
            onClick={() => setOpen(false)}
          >
            📋 My Activities
          </Link>
          <button
            onClick={() => {
              setOpen(false);
              return signOutUser();
            }}
            className="w-full text-left px-4 py-2 text-slate-100 hover:bg-slate-800"
          >
            🔓 Logout
          </button>
        </div>
      )}
    </div>
  );
}
