import React from "react";
import { Link } from "react-router-dom";

function TrainerDashboard() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">Learn2Hire</h2>

        <Link to="/trainer" className="menu-btn">
          Dashboard
        </Link>

        <Link to="/trainer/courses" className="menu-btn">
          Courses
        </Link>

        <Link to="/trainer/assignments" className="menu-btn">
          Assignments
        </Link>

        <Link to="/trainer/submissions" className="menu-btn">
          Submissions
        </Link>

        <Link to="/trainer/jobs" className="menu-btn">
          Jobs
        </Link>

        <Link to="/" className="menu-btn logout-btn">
          Logout
        </Link>
      </div>

      {/* Main Content */}
      <div className="content">
        <h1 className="dashboard-title">
          Trainer Dashboard
        </h1>

        <div className="stats">

          <div className="card">
            <h2>500+</h2>
            <p>Students</p>
          </div>

          <div className="card">
            <h2>100+</h2>
            <p>Courses</p>
          </div>

          <div className="card">
            <h2>20+</h2>
            <p>Assignments</p>
          </div>

          <div className="card">
            <h2>300+</h2>
            <p>Submissions</p>
          </div>

        </div>

        <div className="recent-section">
          <h2>Trainer Activities</h2>

          <ul>
            <li>Create assignments</li>
            <li>Manage courses</li>
            <li>Evaluate submissions</li>
            <li>Track student performance</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default TrainerDashboard;