import React from "react";

function Assignments() {
  return (
    <div className="dashboard-content">
      <h1>Create Assignment</h1>

      <input
        className="form-control mb-3"
        placeholder="Assignment Title"
      />

      <textarea
        rows="6"
        className="form-control"
        placeholder="Assignment Description"
      />

      <button className="btn btn-dark mt-3">
        Create Assignment
      </button>
    </div>
  );
}

export default Assignments;