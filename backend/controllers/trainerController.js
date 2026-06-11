const Assignment = require("../models/Assignment");
const Submission = require("../models/Submission");

// Create Assignment
const createAssignment = async (req, res) => {
  try {
    const { title, description, course, dueDate } = req.body;

    const assignment = await Assignment.create({
      title,
      description,
      course,
      dueDate,
      trainer: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Assignment created successfully",
      assignment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// View Assignments
const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find()
      .populate("course", "title")
      .populate("trainer", "name email");

    res.status(200).json({
      success: true,
      count: assignments.length,
      assignments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// View Student Submissions
const getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find()
      .populate("student", "name email")
      .populate("assignment", "title");

    res.status(200).json({
      success: true,
      count: submissions.length,
      submissions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Evaluate Submission
const evaluateSubmission = async (req, res) => {
  try {
    const { score, feedback } = req.body;

    const submission = await Submission.findById(req.params.id);

    if (!submission) {
      return res.status(404).json({
        success: false,
        message: "Submission not found",
      });
    }

    submission.score = score;
    submission.feedback = feedback;
    submission.status = "Evaluated";

    await submission.save();

    res.status(200).json({
      success: true,
      message: "Submission evaluated successfully",
      submission,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createAssignment,
  getAssignments,
  getSubmissions,
  evaluateSubmission,
};