const express = require("express");
const router = express.Router();

const {
  getAdminDashboard,
  createCourse,
  getCourses,
  deleteCourse,
} = require("../controllers/adminController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

// Dashboard
router.get(
  "/dashboard",
  protect,
  adminOnly,
  getAdminDashboard
);

// Courses
router.post(
  "/course",
  protect,
  adminOnly,
  createCourse
);

router.get(
  "/course",
  protect,
  adminOnly,
  getCourses
);

router.delete(
  "/course/:id",
  protect,
  adminOnly,
  deleteCourse
);

module.exports = router;