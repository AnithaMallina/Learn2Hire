import React from "react";
import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">Learn2Hire</h2>

        <Link to="/student" className="menu-btn">
          Dashboard
        </Link>

        <Link to="/student/courses" className="menu-btn">
          Courses
        </Link>

        <Link to="/student/assignments" className="menu-btn">
          Assignments
        </Link>

        <Link to="/student/results" className="menu-btn">
          Results
        </Link>

        <Link to="/student/jobs" className="menu-btn">
          Jobs
        </Link>

        <Link to="/" className="menu-btn logout-btn">
          Logout
        </Link>
      </div>

      {/* Main Content */}
      <div className="content">
        <h1 className="dashboard-title">
          Student Dashboard
        </h1>

        <div className="stats">

          <div className="card">
            <h2>100+</h2>
            <p>Available Courses</p>
          </div>

          <div className="card">
            <h2>20+</h2>
            <p>Assignments</p>
          </div>

          <div className="card">
            <h2>50+</h2>
            <p>Job Opportunities</p>
          </div>

          <div className="card">
            <h2>95%</h2>
            <p>Placement Rate</p>
          </div>

        </div>

        <div className="recent-section">
          <h2>Student Activities</h2>

          <ul>
            <li>View available courses</li>
            <li>Submit assignments</li>
            <li>Check evaluation results</li>
            <li>Apply for jobs</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default StudentDashboard;