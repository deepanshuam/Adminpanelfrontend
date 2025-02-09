import React, { useState } from "react";
import { FaServer, FaKey, FaLink, FaLock } from "react-icons/fa";

const APIConfigForm = () => {
  const [formData, setFormData] = useState({
    apiBaseUrl: "",
    apiKey: "",
    authMethod: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("API Config Saved:", formData);
    alert("API Configuration saved successfully!");
  };

  const handleClear = () => {
    setFormData({
      apiBaseUrl: "",
      apiKey: "",
      authMethod: "",
    });
  };

  return (
    <div className="text-white max-w-lg mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-5 text-center">API Configuration</h1>
      <div className="space-y-4">
        {/* API Base URL */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">API Base URL</label>
          <div className="flex items-center bg-gray-800 rounded-md">
            <input
              type="text"
              name="apiBaseUrl"
              value={formData.apiBaseUrl}
              onChange={handleChange}
              className="w-full p-2 bg-transparent outline-none text-white"
              placeholder="Enter API Base URL"
            />
            <FaLink className="text-gray-400 mx-2" />
          </div>
        </div>

        {/* API Key */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">API Key</label>
          <div className="flex items-center bg-gray-800 rounded-md">
            <input
              type="password"
              name="apiKey"
              value={formData.apiKey}
              onChange={handleChange}
              className="w-full p-2 bg-transparent outline-none text-white"
              placeholder="Enter API Key"
            />
            <FaKey className="text-gray-400 mx-2" />
          </div>
        </div>

        {/* Authentication Method */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Auth Method</label>
          <div className="flex items-center bg-gray-800 rounded-md">
            <input
              type="text"
              name="authMethod"
              value={formData.authMethod}
              onChange={handleChange}
              className="w-full p-2 bg-transparent outline-none text-white"
              placeholder="Enter Auth Method"
            />
            <FaLock className="text-gray-400 mx-2" />
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

export default APIConfigForm;
