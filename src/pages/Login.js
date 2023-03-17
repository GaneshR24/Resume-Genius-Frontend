import React from "react";
import { useEffect, useState } from "react";
import { Form, message, Spin } from "antd";
import Input from "antd/lib/input/Input";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";
import Logo from "../../src/logo/Logo_4.jpg";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const user = await axios.post(
        "https://resumegenius-app.onrender.com/api/user/login",
        values
      );
      message.success("Login successfull");
      localStorage.setItem("resumegenius-user_info", JSON.stringify(user.data));
      setLoading(false);
      navigate("/home");
    } catch (error) {
      setLoading(false);
      message.error("Login failed");
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
            <p className="auth-header-subtitle">Login to your account</p>
          </div>
          <div className="auth-body">
            <Form layout="vertical" onFinish={onFinish} className="auth-form">
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
                <span className="btn-text">LOGIN</span>
              </button>
            </Form>
            <p className="text-center">
              New to our platform?{" "}
              <Link to={"/register"} className="link-text-center">
                Create account here
              </Link>
            </p>
          </div>
        </div>
      </div>
      {loading && <Spin size="large" />}
    </>
  );
};

export default Login;
