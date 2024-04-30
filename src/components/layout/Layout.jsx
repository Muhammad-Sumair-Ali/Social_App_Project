import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../assets/index.css";
import {
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  DashboardOutlined,
  UserAddOutlined,
  SolutionOutlined,
  BulbOutlined,
  MoonOutlined,
} from "@ant-design/icons";
import { signOut, auth } from "../../config/Firebase";
import User from "../../context/UserContext";
import { Button, Layout, Menu, Affix } from "antd";
const { Header, Sider, Content } = Layout;

const LayoutRes = ({ children }) => {
  const { user, setUser } = useContext(User);
  const [collapsed, setCollapsed] = useState(false);
  const [themeMode, setThemeMode] = useState("light");

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setThemeMode(savedTheme);
    }
  }, []);

  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const links = [
    {
      name: "Home",
      path: "/",
      icon: <HomeOutlined />,
    },
    {
      name: "About",
      path: "/about",
      icon: <InfoCircleOutlined />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <CustomerServiceOutlined />,
    },
    {
      name: "SignUp",
      path: "/signup",
      icon: <UserAddOutlined />,
    },
    {
      name: "Login",
      path: "/login",
      icon: <SolutionOutlined />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <DashboardOutlined />,
    },
  ];

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("signout ");
        setUser({});
        // This line should set the user to an empty object
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <Layout className="h-100vh" theme={themeMode}>
      <Sider
        style={{
          background: themeMode === "light" ? "#fff" : "#001529",
          color: themeMode === "light" ? "#000" : "#fff",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu theme={themeMode} mode="inline" defaultSelectedKeys={["0"]}>
          {links.map((link, index) => (
            <Menu.Item key={index} icon={link.icon}>
              <NavLink to={link.path} className="text-decoration-none">
                {link.name}
              </NavLink>
            </Menu.Item>
          ))}
          <Menu.Item
            key="themeToggler"
            onClick={toggleTheme}
            icon={themeMode === "light" ? <MoonOutlined /> : <BulbOutlined />}
          >
            {themeMode === "light" ? "Mode" : "Light Mode"}
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            padding: 0,
            background: themeMode === "light" ? "#fff" : "#001529",
            color: themeMode === "light" ? "#000" : "#fff",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                background: themeMode === "light" ? "#fff" : "#001529",
                color: themeMode === "light" ? "#000" : "#fff",
              }}
          />

          <p>
            {user.fullName !== undefined ? (
              user ? (
                <>
                  <i
                    style={{
                      fontSize: "23px",
                      color: "red",
                      cursor: "pointer",
                    }}
                    className="mx-3 pb-3 cursor-pointer logout"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="LOG OUT"
                    onClick={logout}
                  >
                    <LoginOutlined />
                  </i>
                  <img
                    id="username"
                    className=" pb-2 usericon d-inline-block rounded-2"
                    src={`https://ui-avatars.com/api/?name=${user.fullName}`}
                    alt="User Avatar"
                  />
                  <label className="m-1 px-2" htmlFor="username">
                    {user.fullName}
                  </label>
                </>
              ) : (
                <Button to="/login" className="m-3" variant="primary" type="submit">
                  Login
                </Button>
              )
            ) : (
              <NavLink to="/login">
                <Button className="mx-3 btn btn-primary" variant="primary">
                  Login
                </Button>
              </NavLink>
            )}
          </p>
        </Header>
        <Content
          style={{
            border: "12px solid #f2f2f2",
            padding: 24,
            minHeight: 280,
            background: themeMode === "light" ? "#fff" : "#001529",
            color: themeMode === "light" ? "#000" : "#fff",
          }}
        >
          {children}
        </Content>
        <Affix style={{ position: "fixed", bottom: 50, right: 30 }}>
          <Button
            type="primary"
            shape="circle"
            size="large"
            icon={themeMode === "light" ? <MoonOutlined /> : <BulbOutlined />}
            onClick={toggleTheme}
          />
        </Affix>
      </Layout>
    </Layout>
  );
};

export default LayoutRes;
