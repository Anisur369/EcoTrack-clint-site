import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

import { toast } from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { user, signInUser, signInWithGoogle } = useContext(AuthContext);
  console.log("Current user:", user);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInUser(email, password);
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to EcoTrack
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 text-white rounded-md transition ${
              loading
                ? "bg-green-300 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {loading ? "Please wait..." : "Login with Google"}
        </button>

        <div className="mt-4 text-sm text-center">
          <a href="/register" className="text-green-600 hover:underline mr-4">
            Register
          </a>
          <a href="/forgot-password" className="text-green-600 hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
