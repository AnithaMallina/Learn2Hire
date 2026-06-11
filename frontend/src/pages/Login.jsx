import React, { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login Successful");

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else if (res.data.user.role === "trainer") {
        navigate("/trainer");
      } else if (res.data.user.role === "student") {
        navigate("/student");
      }
    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Invalid Credentials"
      );
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Learn2Hire</h1>
        <h3>Welcome Back</h3>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p>
          New User?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;