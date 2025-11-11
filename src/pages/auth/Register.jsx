import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUser(email, password, name, photoURL);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle().then((result) => {
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message) {
              setError("User already exists: " + data.message);
            } else {
              console.log("User added successfully");
            }
          });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-[87vh]">
      <div className="hero-content flex-col bg-gray-200 p-10 rounded-lg shadow-md w-[400px]">
        <form className="flex flex-col w-full" onSubmit={handleRegister}>
          <h1 className="text-3xl font-bold">Register</h1>
          <input
            type="text"
            placeholder="Full Name"
            className="mt-4 p-2 border-2 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="mt-4 p-2 border-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Photo URL"
            className="mt-4 p-2 border-2 rounded-md"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-4 p-2 border-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="mt-4 p-2 border-2 rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="bg-blue-500 text-white p-2 rounded-md mt-4">
            Register
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
        <p className="my-1 text-center">OR</p>
        <hr className="block w-full" />

        <button
          onClick={handleGoogleSignIn}
          className="btn w-full bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
