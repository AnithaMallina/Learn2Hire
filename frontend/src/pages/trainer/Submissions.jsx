import React, { useEffect, useState } from "react";
import API from "../../services/api";

function Submissions() {
  const [submissions, setSubmissions] = useState([]);
  const [score, setScore] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get(
        "/trainer/submissions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSubmissions(res.data.submissions);
    } catch (error) {
      console.log(error);
    }
  };

  const evaluateSubmission = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/trainer/evaluate/${id}`,
        {
          score,
          feedback,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Evaluation Saved");

      fetchSubmissions();
    } catch (error) {
      console.log(error);
      alert("Evaluation Failed");
    }
  };

  return (
    <div className="dashboard-content">
      <h1>Student Submissions</h1>

      {submissions.map((submission) => (
        <div
          className="card p-4 mb-4"
          key={submission._id}
        >
          <h3>
            Student :
            {" "}
            {submission.student?.name}
          </h3>

          <p>
            Assignment :
            {" "}
            {submission.assignment?.title}
          </p>

          <p>
            Answer :
            {" "}
            {submission.answer}
          </p>

          <input
            className="form-control mb-2"
            placeholder="Score"
            onChange={(e) =>
              setScore(e.target.value)
            }
          />

          <textarea
            rows="4"
            className="form-control"
            placeholder="Feedback"
            onChange={(e) =>
              setFeedback(e.target.value)
            }
          />

          <button
            className="btn btn-dark mt-3"
            onClick={() =>
              evaluateSubmission(
                submission._id
              )
            }
          >
            Evaluate
          </button>
        </div>
      ))}
    </div>
  );
}

export default Submissions;