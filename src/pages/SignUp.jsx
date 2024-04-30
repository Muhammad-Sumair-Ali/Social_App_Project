import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth, setDoc,db,doc,
        createUserWithEmailAndPassword } from '../config/Firebase'; // Import your authentication library
import Layout from '../components/layout/Layout'; // Import your layout component

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { emailAddress, password } = formData;
      const userCredential = await createUserWithEmailAndPassword(auth, emailAddress, password);
      const user = userCredential.user;
await setDoc(doc(db, "users", user.uid), {
        ...formData,
        uid: user.uid,
      });
      alert('User created successfully: ' + user.email);
      navigate('/login');
      
    } catch (error) {
      // c('Error creating user:', error.message);
      alert('Error creating user:'+  error.message);
    }
  };

  return (
    <Layout>
      <h3 className="mb-4">Create an Account</h3>
      <Form onSubmit={submit}>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="emailAddress">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
        </Form.Group>
        <Button className="m-3" variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <div className="mt-3">
        Already have an account? <NavLink to="/login">Login here</NavLink>
      </div>
    </Layout>
  );
};

export default SignUp;
