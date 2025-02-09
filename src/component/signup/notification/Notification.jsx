import React, { useState } from "react";
import { FiBell, FiTrash2, FiArchive, FiInbox, FiX, FiSearch } from "react-icons/fi";

const Notification = ({ showNotifications, toggleNotifications }) => {
  const [activeTab, setActiveTab] = useState("inbox");
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New user signed up", type: "inbox" },
    { id: 2, message: "Payment received", type: "inbox" },
    { id: 3, message: "System update available", type: "archive" },
  ]);
  const [search, setSearch] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleDelete = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const handleArchive = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, type: "archive" } : notification
      )
    );
  };

  return (
    <>
      {/* Blur Background when Notifications are Open */}
      {showNotifications && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"
          onClick={toggleNotifications}
        ></div>
      )}

      {/* Notification Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-gray-900 shadow-lg flex transform transition-transform duration-300 z-50 ${
          showNotifications ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Menu (Left Section) */}
        <div className="w-1/4 bg-gray-800 text-white p-4 flex flex-col space-y-4">
          <h2 className="text-lg font-semibold text-center">Menu</h2>
          <button
            className={`flex items-center p-3 rounded-md ${
              activeTab === "inbox" ? "bg-gray-600 text-rose-400" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("inbox")}
          >
            <FiInbox className="mr-2" /> Inbox
          </button>
          <button
            className={`flex items-center p-3 rounded-md ${
              activeTab === "archive" ? "bg-gray-600 text-rose-400" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("archive")}
          >
            <FiArchive className="mr-2" /> Archive
          </button>
        </div>

        {/* Right Section (Notification Content) */}
        <div className="w-3/4 p-4 flex flex-col bg-gray-900">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between mb-4">
            {/* Notification Title */}
            <div className="flex items-center space-x-2">
              <FiBell size={26} className="text-white" />
              <h2 className="text-2xl font-semibold text-white">Notifications</h2>
            </div>

            {/* Search Input */}
            <div className="relative">
              <div
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                  isSearchFocused ? "text-rose-400" : "text-gray-500"
                }`}
              >
                <FiSearch />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className={`transition-all w-32 p-2 pl-10 border ${
                  isSearchFocused ? "border-rose-400" : "border-gray-400"
                } rounded-md focus:w-64 bg-gray-800 text-white`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>

            {/* Close Button */}
            <button onClick={toggleNotifications} className="p-2 rounded-full hover:bg-gray-700">
              <FiX size={20} className="text-white" />
            </button>
          </div>

          {/* Notification List */}
          <ul className="space-y-3 overflow-y-auto flex-1">
            {notifications
              .filter((n) => n.type === activeTab && n.message.toLowerCase().includes(search.toLowerCase()))
              .map((notification) => (
                <li
                  key={notification.id}
                  className="p-3 bg-gray-800 rounded-md flex justify-between items-center border border-gray-700 hover:border-rose-400 transition-colors"
                >
                  <span className="text-white">{notification.message}</span>
                  <div className="flex space-x-2">
                    {activeTab === "inbox" && (
                      <button className="text-rose-400 hover:text-rose-500" onClick={() => handleArchive(notification.id)}>
                        <FiArchive size={18} />
                      </button>
                    )}
                    <button className="text-rose-400 hover:text-rose-500" onClick={() => handleDelete(notification.id)}>
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Notification;
