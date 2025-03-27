import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <section id="booking" className="login-section">
      <h2>Login Here</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email Here"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter Password Here"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="#signup">Sign up here</a></p>
    </section>
  );
};

export default Login;