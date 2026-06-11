# 🚀 Learn2Hire

Learn2Hire is a Full Stack MERN (MongoDB, Express.js, React.js, Node.js) application designed to bridge the gap between learning and hiring.

The platform allows Students, Trainers, and Admins to collaborate in a single ecosystem where students can learn, complete assignments, receive evaluations, and apply for jobs.

---

## 📌 Features

### 👨‍🎓 Student Module
- Student Registration & Login
- Secure JWT Authentication
- View Available Courses
- Access Assignments
- Submit Assignment Solutions
- View Evaluation Results
- Browse Job Opportunities

### 👨‍🏫 Trainer Module
- Trainer Registration & Login
- Create Assignments
- View Student Submissions
- Evaluate Assignments
- Provide Scores & Feedback
- Monitor Student Progress

### 👨‍💼 Admin Module
- Manage Students
- Manage Trainers
- Manage Courses
- Manage Job Listings
- Platform Monitoring Dashboard

---

## 🛠️ Technology Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS3
- Bootstrap

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt.js

### Database
- MongoDB Atlas
- Mongoose ODM

---

## 🔐 Authentication & Authorization

The application uses:

- JWT (JSON Web Tokens)
- Role-Based Access Control

Supported Roles:

- Admin
- Trainer
- Student

Each user is redirected to their respective dashboard after successful login.

---

## 📂 Project Structure

```text
Learn_2_Hire/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── dashboard/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```

---

## 📚 Database Collections

### Users
- Name
- Email
- Password
- Role

### Courses
- Course Title
- Description
- Students Enrolled

### Assignments
- Title
- Description
- Trainer
- Due Date

### Submissions
- Assignment
- Student
- Answer
- Score
- Feedback
- Status

### Jobs
- Company
- Role
- Description
- Eligibility

---

## ⚡ Installation

### Clone Repository

```bash
git clone https://github.com/AnithaMallina/Learn2Hire.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 Environment Variables

Create a `.env` file inside backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🎯 Future Enhancements

- Resume Builder
- Mock Interview System
- AI-Based Assignment Evaluation
- Placement Analytics
- Certificate Generation
- Video Learning Modules

---

## 👩‍💻 Author

**Anitha Mallina**

B.Tech Student | Full Stack MERN Developer

GitHub:
https://github.com/AnithaMallina

---

## 📄 License

This project is developed for educational and academic purposes.
