import React from "react";
import "../styles/Registerstyle.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle form submission
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      dispatch(hideLoading());
      if (res?.data?.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/"); // Redirect without reloading
      } else {
        message.error(res?.data?.message || "Login failed");
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error("Something went wrong");
    }
  };

  return (
    <div className="login-page">
      {/* Header Section */}
      <header className="header-section">
        <div className="logo-container">
          <img src="/logo.png" alt="IIT Jodhpur Logo" className="logo-image" />
          <h1 className="heading">
            Health Centre - Indian Institute Of Technology Jodhpur
          </h1>
        </div>
        <hr className="header-divider" />
      </header>

      {/* Main Content Section */}
      <main className="form-section">
        <div className="form-wrapper">
          <h2 className="form-title">Login to Your Account</h2>
          <Form
            layout="vertical"
            onFinish={onFinishHandler}
            className="login-form"
          >
            {/* Email Field */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            {/* Password Field */}
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter your password!" }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            {/* Login Button */}
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </Form>

          {/* Additional Links */}
          <div className="extra-links">
            <Link to="/register">Not a registered user? Sign up here</Link>
          </div>
        </div>
      </main>

      {/* Footer Section */}  
      <footer className="footer-section">
        <p className="footer-text">
          © {new Date().getFullYear()} Indian Institute of Technology Jodhpur
        </p>
      </footer>
    </div>
  );
};

export default Login;
