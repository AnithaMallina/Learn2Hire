const express = require("express");
const router = express.Router();

const {
  getStudentDashboard,
  getCourses,
  enrollCourse,
  getAssignments,
  submitAssignment,
  getJobs,
  applyJob,
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

// Jobs
router.get(
  "/jobs",
  protect,
  studentOnly,
  getJobs
);

router.post(
  "/apply/:jobId",
  protect,
  studentOnly,
  applyJob
);

module.exports = router;