// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav style={{ background: '#333', padding: '100px', color: 'white' }}>
//       <Link to="/" style={{ margin: '10px', color: 'white' }}>Home</Link>
//       <Link to="/login" style={{ margin: '10px', color: 'white' }}>Login</Link>
//       <Link to="/register" style={{ margin: '10px', color: 'white' }}>Register</Link>
//       <Link to="/profile" style={{ margin: '10px', color: 'white' }}>Profile</Link>
//       <Link to="/create" style={{ margin: '10px', color: 'white' }}>Create Blog</Link>
//       <Link to="/admin" style={{ margin: '10px', color: 'white' }}>Admin</Link>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      background: '#333',
      padding: '40px 60px',
      color: 'white',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/login" style={linkStyle}>Login</Link>
      <Link to="/register" style={linkStyle}>Register</Link>
      <Link to="/profile" style={linkStyle}>Profile</Link>
      <Link to="/create" style={linkStyle}>Create Blog</Link>
      <Link to="/admin" style={linkStyle}>Admin</Link>
    </nav>
  );
};

const linkStyle = {
  marginRight: '35px',
  color: 'white',
  textDecoration: 'none',
  fontSize: '35px',
};

export default Navbar;
