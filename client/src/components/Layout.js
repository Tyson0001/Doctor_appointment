import React from "react";
import "../styles/LayoutStyles.css";
import { message,Badge, Avatar } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { adminMenu, userMenu } from "../Data/data.js";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    message.success("Logged Out Successfully");
    navigate("/login");
  };

  // Rendering menu list based on user type
  const SidebarMenu = user?.isAdmin ? adminMenu : userMenu;

  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>Doc App</h6>
              <hr />
            </div>
            <div className="menu">
              {SidebarMenu.map((menu, index) => {
                const isActive = location.pathname === menu.path;
                return (
                  <div key={index} className={`menu-item ${isActive && "active"}`}>
                    <i className={menu.icon}></i>
                    <Link to={menu.path}>{menu.name}</Link>
                  </div>
                );
              })}
              <div className="menu-item" onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <span>Log Out</span>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="header">
              <div className="header-content" style = {{ cursor: "pointer" }}>
                <Badge count={user?.notification?.length} onClick={()=>{
                  navigate("/notification")}}>
                 
                </Badge>
                <i className="fa-solid fa-bell"></i>
                <Link to="/profile">{user?.name}</Link>
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
