const express = require("express");

const router = express.Router();

const {
  createAssignment,
  getAssignments,
  getSubmissions,
  evaluateSubmission,
} = require("../controllers/trainerController");

const {
  protect,
  trainerOnly,
} = require("../middleware/authMiddleware");

// Assignment Routes
router.post(
  "/assignment",
  protect,
  trainerOnly,
  createAssignment
);

router.get(
  "/assignments",
  protect,
  trainerOnly,
  getAssignments
);

// Submission Routes
router.get(
  "/submissions",
  protect,
  trainerOnly,
  getSubmissions
);

router.put(
  "/evaluate/:id",
  protect,
  trainerOnly,
  evaluateSubmission
);

module.exports = router;