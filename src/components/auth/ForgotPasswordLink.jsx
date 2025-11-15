// only email fileds and button click to reset password
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function ForgotPasswordLink() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { sendPasswordResetEmail } = useContext(AuthContext);
  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(email);
      toast("Password reset email sent. Please check your inbox.");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  // style tailwind css diye
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={handleResetPassword}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer w-full"
        >
          Reset Password
        </button>
        <p className="mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordLink;
