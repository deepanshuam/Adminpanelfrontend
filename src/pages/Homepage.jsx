import React, { useState } from "react";
import {
  FiPlus,
  FiHelpCircle,
  FiUsers,
  FiSettings,
  FiBell,
} from "react-icons/fi";
import { MdAdminPanelSettings } from "react-icons/md";
import Notification from "../component/signup/notification/Notification";
import Admin from "../component/admin/Admin";
import AddNew from "../component/addnew/Addnew";
import StaticContent from "../component/addnew/Static";
import CrmForm from "../component/crmform/Crmform";
import UserRolesForm from "../component/userrole/UserRole";
import ChatSystem from "../component/addnew/ChatSystem";
import logo from "../assets/download.jpg";
import LandingPage from "../component/addnew/LandingPage";
import Content from "../component/content/Content";
import APIConfigForm from "../component/apiconficForm/Apiconfic";
import UserAuthForm from "../component/userauthForm/UserAuthForm";

const sidebarItems = [
  { id: "add", icon: <FiPlus size={26} />, name: "Add New", items: [] },
  { id: "content", icon: <FiHelpCircle size={26} />, name: "Content", items: [] },
  { id: "users", icon: <FiUsers size={26} />, name: "User Directory", items: ["All Users"] },
  { id: "settings", icon: <FiSettings size={26} />, name: "Settings", items: ["CRM", "API Config", "User Auth"] },
  { id: "notifications", icon: <FiBell size={26} />, name: "Notifications", items: ["Alerts", "Emails", "Reminders"] },
  { id: "admin", icon: <MdAdminPanelSettings size={26} />, name: "Admin User", items: ["Administration", "Developer"] },
];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(sidebarItems[0]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [recentTasks, setRecentTasks] = useState([]);

  const toggleNotifications = () => {
    setShowNotifications((prev) => !prev);
    setSelectedCategory(null);
    setSelectedItem(null);
  };

  // Handle sidebar item click
  const handleSidebarClick = (item) => {
    if (item.id === "notifications") {
      toggleNotifications();
    } else {
      setSelectedCategory(item);
      setSelectedItem(null);
      setShowNotifications(false);
    }
  };

  // Handle adding a new task
  const handleAddTask = (taskName) => {
    setRecentTasks((prevTasks) => [taskName, ...prevTasks]);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-black text-gray-400">
      {/* Sidebar */}
      <aside className="w-20 bg-black flex flex-col items-center py-5 space-y-6">
        <div className="w-full flex justify-center">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </div>
        {sidebarItems.slice(0, -2).map((item) => (
          <SidebarIcon
            key={item.id}
            icon={item.icon}
            tooltip={item.name}
            onClick={() => handleSidebarClick(item)}
            isActive={selectedCategory?.id === item.id}
          />
        ))}
        <div className="flex-grow"></div>
        {sidebarItems.slice(-2).map((item) => (
          <SidebarIcon
            key={item.id}
            icon={item.icon}
            tooltip={item.name}
            onClick={() => handleSidebarClick(item)}
            isActive={selectedCategory?.id === item.id}
          />
        ))}
      </aside>

      {/* Top Bar */}
      <div className="absolute top-0 left-20 w-1/5 h-16 bg-gray-900 flex items-center pl-5 border-r border-gray-900 shadow-md hover:shadow-lg transition-all duration-300">
        <h1 className="text-xl font-semibold text-gray-400 hover:text-white transition-all duration-300">
          Ankit AdminPanel
        </h1>
      </div>

      {/* Left Section */}
      {selectedCategory?.id === "add" ? (
        <section className="w-1/5 bg-gray-800 p-5 space-y-4">
          <AddNew onAddTask={handleAddTask} recentTasks={recentTasks} />
        </section>
      ) : (
        selectedCategory &&
        !selectedCategory.isAdminPage && (
          <section className="w-1/5 bg-gray-800 p-5 space-y-4">
            <h2 className="text-xl font-semibold mb-3">
              {selectedCategory ? selectedCategory.name : "Select a Category"}
            </h2>
            <ul>
              {selectedCategory?.items?.map((item) => (
                <li
                  key={item}
                  className={`p-3 rounded-md hover:bg-gray-600 cursor-pointer ${
                    selectedItem === item ? "bg-gray-700" : ""
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )
      )}

      {/* Center Section */}
      <section className="flex-1 p-10 bg-black mt-10 h-full overflow-y-auto">
        {selectedCategory?.id === "admin" && selectedItem === "Administration" ? (
          <Admin adminDetails={{ name: "John Doe", role: "Administrator" }} />
        ) : selectedCategory?.id === "add" ? (
          <ChatSystem />
        ) : selectedCategory?.id === "content" ? (
          <Content />
        ) : selectedCategory?.id === "settings" && selectedItem === "CRM" ? (
          <CrmForm />
        ) : selectedCategory?.id === "settings" && selectedItem === "API Config" ? (
          <APIConfigForm />
        ) : selectedCategory?.id === "settings" && selectedItem === "User Auth" ? (
          <UserAuthForm />
        ) : selectedCategory?.id === "settings" && selectedItem === "User Roles" ? (
          <UserRolesForm />
        ) : selectedCategory ? (
          <>
            <h1 className="text-3xl font-semibold">
              {selectedItem ? `Selected: ${selectedItem}` : "Click an Item"}
            </h1>
            <p className="mt-2 text-gray-300">
              {selectedItem
                ? `Details about ${selectedItem} will appear here.`
                : "Choose an item from the left panel."}
            </p>
          </>
        ) : (
          <LandingPage />
        )}
      </section>

      {/* Notification Panel */}
      <Notification showNotifications={showNotifications} toggleNotifications={toggleNotifications} />
    </div>
  );
};

// Sidebar Icon Component
const SidebarIcon = ({ icon, tooltip, onClick, isActive }) => (
  <div
    className={`group relative cursor-pointer p-3 rounded-lg transition ${
      isActive ? "bg-gray-800" : "hover:bg-rose-400"
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
      {tooltip}
    </span>
  </div>
);

export default HomePage;
