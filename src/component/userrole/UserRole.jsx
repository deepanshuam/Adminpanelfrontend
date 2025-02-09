import React, { useState } from "react";
import { FaUser, FaEnvelope, FaKey, FaUserShield, FaUsers } from "react-icons/fa";

const UserRolesForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
    console.log("User Role Data Saved:", formData);
    alert("User role data saved successfully!");
  };

  const handleClear = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      role: "",
    });
  };

  return (
    <div className="text-white max-w-lg mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-5 text-center">User Roles Form</h1>
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

        {/* Email */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Email</label>
          <div className="flex items-center bg-gray-800 rounded-md">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-transparent outline-none text-white"
              placeholder="Enter Email"
            />
            <FaEnvelope className="text-gray-400 mx-2" />
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
            <FaKey className="text-gray-400 mx-2" />
          </div>
        </div>

        {/* User Role Selection */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Select Role</label>
          <div className="flex items-center bg-gray-800 rounded-md">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 bg-transparent outline-none text-white appearance-none"
            >
              <option value="" disabled>Select Role</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="user">User</option>
            </select>
            <FaUserShield className="text-gray-400 mx-2" />
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

export default UserRolesForm;
