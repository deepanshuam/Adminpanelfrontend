import React, { useState } from "react";
import { FaUser, FaLock, FaUsers } from "react-icons/fa";

const UserAuthForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("User Auth Saved:", formData);
    alert("User authentication details saved successfully!");
  };

  const handleClear = () => {
    setFormData({
      username: "",
      password: "",
      role: "",
    });
  };

  return (
    <div className="text-white max-w-lg mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-5 text-center">User Authentication</h1>
      <div className="space-y-4">
        {/* Username */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Username</label>
          <div className="flex items-center bg-gray-800 rounded-md">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 bg-transparent outline-none text-white"
              placeholder="Enter Username"
            />
            <FaUser className="text-gray-400 mx-2" />
          </div>
        </div>

        {/* Password */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="flex items-center bg-gray-800 rounded-md">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 bg-transparent outline-none text-white"
              placeholder="Enter Password"
            />
            <FaLock className="text-gray-400 mx-2" />
          </div>
        </div>

        {/* Role */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Role</label>
          <div className="flex items-center bg-gray-800 rounded-md">
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 bg-transparent outline-none text-white"
              placeholder="Enter Role"
            />
            <FaUsers className="text-gray-400 mx-2" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          <button
            onClick={handleSave}
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full"
          >
            Save
          </button>
          <button
            onClick={handleClear}
            className="p-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 w-full"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAuthForm;
