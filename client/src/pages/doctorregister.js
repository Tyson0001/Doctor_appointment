import React from "react"
import "../styles/Registerstyle.css"
import { Form, Input, message, Select } from "antd"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { showLoading, hideLoading } from "../redux/features/alertSlice"

const { Option } = Select

const DoctorRegister = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // form handler
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading())
      const res = await axios.post("/api/v1/doctor/register", values)
      dispatch(hideLoading())
      if (res.data.success) {
        message.success("Doctor Registered Successfully!")
        navigate("/login")
      } else {
        message.error(res.data.message)
      }
    } catch (error) {
      dispatch(hideLoading())
      console.log(error)
      message.error("Something Went Wrong")
    }
  }

  return (
    <div className="form-container">
      {/* Header Section */}
      <header className="header-section">
        <div className="logo-container">
          <img src="/logo.png" alt="IIT Jodhpur Logo" className="logo-image" />
          <h1 className="heading">Health Centre - Indian Institute Of Technology Jodhpur</h1>
        </div>
        <hr className="header-divider" />
      </header>

      {/* Registration Form Section */}
      <main className="form-section">
        <div className="form-wrapper">
          <h2 className="form-title2">Doctor Registration</h2>
          <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
            {/* Name Field */}
            <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
              <Input type="text" placeholder="Enter your name" />
            </Form.Item>

            {/* Email Field */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input type="email" placeholder="Enter your email" />
            </Form.Item>

            {/* Password Field */}
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter your password!" }]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            {/* Specialization Field */}
            <Form.Item
              label="Specialization"
              name="specialization"
              rules={[{ required: true, message: "Please select your specialization!" }]}
            >
              <Select placeholder="Select your specialization">
                <Option value="General Practitioner">General Practitioner</Option>
                <Option value="Cardiology">Cardiology</Option>
                <Option value="Dermatology">Dermatology</Option>
                <Option value="Endocrinology">Endocrinology</Option>
                <Option value="Gastroenterology">Gastroenterology</Option>
                <Option value="General Medicine">General Medicine</Option>
                <Option value="Neurology">Neurology</Option>
                <Option value="Orthopedics">Orthopedics</Option>
                <Option value="Pediatrics">Pediatrics</Option>
                <Option value="Psychiatry">Psychiatry</Option>
                <Option value="Surgery">Surgery</Option>
                <Option value="Internal Medicine">Internal Medicine</Option>
                <Option value="Radiology">Radiology</Option>
                <Option value="Ophthalmology">Ophthalmology</Option>
                <Option value="Anesthesiology">Anesthesiology</Option>
                <Option value="Oncology">Oncology</Option>
                <Option value="Urology">Urology</Option>
                <Option value="Rheumatology">Rheumatology</Option>
              </Select>
            </Form.Item>

            {/* Experience Field */}
            <Form.Item
              label="Experience (years)"
              name="experience"
              rules={[{ required: true, message: "Please enter your years of experience!" }]}
            >
              <Input type="number" min={0} placeholder="Enter your years of experience" />
            </Form.Item>

            {/* Register Button */}
            <button className="btn btn-primary" type="submit">
              Register as Doctor
            </button>
          </Form>

          {/* Additional Link */}
          <div className="extra-links">
            <Link to="/login">Already registered? Login here</Link>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer-section">
        <p className="footer-text">© {new Date().getFullYear()} Indian Institute of Technology Jodhpur</p>
      </footer>
    </div>
  )
}

export default DoctorRegister

