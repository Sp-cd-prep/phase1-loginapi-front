import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./component/Register";
import Home from "./component/Home";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";

const Routing = () => {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <br />
        <Link to="/register">Register</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/dashboard">Dashboard</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routing;
