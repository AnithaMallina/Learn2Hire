const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
{
  assignment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Assignment",
    required: true,
  },

  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  answer: {
    type: String,
    required: true,
  },

  score: {
    type: Number,
    default: 0,
  },

  feedback: {
    type: String,
    default: "",
  },

  status: {
    type: String,
    default: "Pending",
  },
},
{ timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);