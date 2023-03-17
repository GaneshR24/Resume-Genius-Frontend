import React from "react";
import { useEffect, useState } from "react";
import { Form, message, Spin } from "antd";
import Input from "antd/lib/input/Input";
import "../resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../src/logo/Logo_4.jpg";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post(
        "https://resumegenius-app.onrender.com/api/user/register",
        values
      );
      message.success("Registration successfull");
      navigate("/login");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      message.error("Registration failed");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("resumegenius-user_info")) {
      navigate("/home");
    }
  });
  return (
    <>
      <div className="auth-layout">
        <div className="auth-conatiner">
          <div className="auth-header">
            <div>
              <img src={Logo} alt="logo" className="auth-header-logo" />
            </div>
            <h1 className="auth-header-title">Welcome to ResumeGenius</h1>
            <p className="auth-header-subtitle">Create your account</p>
          </div>
          <div className="auth-body">
            <Form layout="vertical" onFinish={onFinish} className="auth-form">
              <Form.Item label="Name" name="username" className="input-field">
                <Input
                  type="text"
                  placeholder="Name"
                  className="input-control"
                />
              </Form.Item>
              <Form.Item label="Email" name="email" className="input-field">
                <Input
                  type="email"
                  placeholder="Email"
                  className="input-control"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                className="input-field"
              >
                <Input
                  type="password"
                  placeholder="Password"
                  className="input-control"
                />
              </Form.Item>
              <button className="btn-submit mt-2" type="submit">
                <span className="btn-text">REGISTER</span>
              </button>
            </Form>
            <p className="text-center">
              Already have an account?{" "}
              <Link to={"/login"} className="link-text-center">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
      {loading && <Spin size="large" />}
    </>
  );
};

export default Register;
