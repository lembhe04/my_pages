# BLOG-APP
for creating deleting and editing personal blogs 
# 📝 My Pages — Full-Stack Blog Platform

A responsive, full-stack blogging web app where users can create blogs, manage profiles, and admins can review & approve submitted content. Built using **React**, **Node.js**, **Express**, **MySQL**, and **Cloudinary**.

---

## 🚀 Features

- 👥 User Registration and Login (JWT Auth)
- 📝 Blog Creation with Title, Image, and Content
- 👩‍💼 Admin Panel to Review & Approve Blogs
- 🧑 Profile Page with Cloudinary Image Upload
- 🔐 Protected Routes Based on Role (User/Admin)
- 🌗 Light/Dark Theme Toggle (Admin Panel)
- 📦 Clean Component-Based Frontend (React)

---

## 📦 Installation & Setup

Follow these steps to set up the project locally.

### 1. 📁 Clone the Repository

```bash
git clone https://github.com/lembhe04/my-pages.git
cd my-pages


2. ⚙️ Backend Setup
bash
Copy
Edit
cd server
npm install



📄 Create a .env file in server/:
env
Copy
Edit
PORT=5000
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

JWT_SECRET=your_jwt_secret_key


Then run:
bash
Copy
Edit
npm start


3. 🎨 Frontend Setup
bash
Copy
Edit
cd client
npm install
npm start

Visit: http://localhost:3000
Backend runs at: http://localhost:5000


🔄 App Flow
👤 User Side
Register/Login

View & Edit Profile (Name, Bio, Profile Picture)

Create Blog

View Blogs on Feed (after admin approval)

👮 Admin Side
View Submitted Blogs

Approve or Reject Blogs

Manage Profile (Name & Profile Picture)

Logout and Theme Toggle



🗂️ Project Structure
my-pages/
├── client/                  # React frontend
│   ├── src/
│   │   ├── pages/           # Home, Login, Register, Profile, AdminPanel, CreateBlog
│   │   ├── components/      # Navbar, etc.
│   │   └── api/axios.js     # Axios config
│   └── public/
├── server/                  # Node.js backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── config/              # DB and Cloudinary config
│   └── middleware/          # JWT Auth middleware
├── .gitignore
├── README.md
└── package.json


🧠 Learnings for Beginners
📚 How to manage Git commits step-by-step

🔐 How to protect secrets using .gitignore

📤 How to push clean code to GitHub

🛠️ Building a CRUD app with admin-user flow

☁️ Using Cloudinary to manage images easily