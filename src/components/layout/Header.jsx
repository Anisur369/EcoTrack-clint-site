import React, { use } from "react";
import { NavLink, Link } from "react-router";
import { AuthContext } from "../../context/AuthContext.jsx";
import Profile from "../common/Profile.jsx";

const Header = () => {
  const { user, signOutUser } = use(AuthContext);

  const links = user ? (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/challenges">Challenges</NavLink>
      <NavLink to="/activities">My Activities</NavLink>
    </>
  ) : (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/challenges">Challenges</NavLink>
    </>
  );

  return (
    <header className="">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <img
              src="https://play-lh.googleusercontent.com/KQRIm1clFzsoyX23JNH47baBDC3zAdSfAwssCHf-j5Yyuu-PSnnccwv-IO-a8eEDxB8k"
              alt="EcoTrack Logo"
              className="inline-block w-8 h-8 mr-2"
            />
            <span className="btn-ghost text-xl font-bold">EcoTrack</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <>
              <Profile user={user} onLogout={signOutUser} />
            </>
          ) : (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
              <Link to="/register" className="btn bg-blue-500">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
