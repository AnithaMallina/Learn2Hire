import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Common Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Admin Pages
import Courses from "./pages/admin/Courses";
import AdminJobs from "./pages/admin/Jobs";
import Students from "./pages/admin/Students";

// Student Pages
import StudentCourses from "./pages/student/Courses";
import StudentJobs from "./pages/student/Jobs";
import StudentAssignments from "./pages/student/Assignments";
import StudentResults from "./pages/student/Results";

// Trainer Pages
import TrainerAssignments from "./pages/trainer/Assignments";
import TrainerSubmissions from "./pages/trainer/Submissions";

// Dashboards
import AdminDashboard from "./dashboard/AdminDashboard";
import TrainerDashboard from "./dashboard/TrainerDashboard";
import StudentDashboard from "./dashboard/StudentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/courses" element={<Courses />} />
        <Route path="/admin/jobs" element={<AdminJobs />} />
        <Route path="/admin/students" element={<Students />} />

        {/* Student */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/courses" element={<StudentCourses />} />
        <Route path="/student/jobs" element={<StudentJobs />} />
        <Route
          path="/student/assignments"
          element={<StudentAssignments />}
        />
        <Route
          path="/student/results"
          element={<StudentResults />}
        />

        {/* Trainer */}
        <Route path="/trainer" element={<TrainerDashboard />} />
        <Route
          path="/trainer/assignments"
          element={<TrainerAssignments />}
        />
        <Route
          path="/trainer/submissions"
          element={<TrainerSubmissions />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;