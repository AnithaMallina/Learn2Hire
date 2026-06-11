import React, { useEffect, useState } from "react";
import API from "../../services/api";

function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/student/assignments", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAssignments(res.data.assignments);
    } catch (error) {
      console.log(error);
    }
  };

  const submitAssignment = async (assignmentId) => {
    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/student/submit-assignment",
        {
          assignmentId,
          answer,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Assignment Submitted Successfully");
    } catch (error) {
      console.log(error);
      alert("Submission Failed");
    }
  };

  return (
    <div className="dashboard-content">
      <h1>Assignments</h1>

      {assignments.map((assignment) => (
        <div className="card p-4 mb-4" key={assignment._id}>
          <h3>{assignment.title}</h3>

          <p>{assignment.description}</p>

          <textarea
            rows="6"
            className="form-control"
            placeholder="Write your answer..."
            onChange={(e) => setAnswer(e.target.value)}
          />

          <button
            className="btn btn-dark mt-3"
            onClick={() =>
              submitAssignment(assignment._id)
            }
          >
            Submit Assignment
          </button>
        </div>
      ))}
    </div>
  );
}

export default Assignments;