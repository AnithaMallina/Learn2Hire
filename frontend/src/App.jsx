import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/admin/Courses";
import Jobs from "./pages/admin/Jobs";
import Students from "./pages/admin/Students";
import StudentAssignments from "./pages/student/Assignments";
import StudentResults from "./pages/student/Results";

import TrainerAssignments from "./pages/trainer/Assignments";
import TrainerSubmissions from "./pages/trainer/Submissions";


import AdminDashboard from "./dashboard/AdminDashboard";
import TrainerDashboard from "./dashboard/TrainerDashboard";
import StudentDashboard from "./dashboard/StudentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/admin/courses" element={<Courses />} />
        <Route path="/admin/jobs" element={<Jobs />} />
        <Route path="/admin/students" element={<Students />} />
       
        <Route path="/trainer" element={<TrainerDashboard />} />

        <Route path="/student" element={<StudentDashboard />} />
         <Route
  path="/student/assignments"
  element={<StudentAssignments />}
/>

<Route
  path="/student/results"
  element={<StudentResults />}
/>

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