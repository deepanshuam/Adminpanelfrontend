import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons from react-icons
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [view, setView] = useState("signin"); // State to toggle between Sign In, Sign Up, and Forget Password
  const navigate = useNavigate(); // Hook for navigation

  // Toggle password visibility
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle sign-in
  const handleSignIn = () => {
    // Simulate a successful sign-in (replace with actual authentication logic)
    const isAuthenticated = true; // Replace with your authentication logic

    if (isAuthenticated) {
      navigate("/home"); // Redirect to the home page
    } else {
      alert("Invalid credentials. Please try again."); // Show error message
    }
  };

  // Handle sign-up
  const handleSignUp = () => {
    // Simulate a successful sign-up (replace with actual sign-up logic)
    const isSignUpSuccessful = true; // Replace with your sign-up logic

    if (isSignUpSuccessful) {
      alert("Sign up successful! Please sign in."); // Show success message
      setView("signin"); // Switch back to Sign In view
    } else {
      alert("Sign up failed. Please try again."); // Show error message
    }
  };

  // Handle forget password
  const handleForgetPassword = () => {
    // Simulate a successful password reset request (replace with actual logic)
    const isResetRequestSuccessful = true; // Replace with your logic

    if (isResetRequestSuccessful) {
      alert("Password reset instructions sent to your email."); // Show success message
      setView("signin"); // Switch back to Sign In view
    } else {
      alert("Failed to send reset instructions. Please try again."); // Show error message
    }
  };

  return (
    <div className="flex h-screen flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 bg-black text-white flex flex-col items-start justify-center p-10 min-h-screen pl-35">
        <div>
          <img
            src="https://tailwindui.com/img/logos/workflow-logo-on-dark.svg"
            alt="Workflow"
            className="h-12 w-auto"
          />
        </div>

        {/* Dynamic Title Based on View */}
        <h1 className="text-5xl font-semibold mb-8">
          {view === "signin"
            ? "Sign In"
            : view === "signup"
            ? "Sign Up"
            : "Forget Password"}
        </h1>

        {/* Form Inputs */}
        <div className="w-full space-y-4">
          {/* Email Input (Visible for Sign In, Sign Up, and Forget Password) */}
          {view !== "forgetpassword" && (
            <input
              type="email"
              placeholder="Email"
              className="w-3/4 p-4 rounded-md bg-black text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-900 hover:border-gray-500"
            />
          )}

          {/* Password Input (Visible for Sign In and Sign Up) */}
          {(view === "signin" || view === "signup") && (
            <div className="relative w-3/4">
              <input
                type={showPassword ? "text" : "password"} // Toggle password visibility
                placeholder="Password"
                className="w-full p-4 rounded-md bg-black text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-900 hover:border-gray-500"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer"
                onClick={togglePassword} // Click to toggle password visibility
              >
                {showPassword ? (
                  <FiEyeOff className="text-gray-400" /> // Show "eye-off" icon when password is visible
                ) : (
                  <FiEye className="text-gray-400" /> // Show "eye" icon when password is hidden
                )}
              </div>
            </div>
          )}

          {/* Confirm Password Input (Visible for Sign Up) */}
          {view === "signup" && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-3/4 p-4 rounded-md bg-black text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-900 hover:border-gray-500"
            />
          )}

          {/* Buttons */}
          <div className="flex justify-start gap-16">
            {view === "signin" && (
              <>
                <button
                  className="w-32 py-4 bg-rose-900 rounded-md text-gray-400 hover:bg-rose-500"
                  onClick={handleSignIn} // Call handleSignIn on button click
                >
                  Sign In
                </button>
                <button
                  className="w-32 py-4 rounded-md text-gray-400 hover:bg-gray-600"
                  onClick={() => setView("forgetpassword")} // Switch to Forget Password view
                >
                  Forget Password
                </button>
              </>
            )}

            {view === "signup" && (
              <button
                className="w-32 py-4 bg-rose-900 rounded-md text-gray-400 hover:bg-rose-500"
                onClick={handleSignUp} // Call handleSignUp on button click
              >
                Sign Up
              </button>
            )}

            {view === "forgetpassword" && (
              <button
                className="w-32 py-4 bg-rose-900 rounded-md text-gray-400 hover:bg-rose-500"
                onClick={handleForgetPassword} // Call handleForgetPassword on button click
              >
                Reset Password
              </button>
            )}
          </div>

          {/* Switch Between Views */}
          <div className="mt-4">
            {view === "signin" && (
              <p className="text-gray-400">
                Don't have an account?{" "}
                <button
                  className="text-rose-500 hover:underline"
                  onClick={() => setView("signup")} // Switch to Sign Up view
                >
                  Sign Up
                </button>
              </p>
            )}

            {view === "signup" && (
              <p className="text-gray-400">
                Already have an account?{" "}
                <button
                  className="text-rose-500 hover:underline"
                  onClick={() => setView("signin")} // Switch to Sign In view
                >
                  Sign In
                </button>
              </p>
            )}

            {view === "forgetpassword" && (
              <p className="text-gray-400">
                Remember your password?{" "}
                <button
                  className="text-rose-500 hover:underline"
                  onClick={() => setView("signin")} // Switch to Sign In view
                >
                  Sign In
                </button>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Right Section with Dark to Faded Gradient */}
      <div className="w-full lg:w-2/3 bg-gray-900 flex items-center justify-center hidden lg:block relative">
        <div className="absolute inset-0 bg-gradient-to-l from-rose-900 via-transparent to-rose-200 animate-gradient"></div>
        <p className="text-lg text-center text-gray-400 relative z-10">
          Welcome to our platform. Please sign up to get started!
        </p>
      </div>
    </div>
  );
};

export default SignupPage;