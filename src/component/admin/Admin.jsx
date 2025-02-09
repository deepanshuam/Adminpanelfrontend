import React, { useState } from "react";
import { FiTrash2, FiCheck, FiArchive } from "react-icons/fi";

const AdminDetails = ({ adminDetails }) => {
  const [newImage, setNewImage] = useState(null);

  // Handle image change (from local storage/file picker)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(URL.createObjectURL(file)); // Temporary URL to preview the image
    }
  };

  return (
    <div className="text-white   p-6">
      {/* Admin Name and Action Buttons */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">{adminDetails.name}</h2>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-green-600 border-2 border-gray-500 p-3 rounded-full">
            <FiCheck size={24} />
          </button>
          <button className="text-gray-500 hover:text-yellow-700 border-2 border-gray-500 p-3 rounded-full">
            <FiArchive size={24} />
          </button>
          <button className="text-gray-500 hover:text-red-700 border-2 border-gray-500 p-3 rounded-full">
            <FiTrash2 size={24} />
          </button>
        </div>
      </div>

      {/* Avatar and Role Section */}
      <div className="flex mt-5 items-center border-b-2 border-gray-400 pb-4">
        <div className="flex-shrink-0">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="avatar-upload"
          />
          <label htmlFor="avatar-upload">
            <img
              src={newImage || adminDetails.imageUrl}
              alt="Admin"
              className="w-24 h-24 rounded-full border-4 border-gray-400 cursor-pointer"
            />
          </label>
        </div>
        <div className="ml-4">
          <p className="text-lg font-semibold">{adminDetails.name}</p>
          <p className="text-sm text-gray-400">{adminDetails.role}</p>
        </div>
      </div>

      {/* Input Fields */}
      <div className="mt-5 grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input
            type="text"
            defaultValue="John"
            className="w-full p-3 bg-gray-800 rounded-md border-2 border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input
            type="text"
            defaultValue="Doe"
            className="w-full p-3 bg-gray-800 rounded-md border-2 border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            defaultValue={adminDetails.email}
            className="w-full p-3 bg-gray-800 rounded-md border-2 border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            defaultValue={adminDetails.password}
            className="w-full p-3 bg-gray-800 rounded-md border-2 border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            defaultValue={adminDetails.location}
            className="w-full p-3 bg-gray-800 rounded-md border-2 border-gray-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            defaultValue={adminDetails.title}
            className="w-full p-3 bg-gray-800 rounded-md border-2 border-gray-600"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDetails;
