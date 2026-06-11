const express = require("express");
const router = express.Router();

const {
  getStudentDashboard,
  getCourses,
  enrollCourse,
  getAssignments,
  submitAssignment,
} = require("../controllers/studentController");

const {
  protect,
  studentOnly,
} = require("../middleware/authMiddleware");

// Dashboard
router.get(
  "/dashboard",
  protect,
  studentOnly,
  getStudentDashboard
);

// Courses
router.get(
  "/courses",
  protect,
  studentOnly,
  getCourses
);

router.post(
  "/enroll/:courseId",
  protect,
  studentOnly,
  enrollCourse
);

// Assignments
router.get(
  "/assignments",
  protect,
  studentOnly,
  getAssignments
);

router.post(
  "/submit-assignment",
  protect,
  studentOnly,
  submitAssignment
);

const Assignment =
require("../models/Assignment");

module.exports = router;