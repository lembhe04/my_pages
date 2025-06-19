// import React, { useState } from 'react';
// import API from '../api/axios';

// function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post('/auth/login', form);
//       setMessage('Login successful');
//       // You can store token or user data here in localStorage or context
//     } catch (error) {
//       setMessage('Error: ' + error.response?.data?.message || error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br />
//         <input name="password" type="password" placeholder="Password" onChange={handleChange} required /><br />
//         <button type="submit">Login</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // for redirecting to Register

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      setMessage('Login successful');
      // You can redirect to home/dashboard here if needed
    } catch (error) {
      setMessage('Error: ' + error.response?.data?.message || error.message);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            style={styles.input}
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <div style={styles.forgot}>Forgot Password</div>
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={styles.bottomText}>
          Don't have an account?
          <span style={styles.signup} onClick={() => navigate('/register')}> SignUp</span>
        </p>
        <p style={styles.message}>{message}</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: '100vh',
    backgroundColor: '#2196F3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
  },
  card: {
    backgroundColor: 'white',
    padding: '150px 150px',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    width: '350px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    color: '#000',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '30px',
    border: 'none',
    borderBottom: '2px solid #ccc',
    outline: 'none',
  },
  forgot: {
    fontSize: '30px',
    color: '#888',
    marginBottom: '20px',
    textAlign: 'left',
  },
  button: {
    padding: '10px',
    fontSize: '20px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '15px',
  },
  bottomText: {
    fontSize: '25px',
    color: '#444',
  },
  signup: {
    fontSize: '20px',
    color: '#2196F3',
    cursor: 'pointer',
    marginLeft: '4px',
    fontWeight: 'bold',
  },
  message: {
    marginTop: '10px',
    color: 'red',
  },
};

export default Login;
