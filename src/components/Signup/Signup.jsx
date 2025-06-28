// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// import './SignUp.css';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation check for password confirmation
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }

//     // Simulate saving the data to localStorage
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const existingUser = users.find(user => user.email === formData.email);

//     if (existingUser) {
//       alert('User already exists');
//       return;
//     }

//     const newUser = {
//       email: formData.email,
//       password: formData.password,
//     };

//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));

//     alert('Account created successfully');
//     navigate('/login'); // Redirect to login page after successful sign-up
//   };

//   return (
//     <section className="signup-section">
//       <h2>Create an Account</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Enter Email Here"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Enter Password Here"
//           value={formData.password}
//           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//         />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//       <p>Already have an account? <a href="/login">Login here</a></p>
//     </section>
//   );
// };

// export default SignUp;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    image: null,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Account created successfully');
        navigate('/login');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('An error occurred while signing up. Please try again later.');
    }
  };

  return (
    <section className="signup-section">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email Here"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Enter Password Here"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </section>
  );
};

export default SignUp;
