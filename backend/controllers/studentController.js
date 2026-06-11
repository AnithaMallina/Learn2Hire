const Course = require("../models/Course");
const Assignment = require("../models/Assignment");
const Submission = require("../models/Submission");

// Student Dashboard
const getStudentDashboard = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Welcome Student Dashboard",
      student: req.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// View Courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json({
      success: true,
      count: courses.length,
      courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Enroll Course
const enrollCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.courseId);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    if (course.students.includes(req.user._id)) {
      return res.status(400).json({
        success: false,
        message: "Already enrolled",
      });
    }

    course.students.push(req.user._id);

    await course.save();

    res.status(200).json({
      success: true,
      message: "Course enrolled successfully",
      course,
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
      .populate("trainer", "name");

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

// Submit Assignment
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

module.exports = {
  getStudentDashboard,
  getCourses,
  enrollCourse,
  getAssignments,
  submitAssignment,
};