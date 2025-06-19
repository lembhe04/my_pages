
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./home.css"; // <-- Make sure to import CSS

// const Home = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/blogs")
//       .then(res => setBlogs(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="home-feed">
//       <h1>📚 Blog App Feed</h1>
//       <div className="blogs-container">
//         {blogs.map((blog) => (
//           <div className="blog-card" key={blog.id}>
//             <h2>{blog.title}</h2>
//             <p>{blog.content}</p>
//             <p><strong>Author:</strong> {blog.author}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';

function Home() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.header}>
          📚 Blog App Feed
        </h2>
        <div style={styles.feedBox}>
          {/* Example placeholder – your blog posts will be mapped here */}
          <p style={styles.placeholder}>No blog posts yet. Start writing!</p>
        </div>
      </div>
    </div>
  );
}


const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#2196F3',
    paddingTop: '100px',  // space below navbar
  },
  container: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '300px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    minHeight: '300px',  // adjusts height as needed
    // width: '90%',                // Make it take up 90% of the screen width
    // maxWidth: '1200px',         // Optional: cap size on large displays
    // margin: '0 auto',
    // backgroundColor: '#fff',
    // borderRadius: '8px',
    // padding: '30px',
    // boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    // minHeight: '300px',
  },
  

  header: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#333',
  },
  feedBox: {
    border: '1px solid #ccc',
    borderRadius: '6px',
    padding: '20px',
    width:'90%',
    minHeight: '200px',
    backgroundColor: '#f9f9f9',
  },
  placeholder: {
    color: '#888',
    fontStyle: 'italic',
  },
};

export default Home;
