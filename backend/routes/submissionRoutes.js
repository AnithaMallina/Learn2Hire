const express = require("express");
const router = express.Router();

const {
  submitAssignment,
  getSubmissions,
  evaluateSubmission,
} = require("../controllers/submissionController");

const {
  protect,
  studentOnly,
  trainerOnly,
} = require("../middleware/authMiddleware");

// Student submits assignment

router.post(
  "/submit",
  protect,
  studentOnly,
  submitAssignment
);

// Trainer views all submissions

router.get(
  "/all",
  protect,
  trainerOnly,
  getSubmissions
);

// Trainer evaluates submission

router.put(
  "/evaluate/:id",
  protect,
  trainerOnly,
  evaluateSubmission
);

module.exports = router;