import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import Layout from '../components/layout/Layout';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../config/Firebase';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e) => {
  //  e.preventDefault();
    try {
      const { email, password } = formData;
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert("User logged in successfully:", userCredential.user.email);
      navigate("/");
    } catch (error) {
      alert("Error signing in:", error.message);
      alert("Error signing in:", error.message);
    }
  };

  return (
    <Layout> 
      <h3 className="mb-4">Login Existing Account </h3>
      <Form
        name="normal_login"
        className="login-form"
        onFinish={onSubmit}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input 
            prefix={<UserOutlined className="site-form-item-icon" />} 
            placeholder="Email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="mx-3 login-form-button">
            Login
          </Button>
          Or <NavLink to="/signup">Register now!</NavLink>
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Login;

