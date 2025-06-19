// import React from 'react';

// const CreateBlog = () => {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>➕ Create Blog</h2>
//       <form>
//         <input type="text" placeholder="Blog Title" /><br />
//         <textarea placeholder="Content"></textarea><br />
//         <input type="file" /><br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreateBlog;
import React, { useState } from 'react';
import API from '../api/axios';

function CreateBlog() {
  const [form, setForm] = useState({ title: '', content: '' });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('content', form.content);
    if (image) formData.append('image', image);

    try {
      await API.post('/blogs/create', formData);
      setMessage('Blog submitted for admin approval!');
      setForm({ title: '', content: '' });
      setImage(null);
    } catch (err) {
      setMessage('Error submitting blog.');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>➕ Create Blog</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={form.title}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="content"
            placeholder="Content"
            value={form.content}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Submit</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: '#2196F3',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    width: '400px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    height: '100px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'none',
  },
  button: {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '10px',
    color: '#333',
  },
};

export default CreateBlog;
