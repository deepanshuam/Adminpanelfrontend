import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./component/signup/Signup";
import HomePage from "./pages/Homepage";
import Notification from "./component/signup/notification/Notification";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/notification " element={<Notification />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
