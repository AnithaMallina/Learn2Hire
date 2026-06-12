import React, { useEffect, useState } from "react";
import API from "../../services/api";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/student/jobs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setJobs(res.data.jobs);
    } catch (error) {
      console.log(error);
      alert("Failed to load jobs");
    } finally {
      setLoading(false);
    }
  };

  const applyJob = async (jobId) => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.post(
        `/student/apply/${jobId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      fetchJobs();
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Application Failed"
      );
    }
  };

  if (loading) {
    return (
      <div className="content">
        <h2>Loading Jobs...</h2>
      </div>
    );
  }

  return (
    <div className="content">
      <h1 className="dashboard-title">
        Job Opportunities
      </h1>

      <div className="courses-grid">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              className="course-card"
              key={job._id}
            >
              <h2>{job.company}</h2>

              <p>
                <strong>Role:</strong>{" "}
                {job.role}
              </p>

              <p>
                <strong>Location:</strong>{" "}
                {job.location}
              </p>

              <p>
                <strong>Salary:</strong>{" "}
                {job.salary}
              </p>

              <p>{job.description}</p>

              <p>
                <strong>Applicants:</strong>{" "}
                {job.applicants?.length || 0}
              </p>

              <button
                className="action-btn"
                onClick={() =>
                  applyJob(job._id)
                }
              >
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <h3>No Jobs Available</h3>
        )}
      </div>
    </div>
  );
}
export default Jobs;