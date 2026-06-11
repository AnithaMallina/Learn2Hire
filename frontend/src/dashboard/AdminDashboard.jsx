import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">Learn2Hire</h2>

        <Link to="/admin" className="menu-btn">
          Dashboard
        </Link>

        <Link to="/admin/courses" className="menu-btn">
          Courses
        </Link>

        <Link to="/admin/jobs" className="menu-btn">
          Jobs
        </Link>

        <Link to="/admin/students" className="menu-btn">
          Students
        </Link>

        <Link to="/" className="menu-btn logout-btn">
          Logout
        </Link>
      </div>

      {/* Main Content */}
      <div className="content">

        <h1 className="dashboard-title">
          Admin Dashboard
        </h1>

        <div className="stats">

          <div className="card">
            <h2>500+</h2>
            <p>Students</p>
          </div>

          <div className="card">
            <h2>50+</h2>
            <p>Trainers</p>
          </div>

          <div className="card">
            <h2>100+</h2>
            <p>Courses</p>
          </div>

          <div className="card">
            <h2>200+</h2>
            <p>Placements</p>
          </div>

        </div>

        <div className="recent-section">
          <h2>Recent Activity</h2>

          <ul>
            <li>New Student Registered</li>
            <li>Trainer Added Assignment</li>
            <li>Course Published</li>
            <li>Job Opportunity Posted</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;