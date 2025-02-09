import React, { useState } from "react";
import { FaKey, FaUserSecret, FaBuilding, FaLock, FaLink, FaDatabase } from "react-icons/fa";

const CrmForm = () => {
  const [formData, setFormData] = useState({
    tenantId: "",
    clientId: "",
    clientSecret: "",
    resource: "",
    defaultCrmSolution: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Form Data Saved:", formData);
    alert("Form data saved successfully!");
  };

  const handleClear = () => {
    setFormData({
      tenantId: "",
      clientId: "",
      clientSecret: "",
      resource: "",
      defaultCrmSolution: "",
    });
  };

  return (
    <div className="text-white max-w-lg mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-5 text-center">CRM Details</h1>
      <div className="space-y-4">
        {/* Tenant ID */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Tenant ID</label>
          <div className="flex items-center bg-gray-800 rounded-md">
            <input
              type="text"
              name="tenantId"
              value={formData.tenantId}
              onChange={handleChange}
              className="w-full p-2 bg-transparent outline-none text-white"
              placeholder="Enter Tenant ID"
            />
            <FaBuilding className="text-gray-400 mx-2" />
          </div>
        </div>

        {/* Client ID */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Client ID</label>
          <div className="flex items-center bg-gray-800 rounded-md">
            <input
              type="text"
              name="clientId"
              value={formData.clientId}
              onChange={handleChange}
              className="w-full p-2 bg-transparent outline-none text-white"
              placeholder="Enter Client ID"
            />
            <FaKey className="text-gray-400 mx-2" />
          </div>
        </div>

        {/* Client Secret */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Client Secret</label>
          <div className="flex items-center bg-gray-800 rounded-md">
            <input
              type="password"
              name="clientSecret"
              value={formData.clientSecret}
              onChange={handleChange}
              className="w-full p-2 bg-transparent outline-none text-white"
              placeholder="Enter Client Secret"
            />
            <FaUserSecret className="text-gray-400 mx-2" />
          </div>
        </div>

        {/* Resource (CRM URL) */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Resource (CRM URL)</label>
          <div className="flex items-center bg-gray-800 rounded-md">
            <input
              type="text"
              name="resource"
              value={formData.resource}
              onChange={handleChange}
              className="w-full p-2 bg-transparent outline-none text-white"
              placeholder="Enter CRM URL"
            />
            <FaLink className="text-gray-400 mx-2" />
          </div>
        </div>

        {/* Default CRM Solution */}
        <div className="relative">
          <label className="block text-sm font-medium mb-1">Default CRM Solution</label>
          <div className="flex items-center bg-gray-800 rounded-md">
            <input
              type="text"
              name="defaultCrmSolution"
              value={formData.defaultCrmSolution}
              onChange={handleChange}
              className="w-full p-2 bg-transparent outline-none text-white"
              placeholder="Enter Default CRM Solution"
            />
            <FaDatabase className="text-gray-400 mx-2" />
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

export default CrmForm;
