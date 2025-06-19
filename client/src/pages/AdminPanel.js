// import React from 'react';

// const AdminPanel = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>✅ Admin Panel</h2>
//       <p>Manage blogs and users here.</p>
//     </div>
//   );
// };

// export default AdminPanel;
import React, { useState } from 'react';
import './AdminPanel.css';

function AdminPanel() {
  const [theme, setTheme] = useState('light');
  const [adminName, setAdminName] = useState('Admin Name');
  const [editingName, setEditingName] = useState(false);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const handleNameChange = (e) => {
    setAdminName(e.target.value);
  };

  return (
    <div className={`admin-panel ${theme}`}>
      <div className="admin-sidebar">
        <div className="admin-profile">
          <img
            //src="https://via.placeholder.com/100"
            src="https://res.cloudinary.com/demo/image/upload/v1611328665/sample.jpg"

            alt="Admin"
            className="profile-pic"
              
          />

          {editingName ? (
            <>
              <input
                type="text"
                value={adminName}
                onChange={handleNameChange}
                className="admin-name-input"
              />
              <button onClick={() => setEditingName(false)} className="save-name-btn">
                Save
              </button>
            </>
          ) : (
            <>
              <h3>{adminName}</h3>
              <button onClick={() => setEditingName(true)} className="edit-name-btn">
                Edit Name
              </button>
            </>
          )}

          <button onClick={() => alert('Logging out...')} className="logout-btn">
            Logout
          </button>

          <div className="theme-toggle">
            <label>Dark Mode</label>
            <input type="checkbox" onChange={toggleTheme} />
          </div>
        </div>
      </div>

      <div className="admin-content">
        <h2>📋 Admin Panel</h2>
        <div className="admin-buttons">
          <button>View Incoming Blogs</button>
          <button>Publish Approved Blogs</button>
          <button>View All Published</button>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
