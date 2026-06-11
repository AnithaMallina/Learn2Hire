const Submission = require("../models/Submission");

// Student submits assignment
const submitAssignment = async (req, res) => {
  try {
    const { assignmentId, answer } = req.body;

    const submission = await Submission.create({
      assignment: assignmentId,
      student: req.user._id,
      answer,
    });

    res.status(201).json({
      success: true,
      message: "Assignment submitted successfully",
      submission,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Trainer views all submissions
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

// Trainer evaluates submission
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
  submitAssignment,
  getSubmissions,
  evaluateSubmission,
};