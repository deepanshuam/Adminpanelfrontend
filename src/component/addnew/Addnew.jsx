import React, { useState } from "react";

const AddNew = ({ onAddTask, recentTasks }) => {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName.trim()) {
      onAddTask(taskName);
      setTaskName("");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-3">Add New</h2>
      <div className="space-y-2">
        {/* Input Box with padding from top and rose-400 border on focus */}
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-full p-2 mt-3 bg-gray-800 rounded-md text-white border border-transparent focus:border-rose-400 focus:outline-none"
        />
        <button
          onClick={handleAddTask}
          className="w-full p-2 bg-rose-400 text-white rounded-md hover:bg-rose-700"
        >
          Add Task
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg text-gray-400 font-semibold">Recent Tasks</h3>
        <ul className="space-y-2">
          {recentTasks.map((task, index) => (
            <li key={index} className="p-2 bg-gray-700 rounded-md">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddNew;
