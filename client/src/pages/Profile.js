// import React from 'react';

// const Profile = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>👤 My Profile</h2>
//       <p>Name, bio, blogs, etc. will be shown here.</p>
//     </div>
//   );
// };

// export default Profile;
import React, { useState } from 'react';
import axios from 'axios';

function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Rita Smith',
    email: 'rita@gmail.com',
    phone: '+5999-771-7171',
    bio: 'I love writing and sharing my thoughts.',
    image: '', // Cloudinary image URL
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async () => {
    if (!imageFile) return profile.image;
    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'your_preset_here'); // 🔁 Replace with Cloudinary preset

    const res = await axios.post('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', formData); // 🔁 Replace with your Cloudinary cloud name
    return res.data.secure_url;
  };

  const handleSave = async () => {
    const uploadedImageUrl = await handleImageUpload();
    setProfile({ ...profile, image: uploadedImageUrl });
    setEditMode(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.headerSection}>
          {profile.image ? (
            <img src={profile.image} alt="Profile" style={styles.profileImage} />
          ) : (
            <div style={styles.profileImagePlaceholder}></div>
          )}
          {editMode && (
            <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
          )}
        </div>

        {editMode ? (
          <>
            <input
              name="name"
              placeholder="Name"
              value={profile.name}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="email"
              placeholder="Email"
              value={profile.email}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              name="phone"
              placeholder="Phone"
              value={profile.phone}
              onChange={handleChange}
              style={styles.input}
            />
            <textarea
              name="bio"
              placeholder="Bio"
              value={profile.bio}
              onChange={handleChange}
              style={styles.textarea}
            />
            <button onClick={handleSave} style={styles.button}>Save</button>
          </>
        ) : (
          <>
            <h2>{profile.name}</h2>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Phone:</strong> {profile.phone}</p>
            <p><strong>Bio:</strong> {profile.bio}</p>
            <button onClick={() => setEditMode(true)} style={styles.button}>Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#007bff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '150px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  headerSection: {
    marginBottom: '20px',
  },
  profileImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  profileImagePlaceholder: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: '#ccc',
    display: 'inline-block',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    height: '60px',
    padding: '10px',
    marginBottom: '12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Profile;
