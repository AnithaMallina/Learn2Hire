import React from "react";

function Courses() {
  const courses = [
    {
      title: "MERN Stack Development",
      trainer: "Anitha Mallina",
      duration: "12 Weeks",
      students: 120,
    },
    {
      title: "Java Programming",
      trainer: "Rahul Sharma",
      duration: "8 Weeks",
      students: 95,
    },
    {
      title: "Python for Data Science",
      trainer: "Priya Verma",
      duration: "10 Weeks",
      students: 140,
    },
    {
      title: "React.js Advanced",
      trainer: "Kiran Kumar",
      duration: "6 Weeks",
      students: 80,
    },
    {
      title: "Node.js Backend Development",
      trainer: "Amit Singh",
      duration: "8 Weeks",
      students: 110,
    },
  ];

  return (
    <div className="content">
      <h1 className="dashboard-title">
        Available Courses
      </h1>

      <p
        style={{
          marginBottom: "30px",
          color: "#666",
        }}
      >
        Learn industry-ready skills from expert
        trainers and improve employability.
      </p>

      <div className="stats">
        {courses.map((course, index) => (
          <div className="card" key={index}>
            <h3>{course.title}</h3>

            <p>
              <strong>Trainer:</strong>{" "}
              {course.trainer}
            </p>

            <p>
              <strong>Duration:</strong>{" "}
              {course.duration}
            </p>

            <p>
              <strong>Students:</strong>{" "}
              {course.students}
            </p>

            <button className="menu-btn">
              Enroll Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;