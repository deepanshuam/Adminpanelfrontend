import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-300">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Admin Panel</h1>
      <p className="text-lg text-gray-400">Manage projects, users, and settings seamlessly.</p>
      <div className="mt-6">
        <p className="text-lg">Click on the left sidebar to explore different sections.</p>
      </div>
    </div>
  );
};

export default LandingPage;
