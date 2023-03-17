import React from "react";
import { Button, Dropdown, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./../resources/defaultlayout.css";
import { UserOutlined } from "@ant-design/icons";

const DefaultLayout = (props) => {
  const user = JSON.parse(localStorage.getItem("resumegenius-user_info"));
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      label: <Link to="/home">Home</Link>,
    },
    {
      key: "2",
      label: <Link to="/profile">Profile</Link>,
    },
    ,
    {
      key: "3",
      label: (
        <div
          onClick={() => {
            localStorage.removeItem("resumegenius-user_info");
            navigate("/login");
          }}
        >
          {" "}
          <span>Logout</span>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="layout">
        <div className="header">
          <h1 onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
            RESUME GENIUS
          </h1>
          <Space direction="vertical">
            <Space wrap>
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomLeft"
              >
                <Button icon={<UserOutlined />} className="btn-menu">
                  {user?.username}
                </Button>
              </Dropdown>
            </Space>
          </Space>
        </div>
        <div className="content">{props.children}</div>
      </div>
    </>
  );
};

export default DefaultLayout;
