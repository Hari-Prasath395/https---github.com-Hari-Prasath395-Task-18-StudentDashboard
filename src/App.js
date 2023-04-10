import React from "react";

import Student from "./Pages/StudentManagement";
import Mentor from "./Pages/TeacherManagement";
import Batch from "./Pages/BatchManagement";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <div>
      <Router>
        <div className="header">
          <nav className="navbar navbar-light bg-secondary ">
            <div className="container-fluid">
              <span className="navbar-brand mb-0 h1 d-flex ">
                <i class="fas fa-user-graduate"></i>
                <h2>Student's Portal</h2>
              </span>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <nav className="navbar navbar-expand-md navbar-light ">
                  <ul id="sidebar-list">
                    <li className="sidebar-text">
                      <i class="fas fa-school"></i>
                      <Link to="/students">Student</Link>
                    </li>
                    <li className="sidebar-text">
                      <i class="fas fa-user-tie  "></i>
                      <Link to="/mentor"> Mentor</Link>
                    </li>
                    <li className="sidebar-text">
                      <i class="fas fa-users "></i>
                      <Link to="/batch">Batch</Link>
                    </li>
                    <li className="sidebar-text">
                      {" "}
                      <i class="fas fa-chart-line   "></i>Analytics
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-10">
                <div className="student-landing-container p-3">
                  <div className="main-content">
                    <Routes>
                      <Route path="/students" element={<Student />} />
                      <Route path="/mentor" element={<Mentor />} />
                      <Route path="/batch" element={<Batch />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

