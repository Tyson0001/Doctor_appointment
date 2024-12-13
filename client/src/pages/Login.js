import react from "react";
import "../styles/Registerstyle.css";
import { Form, Input,message } from "antd";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'

const Login = () => {
  // form submit handler
  const navigate = useNavigate();
  //form handler
  const onfinishHandler = async (values) => {
    try {

      const res = await axios.post("/api/v1/user/login", values);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div className="form-container">
      <Form
        layout="vertical"
        onFinish={onfinishHandler}
        className="register-form"
      >
        <h3 className="text-center">Login Form</h3>

        <Form.Item label="Email" name="email">
          <Input type="text" required />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="text" required />
        </Form.Item>
        <Link to="/register" className="m-5">
          Not a registered user
        </Link>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
