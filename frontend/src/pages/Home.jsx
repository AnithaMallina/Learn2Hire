import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <div className="home-left">

        <h1 className="home-title">
          Learn2Hire
        </h1>

        <p className="home-subtitle">
          Learn • Practice • Get Hired
        </p>

        <p className="home-description">
          A complete placement preparation platform
          where students learn skills, submit
          assignments, get evaluated by trainers,
          and apply for jobs.
        </p>

        <div className="home-buttons">
          <Link to="/login" className="home-btn login-btn">
            Login
          </Link>

          <Link to="/register" className="home-btn register-btn">
            Register
          </Link>
        </div>

      </div>

      <div className="home-right">

        <div className="home-card">
          <h2>500+</h2>
          <p>Students</p>
        </div>

        <div className="home-card">
          <h2>50+</h2>
          <p>Trainers</p>
        </div>

        <div className="home-card">
          <h2>100+</h2>
          <p>Courses</p>
        </div>

        <div className="home-card">
          <h2>200+</h2>
          <p>Placements</p>
        </div>

      </div>

    </div>
  );
}

export default Home;